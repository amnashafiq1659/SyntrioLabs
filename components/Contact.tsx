"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";

export default function Contact() {
  const [disabled, setDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    setTimeout(() => {
      setShow(true);
      formRef.current?.reset();
      setDisabled(false);
      setTimeout(() => setShow(false), 5000);
    }, 500);
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
          <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label>Full Name *</label>
                <input type="text" placeholder="Your full name" required />
              </div>
              <div className="field">
                <label>Email *</label>
                <input type="email" placeholder="you@company.com" required />
              </div>
            </div>
            <div className="field full">
              <label>Company</label>
              <input type="text" placeholder="Your company name" />
            </div>
            <div className="form-row">
              <div className="field">
                <label>Service Required</label>
                <select>
                  <option>Select service</option>
                  <option>Website Development</option>
                  <option>Chatbot Development</option>
                  <option>AI Agent Development</option>
                  <option>SaaS Development</option>
                  <option>AI Solutions &amp; Automation</option>
                  <option>Custom E-Commerce</option>
                </select>
              </div>
              <div className="field">
                <label>Budget</label>
                <select>
                  <option>Select range</option>
                  <option>$2k – $5k</option>
                  <option>$5k – $15k</option>
                  <option>$15k – $40k</option>
                  <option>$40k+</option>
                </select>
              </div>
            </div>
            <div className="field full" style={{ marginTop: "18px" }}>
              <label>Project Details</label>
              <textarea placeholder="Tell us about your project, timeline, and goals..."></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn"
              id="submitBtn"
              style={{ marginTop: "22px" }}
              disabled={disabled}
            >
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
              </svg>
            </button>
            <div className={`success-msg${show ? " show" : ""}`} id="successMsg">
              Thanks — your message has been received. We&apos;ll reply within 24
              hours.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
