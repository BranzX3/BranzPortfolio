import { aboutMe, siteConfig } from "@/data/portfolio";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>

          {/* Left: Text */}
          <div className={styles.content}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Crafting digital{" "}
              <span className="gradient-text">experiences</span>{" "}
              that matter
            </h2>

            <div className={styles.bio}>
              {aboutMe.bio.map((paragraph, i) => (
                <p key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.info}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>📍 Location</span>
                <span className={styles.infoValue}>{siteConfig.location}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>📧 Email</span>
                <a href={`mailto:${siteConfig.email}`} className={styles.infoLink}>
                  {siteConfig.email}
                </a>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>💼 Status</span>
                <span className={`${styles.infoValue} ${siteConfig.availableForWork ? styles.available : styles.unavailable}`}>
                  {siteConfig.availableForWork ? "✅ Available for work" : "🔴 Not available"}
                </span>
              </div>
            </div>

            <div className={styles.actions}>
              {siteConfig.resumeUrl && (
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  id="about-download-resume"
                >
                  View / Download Resume
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className={styles.stats}>
            {aboutMe.facts.map((fact, i) => (
              <div
                key={i}
                className={`glass ${styles.statCard}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className={styles.statIcon}>{fact.icon}</span>
                <span className={styles.statValue}>{fact.value}</span>
                <span className={styles.statLabel}>{fact.label}</span>
              </div>
            ))}

            {/* Code preview card */}
            <div className={`glass ${styles.codeCard}`}>
              <div className={styles.codeDots}>
                <span style={{ background: "#f43f5e" }} />
                <span style={{ background: "#facc15" }} />
                <span style={{ background: "#10b981" }} />
              </div>
              <pre className={styles.code}>{`const dev = {
  name: "${siteConfig.name}",
  role: "${siteConfig.tagline}",
  passion: "Building things",
  coffee: true ☕,
};`}</pre>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
