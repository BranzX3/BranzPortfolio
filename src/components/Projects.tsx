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
            <div className="section-label">03 / Featured Work</div>
            <h2 className="section-title">Selected Projects & Systems</h2>
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
                    padding: "0.45rem 1.1rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.88rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#ffffff" : "var(--text-secondary)",
                    background: isActive ? "var(--accent-primary)" : "rgba(255, 255, 255, 0.04)",
                    border: isActive ? "1px solid var(--accent-primary)" : "1px solid var(--color-border)",
                    boxShadow: isActive ? "0 4px 15px rgba(99, 102, 241, 0.3)" : "none",
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
              className="glass-card"
              onClick={() => setActiveProject(project)}
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top Bar: Category & Arrow */}
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "var(--radius-full)",
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}40`,
                      color: project.color,
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
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-secondary)",
                      transition: "transform 200ms ease",
                    }}
                  >
                    ↗
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                {/* Short Description */}
                <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  {project.description}
                </p>
              </div>

              {/* Bottom Tech Badges */}
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.25rem" }}>
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.2rem 0.6rem",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid var(--color-border)",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-muted)",
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
                        color: "var(--accent-primary)",
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
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--accent-primary)",
                  }}
                >
                  View Details & Architecture ➔
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Project Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
