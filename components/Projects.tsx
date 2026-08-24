"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

type Project = {
  num: string;
  cat: string;
  img: string;
  alt: string;
  tagIcon: ReactNode;
  tag: string;
  title: string;
  desc: string;
  link: string;
};

const ExternalIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <path d="M15 3h6v6M10 14L21 3" />
  </svg>
);

const aiTag = (
  <svg viewBox="0 0 24 24">
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </svg>
);
const saasTag = (
  <svg viewBox="0 0 24 24">
    <path d="M6.5 19a4.5 4.5 0 010-9 6 6 0 0111.2-1.9A4 4 0 0117.5 19h-11z" />
  </svg>
);
const websiteTag = (
  <svg viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
    <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);
const ecomTag = (
  <svg viewBox="0 0 24 24">
    <circle cx="9" cy="20" r="1.4" />
    <circle cx="17" cy="20" r="1.4" />
    <path d="M2 3h3l2.4 12.2a2 2 0 002 1.8h8.6a2 2 0 002-1.6L21 7H6" />
  </svg>
);

const projects: Project[] = [
  {
    num: "01",
    cat: "saas",
    img: "/projects/attendify.png",
    alt: "Attendify workforce management platform homepage",
    tagIcon: saasTag,
    tag: "SaaS",
    title: "Attendify",
    desc: "Enterprise workforce management platform with geofence-verified attendance, shift scheduling, leave workflows, and audit-ready reporting.",
    link: "https://attendify-coral.vercel.app/",
  },
  {
    num: "02",
    cat: "ai",
    img: "/projects/nexora-ai.png",
    alt: "Nexora AI platform homepage",
    tagIcon: aiTag,
    tag: "AI",
    title: "Nexora AI",
    desc: "All-in-one AI workspace for modern teams — content creation, workflow automation, analytics, and research in a single platform.",
    link: "https://nexora-ai-fg2u.vercel.app/",
  },
  {
    num: "03",
    cat: "websites",
    img: "/projects/aurelia-studio.png",
    alt: "Aurelia Studio luxury salon website homepage",
    tagIcon: websiteTag,
    tag: "Website",
    title: "Aurelia Studio",
    desc: "Luxury salon booking site for hair, color, makeup, nails, skincare, spa, and bridal beauty services, with an editorial, gallery-driven design.",
    link: "https://aurelia-studio-psi.vercel.app/",
  },
  {
    num: "04",
    cat: "websites",
    img: "/projects/meridian-estates.png",
    alt: "Meridian Estates real estate agency website homepage",
    tagIcon: websiteTag,
    tag: "Website",
    title: "Meridian Estates",
    desc: "Boutique real estate agency site curating exceptional homes across the world's most sought-after locations.",
    link: "https://meridianestatesagency.vercel.app/",
  },
  {
    num: "05",
    cat: "websites",
    img: "/projects/wanderly-travels.png",
    alt: "Wanderly Travels travel agency website homepage",
    tagIcon: websiteTag,
    tag: "Website",
    title: "Wanderly Travels",
    desc: "Travel agency site offering personalized itineraries, handpicked experiences, and 24/7 support for extraordinary destinations.",
    link: "https://wanderlytravels.vercel.app/",
  },
  {
    num: "06",
    cat: "ecommerce",
    img: "/projects/leather-impex.png",
    alt: "Leather Impex full-grain leather jacket store homepage",
    tagIcon: ecomTag,
    tag: "E-Commerce",
    title: "Leather Impex",
    desc: "Full-grain leather jacket store with cart, checkout, size guide, cash-on-delivery, and WhatsApp support integration.",
    link: "https://leather-impex.vercel.app/",
  },
  {
    num: "07",
    cat: "websites",
    img: "/projects/morning-theory.png",
    alt: "Morning Theory specialty coffee cafe website homepage",
    tagIcon: websiteTag,
    tag: "Website",
    title: "Morning Theory",
    desc: "Brand site for a specialty coffee and fresh bakes café, built around warm visuals and a simple ordering-focused layout.",
    link: "https://morningtheory.vercel.app/",
  },
];

const filters = [
  {
    key: "all",
    label: "All",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  { key: "ai", label: "AI", icon: aiTag },
  { key: "saas", label: "SaaS", icon: saasTag },
  { key: "websites", label: "Websites", icon: websiteTag },
  { key: "ecommerce", label: "E-Commerce", icon: ecomTag },
];

const countFor = (key: string) =>
  key === "all"
    ? projects.length
    : projects.filter((p) => p.cat === key).length;

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 130, damping: 18 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.22, ease: "easeInOut" },
  },
};

/** Single card with Framer-Motion 3D tilt + cursor glare (both motion-safe).
 *  The whole card is an anchor that opens the project's live site in a new tab. */
function ProjectCard({ p }: { p: Project }) {
  const reduceMotion = useReducedMotion();

  // Normalised pointer position (-0.5 → 0.5) fed into a spring for smooth tilt.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const springCfg = { stiffness: 220, damping: 20 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), springCfg);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-8, 8]), springCfg);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    px.set(nx - 0.5);
    py.set(ny - 0.5);
    // Cursor glare position (CSS custom props, not motion values).
    const media = e.currentTarget.querySelector<HTMLElement>(".proj-media");
    if (media) {
      media.style.setProperty("--mx", nx * 100 + "%");
      media.style.setProperty("--my", ny * 100 + "%");
    }
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.a
      layout
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the ${p.title} live site (opens in a new tab)`}
      variants={cardVariants}
      exit="exit"
      whileHover={reduceMotion ? undefined : { y: -8 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={
        reduceMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 900 }
      }
      className="proj-card"
    >
      <span className="proj-ring" aria-hidden />
      <div className="proj-media">
        <span className="proj-num">{p.num}</span>
        <Image src={p.img} alt={p.alt} width={1280} height={800} />
        <div className="proj-overlay" aria-hidden>
          <span className="ov-btn">{ExternalIcon}</span>
        </div>
      </div>
      <div className="proj-body">
        <span className="proj-tag">
          {p.tagIcon}
          {p.tag}
        </span>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.cat === active);

  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">PORTFOLIO</div>
          <h2>Recent work</h2>
          <p>
            A selection of products we&apos;ve designed, built, and shipped for
            clients across industries.
          </p>
        </div>
        <div className="filters-wrap">
          <div className="filters reveal">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn${active === f.key ? " active" : ""}`}
                data-filter={f.key}
                onClick={() => setActive(f.key)}
              >
                {f.icon}
                {f.label}
                <span className="filter-count">{countFor(f.key)}</span>
              </button>
            ))}
          </div>
        </div>
        <motion.div
          className="proj-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard key={p.num} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
