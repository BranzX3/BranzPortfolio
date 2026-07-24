"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, ExternalLink, CheckCircle2, Layers, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [t.projects.allTab, "AI & Multi-Agent", "Web Application", "System Integration"] as const;

  const currentProjects = t.projects.items;

  const filteredProjects =
    activeCategory === t.projects.allTab || activeCategory === "All"
      ? currentProjects
      : currentProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-10 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[var(--accent-color)] font-bold">
              {t.projects.sectionTag}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mt-2 font-bold break-words">
              {t.projects.sectionTitle}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-md font-light">
            {t.projects.sectionSubtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-nowrap sm:flex-wrap items-center gap-2.5 sm:gap-3 mb-10 sm:mb-14 border-b border-[var(--border-color)] pb-4 sm:pb-6 overflow-x-auto no-scrollbar">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all shrink-0 ${
                  isActive
                    ? "bg-[var(--text-primary)] text-[var(--bg-surface)] shadow-xs font-bold"
                    : "bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Full-Width Magazine Article Rows */}
        <div className="space-y-8 sm:space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item) => {
              const staticMeta = projects.find((p) => p.id === item.id);
              const image = staticMeta?.image || "";
              const github = staticMeta?.github;
              const demo = staticMeta?.demo;
              const pdfDocument = staticMeta?.pdfDocument;

              const fullProjectObj: Project = {
                ...item,
                image,
                github,
                demo,
                pdfDocument,
                featured: true,
                color: "#9E5A20",
              };

              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="paper-card p-6 sm:p-10 group cursor-pointer"
                  onClick={() => setSelectedProject(fullProjectObj)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Side: Image Thumbnail & Overview (7 Cols) */}
                    <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                      {/* Project Screenshot Frame */}
                      {image && (
                        <div className="relative w-full aspect-16/9 rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-subsurface)] group-hover:border-[var(--accent-color)] transition-colors shadow-xs">
                          <img
                            src={image}
                            alt={item.title}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                          <span className="paper-tag text-xs sm:text-sm">
                            {item.category}
                          </span>
                          <span className="text-xs font-mono text-[var(--text-secondary)]">
                            {t.projects.articlePrefix}{String(item.id).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="font-serif text-3xl sm:text-5xl text-[var(--text-primary)] font-bold leading-tight group-hover:text-[var(--accent-color)] transition-colors break-words">
                          {item.title}
                        </h3>

                        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>

                      {/* Action Links */}
                      <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(fullProjectObj);
                          }}
                          className="paper-button-primary text-sm py-3 px-6 justify-center"
                        >
                          {t.projects.deepDiveBtn}
                          <ArrowUpRight className="w-4 h-4" />
                        </button>

                        {demo && (
                          <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="paper-button-secondary text-sm py-3 px-5 justify-center"
                          >
                            {t.projects.liveSiteBtn}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}

                        {pdfDocument && (
                          <a
                            href={pdfDocument}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="paper-button-secondary text-sm py-3 px-5 justify-center"
                          >
                            {t.projects.projectPdfBtn}
                            <FileText className="w-4 h-4 text-[var(--accent-color)]" />
                          </a>
                        )}

                        {github && (
                          <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="paper-button-secondary text-sm py-3 px-5 justify-center"
                          >
                            {t.projects.githubBtn}
                            <FaGithub className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Side: Architecture Highlights & Tags (5 Cols) */}
                    <div className="lg:col-span-5 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl sm:rounded-2xl p-5 sm:p-7 space-y-5">
                      <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[var(--accent-color)] font-bold">
                        <Layers className="w-5 h-5 text-[var(--accent-color)]" />
                        {t.projects.architectureTitle}
                      </div>

                      <ul className="space-y-3 sm:space-y-3.5 text-sm sm:text-base text-[var(--text-primary)] font-light">
                        {item.architecture.map((arch, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)] shrink-0 mt-1" />
                            <span className="leading-relaxed">{arch}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[var(--bg-surface)] text-xs sm:text-sm text-[var(--text-primary)] border border-[var(--border-color)] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
