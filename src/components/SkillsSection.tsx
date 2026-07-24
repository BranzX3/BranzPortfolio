"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Layout, Server, Bot, Cloud } from "lucide-react";

const getCategoryIcon = (idx: number) => {
  if (idx === 0) return <Layout className="w-6 h-6 text-[var(--accent-color)]" />;
  if (idx === 1) return <Server className="w-6 h-6 text-[var(--accent-color)]" />;
  if (idx === 2) return <Bot className="w-6 h-6 text-[var(--accent-color)]" />;
  return <Cloud className="w-6 h-6 text-[var(--accent-color)]" />;
};

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-10 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[var(--accent-color)] font-bold">
              {t.skills.sectionTag}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mt-2 font-bold break-words">
              {t.skills.sectionTitle}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-md font-light">
            {t.skills.sectionSubtitle}
          </p>
        </div>

        {/* Editorial Minimal Horizontal Rows */}
        <div className="space-y-6 sm:space-y-8">
          {t.skills.categories.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="paper-card p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Left: Category Title & Icon (4 Cols) */}
                <div className="lg:col-span-4 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-[var(--border-color)] pb-5 lg:pb-0 lg:pr-8">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-[var(--bg-subsurface)] border border-[var(--border-color)] shrink-0">
                    {getCategoryIcon(index)}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-4xl text-[var(--text-primary)] font-bold leading-snug break-words">
                      {categoryGroup.category}
                    </h3>
                    <span className="text-xs font-mono text-[var(--text-secondary)]">
                      {categoryGroup.items.length} {t.skills.coreModulesSuffix}
                    </span>
                  </div>
                </div>

                {/* Right: Editorial Minimal Skill Cards without Percentages (8 Cols) */}
                <div className="lg:col-span-8 flex flex-wrap gap-3 sm:gap-4 items-center">
                  {categoryGroup.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex flex-col p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors w-full sm:w-auto"
                    >
                      <span className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                        {item.name}
                      </span>
                      {item.note && (
                        <span className="text-xs text-[var(--text-secondary)] italic font-light mt-1">
                          {item.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
