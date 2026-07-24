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
        background: scrolled ? "rgba(7, 9, 14, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
        transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Brand logo / title */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "var(--gradient-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              color: "#fff",
              fontSize: "1.1rem",
              boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
            }}
          >
            P
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-main)", letterSpacing: "-0.02em" }}>
              {siteConfig.name} <span style={{ color: "var(--accent-primary)" }}>.</span>
            </span>
            <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              {siteConfig.nickname} Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "0.35rem 0.5rem",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--color-border)",
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
                    padding: "0.4rem 1rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.88rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#ffffff" : "var(--text-secondary)",
                    background: isActive ? "rgba(99, 102, 241, 0.2)" : "transparent",
                    border: isActive ? "1px solid rgba(99, 102, 241, 0.4)" : "1px solid transparent",
                    transition: "all 200ms ease",
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Status Badge */}
          {siteConfig.availableForWork && (
            <div className="editorial-badge" style={{ fontSize: "0.75rem" }}>
              <span className="editorial-badge-dot" />
              Available for Hire
            </div>
          )}

          {/* Resume link */}
          <a
            href={siteConfig.resumeUrl}
            className="btn-secondary"
            style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem" }}
          >
            Resume 📄
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "0.5rem",
            background: "transparent",
          }}
        >
          <span style={{ width: "22px", height: "2px", background: "#fff", transition: "0.3s" }} />
          <span style={{ width: "22px", height: "2px", background: "#fff", transition: "0.3s" }} />
          <span style={{ width: "16px", height: "2px", background: "var(--accent-primary)", transition: "0.3s" }} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(7, 9, 14, 0.96)",
            backdropFilter: "blur(25px)",
            borderBottom: "1px solid var(--color-border)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--text-main)",
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
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
