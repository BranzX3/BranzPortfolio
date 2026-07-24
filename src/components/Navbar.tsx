"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, ArrowUpRight, FileText, Settings, Sun, Moon, Check, Globe } from "lucide-react";

export default function Navbar() {
  const { lang, t, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const settingsRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  // Close settings popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "projects", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "paper-nav-blur py-3 sm:py-4 shadow-sm" : "bg-transparent py-5 sm:py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between gap-3 lg:gap-4">
        {/* Brand Monogram & First Name Only */}
        <a
          href="#"
          className="group flex items-center gap-2.5 sm:gap-3.5 transition-opacity hover:opacity-90 min-w-0 shrink-0"
        >
          <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[var(--text-primary)] text-[var(--bg-surface)] font-serif text-xl sm:text-2xl font-bold flex items-center justify-center border-2 border-[var(--text-primary)] group-hover:bg-[var(--accent-color)] group-hover:border-[var(--accent-color)] transition-colors duration-300 shrink-0 shadow-xs">
            {siteConfig.name.charAt(0)}
          </span>
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-tight text-[var(--text-primary)] font-bold leading-none whitespace-nowrap">
              {siteConfig.name}
            </span>
            <span className="text-[10px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-widest font-sans font-semibold mt-0.5 sm:mt-1 whitespace-nowrap">
              {siteConfig.nickname} — {t.nav.portfolioSuffix}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 bg-[var(--bg-surface)]/95 border border-[var(--border-color)] px-4 xl:px-6 py-2 rounded-full shadow-xs backdrop-blur-md shrink-0">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 xl:px-5 py-2 text-sm xl:text-base font-medium transition-colors rounded-full whitespace-nowrap shrink-0 ${
                  isActive
                    ? "text-[var(--text-primary)] font-bold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[var(--bg-subsurface)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Side Controls: Unified Settings Button & CTA */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          {/* Unified Settings Popover Button */}
          <div className="relative shrink-0" ref={settingsRef}>
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className={`paper-button-secondary text-xs sm:text-sm py-2.5 px-3.5 sm:px-4 flex items-center gap-2 font-medium shrink-0 ${
                settingsOpen ? "border-[var(--accent-color)] text-[var(--accent-color)] bg-[var(--bg-subsurface)]" : ""
              }`}
              title={t.settings.title}
              aria-label="Settings"
            >
              <Settings className={`w-4 h-4 text-[var(--accent-color)] transition-transform duration-300 ${settingsOpen ? "rotate-90" : ""}`} />
              <span className="font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
                {lang.toUpperCase()} • {theme === "light" ? "☀️" : "🌙"}
              </span>
            </button>

            {/* Settings Popover Dropdown Card */}
            <AnimatePresence>
              {settingsOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-72 p-5 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl shadow-2xl z-50 space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                    <h4 className="text-xs uppercase tracking-widest text-[var(--accent-color)] font-bold flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      {t.settings.title}
                    </h4>
                    <span className="text-[10px] font-mono text-[var(--text-secondary)] bg-[var(--bg-subsurface)] px-2 py-0.5 rounded-full border border-[var(--border-color)]">
                      v2.0
                    </span>
                  </div>

                  {/* Language Selector */}
                  <div className="space-y-2">
                    <label className="text-xs text-[var(--text-secondary)] font-semibold flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                      {t.settings.language}
                    </label>
                    <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)]">
                      <button
                        onClick={() => setLanguage("en")}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                          lang === "en"
                            ? "bg-[var(--text-primary)] text-[var(--bg-surface)] shadow-xs"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        {lang === "en" && <Check className="w-3.5 h-3.5" />}
                        English (EN)
                      </button>
                      <button
                        onClick={() => setLanguage("th")}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                          lang === "th"
                            ? "bg-[var(--text-primary)] text-[var(--bg-surface)] shadow-xs"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        {lang === "th" && <Check className="w-3.5 h-3.5" />}
                        ไทย (TH)
                      </button>
                    </div>
                  </div>

                  {/* Theme Mode Selector */}
                  <div className="space-y-2">
                    <label className="text-xs text-[var(--text-secondary)] font-semibold flex items-center gap-1.5">
                      {theme === "light" ? (
                        <Sun className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                      ) : (
                        <Moon className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                      )}
                      {t.settings.theme}
                    </label>
                    <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)]">
                      <button
                        onClick={() => setTheme("light")}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                          theme === "light"
                            ? "bg-[var(--text-primary)] text-[var(--bg-surface)] shadow-xs"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <Sun className="w-3.5 h-3.5" />
                        Light ☀️
                      </button>
                      <button
                        onClick={() => setTheme("dark")}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                          theme === "dark"
                            ? "bg-[var(--text-primary)] text-[var(--bg-surface)] shadow-xs"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <Moon className="w-3.5 h-3.5" />
                        Dark 🌙
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="paper-button-secondary text-xs xl:text-sm py-2.5 px-3.5 xl:px-5 font-medium whitespace-nowrap shrink-0"
            >
              <FileText className="w-4 h-4 text-[var(--accent-color)] shrink-0" />
              <span className="whitespace-nowrap">{t.nav.resumePdf}</span>
            </a>
            <a
              href="#contact"
              className="paper-button-primary text-xs xl:text-sm py-2.5 px-4 xl:px-6 font-medium whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">{t.nav.letsTalk}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 sm:p-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-subsurface)] transition-colors shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[var(--bg-surface)] border-b border-[var(--border-color)] px-6 sm:px-8 py-6 sm:py-8 mt-2 shadow-xl space-y-6"
          >
            {/* Mobile Settings Section */}
            <div className="p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[var(--accent-color)] font-bold flex items-center gap-1.5">
                  <Settings className="w-4 h-4" />
                  {t.settings.title}
                </span>
                <span className="text-xs font-mono text-[var(--text-secondary)]">
                  {lang.toUpperCase()} • {theme.toUpperCase()}
                </span>
              </div>

              {/* Language Options */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 ${
                    lang === "en"
                      ? "bg-[var(--text-primary)] text-[var(--bg-surface)]"
                      : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                  }`}
                >
                  English (EN)
                </button>
                <button
                  onClick={() => setLanguage("th")}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 ${
                    lang === "th"
                      ? "bg-[var(--text-primary)] text-[var(--bg-surface)]"
                      : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                  }`}
                >
                  ไทย (TH)
                </button>
              </div>

              {/* Theme Options */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTheme("light")}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 ${
                    theme === "light"
                      ? "bg-[var(--text-primary)] text-[var(--bg-surface)]"
                      : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" /> Light ☀️
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 ${
                    theme === "dark"
                      ? "bg-[var(--text-primary)] text-[var(--bg-surface)]"
                      : "bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" /> Dark 🌙
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-medium text-[var(--text-primary)] py-2 border-b border-[var(--border-color)]/50 hover:text-[var(--accent-color)] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}

              <div className="flex flex-col gap-3 pt-3">
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="paper-button-secondary text-center justify-center py-3 text-sm whitespace-nowrap"
                >
                  <FileText className="w-4 h-4 text-[var(--accent-color)] shrink-0" />
                  <span className="whitespace-nowrap">{t.nav.resumePdf}</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="paper-button-primary text-center justify-center py-3.5 text-base whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">{t.nav.letsTalk}</span>
                  <ArrowUpRight className="w-5 h-5 shrink-0" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
