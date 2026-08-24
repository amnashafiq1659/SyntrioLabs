export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">WHAT WE DO</div>
          <h2>Specializations built for growth</h2>
          <p>
            Six focused disciplines, one integrated team — from first line of
            code to the automation that runs your business.
          </p>
        </div>
        <div className="svc-grid stagger">
          <div className="svc-card reveal" style={{ ["--i" as string]: 0 }}>
            <span className="svc-num">01</span>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 5h18v14H3z" />
                <path d="M3 9h18" />
                <circle cx="6" cy="7" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <h3>Website Development</h3>
            <p>
              Fast, responsive, pixel-perfect websites built on modern
              frameworks — designed to convert and built to scale.
            </p>
          </div>
          <div className="svc-card reveal" style={{ ["--i" as string]: 1 }}>
            <span className="svc-num">02</span>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 3a5 5 0 015 5v2a5 5 0 01-10 0V8a5 5 0 015-5z" />
                <path d="M8 21h8M7 15v2a5 5 0 0010 0v-2" />
              </svg>
            </div>
            <h3>Chatbot Development</h3>
            <p>
              Conversational AI assistants trained on your business, deployed
              across web, WhatsApp, and support channels.
            </p>
          </div>
          <div className="svc-card reveal" style={{ ["--i" as string]: 2 }}>
            <span className="svc-num">03</span>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <path d="M9 9h.01M15 9h.01M9 15c1 1.2 5 1.2 6 0" />
              </svg>
            </div>
            <h3>AI Agent Development</h3>
            <p>
              Autonomous agents that plan, reason, and act — handling multi-step
              workflows without human hand-holding.
            </p>
          </div>
          <div className="svc-card reveal" style={{ ["--i" as string]: 3 }}>
            <span className="svc-num">04</span>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2l3 5 5 .8-3.6 3.5.9 5-4.3-2.3-4.3 2.3.9-5L6 7.8 11 7z" />
              </svg>
            </div>
            <h3>SaaS Development</h3>
            <p>
              Multi-tenant platforms with billing, auth, and dashboards —
              engineered from MVP to production scale.
            </p>
          </div>
          <div className="svc-card reveal" style={{ ["--i" as string]: 4 }}>
            <span className="svc-num">05</span>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24">
                <path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3M4 6.7V12h5.3M20 17.3V12h-5.3" />
              </svg>
            </div>
            <h3>AI Solutions &amp; Automation</h3>
            <p>
              Custom automation pipelines that connect your tools and remove
              repetitive work from your team&apos;s day.
            </p>
          </div>
          <div className="svc-card reveal" style={{ ["--i" as string]: 5 }}>
            <span className="svc-num">06</span>
            <div className="svc-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="9" cy="20" r="1.4" />
                <circle cx="17" cy="20" r="1.4" />
                <path d="M2 3h3l2.4 12.2a2 2 0 002 1.8h8.6a2 2 0 002-1.6L21 7H6" />
              </svg>
            </div>
            <h3>Custom E-Commerce</h3>
            <p>
              Storefronts with tailored checkout, inventory, and payments —
              built around how your business actually sells.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
