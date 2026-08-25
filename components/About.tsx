import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <div className="eyebrow reveal">ABOUT US</div>
            <h2 className="reveal">
              We build the future,
              <br />
              one <span className="grad-word">product</span> at a time
            </h2>
            <p className="lead reveal">
              SyntrioLabs is a product-focused digital agency building AI-powered
              software, scalable platforms, and intelligent automation systems
              that drive real business outcomes.
            </p>
            <div className="checklist reveal stagger">
              <div className="item" style={{ ["--i" as string]: 0 }}>
                <span className="check">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="3.6" />
                    <path d="M5 21c0-4 3.2-6.5 7-6.5S19 17 19 21" />
                  </svg>
                </span>
                Client-focused development
              </div>
              <div className="item" style={{ ["--i" as string]: 1 }}>
                <span className="check">
                  <svg viewBox="0 0 24 24">
                    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
                  </svg>
                </span>
                Performance-first approach
              </div>
              <div className="item" style={{ ["--i" as string]: 2 }}>
                <span className="check">
                  <svg viewBox="0 0 24 24">
                    <rect x="7" y="7" width="10" height="10" rx="2" />
                    <path d="M9.5 3v2M14.5 3v2M9.5 19v2M14.5 19v2M3 9.5h2M3 14.5h2M19 9.5h2M19 14.5h2" />
                  </svg>
                </span>
                AI-driven innovation
              </div>
              <div className="item" style={{ ["--i" as string]: 3 }}>
                <span className="check">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3L3 8l9 5 9-5-9-5z" />
                    <path d="M3 16l9 5 9-5" />
                    <path d="M3 12l9 5 9-5" />
                  </svg>
                </span>
                Clean architecture
              </div>
              <div className="item" style={{ ["--i" as string]: 4 }}>
                <span className="check">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5" />
                  </svg>
                </span>
                Scalable solutions
              </div>
              <div className="item" style={{ ["--i" as string]: 5 }}>
                <span className="check">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 11a9 9 0 0118 0v4.5a2 2 0 01-2 2h-1v-6h3" />
                    <path d="M3 15.5v-4a2 2 0 012-2h1v6H5a2 2 0 01-2-2z" />
                  </svg>
                </span>
                Long-term support
              </div>
            </div>
          </div>
          <div className="about-visual reveal">
            <Image
              className="main-img"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
              alt="SyntrioLabs team working"
              width={900}
              height={600}
              loading="lazy"
            />
            <div className="about-collage">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80"
                alt="SyntrioLabs team collaborating"
                width={400}
                height={296}
                loading="lazy"
              />
            </div>
            <div className="sat-card">
              <div className="lbl">Client Satisfaction</div>
              <div className="num">98%</div>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
