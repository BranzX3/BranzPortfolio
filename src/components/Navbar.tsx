"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/portfolio";

const navItems = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
  { label: "Resume",     href: "/resume" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-inner">
          {/* Logo */}
          <a href="#hero" className="nav-logo">
            {siteConfig.name.split(" ")[0]}
            <span style={{ color: "var(--color-accent-light)" }}>.</span>
          </a>

          {/* Desktop links */}
          <ul className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleNavClick}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta" onClick={handleNavClick}>
                Hire Me
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="nav-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            id="mobile-nav-toggle"
          >
            <span
              style={{
                transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span
              style={{
                transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              }}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
