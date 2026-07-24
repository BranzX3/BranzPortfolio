"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Coffee, GraduationCap, Cpu, Rocket, Sparkles } from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-10 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[var(--accent-color)] font-bold">
              {t.about.sectionTag}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mt-2 font-bold break-words">
              {t.about.sectionTitle}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-md font-light">
            {t.about.sectionSubtitle}
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Bio Story Narrative (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-7 text-[var(--text-primary)] text-base sm:text-xl leading-relaxed font-light"
          >
            <div className="p-6 sm:p-9 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs">
              <h3 className="font-serif text-2xl sm:text-4xl text-[var(--text-primary)] font-medium leading-snug">
                &ldquo;{t.about.headline}&rdquo;
              </h3>
            </div>

            {t.about.bio.map((paragraph, index) => (
              <p key={index} className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Core Engineering Values */}
            <div className="pt-6 sm:pt-8 border-t border-[var(--border-color)] space-y-6">
              <h4 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] font-bold">
                {t.about.valuesTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {t.about.values.map((val, idx) => (
                  <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                    <h5 className="font-semibold text-base sm:text-lg text-[var(--text-primary)] mb-2">
                      {val.title}
                    </h5>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Facts & Highlights (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="paper-card p-4 sm:p-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-subsurface)] text-[var(--accent-color)] flex items-center justify-center mb-3 sm:mb-4">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-wider block font-medium">{t.about.facts[0].label}</span>
                <span className="font-semibold text-sm sm:text-lg text-[var(--text-primary)] block mt-1">
                  {t.about.facts[0].value}
                </span>
              </div>

              <div className="paper-card p-4 sm:p-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-subsurface)] text-[var(--accent-color)] flex items-center justify-center mb-3 sm:mb-4">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-wider block font-medium">{t.about.facts[1].label}</span>
                <span className="font-semibold text-sm sm:text-lg text-[var(--text-primary)] block mt-1">
                  {t.about.facts[1].value}
                </span>
              </div>

              <div className="paper-card p-4 sm:p-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-subsurface)] text-[var(--accent-color)] flex items-center justify-center mb-3 sm:mb-4">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-wider block font-medium">{t.about.facts[2].label}</span>
                <span className="font-semibold text-sm sm:text-lg text-[var(--text-primary)] block mt-1">
                  {t.about.facts[2].value}
                </span>
              </div>

              <div className="paper-card p-4 sm:p-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-subsurface)] text-[var(--accent-color)] flex items-center justify-center mb-3 sm:mb-4">
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-wider block font-medium">{t.about.facts[3].label}</span>
                <span className="font-semibold text-sm sm:text-lg text-[var(--text-primary)] block mt-1">
                  {t.about.facts[3].value}
                </span>
              </div>
            </div>

            {/* Featured Quote / Motto Box */}
            <div className="paper-card p-6 sm:p-8 relative overflow-hidden">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--accent-color)] mb-3 sm:mb-4" />
              <p className="text-xl sm:text-2xl text-[var(--text-primary)] font-serif italic leading-relaxed mb-3 sm:mb-4">
                &ldquo;{t.about.motto}&rdquo;
              </p>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[var(--text-secondary)] font-semibold block">
                {t.about.mottoAuthor}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
