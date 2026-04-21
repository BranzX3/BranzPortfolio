"use client";

import { siteConfig } from "@/data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.logo}>{siteConfig.name.split(" ")[0]}.</span>
            <p className={styles.tagline}>{siteConfig.tagline}</p>
          </div>
          
          <div className={styles.copyright}>
            <p>© {year} {siteConfig.name}. All rights reserved.</p>
            <p className={styles.builtWith}>
              Built with <span className={styles.heart}>♥</span> using Next.js
            </p>
          </div>
          
          <button 
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
