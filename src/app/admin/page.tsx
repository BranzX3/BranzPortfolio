"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./admin.module.css";
import * as initialPortfolio from "@/data/portfolio";

type TabId = "general" | "about" | "skills" | "projects" | "experience" | "education" | "certifications";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabId>("general");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);
  
  // State for all editable data
  const [siteConfig, setSiteConfig] = useState(initialPortfolio.siteConfig);
  const [socialLinks, setSocialLinks] = useState(initialPortfolio.socialLinks);
  const [aboutMe, setAboutMe] = useState(initialPortfolio.aboutMe);
  const [skills, setSkills] = useState(initialPortfolio.skills);
  const [projects, setProjects] = useState(initialPortfolio.projects);
  const [experience, setExperience] = useState(initialPortfolio.experience);
  const [education, setEducation] = useState(initialPortfolio.education);
  const [certifications, setCertifications] = useState(initialPortfolio.certifications);

  // Modal state for exported code code preview
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportedCode, setExportedCode] = useState("");

  // Auto-dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Load from API on mount to get the absolute latest changes
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/portfolio");
        if (res.ok) {
          const data = await res.json();
          setSiteConfig(data.siteConfig);
          setSocialLinks(data.socialLinks);
          setAboutMe(data.aboutMe);
          setSkills(data.skills);
          setProjects(data.projects);
          setExperience(data.experience);
          setEducation(data.education);
          setCertifications(data.certifications);
        }
      } catch (err) {
        console.error("Failed to fetch fresh portfolio data:", err);
      }
    }
    loadData();
  }, []);

  const triggerToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ message, type });
  };

  // Compile JSON data to final TS file content
  const generateTSCode = () => {
    return `// ============================================================
//  🎯 PORTFOLIO DATA — แก้ไขข้อมูลของคุณที่นี่ (อัปเดตผ่านระบบ Admin)
// ============================================================

export const siteConfig = ${JSON.stringify(siteConfig, null, 2)};

export const socialLinks: {
  github?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
} = ${JSON.stringify(socialLinks, null, 2)};

export const aboutMe = ${JSON.stringify(aboutMe, null, 2)};

export const skills = ${JSON.stringify(skills, null, 2)};

export const projects = ${JSON.stringify(projects, null, 2)};

export const experience = ${JSON.stringify(experience, null, 2)};

export const education = ${JSON.stringify(education, null, 2)};

export const certifications = ${JSON.stringify(certifications, null, 2)};
`;
  };

  // Save changes via API
  const handleSave = async () => {
    setLoading(true);
    try {
      const payload = {
        siteConfig,
        socialLinks,
        aboutMe,
        skills,
        projects,
        experience,
        education,
        certifications,
      };

      const res = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to save portfolio data");
      }

      triggerToast("บันทึกข้อมูลเรียบร้อยแล้ว! 🎉", "success");
    } catch (error: any) {
      console.error(error);
      triggerToast(error.message || "เกิดข้อผิดพลาดในการบันทึกข้อมูล", "error");
    } finally {
      setLoading(false);
    }
  };

  // Export / Download portfolio.ts file
  const handleDownload = () => {
    const code = generateTSCode();
    const blob = new Blob([code], { type: "text/typescript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "portfolio.ts";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    triggerToast("ดาวน์โหลดไฟล์ portfolio.ts แล้ว", "success");
  };

  // Reordering helpers
  const moveItem = <T,>(list: T[], index: number, direction: "up" | "down", setter: (updatedList: T[]) => void) => {
    if (direction === "up" && index === 0) return;
    if (direction === "down" && index === list.length - 1) return;

    const targetIndex = direction === "up" ? index - 1 : index + 1;
    const newList = [...list];
    const temp = newList[index];
    newList[index] = newList[targetIndex];
    newList[targetIndex] = temp;
    setter(newList);
  };

  // Helper to update specific key of nested items
  const updateItemInList = <T,>(
    list: T[], 
    index: number, 
    key: keyof T, 
    value: any, 
    setter: (updatedList: T[]) => void
  ) => {
    const newList = [...list];
    newList[index] = { ...newList[index], [key]: value };
    setter(newList);
  };

  // Sidebar item array
  const TABS: { id: TabId; label: string; icon: string }[] = [
    { id: "general", label: "General & Socials", icon: "⚙️" },
    { id: "about", label: "About Me", icon: "👤" },
    { id: "skills", label: "Skills", icon: "🎨" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "certifications", label: "Certifications", icon: "📜" },
  ];

  return (
    <div className={styles.adminContainer}>
      {/* Toast Notification */}
      {toast && (
        <div className={`${styles.toast} ${
          toast.type === "success" ? styles.toastSuccess : toast.type === "error" ? styles.toastError : styles.toastInfo
        }`}>
          {toast.message}
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarTitle}>Admin Panel</div>
          <div className={styles.sidebarSubtitle}>Branz Portfolio</div>
        </div>

        <nav className={styles.navMenu}>
          {TABS.map((tab) => (
            <div key={tab.id} className={styles.navItem}>
              <button
                className={`${styles.navButton} ${activeTab === tab.id ? styles.navButtonActive : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            </div>
          ))}
          
          <Link href="/" className={styles.backLink}>
            <span>←</span> Back to Site
          </Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <button className="btn btn-secondary" onClick={() => {
            setExportedCode(generateTSCode());
            setShowExportModal(true);
          }}>
            Code Preview
          </button>
          <button className="btn btn-primary" onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className={styles.mainContent}>
        {loading && (
          <div className={styles.loadingOverlay}>
            <div className={styles.spinner}></div>
          </div>
        )}

        <div className={styles.contentHeader}>
          <div className={styles.headerInfo}>
            <h1>{TABS.find(t => t.id === activeTab)?.label}</h1>
            <p>Manage and customize your portfolio details here.</p>
          </div>
          <div className={styles.actionRow}>
            <button className="btn btn-secondary" onClick={handleDownload}>
              📥 Export portfolio.ts
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>

        {/* ============================================================
            1. GENERAL SETUP & SOCIALS
           ============================================================ */}
        {activeTab === "general" && (
          <div className="animate-fade-in-up">
            <div className={styles.card}>
              <div className={styles.cardTitle}>⚙️ Site Configuration</div>
              
              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Name</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={siteConfig.name}
                    onChange={(e) => setSiteConfig({ ...siteConfig, name: e.target.value })}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.label}>Tagline</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={siteConfig.tagline}
                    onChange={(e) => setSiteConfig({ ...siteConfig, tagline: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Description</label>
                <textarea
                  className={styles.textarea}
                  value={siteConfig.description}
                  onChange={(e) => setSiteConfig({ ...siteConfig, description: e.target.value })}
                />
              </div>

              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Contact Email</label>
                  <input
                    type="email"
                    className={styles.input}
                    value={siteConfig.email}
                    onChange={(e) => setSiteConfig({ ...siteConfig, email: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Location</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={siteConfig.location}
                    onChange={(e) => setSiteConfig({ ...siteConfig, location: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Resume URL (or path)</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={siteConfig.resumeUrl}
                    onChange={(e) => setSiteConfig({ ...siteConfig, resumeUrl: e.target.value })}
                  />
                </div>

                <div className={styles.formGroupInline}>
                  <div className={styles.switchLabel}>
                    <span className={styles.label}>Available For Work</span>
                    <span className={styles.switchSub}>Displays availability badge on hero banner</span>
                  </div>
                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={siteConfig.availableForWork}
                      onChange={(e) => setSiteConfig({ ...siteConfig, availableForWork: e.target.checked })}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>🌐 Social Profile Links</div>
              
              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>GitHub</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={socialLinks.github || ""}
                    onChange={(e) => setSocialLinks({ ...socialLinks, github: e.target.value })}
                    placeholder="https://github.com/yourusername"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>LinkedIn</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={socialLinks.linkedin || ""}
                    onChange={(e) => setSocialLinks({ ...socialLinks, linkedin: e.target.value })}
                    placeholder="linkedin.com/in/yourusername"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Twitter / X</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={socialLinks.twitter || ""}
                    onChange={(e) => setSocialLinks({ ...socialLinks, twitter: e.target.value })}
                    placeholder="https://x.com/yourusername"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>YouTube</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={socialLinks.youtube || ""}
                    onChange={(e) => setSocialLinks({ ...socialLinks, youtube: e.target.value })}
                    placeholder="https://youtube.com/@yourchannel"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            2. ABOUT ME
           ============================================================ */}
        {activeTab === "about" && (
          <div className="animate-fade-in-up">
            <div className={styles.card}>
              <div className={styles.cardTitle}>👤 Bio Paragraphs</div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Biography (One paragraph per line)</label>
                <textarea
                  className={styles.textarea}
                  style={{ minHeight: "180px" }}
                  value={aboutMe.bio.join("\n")}
                  onChange={(e) => setAboutMe({ ...aboutMe, bio: e.target.value.split("\n") })}
                  placeholder="Introduce yourself here..."
                />
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>☕ Fun Facts & Stats</div>
              
              <div className={styles.itemsList}>
                {aboutMe.facts.map((fact, index) => (
                  <div key={index} className={styles.listItem}>
                    <div className={styles.listItemHeader}>
                      <span className={styles.listItemTitle}>Fact #{index + 1}</span>
                      <div className={styles.listItemControls}>
                        <button className={styles.controlBtn} onClick={() => moveItem(aboutMe.facts, index, "up", (val) => setAboutMe({ ...aboutMe, facts: val }))}>▲</button>
                        <button className={styles.controlBtn} onClick={() => moveItem(aboutMe.facts, index, "down", (val) => setAboutMe({ ...aboutMe, facts: val }))}>▼</button>
                        <button className={`${styles.controlBtn} ${styles.deleteBtn}`} onClick={() => {
                          const updated = aboutMe.facts.filter((_, i) => i !== index);
                          setAboutMe({ ...aboutMe, facts: updated });
                        }}>🗑️</button>
                      </div>
                    </div>

                    <div className={styles.grid3}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Emoji / Icon</label>
                        <input
                          type="text"
                          className={styles.input}
                          value={fact.icon}
                          onChange={(e) => {
                            const updated = [...aboutMe.facts];
                            updated[index].icon = e.target.value;
                            setAboutMe({ ...aboutMe, facts: updated });
                          }}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Label</label>
                        <input
                          type="text"
                          className={styles.input}
                          value={fact.label}
                          onChange={(e) => {
                            const updated = [...aboutMe.facts];
                            updated[index].label = e.target.value;
                            setAboutMe({ ...aboutMe, facts: updated });
                          }}
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.label}>Value</label>
                        <input
                          type="text"
                          className={styles.input}
                          value={fact.value}
                          onChange={(e) => {
                            const updated = [...aboutMe.facts];
                            updated[index].value = e.target.value;
                            setAboutMe({ ...aboutMe, facts: updated });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className={styles.addBtn}
                style={{ marginTop: "1rem" }}
                onClick={() => setAboutMe({
                  ...aboutMe,
                  facts: [...aboutMe.facts, { icon: "💡", label: "New Stat", value: "0" }]
                })}
              >
                + Add New Fact
              </button>
            </div>
          </div>
        )}

        {/* ============================================================
            3. SKILLS
           ============================================================ */}
        {activeTab === "skills" && (
          <div className="animate-fade-in-up">
            <div className={styles.itemsList}>
              {skills.map((skillGroup, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.listItemHeader} style={{ marginBottom: "1rem" }}>
                    <span className={styles.listItemTitle}>Category: {skillGroup.category || "Unnamed"}</span>
                    <div className={styles.listItemControls}>
                      <button className={styles.controlBtn} onClick={() => moveItem(skills, index, "up", setSkills)}>▲</button>
                      <button className={styles.controlBtn} onClick={() => moveItem(skills, index, "down", setSkills)}>▼</button>
                      <button className={`${styles.controlBtn} ${styles.deleteBtn}`} onClick={() => {
                        setSkills(skills.filter((_, i) => i !== index));
                      }}>🗑️ Delete Group</button>
                    </div>
                  </div>

                  <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Category Name</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={skillGroup.category}
                        onChange={(e) => updateItemInList(skills, index, "category", e.target.value, setSkills)}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Emoji Icon</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={skillGroup.icon}
                        onChange={(e) => updateItemInList(skills, index, "icon", e.target.value, setSkills)}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup} style={{ marginTop: "0.5rem" }}>
                    <label className={styles.label}>Skills List (Comma separated)</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={skillGroup.items.map((item: any) => (typeof item === "string" ? item : item.name)).join(", ")}
                      onChange={(e) => {
                        const items = e.target.value.split(",").map(s => s.trim()).filter(Boolean).map(s => ({ name: s, level: 85 }));
                        updateItemInList(skills, index, "items", items, setSkills);
                      }}
                      placeholder="React, Next.js, Node.js"
                    />
                    <div className={styles.tagChipsContainer}>
                      {skillGroup.items.map((item: any, i: number) => (
                        <span key={i} className={styles.tagChip}>
                          {typeof item === "string" ? item : item.name}
                          <button className={styles.removeChipBtn} onClick={() => {
                            const updatedItems = skillGroup.items.filter((_, j) => j !== i);
                            updateItemInList(skills, index, "items", updatedItems, setSkills);
                          }}>×</button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={styles.addBtn}
              onClick={() => setSkills([
                ...skills,
                { category: "New Category", icon: "⚡", items: [{ name: "HTML", level: 85 }, { name: "CSS", level: 85 }] }
              ])}
            >
              + Add New Skill Category
            </button>
          </div>
        )}

        {/* ============================================================
            4. PROJECTS
           ============================================================ */}
        {activeTab === "projects" && (
          <div className="animate-fade-in-up">
            <div className={styles.itemsList}>
              {projects.map((project, index) => (
                <div key={project.id || index} className={styles.card}>
                  <div className={styles.listItemHeader} style={{ marginBottom: "1rem" }}>
                    <span className={styles.listItemTitle}>{project.title || "Untitled Project"}</span>
                    <div className={styles.listItemControls}>
                      <button className={styles.controlBtn} onClick={() => moveItem(projects, index, "up", setProjects)}>▲</button>
                      <button className={styles.controlBtn} onClick={() => moveItem(projects, index, "down", setProjects)}>▼</button>
                      <button className={`${styles.controlBtn} ${styles.deleteBtn}`} onClick={() => {
                        setProjects(projects.filter((_, i) => i !== index));
                      }}>🗑️ Delete</button>
                    </div>
                  </div>

                  <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Project Title</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={project.title}
                        onChange={(e) => updateItemInList(projects, index, "title", e.target.value, setProjects)}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Preview Image Path</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={project.image}
                        onChange={(e) => updateItemInList(projects, index, "image", e.target.value, setProjects)}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Description</label>
                    <textarea
                      className={styles.textarea}
                      value={project.description}
                      onChange={(e) => updateItemInList(projects, index, "description", e.target.value, setProjects)}
                    />
                  </div>

                  <div className={styles.grid3}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Card Theme Color</label>
                      <input
                        type="color"
                        className={styles.input}
                        style={{ height: "42px", padding: "4px" }}
                        value={project.color.startsWith("#") ? project.color : "#6366f1"}
                        onChange={(e) => updateItemInList(projects, index, "color", e.target.value, setProjects)}
                      />
                    </div>

                    <div className={styles.formGroupInline} style={{ height: "100%" }}>
                      <div className={styles.switchLabel}>
                        <span className={styles.label}>Featured</span>
                        <span className={styles.switchSub}>Displays prominently at top</span>
                      </div>
                      <label className={styles.switch}>
                        <input
                          type="checkbox"
                          checked={project.featured}
                          onChange={(e) => updateItemInList(projects, index, "featured", e.target.checked, setProjects)}
                        />
                        <span className={styles.slider}></span>
                      </label>
                    </div>
                  </div>

                  <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>GitHub Link</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={project.github || ""}
                        onChange={(e) => updateItemInList(projects, index, "github", e.target.value, setProjects)}
                        placeholder="https://github.com/..."
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Demo Link</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={project.demo || ""}
                        onChange={(e) => updateItemInList(projects, index, "demo", e.target.value, setProjects)}
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Tech Tags (Comma separated)</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={project.tags.join(", ")}
                      onChange={(e) => {
                        const tags = e.target.value.split(",").map(t => t.trim()).filter(Boolean);
                        updateItemInList(projects, index, "tags", tags, setProjects);
                      }}
                      placeholder="Next.js, Docker, AI"
                    />
                    <div className={styles.tagChipsContainer}>
                      {project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className={styles.tagChip}>
                          {tag}
                          <button className={styles.removeChipBtn} onClick={() => {
                            const updatedTags = project.tags.filter((_, i) => i !== tIndex);
                            updateItemInList(projects, index, "tags", updatedTags, setProjects);
                          }}>×</button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={styles.addBtn}
              onClick={() => setProjects([
                ...projects,
                {
                  id: Date.now(),
                  title: "New Project",
                  category: "Web Application",
                  description: "Describe your project here...",
                  detailedOverview: "Detailed overview of the project...",
                  architecture: ["Microservices", "REST API"],
                  keyResults: ["High performance delivery"],
                  tags: ["React", "CSS"],
                  github: "",
                  demo: "",
                  image: "/projects/placeholder.png",
                  featured: false,
                  color: "#8b5cf6"
                }
              ])}
            >
              + Add New Project
            </button>
          </div>
        )}

        {/* ============================================================
            5. EXPERIENCE
           ============================================================ */}
        {activeTab === "experience" && (
          <div className="animate-fade-in-up">
            <div className={styles.itemsList}>
              {experience.map((exp, index) => (
                <div key={exp.id || index} className={styles.card}>
                  <div className={styles.listItemHeader} style={{ marginBottom: "1rem" }}>
                    <span className={styles.listItemTitle}>{exp.title || "Job Title"} at {exp.company || "Company"}</span>
                    <div className={styles.listItemControls}>
                      <button className={styles.controlBtn} onClick={() => moveItem(experience, index, "up", setExperience)}>▲</button>
                      <button className={styles.controlBtn} onClick={() => moveItem(experience, index, "down", setExperience)}>▼</button>
                      <button className={`${styles.controlBtn} ${styles.deleteBtn}`} onClick={() => {
                        setExperience(experience.filter((_, i) => i !== index));
                      }}>🗑️ Delete</button>
                    </div>
                  </div>

                  <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Job Title</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={exp.title}
                        onChange={(e) => updateItemInList(experience, index, "title", e.target.value, setExperience)}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Company Name</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={exp.company}
                        onChange={(e) => updateItemInList(experience, index, "company", e.target.value, setExperience)}
                      />
                    </div>
                  </div>

                  <div className={styles.grid3}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Company Link / URL</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={exp.companyUrl || ""}
                        onChange={(e) => updateItemInList(experience, index, "companyUrl", e.target.value, setExperience)}
                        placeholder="https://..."
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Period (Timeline)</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={exp.period}
                        onChange={(e) => updateItemInList(experience, index, "period", e.target.value, setExperience)}
                        placeholder="2025 - 2026"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Location</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={exp.location || ""}
                        onChange={(e) => updateItemInList(experience, index, "location", e.target.value, setExperience)}
                        placeholder="Bangkok, Thailand"
                      />
                    </div>
                  </div>

                  {/* Bullet points description */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Description Bullet Points (One per line)</label>
                    <textarea
                      className={styles.textarea}
                      style={{ minHeight: "120px" }}
                      value={exp.description.join("\n")}
                      onChange={(e) => {
                        const description = e.target.value.split("\n").filter(Boolean);
                        updateItemInList(experience, index, "description", description, setExperience);
                      }}
                      placeholder="Responsible for building React components..."
                    />
                  </div>

                  {/* Technologies tags list */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Technologies Used (Comma separated)</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={exp.technologies.join(", ")}
                      onChange={(e) => {
                        const technologies = e.target.value.split(",").map(t => t.trim()).filter(Boolean);
                        updateItemInList(experience, index, "technologies", technologies, setExperience);
                      }}
                      placeholder="Vue.js, Express, MongoDB"
                    />
                    <div className={styles.tagChipsContainer}>
                      {exp.technologies.map((tech, tIndex) => (
                        <span key={tIndex} className={styles.tagChip}>
                          {tech}
                          <button className={styles.removeChipBtn} onClick={() => {
                            const updatedTech = exp.technologies.filter((_, i) => i !== tIndex);
                            updateItemInList(experience, index, "technologies", updatedTech, setExperience);
                          }}>×</button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={styles.addBtn}
              onClick={() => setExperience([
                ...experience,
                {
                  id: Date.now(),
                  title: "Full Stack Developer",
                  company: "New Company",
                  companyUrl: "",
                  period: "2026 – Present",
                  location: "Remote",
                  description: ["Designed and implemented frontend and backend logic.", "Optimized load performance."],
                  technologies: ["React", "Node.js"]
                }
              ])}
            >
              + Add Work Experience
            </button>
          </div>
        )}

        {/* ============================================================
            6. EDUCATION
           ============================================================ */}
        {activeTab === "education" && (
          <div className="animate-fade-in-up">
            <div className={styles.itemsList}>
              {education.map((edu, index) => (
                <div key={edu.id || index} className={styles.card}>
                  <div className={styles.listItemHeader} style={{ marginBottom: "1rem" }}>
                    <span className={styles.listItemTitle}>{edu.degree || "Degree"} at {edu.institution || "School"}</span>
                    <div className={styles.listItemControls}>
                      <button className={styles.controlBtn} onClick={() => moveItem(education, index, "up", setEducation)}>▲</button>
                      <button className={styles.controlBtn} onClick={() => moveItem(education, index, "down", setEducation)}>▼</button>
                      <button className={`${styles.controlBtn} ${styles.deleteBtn}`} onClick={() => {
                        setEducation(education.filter((_, i) => i !== index));
                      }}>🗑️ Delete</button>
                    </div>
                  </div>

                  <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Institution Name</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={edu.institution}
                        onChange={(e) => updateItemInList(education, index, "institution", e.target.value, setEducation)}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Degree / Study Program</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={edu.degree}
                        onChange={(e) => updateItemInList(education, index, "degree", e.target.value, setEducation)}
                      />
                    </div>
                  </div>

                  <div className={styles.grid3}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Period (Years)</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={edu.period}
                        onChange={(e) => updateItemInList(education, index, "period", e.target.value, setEducation)}
                        placeholder="2022 - 2026"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Location</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={edu.location || ""}
                        onChange={(e) => updateItemInList(education, index, "location", e.target.value, setEducation)}
                        placeholder="Chiang Rai, Thailand"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>GPA (optional)</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={edu.gpa || ""}
                        onChange={(e) => updateItemInList(education, index, "gpa", e.target.value, setEducation)}
                        placeholder="3.50 / 4.0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={styles.addBtn}
              onClick={() => setEducation([
                ...education,
                {
                  id: Date.now(),
                  degree: "B.Eng. Computer Engineering",
                  institution: "University Name",
                  period: "2022 – 2026",
                  location: "Location",
                  gpa: ""
                }
              ])}
            >
              + Add Education Background
            </button>
          </div>
        )}

        {/* ============================================================
            7. CERTIFICATIONS
           ============================================================ */}
        {activeTab === "certifications" && (
          <div className="animate-fade-in-up">
            <div className={styles.itemsList}>
              {certifications.map((cert, index) => (
                <div key={cert.id || index} className={styles.card}>
                  <div className={styles.listItemHeader} style={{ marginBottom: "1rem" }}>
                    <span className={styles.listItemTitle}>{cert.name || "Certificate Name"}</span>
                    <div className={styles.listItemControls}>
                      <button className={styles.controlBtn} onClick={() => moveItem(certifications, index, "up", setCertifications)}>▲</button>
                      <button className={styles.controlBtn} onClick={() => moveItem(certifications, index, "down", setCertifications)}>▼</button>
                      <button className={`${styles.controlBtn} ${styles.deleteBtn}`} onClick={() => {
                        setCertifications(certifications.filter((_, i) => i !== index));
                      }}>🗑️ Delete</button>
                    </div>
                  </div>

                  <div className={styles.grid2}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Certificate Name</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={cert.name}
                        onChange={(e) => updateItemInList(certifications, index, "name", e.target.value, setCertifications)}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Issuer Organization</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={cert.issuer}
                        onChange={(e) => updateItemInList(certifications, index, "issuer", e.target.value, setCertifications)}
                      />
                    </div>
                  </div>

                  <div className={styles.grid3}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Issue Date / Year</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={cert.date}
                        onChange={(e) => updateItemInList(certifications, index, "date", e.target.value, setCertifications)}
                        placeholder="2026"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Credential Link</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={cert.link || ""}
                        onChange={(e) => updateItemInList(certifications, index, "link", e.target.value, setCertifications)}
                        placeholder="https://..."
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Certificate Image Path</label>
                      <input
                        type="text"
                        className={styles.input}
                        value={cert.image || ""}
                        onChange={(e) => updateItemInList(certifications, index, "image", e.target.value, setCertifications)}
                        placeholder="/projects/your-cert.png"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={styles.addBtn}
              onClick={() => setCertifications([
                ...certifications,
                {
                  id: Date.now(),
                  name: "New Certificate",
                  issuer: "Provider Name",
                  date: "2026",
                  link: "",
                  image: ""
                }
              ])}
            >
              + Add New Certification
            </button>
          </div>
        )}
      </main>

      {/* Code Export Modal */}
      {showExportModal && (
        <div className={styles.jsonModal}>
          <div className={styles.jsonModalContent}>
            <div className={styles.jsonModalHeader}>
              <h2>Generated Code Preview</h2>
              <button className={`${styles.controlBtn} ${styles.deleteBtn}`} onClick={() => setShowExportModal(false)}>×</button>
            </div>
            
            <div className={styles.jsonModalBody}>
              <p style={{ marginBottom: "1rem", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
                This is the updated portfolio configurations code. If you are hosting on read-only environments like Vercel, copy this and overwrite `src/data/portfolio.ts` manually, or commit it to your repository.
              </p>
              
              <pre className={styles.codeBlock}>
                <code>{exportedCode}</code>
              </pre>
            </div>

            <div className={styles.jsonModalHeader} style={{ justifyContent: "flex-end", gap: "10px", borderTop: "1px solid var(--color-border)" }}>
              <button className="btn btn-secondary" onClick={() => {
                navigator.clipboard.writeText(exportedCode);
                triggerToast("คัดลอกโค้ดไปยัง Clipboard แล้ว", "success");
              }}>
                📋 Copy Code
              </button>
              <button className="btn btn-primary" onClick={handleDownload}>
                📥 Download portfolio.ts
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
