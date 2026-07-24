"use client";

import { certifications } from "@/data/portfolio";

export default function Certifications() {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">Achievements</div>
          <h2 className="section-title">Licenses & Certifications</h2>
          <p className="section-description">
            Verified industry credentials and cloud development accreditations.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.75rem" }}>
          {certifications.map((cert) => (
            <div key={cert.id} className="paper-card" style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "1.75rem" }}>📜</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--text-muted)" }}>
                  {cert.date}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--text-ink)", marginBottom: "0.25rem" }}>
                  {cert.name}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--accent-terracotta)", fontWeight: 600 }}>
                  Issuer: {cert.issuer}
                </p>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ marginTop: "auto", fontSize: "0.85rem", padding: "0.45rem 0.9rem" }}
                >
                  Verify Credential ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
