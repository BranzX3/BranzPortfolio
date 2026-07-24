"use client";

import { useState } from "react";
import { projects, Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "AI & Multi-Agent", "Web Application", "System Integration"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <div className="section-label">03 / Selected Work</div>
            <h2 className="section-title">Featured Projects & Systems</h2>
            <p className="section-description">
              Production-ready applications, AI agent systems, and microservices engineered for performance.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "0.45rem 1.15rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.88rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                    background: isActive ? "var(--accent-terracotta)" : "var(--surface-cream)",
                    border: isActive ? "1px solid var(--accent-terracotta)" : "1px solid var(--color-border)",
                    boxShadow: isActive ? "0 4px 14px rgba(165, 106, 42, 0.25)" : "var(--shadow-warm-sm)",
                    transition: "all 200ms ease",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="paper-card"
              onClick={() => setActiveProject(project)}
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              {/* Card Header */}
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "var(--radius-full)",
                      background: "var(--accent-terracotta-light)",
                      border: "1px solid var(--accent-terracotta)",
                      color: "var(--accent-terracotta)",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                    }}
                  >
                    {project.category}
                  </span>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "var(--bg-paper)",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-secondary)",
                    }}
                  >
                    ↗
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "1.45rem", fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--text-ink)", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                  {project.description}
                </p>
              </div>

              {/* Card Footer Tech Badges */}
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.25rem" }}>
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.2rem 0.6rem",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--bg-paper)",
                        border: "1px solid var(--color-border)",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span
                      style={{
                        padding: "0.2rem 0.5rem",
                        borderRadius: "var(--radius-sm)",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-terracotta)",
                      }}
                    >
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "var(--accent-terracotta)",
                  }}
                >
                  View Details & Architecture ➔
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Drawer Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
