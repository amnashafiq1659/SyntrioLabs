import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Rate limiter - in-memory Map to track requests per IP
// Structure: Map<IP, { count: number, resetTime: number }>
const rateLimiter = new Map<string, { count: number; resetTime: number }>();

// Rate limiting configuration
const RATE_LIMIT_MAX_REQUESTS = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Sanitizes text by removing/escaping HTML/script tags
 * @param text - The text to sanitize
 * @returns Sanitized text with HTML/script tags stripped
 */
function sanitizeText(text: string): string {
  if (!text) return "";
  // Remove script tags and their content (security: prevent XSS)
  let sanitized = text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  // Remove all remaining HTML tags (since we only send plain text/basic HTML in email)
  sanitized = sanitized.replace(/<[^>]*>/g, "");
  return sanitized;
}

/**
 * Checks if the request is within rate limits for the given IP
 * @param ip - The client IP address
 * @returns Object with allowed status and remaining time if not allowed
 */
function checkRateLimit(ip: string): { allowed: boolean; remainingMs?: number } {
  const now = Date.now();

  // Clean up expired entries (optional, for memory management)
  // We'll let them naturally expire as we check

  const record = rateLimiter.get(ip);

  if (!record) {
    // First request from this IP
    rateLimiter.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  // Check if the window has expired
  if (now > record.resetTime) {
    // Reset the window
    rateLimiter.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  // Check if we're under the limit
  if (record.count < RATE_LIMIT_MAX_REQUESTS) {
    record.count++;
    return { allowed: true };
  }

  // Rate limit exceeded
  const remainingMs = record.resetTime - now;
  return { allowed: false, remainingMs };
}

// Zod schema for input validation
const contactSchema = z.object({
  name: z.string()
    .trim()
    .max(100, "Name must be 100 characters or less"),
  email: z.string()
    .trim()
    .email("Invalid email format"),
  company: z.string()
    .trim()
    .max(100, "Company must be 100 characters or less")
    .optional()
    .or(z.literal(""))
    .transform(val => val || undefined),
  service: z.string()
    .trim()
    .optional()
    .or(z.literal("")),
  budget: z.string()
    .trim()
    .optional()
    .or(z.literal("")),
  message: z.string()
    .trim()
    .max(2000, "Message must be 2000 characters or less"),
});

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Rate limiting check
    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      console.error(`Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();

    // Validate using Zod schema
    const validatedData = contactSchema.safeParse(body);

    if (!validatedData.success) {
      // Return generic error for validation failures
      console.error(`Validation error for IP ${ip}:`, validatedData.error);
      return NextResponse.json(
        { error: "Invalid input provided" },
        { status: 400 }
      );
    }

    const { name, email, company, service, budget, message } = validatedData.data;

    // Sanitize text fields for security (prevent XSS when displayed/rendered)
    const sanitizedName = sanitizeText(name);
    const sanitizedMessage = sanitizeText(message);
    const sanitizedCompany = sanitizeText(company || "N/A");

    // Get environment variables - these are server-side only (no NEXT_PUBLIC_ prefix)
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactReceiver = process.env.CONTACT_RECEIVER;

    // Verify environment variables are set
    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !contactReceiver) {
      console.error("Email configuration is incomplete - missing environment variables");
      return NextResponse.json(
        { error: "Unable to send your message. Please try again later." },
        { status: 500 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: true, // true for port 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Send email - always use our domain as "From" address
    // NEVER use visitor's email as the "From" field
    const mailOptions = {
      from: `"Syntrio Labs" <contact@syntriolabs.com>`,
      to: contactReceiver,
      replyTo: email, // Only use visitor's email as reply-to
      subject: `New contact form message from ${sanitizedName}`,
      text: `
Name: ${sanitizedName}
Email: ${email}
Company: ${sanitizedCompany}
Service: ${service || "N/A"}
Budget: ${budget || "N/A"}

Message:
${sanitizedMessage}
`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Log the real error server-side for debugging
    console.error("Contact form error:", error);

    // Return generic error to client - never expose internal errors
    return NextResponse.json(
      { error: "Unable to send your message. Please try again later." },
      { status: 500 }
    );
  }
}