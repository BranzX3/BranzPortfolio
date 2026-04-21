"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig, socialLinks } from "@/data/portfolio";
import styles from "./Hero.module.css";

const roles = [
  siteConfig.tagline,
  "Frontend Developer",
  "Backend Engineer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx,   setCharIdx]   = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Typewriter effect */
  useEffect(() => {
    const current = roles[roleIdx];

    if (!isDeleting && charIdx < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((i) => i + 1);
      }, 70);
    } else if (!isDeleting && charIdx === current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIdx > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((i) => i - 1);
      }, 40);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [charIdx, isDeleting, roleIdx]);

  return (
    <section id="hero" className={styles.hero}>
      {/* Animated grid background */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Floating orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>

          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {siteConfig.availableForWork
              ? "Open to new opportunities"
              : "Currently not available"}
          </div>

          {/* Greeting */}
          <p className={styles.greeting}>Hey there, I&apos;m</p>

          {/* Name */}
          <h1 className={styles.name}>{siteConfig.name}</h1>

          {/* Typewriter role */}
          <div className={styles.roleWrap}>
            <span className={styles.role}>
              {displayed}
              <span className={styles.cursor} aria-hidden="true">|</span>
            </span>
          </div>

          {/* Description */}
          <p className={styles.description}>{siteConfig.description}</p>

          {/* CTAs */}
          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary" id="hero-view-work">
              View My Work
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary" id="hero-contact">
              Let&apos;s Talk
            </a>
          </div>

          {/* Social links */}
          <div className={styles.socials}>
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} id="hero-github" aria-label="GitHub">
                <GithubIcon />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} id="hero-linkedin" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} id="hero-twitter" aria-label="Twitter / X">
                <TwitterIcon />
              </a>
            )}
          </div>

          {/* Scroll indicator */}
          <a href="#about" className={styles.scroll} aria-label="Scroll down">
            <span className={styles.scrollDot} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── SVG Icons ────────────────────────────────────────────── */
function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
