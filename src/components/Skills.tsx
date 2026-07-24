"use client";

import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">02 / Tech Stack</div>
          <h2 className="section-title">Skills & Technical Proficiency</h2>
          <p className="section-description">
            A breakdown of technologies, frameworks, and architecture patterns I specialize in.
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.75rem" }}>
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="glass-card" style={{ padding: "1.75rem" }}>
              {/* Category Title */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--color-border)" }}>
                <span style={{ fontSize: "1.5rem" }}>{skillGroup.icon}</span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-main)" }}>
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skill items list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {skillGroup.items.map((item) => (
                  <div key={item.name} style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-main)" }}>
                        {item.name}
                      </span>
                      {item.note && (
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                          {item.note}
                        </span>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div
                      style={{
                        width: "100%",
                        height: "6px",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(255, 255, 255, 0.06)",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: `${item.level}%`,
                          height: "100%",
                          borderRadius: "var(--radius-full)",
                          background: "var(--gradient-accent)",
                          boxShadow: "0 0 12px rgba(99, 102, 241, 0.4)",
                          transition: "width 1s ease-in-out",
                        }}
                      />
                    </div>
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
