import { siteConfig, socialLinks } from "@/data/portfolio";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={`glass ${styles.container}`}>
          <div className={styles.glow} aria-hidden="true" />
          
          <div className={styles.content}>
            <p className="section-label">What&apos;s Next?</p>
            <h2 className={styles.title}>Let&apos;s Work Together</h2>
            <p className={styles.subtitle}>
              Whether you have a question, a project idea, or just want to say hi, 
              I&apos;ll try my best to get back to you!
            </p>
            
            <a href={`mailto:${siteConfig.email}`} className={`btn btn-primary ${styles.cta}`}>
              Say Hello
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            
            <div className={styles.socials}>
              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  GitHub
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  LinkedIn
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
