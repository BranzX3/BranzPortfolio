"use client";

import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">04 / Experience</div>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-description">
            Engineering roles creating production software, multi-agent AI platforms, and microservices.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "880px" }}>
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="paper-card"
              style={{
                padding: "2.25rem",
                position: "relative",
                borderLeft: "4px solid var(--accent-terracotta)",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.45rem", fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--text-ink)", marginBottom: "0.2rem" }}>
                    {exp.title}
                  </h3>
                  <div style={{ fontSize: "1rem", color: "var(--accent-terracotta)", fontWeight: 600 }}>
                    {exp.companyUrl ? (
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}{" "}
                    <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>• {exp.location}</span>
                  </div>
                </div>

                <div
                  style={{
                    padding: "0.35rem 0.85rem",
                    borderRadius: "var(--radius-full)",
                    background: "var(--bg-paper)",
                    border: "1px solid var(--color-border)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {exp.period}
                </div>
              </div>

              {/* Bullet points */}
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem", paddingLeft: "1.25rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                {exp.description.map((bullet, i) => (
                  <li key={i} style={{ fontSize: "0.98rem", lineHeight: 1.65 }}>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "0.25rem 0.7rem",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--accent-terracotta-light)",
                      border: "1px solid var(--accent-terracotta)",
                      fontSize: "0.78rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-terracotta)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
