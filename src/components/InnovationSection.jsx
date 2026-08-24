import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, ShieldAlert, Cpu, ArrowUpRight, Award, Eye } from "lucide-react";

export default function InnovationSection() {
  return (
    <section id="innovation" className="section" style={{ background: "linear-gradient(180deg, rgba(13, 17, 26, 0.6) 0%, rgba(7, 9, 14, 0.9) 100%)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag" style={{ background: "rgba(139, 92, 246, 0.15)", borderColor: "rgba(139, 92, 246, 0.3)", color: "var(--accent-violet)" }}>
            <Lightbulb size={14} />
            <span>Startup & Innovation Spotlight</span>
          </div>
          <h2 className="section-title">
            Innovation & <span className="gradient-text">Entrepreneurship</span>
          </h2>
          <p className="section-subtitle">
            Applying Computer Vision and Machine Learning to create real-world impact in agriculture.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{
            padding: "2.5rem",
            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(13, 17, 26, 0.95) 100%)",
            border: "1px solid rgba(139, 92, 246, 0.35)",
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.15)"
          }}
        >
          {/* Header Banner */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--card-border)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem" }}>
                <span style={{ padding: "0.2rem 0.6rem", borderRadius: "0.4rem", background: "rgba(245, 158, 11, 0.15)", border: "1px solid rgba(245, 158, 11, 0.3)", color: "var(--accent-amber)", fontSize: "0.8rem", fontWeight: 700 }}>
                  Wadhwani Ignite Entrepreneurship
                </span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>• Flagship Initiative</span>
              </div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800 }}>
                AI-Powered Crop Disease Prediction for Small Farmers
              </h3>
            </div>
            <a
              href="#projects"
              className="btn btn-primary"
              style={{ padding: "0.65rem 1.3rem" }}
            >
              <span>Explore Project</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* 4 Grid Columns: Problem, Solution, Target Users, Technology */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {/* The Problem */}
            <div style={{ background: "rgba(239, 68, 68, 0.05)", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "0.8rem", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem", color: "#f87171" }}>
                <ShieldAlert size={20} />
                <h4 style={{ fontSize: "1.1rem" }}>The Problem</h4>
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Farmers may face difficulty identifying crop diseases early and accurately. Late detection leads to crop loss, reduced yields, and financial hardship.
              </p>
            </div>

            {/* The Solution */}
            <div style={{ background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "0.8rem", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem", color: "#34d399" }}>
                <Lightbulb size={20} />
                <h4 style={{ fontSize: "1.1rem" }}>The Solution</h4>
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                An AI-based image analysis system designed to assist with early crop disease identification, providing actionable intelligence for crop protection.
              </p>
            </div>

            {/* Target Users */}
            <div style={{ background: "rgba(6, 182, 212, 0.05)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "0.8rem", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem", color: "var(--accent-cyan)" }}>
                <Target size={20} />
                <h4 style={{ fontSize: "1.1rem" }}>Target Users</h4>
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Small and medium-scale farmers seeking accessible, cost-effective early diagnostic support without needing expert plant pathologists on-site.
              </p>
            </div>

            {/* Technology */}
            <div style={{ background: "rgba(139, 92, 246, 0.05)", border: "1px solid rgba(139, 92, 246, 0.2)", borderRadius: "0.8rem", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem", color: "var(--accent-violet)" }}>
                <Cpu size={20} />
                <h4 style={{ fontSize: "1.1rem" }}>Core Technology</h4>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["Artificial Intelligence", "Computer Vision", "Machine Learning", "Image Processing", "Python"].map((t) => (
                  <span key={t} style={{ fontSize: "0.78rem", padding: "0.2rem 0.5rem", borderRadius: "0.3rem", background: "rgba(139, 92, 246, 0.15)", color: "#e9d5ff" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #innovation .glass-card { padding: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
