"use client";

import { useState } from "react";
import { siteConfig, socialLinks } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">05 / Contact</div>
          <h2 className="section-title">Let&apos;s Build Something Exceptional</h2>
          <p className="section-description">
            Interested in collaboration, multi-agent AI development, or full-stack projects? Drop a line.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
          {/* Left Column: Direct Contacts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* One-Click Copy Email Card */}
            <div
              className="glass-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                position: "relative",
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-primary)" }}>
                ✉️ DIRECT EMAIL
              </div>

              <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-main)", wordBreak: "break-all" }}>
                {siteConfig.email}
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn-secondary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  background: copied ? "rgba(16, 185, 129, 0.15)" : "rgba(255, 255, 255, 0.05)",
                  borderColor: copied ? "var(--accent-emerald)" : "var(--color-border)",
                  color: copied ? "var(--accent-emerald)" : "var(--text-main)",
                }}
              >
                {copied ? "✓ Copied Email to Clipboard!" : "Copy Email Address"}
              </button>
            </div>

            {/* Social Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>GitHub</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>@BranzX3</span>
                </a>
              )}

              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>LinkedIn</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>Connect</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card" style={{ padding: "2.25rem" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--color-border)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--color-border)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--color-border)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                    resize: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  background: formSubmitted ? "var(--accent-emerald)" : "var(--gradient-accent)",
                }}
              >
                {formSubmitted ? "✓ Message Sent Successfully!" : "Send Message ✉️"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
