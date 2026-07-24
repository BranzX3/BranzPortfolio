"use client";

import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "2.5rem 0",
        background: "var(--bg-dark)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-main)" }}>
            © {currentYear} {siteConfig.name} {siteConfig.lastName}. All rights reserved.
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
            Designed & Engineered with Modern Dark Editorial Aesthetic
          </div>
        </div>

        <a
          href="#hero"
          className="btn-secondary"
          style={{
            padding: "0.45rem 1rem",
            fontSize: "0.82rem",
            borderRadius: "var(--radius-full)",
          }}
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
