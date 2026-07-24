"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { X, ExternalLink, CheckCircle2, Award, Layers, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();

  // Escape key handler & Body scroll locking
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1F1A15]/60 dark:bg-[#000000]/70 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-4xl bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col text-[var(--text-primary)]"
        >
          {/* Header Bar */}
          <div className="p-6 sm:p-10 border-b border-[var(--border-color)] flex items-start justify-between bg-[var(--bg-main)]/90 sticky top-0 backdrop-blur-md z-10">
            <div>
              <span className="paper-tag mb-3 text-xs sm:text-sm">
                {project.category}
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl text-[var(--text-primary)] font-bold leading-tight">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-subsurface)] transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="p-6 sm:p-10 space-y-8 sm:space-y-9 overflow-y-auto">
            {/* Full-width Screenshot Preview */}
            {project.image && (
              <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-subsurface)] shadow-xs">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            {/* Project Overview */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[var(--accent-color)] font-bold mb-3">
                {t.projects.modalOverviewTitle}
              </h4>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                {project.detailedOverview}
              </p>
            </div>

            {/* System Architecture */}
            {project.architecture && project.architecture.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[var(--accent-color)] font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[var(--accent-color)]" />
                  {t.projects.architectureTitle}
                </h4>
                <div className="bg-[var(--bg-main)]/70 border border-[var(--border-color)] rounded-2xl p-5 sm:p-6 space-y-3.5">
                  {project.architecture.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <CheckCircle2 className="w-5 h-5 text-[var(--accent-color)] shrink-0 mt-0.5" />
                      <span className="text-base sm:text-lg text-[var(--text-primary)] font-light leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Impact & Results */}
            {project.keyResults && project.keyResults.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[var(--accent-color)] font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[var(--accent-color)]" />
                  {t.projects.modalResultsTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyResults.map((result, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[var(--bg-subsurface)] border border-[var(--border-color)] text-base text-[var(--text-primary)] font-medium"
                    >
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold mb-4">
                {t.projects.modalTechTitle}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer / Action Buttons */}
          <div className="p-6 sm:p-8 border-t border-[var(--border-color)] bg-[var(--bg-main)]/90 flex flex-wrap items-center justify-start gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-button-primary text-sm py-3 px-6"
              >
                {t.projects.liveSiteBtn}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.pdfDocument && (
              <a
                href={project.pdfDocument}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-button-secondary text-sm py-3 px-6"
              >
                {t.projects.projectPdfBtn}
                <FileText className="w-4 h-4 text-[var(--accent-color)]" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-button-secondary text-sm py-3 px-6"
              >
                {t.projects.githubBtn}
                <FaGithub className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
