import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Bot, Code, Rocket, UserCheck } from "lucide-react";
import { personalData } from "../data/personal";

const focusCards = [
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "B.Tech AI & Data Science",
    details: "REVA University",
    accent: "var(--accent-cyan)"
  },
  {
    icon: Bot,
    title: "Core Focus",
    subtitle: "Artificial Intelligence & Data Science",
    details: "Machine Learning & Vision Models",
    accent: "var(--accent-violet)"
  },
  {
    icon: Code,
    title: "Development",
    subtitle: "Python • C • Java • JS • SQL",
    details: "Algorithms & Web Logic",
    accent: "var(--accent-indigo)"
  },
  {
    icon: Rocket,
    title: "Interests",
    subtitle: "AI • Vision • Innovation",
    details: "Real-world Software Solutions",
    accent: "var(--accent-emerald)"
  }
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <UserCheck size={14} />
            <span>Background & Vision</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate B.Tech student combining strong engineering fundamentals with emerging AI technologies.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3rem", alignItems: "center" }}>
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="glass-card"
              style={{
                padding: "2.2rem",
                borderLeft: "4px solid var(--accent-indigo)"
              }}
            >
              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
                Engineering Practical AI Solutions
              </h3>
              {personalData.aboutText.map((para, i) => (
                <p key={i} style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                  {para}
                </p>
              ))}

              <div style={{ marginTop: "1.5rem", paddingTop: "1.2rem", borderTop: "1px solid var(--card-border)", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                <div>
                  <span style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                    Status
                  </span>
                  <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--accent-cyan)" }}>
                    B.Tech Student
                  </span>
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                    University
                  </span>
                  <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    REVA University
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Highlight Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}
          >
            {focusCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="glass-card"
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "0.6rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--card-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: card.accent,
                      marginBottom: "1rem"
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "0.3rem" }}>{card.title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--accent-cyan)", fontWeight: 600, marginBottom: "0.2rem" }}>
                      {card.subtitle}
                    </p>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      {card.details}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 576px) {
          #about .container > div:last-child > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
