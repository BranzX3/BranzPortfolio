"use client";

import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">02 / Tech Stack</div>
          <h2 className="section-title">Skills & Technical Capabilities</h2>
          <p className="section-description">
            A curated breakdown of frameworks, multi-agent AI architecture patterns, and backend infrastructure.
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.75rem" }}>
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="paper-card" style={{ padding: "1.85rem" }}>
              {/* Category Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--color-border)" }}>
                <span style={{ fontSize: "1.4rem" }}>{skillGroup.icon}</span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-ink)", fontFamily: "var(--font-serif)" }}>
                  {skillGroup.category}
                </h3>
              </div>

              {/* Clean Tag Cloud (No percentage bars as requested!) */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
                {skillGroup.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.2rem",
                      padding: "0.5rem 0.85rem",
                      borderRadius: "var(--radius-md)",
                      background: "var(--bg-paper)",
                      border: "1px solid var(--color-border)",
                      width: "100%",
                      transition: "border-color 200ms ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-ink)" }}>
                        {item.name}
                      </span>
                    </div>
                    {item.note && (
                      <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                        {item.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
