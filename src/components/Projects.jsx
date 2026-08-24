import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink, Sparkles, Code2, ArrowUpRight, Cpu } from "lucide-react";
import { GithubIcon as Github } from "./Icons";
import { projectsData, projectFilterCategories } from "../data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.filterCategories.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Portfolio Repositories</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Practical software projects built in C, Java, Web Development, and Computer Vision.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginBottom: "3rem"
          }}
        >
          {projectFilterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: "9999px",
                fontSize: "0.88rem",
                fontWeight: 600,
                cursor: "pointer",
                border: activeFilter === cat ? "1px solid var(--accent-cyan)" : "1px solid var(--card-border)",
                background: activeFilter === cat ? "rgba(6, 182, 212, 0.15)" : "rgba(255, 255, 255, 0.03)",
                color: activeFilter === cat ? "var(--text-primary)" : "var(--text-secondary)",
                transition: "all var(--transition-fast)",
                outline: "none"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.8rem"
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1.8rem",
                  border: project.featured ? "1px solid rgba(139, 92, 246, 0.4)" : "1px solid var(--card-border)"
                }}
              >
                <div>
                  {/* Card Header & Badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-cyan)", letterSpacing: "0.05em" }}>
                      {project.category}
                    </span>
                    {project.featured && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "0.4rem",
                          background: "rgba(139, 92, 246, 0.2)",
                          border: "1px solid rgba(139, 92, 246, 0.4)",
                          color: "#c084fc",
                          fontSize: "0.72rem",
                          fontWeight: 700
                        }}
                      >
                        <Sparkles size={12} />
                        Featured Innovation
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.9rem" }}>
                    {project.subtitle}
                  </p>

                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.2rem" }}>
                    {project.description}
                  </p>

                  {/* Feature Highlights if any */}
                  {project.features && (
                    <div style={{ marginBottom: "1.2rem", background: "rgba(0,0,0,0.2)", padding: "0.8rem", borderRadius: "0.5rem" }}>
                      <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "0.4rem" }}>
                        Key Features:
                      </span>
                      <ul style={{ paddingLeft: "1.1rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                        {project.features.map((feat, fidx) => (
                          <li key={fidx}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: "0.75rem",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "0.3rem",
                          background: "rgba(99, 102, 241, 0.1)",
                          color: "var(--text-primary)",
                          border: "1px solid rgba(99, 102, 241, 0.2)"
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ paddingTop: "0.8rem", borderTop: "1px solid var(--card-border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ width: "100%", padding: "0.6rem 1rem", fontSize: "0.88rem" }}
                      >
                        <Github size={16} />
                        <span>View Source Code</span>
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <a
                        href="#innovation"
                        className="btn btn-primary"
                        style={{ width: "100%", padding: "0.6rem 1rem", fontSize: "0.88rem" }}
                      >
                        <Cpu size={16} />
                        <span>Explore Innovation Details</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 576px) {
          #projects .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
