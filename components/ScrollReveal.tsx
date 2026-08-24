"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal behaviour, ported 1:1 from the original inline script:
 * observes every `.reveal`, adds `.in` on intersection, and for `.stagger`
 * containers sets each child's `--i` custom property to its index.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            if (e.target.classList.contains("stagger")) {
              Array.from(e.target.children).forEach((c, i) =>
                (c as HTMLElement).style.setProperty("--i", String(i))
              );
            }
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
