import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, CheckCircle2, Sparkles } from "lucide-react";
import { educationData } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: "rgba(13, 17, 26, 0.4)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Academic Background</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering degree program focusing on Artificial Intelligence and Data Science.
          </p>
        </div>

        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card"
              style={{
                padding: "2.2rem",
                borderLeft: "4px solid var(--accent-cyan)"
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent-cyan)", textTransform: "uppercase" }}>
                      {edu.type}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>•</span>
                    <span style={{ padding: "0.2rem 0.6rem", borderRadius: "0.3rem", background: "rgba(6, 182, 212, 0.15)", color: "var(--accent-cyan)", fontSize: "0.78rem", fontWeight: 600 }}>
                      {edu.status}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 800, marginTop: "0.2rem" }}>
                    {edu.institution}
                  </h3>
                </div>

                <div style={{ background: "rgba(255,255,255,0.04)", padding: "0.6rem 1rem", borderRadius: "0.6rem", border: "1px solid var(--card-border)" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Degree Major</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>AI & Data Science</div>
                </div>
              </div>

              <h4 style={{ fontSize: "1.2rem", color: "var(--accent-indigo)", fontWeight: 700, marginBottom: "1rem" }}>
                {edu.degree}
              </h4>

              {/* Core Focus Tags */}
              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "0.6rem" }}>
                  Curriculum & Specialization Focus:
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {edu.focusAreas.map((area) => (
                    <span
                      key={area}
                      style={{
                        fontSize: "0.82rem",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "0.4rem",
                        background: "rgba(99, 102, 241, 0.12)",
                        border: "1px solid rgba(99, 102, 241, 0.25)",
                        color: "var(--text-primary)"
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div style={{ paddingTop: "1rem", borderTop: "1px solid var(--card-border)" }}>
                <span style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Key Highlights:
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {edu.highlights.map((h, hidx) => (
                    <div key={hidx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                      <CheckCircle2 size={16} style={{ color: "var(--accent-cyan)", flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
