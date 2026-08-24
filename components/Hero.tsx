"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const lines = [
  "const agent = new AIAgent();",
  "await agent.run(task);",
  "return agent.output; ✓",
];

export default function Hero() {
  const line1 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);
  const line3 = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const typeLine = (
      el: HTMLElement | null,
      text: string,
      delay: number,
      cb?: () => void
    ) => {
      if (!el) return;
      let i = 0;
      timers.push(
        setTimeout(function tick() {
          el.innerHTML = text.slice(0, i) + '<span class="cursor"></span>';
          i++;
          if (i <= text.length) {
            timers.push(setTimeout(tick, 32));
          } else {
            el.innerHTML = text;
            if (cb) cb();
          }
        }, delay)
      );
    };

    const run = () => {
      typeLine(line1.current, lines[0], 400, () => {
        typeLine(line2.current, lines[1], 200, () => {
          typeLine(line3.current, lines[2], 200);
        });
      });
      barsRef.current
        ?.querySelectorAll("i")
        .forEach((bar, idx) => {
          timers.push(
            setTimeout(() => {
              (bar as HTMLElement).style.transform = "scaleY(1)";
            }, 300 + idx * 70)
          );
        });
      timers.push(
        setTimeout(() => {
          if (progressRef.current) progressRef.current.style.width = "82%";
        }, 500)
      );
    };

    if (document.readyState === "complete") {
      run();
    } else {
      window.addEventListener("load", run, { once: true });
    }

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("load", run);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="rings">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
      </div>
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow reveal">
            <span className="dot"></span> AI POWERED SOFTWARE DEVELOPMENT
          </div>
          <h1 className="reveal">
            Building <span className="grad-word">Intelligent</span>
            <br />
            Digital Experiences
          </h1>
          <p className="lead reveal">
            We help businesses build scalable websites, chatbots, AI agents, and
            SaaS platforms — engineered for performance, built for growth.
          </p>
          <div className="hero-cta reveal">
            <Link href="#contact" className="btn btn-grad">
              Start Your Project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="#projects" className="btn btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="float-card terminal">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line" id="typeLine1" ref={line1}></div>
            <div className="line" id="typeLine2" ref={line2}></div>
            <div className="line" id="typeLine3" ref={line3}></div>
          </div>
          <div className="float-card perf-card">
            <div className="row-top">
              <span>AI Performance</span>
              <span className="live">
                <span className="dot"></span>Live
              </span>
            </div>
            <div className="bars" id="bars" ref={barsRef}>
              <i style={{ height: "40%" }}></i>
              <i style={{ height: "55%" }}></i>
              <i style={{ height: "35%" }}></i>
              <i style={{ height: "70%" }}></i>
              <i style={{ height: "60%" }}></i>
              <i style={{ height: "85%" }}></i>
              <i style={{ height: "75%" }}></i>
              <i style={{ height: "95%" }}></i>
            </div>
            <div className="perf-num">
              98.7%<small>Accuracy rate</small>
            </div>
            <div className="perf-badge">+12.4%</div>
          </div>
          <div className="float-card agent-card">
            <div className="ico">🤖</div>
            <b>AI Agent</b>
            <span>Task completed</span>
            <div className="progress">
              <i id="agentProgress" ref={progressRef}></i>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="scroll-cue">
        <span>SCROLL</span>
        <div className="line"></div>
      </div> */}
    </section>
  );
}
