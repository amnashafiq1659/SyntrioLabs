"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Logo from "@/components/Logo";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;
    const onScroll = () => {
      navEl.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav" id="siteNav" ref={navRef}>
      <div className="wrap nav-inner">
        <Link href="#" className="logo">
          <Logo priority /><span>Syntrio<span className="accent">Labs</span></span>
        </Link>
        <nav className="links">
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#process">Process</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <Link href="#contact" className="btn btn-primary">
          Start Project
        </Link>
      </div>
    </header>
  );
}
