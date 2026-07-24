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
        background: "rgba(43, 36, 30, 0.5)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "var(--surface-cream)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-xl)",
          padding: "2.25rem",
          boxShadow: "var(--shadow-warm-lg)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
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
            background: "var(--bg-paper)",
            border: "1px solid var(--color-border)",
            color: "var(--text-secondary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
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
              background: "var(--accent-terracotta-light)",
              border: "1px solid var(--accent-terracotta)",
              color: "var(--accent-terracotta)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              fontWeight: 600,
            }}
          >
            {project.category}
          </span>
          {project.featured && (
            <span style={{ fontSize: "0.78rem", color: "var(--accent-moss)", fontFamily: "var(--font-mono)", fontWeight: 500 }}>
              ★ Featured System
            </span>
          )}
        </div>

        {/* Title */}
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.3rem)", fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--text-ink)", marginBottom: "1.25rem" }}>
          {project.title}
        </h2>

        {/* Detailed Overview */}
        <div style={{ marginBottom: "1.75rem" }}>
          <h3 style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--accent-terracotta)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
            Overview
          </h3>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
            {project.detailedOverview}
          </p>
        </div>

        {/* Architecture Highlights */}
        {project.architecture && project.architecture.length > 0 && (
          <div style={{ marginBottom: "1.75rem" }}>
            <h3 style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--accent-moss)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              Architecture & System Design
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem", paddingLeft: "1.25rem", color: "var(--text-secondary)" }}>
              {project.architecture.map((item, i) => (
                <li key={i} style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Results */}
        {project.keyResults && project.keyResults.length > 0 && (
          <div style={{ marginBottom: "1.75rem" }}>
            <h3 style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--text-ink)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
              Key Impact & Deliverables
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {project.keyResults.map((result, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.95rem", color: "var(--text-ink)" }}>
                  <span style={{ color: "var(--accent-terracotta)", fontWeight: 700 }}>✓</span>
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
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bg-paper)",
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

        {/* Action Buttons */}
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
