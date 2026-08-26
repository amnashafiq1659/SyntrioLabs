import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="#" className="logo">
              <Logo /><span>Syntrio<span className="accent">Labs</span></span>
            </Link>
            <p>
              Building intelligent digital experiences websites, AI agents,
              chatbots, and SaaS platforms engineered for growth.
            </p>
            <div className="footer-socials">
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
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#process">Process</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link href="#services">Website Development</Link>
            <Link href="#services">Chatbot Development</Link>
            <Link href="#services">AI Agent Development</Link>
            <Link href="#services">SaaS Development</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <Link href="mailto:contact@syntriolabs.com">contact@syntriolabs.com</Link>
            <Link href="tel:+15552345678">+1 (555) 234-5678</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SyntrioLabs. All rights reserved.</span>
          <span>Designed &amp; built by SyntrioLabs</span>
        </div>
      </div>
    </footer>
  );
}
