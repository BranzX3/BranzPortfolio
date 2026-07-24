"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "0.85rem 0" : "1.25rem 0",
        background: scrolled ? "rgba(244, 238, 220, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Monogram */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "var(--surface-cream)",
              border: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              color: "var(--accent-terracotta)",
              fontSize: "1.3rem",
              boxShadow: "var(--shadow-warm-sm)",
            }}
          >
            P.
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 600, fontSize: "1.05rem", color: "var(--text-ink)", fontFamily: "var(--font-serif)" }}>
              {siteConfig.name} {siteConfig.lastName}
            </span>
            <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
              {siteConfig.nickname} • Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              background: "var(--surface-cream)",
              padding: "0.3rem 0.4rem",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-warm-sm)",
            }}
          >
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    padding: "0.4rem 0.95rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.86rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                    background: isActive ? "var(--accent-terracotta)" : "transparent",
                    transition: "all 200ms ease",
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {siteConfig.availableForWork && (
            <div className="paper-badge" style={{ fontSize: "0.76rem" }}>
              <span className="paper-badge-dot" />
              Available for Work
            </div>
          )}

          <a
            href={siteConfig.resumeUrl}
            className="btn-secondary"
            style={{ padding: "0.45rem 1.1rem", fontSize: "0.85rem" }}
          >
            Resume 📄
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "0.5rem",
          }}
        >
          <span style={{ width: "22px", height: "2px", background: "var(--text-ink)" }} />
          <span style={{ width: "22px", height: "2px", background: "var(--text-ink)" }} />
          <span style={{ width: "16px", height: "2px", background: "var(--accent-terracotta)" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg-paper)",
            borderBottom: "1px solid var(--color-border)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            boxShadow: "var(--shadow-warm-md)",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.1rem",
                fontFamily: "var(--font-serif)",
                color: "var(--text-ink)",
                padding: "0.5rem 0",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            className="btn-primary"
            style={{ marginTop: "0.5rem", textAlign: "center" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            View Resume 📄
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 868px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
