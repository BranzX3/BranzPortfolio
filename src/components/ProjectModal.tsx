"use client";

import { useEffect } from "react";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        background: "rgba(3, 5, 10, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        animation: "fadeIn 200ms ease",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "780px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "var(--bg-subtle)",
          border: "1px solid var(--color-border-bright)",
          borderRadius: "var(--radius-xl)",
          padding: "2.25rem",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid var(--color-border)",
            color: "var(--text-secondary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            cursor: "pointer",
            transition: "all 200ms ease",
          }}
        >
          ✕
        </button>

        {/* Category & Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          <span
            style={{
              padding: "0.3rem 0.8rem",
              borderRadius: "var(--radius-full)",
              background: `${project.color}20`,
              border: `1px solid ${project.color}50`,
              color: project.color,
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              fontWeight: 600,
            }}
          >
            {project.category}
          </span>
          {project.featured && (
            <span style={{ fontSize: "0.78rem", color: "var(--accent-emerald)", fontFamily: "var(--font-mono)" }}>
              ★ Featured System
            </span>
          )}
        </div>

        {/* Title */}
        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.2rem)", fontWeight: 800, color: "var(--text-main)", marginBottom: "1.25rem" }}>
          {project.title}
        </h2>

        {/* Detailed Overview */}
        <div style={{ marginBottom: "1.75rem" }}>
          <h3 style={{ fontSize: "0.9rem", fontFamily: "var(--font-mono)", color: "var(--accent-primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
            Overview
          </h3>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            {project.detailedOverview}
          </p>
        </div>

        {/* Architecture Highlights */}
        {project.architecture && project.architecture.length > 0 && (
          <div style={{ marginBottom: "1.75rem" }}>
            <h3 style={{ fontSize: "0.9rem", fontFamily: "var(--font-mono)", color: "var(--accent-cyan)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              Architecture & Technical Breakdown
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", paddingLeft: "1.25rem", color: "var(--text-secondary)" }}>
              {project.architecture.map((item, i) => (
                <li key={i} style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Results */}
        {project.keyResults && project.keyResults.length > 0 && (
          <div style={{ marginBottom: "1.75rem" }}>
            <h3 style={{ fontSize: "0.9rem", fontFamily: "var(--font-mono)", color: "var(--accent-emerald)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              Key Impact & Deliverables
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {project.keyResults.map((result, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.95rem", color: "var(--text-main)" }}>
                  <span style={{ color: "var(--accent-emerald)" }}>✓</span>
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6rem" }}>
            Technologies Used
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "0.3rem 0.75rem",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid var(--color-border)",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-secondary)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--color-border)" }}>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Launch Live Demo ↗
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View Repository 🐙
            </a>
          )}
          <button onClick={onClose} className="btn-secondary" style={{ marginLeft: "auto" }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
