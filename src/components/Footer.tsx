"use client";

import React from "react";
import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-8 lg:px-10 border-t border-[var(--border-color)] bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
        {/* Left Side: Monogram & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <span className="w-10 h-10 rounded-full bg-[var(--text-primary)] text-[var(--bg-surface)] font-serif text-xl font-bold flex items-center justify-center shrink-0 shadow-xs">
            {siteConfig.name.charAt(0)}
          </span>
          <div>
            <p className="text-base font-bold text-[var(--text-primary)]">
              {siteConfig.name} {siteConfig.lastName} ({siteConfig.nickname})
            </p>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5">
              &copy; {new Date().getFullYear()} {t.footer.copyrightSuffix}
            </p>
          </div>
        </div>

        {/* Middle: Japanese Minimalism Motto */}
        <div className="text-base sm:text-lg italic text-[var(--text-secondary)] font-serif">
          &ldquo;{t.footer.motto}&rdquo;
        </div>

        {/* Right Side: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="paper-button-secondary text-sm py-2.5 px-5 flex items-center gap-2 group shrink-0"
          aria-label="Scroll to top"
        >
          <span>{t.footer.backToTop}</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
