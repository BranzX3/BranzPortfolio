"use client";

import { siteConfig, socialLinks, aboutMe } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "7.5rem",
        paddingBottom: "4rem",
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "840px" }}>
          {/* Badge */}
          <div style={{ marginBottom: "1.75rem" }}>
            <span className="paper-badge">
              <span className="paper-badge-dot" />
              {siteConfig.location} — {siteConfig.tagline}
            </span>
          </div>

          {/* Headline Typography (Serif Editorial) */}
          <h1
            style={{
              fontSize: "clamp(2.9rem, 6.8vw, 4.8rem)",
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--text-ink)",
              marginBottom: "1.75rem",
            }}
          >
            Crafting Intelligent Web Systems & <span style={{ color: "var(--accent-terracotta)", fontStyle: "italic" }}>Multi-Agent AI</span> Architecture.
          </h1>

          {/* Bio intro */}
          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "700px",
              marginBottom: "2.5rem",
            }}
          >
            Hello, I&apos;m <strong style={{ color: "var(--text-ink)", fontWeight: 600 }}>{siteConfig.name} ({siteConfig.nickname})</strong>. {aboutMe.headline}
          </p>

          {/* Action CTAs & Social Links */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
            <a href="#projects" className="btn-primary">
              View Selected Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>

            {/* Social Icons Quick Bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginLeft: "0.5rem" }}>
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "1px solid var(--color-border)",
                    background: "var(--surface-cream)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    boxShadow: "var(--shadow-warm-sm)",
                    transition: "all 200ms ease",
                  }}
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "1px solid var(--color-border)",
                    background: "var(--surface-cream)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    boxShadow: "var(--shadow-warm-sm)",
                    transition: "all 200ms ease",
                  }}
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Stats Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.25rem",
              padding: "1.75rem",
              borderRadius: "var(--radius-lg)",
              background: "var(--surface-cream)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-warm-sm)",
            }}
          >
            {aboutMe.facts.map((fact) => (
              <div key={fact.label} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>{fact.icon}</span>
                  <span style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-ink)", fontFamily: "var(--font-serif)" }}>
                    {fact.value}
                  </span>
                </div>
                <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
