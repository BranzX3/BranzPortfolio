import { certifications } from "@/data/portfolio";
import ImageLightbox from "./ImageLightbox";
import styles from "./Certifications.module.css";

export default function Certifications() {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className={`section ${styles.certifications}`}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Achievements</p>
          <h2 className="section-title">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className={styles.card}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image Banner */}
              <div className={styles.imageWrap}>
                {(cert as any).image ? (
                  <ImageLightbox src={(cert as any).image} alt={cert.name} className={styles.image} />
                ) : (
                  <div className={styles.placeholder}>
                    <span className={styles.placeholderIcon}>📜</span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className={styles.content}>
                <h3 className={styles.name}>{cert.name}</h3>
                
                <div className={styles.meta}>
                  <span className={styles.issuer}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s-8-4.5-8-11.8A6 6 0 0112 2a6 6 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {cert.issuer}
                  </span>
                  <span className={styles.date}>{cert.date}</span>
                </div>

                {cert.link && (
                  <div className={styles.footer}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Verify Credential
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
