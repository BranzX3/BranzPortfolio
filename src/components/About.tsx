"use client";

import { aboutMe, education } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">01 / About Me</div>
          <h2 className="section-title">Architecting Intelligent & Scalable Web Solutions</h2>
          <p className="section-description">
            Combining full-stack software craftsmanship with autonomous multi-agent AI integration.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
          {/* Left Column: Bio Narrative */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {aboutMe.bio.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Core Focus Pills */}
            <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {["Multi-Agent AI", "Full Stack Development", "FastAPI & Python", "Next.js & Vue", "MCP Tools", "Canonical Context Memory"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "0.35rem 0.85rem",
                    borderRadius: "var(--radius-full)",
                    background: "var(--surface-cream)",
                    border: "1px solid var(--color-border)",
                    color: "var(--accent-terracotta)",
                    fontSize: "0.82rem",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500,
                    boxShadow: "var(--shadow-warm-sm)",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Philosophy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Education Card */}
            {education.map((edu) => (
              <div
                key={edu.id}
                className="paper-card"
                style={{ padding: "1.75rem", borderLeft: "4px solid var(--accent-terracotta)" }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-terracotta)" }}>
                    🎓 EDUCATION
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    {edu.period}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text-ink)", marginBottom: "0.25rem" }}>
                  {edu.degree}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                  {edu.institution} — {edu.location}
                </p>
                {edu.gpa && (
                  <div style={{ marginTop: "0.75rem", display: "inline-block", padding: "0.25rem 0.75rem", background: "var(--bg-paper)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", fontSize: "0.85rem", color: "var(--text-ink)", fontWeight: 600 }}>
                    GPA: {edu.gpa}
                  </div>
                )}
              </div>
            ))}

            {/* Philosophy Card */}
            <div className="paper-card" style={{ padding: "1.75rem" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-moss)", marginBottom: "0.5rem" }}>
                🌿 CRAFTSMANSHIP PHILOSOPHY
              </div>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.65, fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                &ldquo;Building software isn&apos;t just writing syntax—it&apos;s about designing resilient pipelines, seamless user experiences, and bridging autonomous AI agents with real-world enterprise infrastructure.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
