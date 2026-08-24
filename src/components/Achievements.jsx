import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Rocket, Code, CheckCircle2 } from "lucide-react";
import { achievementsData } from "../data/achievements";

const iconMap = {
  GraduationCap, Rocket, Code
};

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Milestones & Progress</span>
          </div>
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Confirmed academic progress, technical innovation, and project milestones.
          </p>
        </div>

        {/* Timeline View */}
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
          {/* Vertical Line */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              bottom: "10px",
              left: "24px",
              width: "2px",
              background: "linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 50%, var(--accent-violet) 100%)",
              opacity: 0.4
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {achievementsData.map((item, idx) => {
              const Icon = iconMap[item.icon] || CheckCircle2;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  style={{ display: "flex", gap: "1.5rem" }}
                >
                  {/* Timeline Dot Icon */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(13, 17, 26, 0.95)",
                      border: "2px solid var(--accent-cyan)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-cyan)",
                      boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)",
                      zIndex: 2,
                      flexShrink: 0
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Card Content */}
                  <div className="glass-card" style={{ flex: 1, padding: "1.5rem" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent-cyan)", textTransform: "uppercase" }}>
                        {item.category}
                      </span>
                      <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", background: "rgba(0,0,0,0.3)", padding: "0.15rem 0.5rem", borderRadius: "0.3rem" }}>
                        {item.date}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.2rem" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--accent-indigo)", fontWeight: 600, marginBottom: "0.8rem" }}>
                      {item.subtitle}
                    </p>

                    <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
