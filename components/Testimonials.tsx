"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  quote: string;
  avatar: string;
  name: string;
  role: string;
};

const slides: Slide[] = [
  {
    quote:
      "SyntrioLabs shipped our AI agent in six weeks and it handles half our support volume today. The team communicated like an in-house squad, not an outside vendor.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    name: "Sara Malik",
    role: "Founder, Northbridge Finance",
  },
  {
    quote:
      "We came in with a rough idea for a SaaS product and left with a production-ready platform, billing included. Their process kept us informed at every single stage.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80",
    name: "Daniel Cho",
    role: "CEO, MetricFlow",
  },
  {
    quote:
      "The new storefront doubled our conversion rate in the first month. Clean code, honest timelines, and a team that actually cared about the outcome.",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&q=80",
    name: "Amelia Novak",
    role: "COO, Norrland Goods",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [startAutoplay]);

  const showSlide = (i: number) => {
    setIndex(i);
    startAutoplay();
  };

  const prev = () => showSlide((index - 1 + slides.length) % slides.length);
  const next = () => showSlide((index + 1) % slides.length);

  return (
    <section className="testimonials" id="testimonials">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">TESTIMONIALS</div>
          <h2>What clients say</h2>
          <p>Real feedback from the founders and teams we&apos;ve built with.</p>
        </div>
        <div className="t-carousel reveal" id="tCarousel">
          <span className="big-quote">&ldquo;</span>
          <button
            className="t-arrow prev"
            id="tPrev"
            aria-label="Previous testimonial"
            onClick={prev}
          >
            <svg viewBox="0 0 24 24">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            className="t-arrow next"
            id="tNext"
            aria-label="Next testimonial"
            onClick={next}
          >
            <svg viewBox="0 0 24 24">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
          {slides.map((s, i) => (
            <div className={`t-slide${i === index ? " active" : ""}`} key={s.name}>
              <p className="t-quote">{s.quote}</p>
              <div className="t-person">
                <div className="t-avatar-wrap">
                  <Image
                    className="t-avatar"
                    src={s.avatar}
                    alt="Client avatar"
                    width={52}
                    height={52}
                  />
                </div>
                <div>
                  <div className="t-name">{s.name}</div>
                  <div className="t-role">{s.role}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="t-dots" id="tDots">
            {slides.map((s, i) => (
              <div
                key={s.name}
                className={`t-dot${i === index ? " active" : ""}`}
                onClick={() => showSlide(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
