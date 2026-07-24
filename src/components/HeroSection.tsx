"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Code2, Bot, Layers, MapPin, Sparkles, FileText } from "lucide-react";

const getPillarIcon = (idx: number) => {
  if (idx === 0) return <Bot className="w-5 h-5" />;
  if (idx === 1) return <Code2 className="w-5 h-5" />;
  return <Layers className="w-5 h-5" />;
};

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Asymmetric Newspaper Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Headline & Action (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs sm:text-sm font-medium text-[var(--text-primary)] shadow-xs max-w-full"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent-color)]"></span>
              </span>
              <span className="font-medium truncate">{t.hero.availabilityBadge}</span>
              <span className="hidden sm:inline text-[var(--border-color)]">|</span>
              <span className="text-[var(--text-secondary)] flex items-center gap-1.5 font-normal">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-color)] shrink-0" />
                {siteConfig.location}
              </span>
            </motion.div>

            {/* Cormorant Garamond Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1] text-[var(--text-primary)] font-bold break-words"
            >
              {t.hero.headlinePrefix}
              <span className="italic font-serif text-[var(--accent-color)] block sm:inline font-bold">
                {t.hero.headlineEmphasis}
              </span>
              {t.hero.headlineSuffix}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed font-light"
            >
              {t.hero.introParagraph}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 sm:pt-3"
            >
              <a href="#projects" className="paper-button-primary text-base py-3.5 sm:py-4 px-6 sm:px-8 justify-center">
                {t.hero.exploreWork}
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-button-secondary text-base py-3.5 sm:py-4 px-6 sm:px-8 justify-center"
              >
                <FileText className="w-5 h-5 text-[var(--accent-color)]" />
                {t.hero.downloadResume}
              </a>
            </motion.div>
          </div>

          {/* Right Column: Vertical Status & Quick Bio Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 space-y-6 pt-2 lg:pt-2"
          >
            {/* Quick Profile Summary Card */}
            <div className="paper-card p-6 sm:p-9 space-y-6 sm:space-y-7">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4 sm:pb-5">
                <span className="text-xs uppercase tracking-widest text-[var(--accent-color)] font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {t.hero.cardTag}
                </span>
                <span className="text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-subsurface)] px-3 py-1 rounded-full border border-[var(--border-color)]">
                  {t.hero.cardEdition}
                </span>
              </div>

              <p className="text-lg sm:text-2xl text-[var(--text-primary)] font-serif italic leading-relaxed">
                &ldquo;{t.about.headline}&rdquo;
              </p>

              {/* Speciality Pillars */}
              <div className="space-y-3.5 sm:space-y-4 pt-1">
                {t.hero.pillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[var(--bg-subsurface)] text-[var(--accent-color)] shrink-0">
                      {getPillarIcon(idx)}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
