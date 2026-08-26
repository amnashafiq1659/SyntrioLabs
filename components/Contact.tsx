"use client";

import Link from "next/link";
import { useState, ChangeEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Name, email, and message are required");
      setShowError(true);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Invalid email format");
      setShowError(true);
      return;
    }

    setIsSubmitting(true);
    setShowError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Failed to send message");
        setShowError(true);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setErrorMessage("Failed to send message");
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow reveal">GET IN TOUCH</div>
          <h2 className="reveal">Let&apos;s build something great</h2>
          <p className="lead reveal">
            Tell us about your project and we&apos;ll get back to you within 24
            hours with a tailored proposal.
          </p>
          <div className="reveal">
            <div className="info-row">
              <div className="ico">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6l8 6 8-6M4 6v12h16V6" />
                </svg>
              </div>
              <div>
                <div className="lbl">Email</div>
                <div className="val">contact@syntriolabs.com</div>
              </div>
            </div>
            <div className="info-row">
              <div className="ico">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.7a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
                </svg>
              </div>
              <div>
                <div className="lbl">Phone</div>
                <div className="val">+1 (555) 234-5678</div>
              </div>
            </div>
            <div className="socials">
              <Link
                href="https://www.linkedin.com/in/syntrio-labs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M7 10v6M7 7v.01M12 16v-3.5a2 2 0 014 0V16M12 12v4" />
                </svg>
              </Link>
              <Link
                href="https://x.com/SyntrioLabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M4 4l16 16M20 4L4 20" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/syntriolabs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="16.6" cy="7.4" r="0.7" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61593910764185"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="form-panel reveal">
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field full">
              <label>Company</label>
              <input
                type="text"
                name="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <div className="field">
                <label>Service Required</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Chatbot Development">Chatbot Development</option>
                  <option value="AI Agent Development">AI Agent Development</option>
                  <option value="SaaS Development">SaaS Development</option>
                  <option value="AI Solutions & Automation">AI Solutions &amp; Automation</option>
                  <option value="Custom E-Commerce">Custom E-Commerce</option>
                </select>
              </div>
              <div className="field">
                <label>Budget</label>
                <select name="budget" value={formData.budget} onChange={handleChange}>
                  <option value="">Select range</option>
                  <option value="$2k – $5k">$2k – $5k</option>
                  <option value="$5k – $15k">$5k – $15k</option>
                  <option value="$15k – $40k">$15k – $40k</option>
                  <option value="$40k+">$40k+</option>
                </select>
              </div>
            </div>
            <div className="field full" style={{ marginTop: "18px" }}>
              <label>Project Details</label>
              <textarea
                name="message"
                placeholder="Tell us about your project, timeline, and goals..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn"
              id="submitBtn"
              style={{ marginTop: "22px" }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
              </svg>
            </button>
            {showError && (
              <div className="error-msg" style={{ color: "red", marginTop: "12px" }}>
                {errorMessage}
              </div>
            )}
            <div className={`success-msg${showSuccess ? " show" : ""}`} id="successMsg">
              Thanks — your message has been received. We&apos;ll reply within 24
              hours.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
