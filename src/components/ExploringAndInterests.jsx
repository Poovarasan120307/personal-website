import React from "react";
import { motion } from "framer-motion";
import { Compass, Sparkles, Target, Flame } from "lucide-react";
import { personalData } from "../data/personal";

export default function ExploringAndInterests() {
  return (
    <section className="section" style={{ background: "rgba(13, 17, 26, 0.4)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
          
          {/* Currently Exploring Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card"
            style={{ padding: "2rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "0.6rem",
                  background: "rgba(6, 182, 212, 0.12)",
                  border: "1px solid rgba(6, 182, 212, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-cyan)"
                }}
              >
                <Compass size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Currently Exploring</h3>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Active Skill Expansion</span>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {personalData.currentlyExploring.map((topic) => (
                <div
                  key={topic}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.45rem 0.85rem",
                    borderRadius: "0.5rem",
                    background: "rgba(6, 182, 212, 0.08)",
                    border: "1px solid rgba(6, 182, 212, 0.2)",
                    color: "var(--text-primary)",
                    fontSize: "0.88rem",
                    fontWeight: 500
                  }}
                >
                  <Flame size={14} style={{ color: "var(--accent-cyan)" }} />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Career Interests Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card"
            style={{ padding: "2rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "0.6rem",
                  background: "rgba(139, 92, 246, 0.12)",
                  border: "1px solid rgba(139, 92, 246, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-violet)"
                }}
              >
                <Target size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>What I'm Interested In</h3>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Future Career Domains</span>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {personalData.careerInterests.map((domain) => (
                <div
                  key={domain}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.45rem 0.85rem",
                    borderRadius: "0.5rem",
                    background: "rgba(139, 92, 246, 0.08)",
                    border: "1px solid rgba(139, 92, 246, 0.2)",
                    color: "var(--text-primary)",
                    fontSize: "0.88rem",
                    fontWeight: 500
                  }}
                >
                  <Sparkles size={14} style={{ color: "var(--accent-violet)" }} />
                  <span>{domain}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills + section .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
