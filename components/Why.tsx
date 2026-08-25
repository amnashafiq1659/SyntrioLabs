import type { ReactNode } from "react";

type Reason = { num: string; icon: ReactNode; title: string; desc: string };

const reasons: Reason[] = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l3 5 5 .8-3.6 3.5.9 5-4.3-2.3-4.3 2.3.9-5L6 7.8 11 7z" />
      </svg>
    ),
    title: "Experienced Development",
    desc: "Thoughtful engineering, modern technologies, and a focus on maintainable, production-ready solutions.",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Fast turnaround",
    desc: "Clear milestones and weekly demos mean you see real progress from week one, not month three.",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "Security-first builds",
    desc: "Every release goes through security review and testing before it ever reaches production.",
  },
  {
    num: "04",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-6 4 4 5-8" />
      </svg>
    ),
    title: "Transparent pricing",
    desc: "Fixed-scope quotes with no hidden fees — you know the cost before we write a single line.",
  },
  {
    num: "05",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
    title: "Long-term partnership",
    desc: "We stay on after launch with maintenance, monitoring, and feature support — not a one-off handoff.",
  },
  {
    num: "06",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3M4 6.7V12h5.3M20 17.3V12h-5.3" />
      </svg>
    ),
    title: "Built to scale",
    desc: "Architecture decisions are made for your traffic next year, not just your demo day next week.",
  },
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">WHY SyntrioLabs</div>
          <h2>Why SyntrioLabs</h2>
          <p>Six reasons clients keep coming back to SyntrioLabs for their next build.</p>
        </div>
        <div className="why-grid stagger">
          {reasons.map((r, i) => (
            <div className="why-card reveal" style={{ ["--i" as string]: i }} key={r.num}>
              <span className="why-num">{r.num}</span>
              <div className="why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
              <span className="why-underline"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
