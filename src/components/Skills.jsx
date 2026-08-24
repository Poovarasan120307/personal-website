import React from "react";
import { motion } from "framer-motion";
import { 
  Code, Brain, Binary, Database, Wrench, BookOpen, 
  Cpu, Terminal, Coffee, FileCode, Sparkles, Eye, Target, Zap, 
  Camera, Table, Layers, Server, GitBranch, Code2, GitFork, Workflow, Box, LayoutGrid, FileText, Bug 
} from "lucide-react";
import { GithubIcon as Github } from "./Icons";
import { skillsCategories } from "../data/skills";

// Dynamic Icon Registry
const iconMap = {
  Code, Brain, Binary, Database, Wrench, BookOpen,
  Cpu, Terminal, Coffee, FileCode, Sparkles, Eye, Target, Zap,
  Camera, Table, Layers, Server, GitBranch, Github, Code2, GitFork, Workflow, Box, LayoutGrid, FileText, Bug
};

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "rgba(13, 17, 26, 0.4)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Brain size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive skill set spanning programming, computer vision, data libraries, and software engineering principles.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1.8rem" }}>
          {skillsCategories.map((cat, idx) => {
            const CategoryIcon = iconMap[cat.iconName] || Code;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card"
                style={{ padding: "1.8rem" }}
              >
                {/* Category Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "0.6rem",
                      background: "rgba(99, 102, 241, 0.12)",
                      border: "1px solid rgba(99, 102, 241, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-cyan)"
                    }}
                  >
                    <CategoryIcon size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>{cat.category}</h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{cat.description}</p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "1.2rem" }}>
                  {cat.skills.map((skill) => {
                    const SkillIcon = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.5rem 0.85rem",
                          borderRadius: "0.5rem",
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid var(--card-border)",
                          transition: "all var(--transition-fast)",
                          cursor: "default"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--card-border-glow)";
                          e.currentTarget.style.background = "rgba(99, 102, 241, 0.12)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--card-border)";
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <SkillIcon size={16} style={{ color: "var(--accent-cyan)" }} />
                        <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
                          {skill.name}
                        </span>
                        <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", background: "rgba(0,0,0,0.3)", padding: "0.15rem 0.4rem", borderRadius: "0.3rem" }}>
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #skills .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
