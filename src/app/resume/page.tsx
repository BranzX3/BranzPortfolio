"use client";

import { useEffect } from "react";
import {
  siteConfig,
  socialLinks,
  aboutMe,
  skills,
  experience,
  education,
  certifications,
} from "@/data/portfolio";
import "./resume.css";

export default function ResumePage() {
  // Auto-open print dialog when user navigates here via "Download Resume" button
  useEffect(() => {
    // Give the page time to fully render before printing
    const timer = setTimeout(() => {
      // Only auto-print if triggered by the ?print=1 query param
      if (typeof window !== "undefined" && window.location.search.includes("print=1")) {
        window.print();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handlePrint = () => window.print();

  return (
    <div className="resume-root">
      {/* ── Print button (hidden when printing) ── */}
      <div className="resume-toolbar no-print">
        <div className="resume-toolbar-inner">
          <span className="resume-toolbar-title">Resume Preview</span>
          <div className="resume-toolbar-actions">
            <a href="/" className="resume-back-btn">
              ← Back to Portfolio
            </a>
            <button id="resume-print-btn" className="resume-print-btn" onClick={handlePrint}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* ── A4 Resume Sheet ── */}
      <div className="resume-sheet">

        {/* HEADER */}
        <header className="resume-header">
          <div className="resume-header-main">
            <h1 className="resume-name">{siteConfig.name}</h1>
            <p className="resume-role">{siteConfig.tagline}</p>
          </div>
          <div className="resume-header-contact">
            <div className="resume-contact-item">
              <ContactIcon type="email" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
            <div className="resume-contact-item">
              <ContactIcon type="location" />
              <span>{siteConfig.location}</span>
            </div>
            {socialLinks.github && (
              <div className="resume-contact-item">
                <ContactIcon type="github" />
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  {socialLinks.github.replace("https://", "")}
                </a>
              </div>
            )}
            {socialLinks.linkedin && (
              <div className="resume-contact-item">
                <ContactIcon type="linkedin" />
                <a href={socialLinks.linkedin.startsWith("http") ? socialLinks.linkedin : `https://${socialLinks.linkedin}`}
                  target="_blank" rel="noopener noreferrer">
                  {socialLinks.linkedin.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
          </div>
        </header>

        <div className="resume-divider" />

        {/* SUMMARY */}
        <section className="resume-section">
          <h2 className="resume-section-title">Summary</h2>
          <p className="resume-summary">{aboutMe.bio.join(" ")}</p>
        </section>

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <section className="resume-section">
            <h2 className="resume-section-title">Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="resume-entry">
                <div className="resume-entry-header">
                  <div>
                    <h3 className="resume-entry-title">{exp.title}</h3>
                    <p className="resume-entry-sub">
                      {exp.company}
                      {exp.location ? ` · ${exp.location}` : ""}
                    </p>
                  </div>
                  <span className="resume-entry-period">{exp.period}</span>
                </div>
                <ul className="resume-bullets">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {exp.technologies.length > 0 && (
                  <div className="resume-tech-row">
                    {exp.technologies.map((t) => (
                      <span key={t} className="resume-tech-tag">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <section className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="resume-entry">
                <div className="resume-entry-header">
                  <div>
                    <h3 className="resume-entry-title">{edu.institution}</h3>
                    <p className="resume-entry-sub">
                      {edu.degree}
                      {edu.gpa ? ` · GPA ${edu.gpa}` : ""}
                    </p>
                  </div>
                  <div className="resume-entry-right">
                    <span className="resume-entry-period">{edu.period}</span>
                    <span className="resume-entry-location">{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* SKILLS */}
        <section className="resume-section">
          <h2 className="resume-section-title">Technical Skills</h2>
          <div className="resume-skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="resume-skill-group">
                <span className="resume-skill-category">{group.category}</span>
                <span className="resume-skill-items">{group.items.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        {certifications.length > 0 && (
          <section className="resume-section">
            <h2 className="resume-section-title">Certifications</h2>
            {certifications.map((cert) => (
              <div key={cert.id} className="resume-entry">
                <div className="resume-entry-header">
                  <div>
                    <h3 className="resume-entry-title">{cert.name}</h3>
                    <p className="resume-entry-sub">{cert.issuer}</p>
                  </div>
                  <span className="resume-entry-period">{cert.date}</span>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Footer note */}
        <div className="resume-footer-note">
          <span>Generated from {typeof window !== "undefined" ? window.location.origin : ""}/resume</span>
        </div>
      </div>
    </div>
  );
}

/* ── Inline SVG contact icons ─────────────────────────────── */
function ContactIcon({ type }: { type: "email" | "location" | "github" | "linkedin" }) {
  if (type === "email") return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2"
      viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
  if (type === "location") return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2"
      viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
  if (type === "github") return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
  // linkedin
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
