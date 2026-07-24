"use client";

import React from "react";
import { motion } from "framer-motion";
import { education, certifications } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink, CheckCircle2, FileText } from "lucide-react";

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-10 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[var(--accent-color)] font-bold">
              {t.experience.sectionTag}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mt-2 font-bold break-words">
              {t.experience.sectionTitle}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-md font-light">
            {t.experience.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Work Experience Timeline (8 Cols) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <h3 className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-[var(--accent-color)]" />
              {t.experience.workTitle}
            </h3>

            <div className="relative border-l-2 border-[var(--border-color)] ml-3 sm:ml-4 pl-5 sm:pl-10 space-y-10 sm:space-y-12">
              {t.experience.items.map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  {/* Timeline Bullet Node */}
                  <span className="absolute -left-[27px] sm:-left-[47px] top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--accent-color)] border-4 border-[var(--bg-main)] group-hover:scale-125 transition-transform" />

                  {/* Card Container */}
                  <div className="paper-card p-6 sm:p-9">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <h4 className="font-serif text-2xl sm:text-4xl text-[var(--text-primary)] font-bold leading-tight break-words">
                          {exp.title}
                        </h4>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-[var(--accent-color)] hover:underline inline-flex items-center gap-1.5 mt-1"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[var(--text-secondary)] bg-[var(--bg-main)] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[var(--border-color)] font-medium w-fit">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--accent-color)]" />
                          {exp.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--accent-color)]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description List */}
                    <ul className="space-y-3 my-5 sm:my-6 text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] mt-2.5 shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-4 sm:pt-5 border-t border-[var(--border-color)]">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 sm:px-3.5 py-1 rounded-full bg-[var(--bg-subsurface)] text-xs sm:text-sm text-[var(--text-primary)] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Official Documents (4 Cols) */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10">
            {/* Education & Academic Documents Box */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-[var(--accent-color)]" />
                {t.experience.educationTitle}
              </h3>

              {t.experience.education.map((item) => {
                const staticEdu = education.find((e) => e.id === item.id);
                const transcriptUrl = staticEdu?.transcriptUrl;
                const graduationCertUrl = staticEdu?.graduationCertUrl;

                return (
                  <div key={item.id} className="paper-card p-6 sm:p-8 mb-6 space-y-4">
                    <span className="text-xs text-[var(--accent-color)] font-mono font-bold block">
                      {item.period}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] font-bold leading-snug break-words">
                      {item.degree}
                    </h4>
                    <p className="text-sm font-semibold text-[var(--text-secondary)]">
                      {item.institution}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                      {item.location}
                    </p>
                    {item.gpa && (
                      <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-sm">
                        <span className="text-[var(--text-secondary)]">{t.experience.gpaLabel}</span>
                        <span className="font-semibold text-[var(--text-primary)] bg-[var(--bg-subsurface)] px-3 py-1 rounded-lg border border-[var(--border-color)]">
                          {item.gpa}
                        </span>
                      </div>
                    )}

                    {/* PDF Document Buttons */}
                    <div className="pt-4 border-t border-[var(--border-color)] space-y-2.5">
                      <span className="text-xs uppercase tracking-wider text-[var(--text-secondary)] font-bold block">
                        {t.experience.officialPdfsTitle}
                      </span>
                      {transcriptUrl && (
                        <a
                          href={transcriptUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full paper-button-secondary text-xs py-2.5 px-4 justify-between"
                        >
                          <span className="flex items-center gap-2 min-w-0 truncate">
                            <FileText className="w-4 h-4 text-[var(--accent-color)] shrink-0" />
                            <span className="truncate">{t.experience.transcriptBtn}</span>
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-[var(--text-secondary)] shrink-0" />
                        </a>
                      )}
                      {graduationCertUrl && (
                        <a
                          href={graduationCertUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full paper-button-secondary text-xs py-2.5 px-4 justify-between"
                        >
                          <span className="flex items-center gap-2 min-w-0 truncate">
                            <FileText className="w-4 h-4 text-[var(--accent-color)] shrink-0" />
                            <span className="truncate">{t.experience.graduationCertBtn}</span>
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-[var(--text-secondary)] shrink-0" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Certifications Box with Badge Image */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-[var(--accent-color)]" />
                {t.experience.certificationsTitle}
              </h3>

              {t.experience.certifications.map((item) => {
                const staticCert = certifications.find((c) => c.id === item.id);
                const image = staticCert?.image;

                return (
                  <div key={item.id} className="paper-card p-6 sm:p-8 space-y-4">
                    {image && (
                      <div className="relative w-full aspect-16/9 rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)]">
                        <img
                          src={image}
                          alt={item.name}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-[var(--bg-subsurface)] text-[var(--accent-color)] shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg text-[var(--text-primary)] leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-xs text-[var(--text-secondary)] mt-1">
                          {item.issuer} • {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
