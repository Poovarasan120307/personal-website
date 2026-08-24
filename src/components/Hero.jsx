import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Terminal, Code2, Cpu, Eye } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";
import { personalData } from "../data/personal";

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalData.rotatingTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="section" style={{ paddingTop: "calc(var(--nav-height) + 3rem)", minHeight: "92vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="section-tag" style={{ marginBottom: "1.2rem" }}>
            <Sparkles size={14} className="gradient-text" />
            <span>{personalData.badge}</span>
          </div>

          {/* Greeting */}
          <h1 style={{ fontSize: "2.8rem", fontWeight: 800, lineHeight: 1.1, marginBottom: "0.5rem" }}>
            Hi, I'm <span className="gradient-text">{personalData.name}</span>
          </h1>

          {/* Rotating Headline */}
          <div style={{ height: "48px", overflow: "hidden", marginBottom: "1.2rem" }}>
            <motion.div
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--accent-cyan)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <span style={{ color: "var(--text-muted)" }}>&gt;</span> {personalData.rotatingTitles[titleIndex]}
            </motion.div>
          </div>

          {/* Main Subtitle */}
          <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", marginBottom: "1.8rem", lineHeight: 1.6, maxWidth: "540px" }}>
            {personalData.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", marginBottom: "2rem" }}>
            <a href="#projects" className="btn btn-primary">
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={personalData.resumePath}
              download="Poovarasan_N_Resume.pdf"
              className="btn btn-secondary"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
              Connect with me:
            </span>
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side Visual Element: Abstract AI & Developer Terminal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: "relative" }}
        >
          {/* Decorative Glow */}
          <div
            style={{
              position: "absolute",
              inset: "-20px",
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 80%)",
              borderRadius: "2rem",
              filter: "blur(30px)",
              zIndex: 0
            }}
          />

          {/* Interactive AI Terminal Window */}
          <div
            className="glass-card"
            style={{
              padding: "0",
              zIndex: 1,
              border: "1px solid rgba(99, 102, 241, 0.3)",
              boxShadow: "var(--shadow-glow)"
            }}
          >
            {/* Terminal Top Bar */}
            <div
              style={{
                background: "rgba(13, 17, 26, 0.9)",
                padding: "0.75rem 1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid var(--card-border)"
              }}
            >
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#eab308" }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e" }} />
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-code)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Terminal size={14} style={{ color: "var(--accent-cyan)" }} />
                poovarasan@ai-lab:~
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
                REVA UNIVERSITY
              </div>
            </div>

            {/* Terminal Body */}
            <div style={{ padding: "1.5rem", fontFamily: "var(--font-code)", fontSize: "0.88rem", color: "#e2e8f0", lineHeight: 1.7 }}>
              <div style={{ color: "var(--accent-indigo)", marginBottom: "0.6rem" }}>
                // AI & Data Science Candidate Overview
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <span style={{ color: "var(--accent-cyan)" }}>const</span> developer = &#123;
              </div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <span style={{ color: "#94a3b8" }}>name:</span> <span style={{ color: "#38bdf8" }}>"{personalData.name}"</span>,
              </div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <span style={{ color: "#94a3b8" }}>education:</span> <span style={{ color: "#38bdf8" }}>"{personalData.degree}"</span>,
              </div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <span style={{ color: "#94a3b8" }}>institution:</span> <span style={{ color: "#38bdf8" }}>"{personalData.university}"</span>,
              </div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <span style={{ color: "#94a3b8" }}>coreTech:</span> [<span style={{ color: "#a78bfa" }}>"Python"</span>, <span style={{ color: "#a78bfa" }}>"Java"</span>, <span style={{ color: "#a78bfa" }}>"C"</span>, <span style={{ color: "#a78bfa" }}>"OpenCV"</span>, <span style={{ color: "#a78bfa" }}>"SQL"</span>],
              </div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <span style={{ color: "#94a3b8" }}>focusAreas:</span> [<span style={{ color: "#34d399" }}>"Computer Vision"</span>, <span style={{ color: "#34d399" }}>"Machine Learning"</span>],
              </div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <span style={{ color: "#94a3b8" }}>verifiedCredentials:</span> <span style={{ color: "#f59e0b" }}>5</span>
              </div>
              <div>&#125;;</div>

              <div style={{ marginTop: "1rem", paddingTop: "0.8rem", borderTop: "1px dashed rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-cyan)" }}>
                <span>&gt;</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{ display: "inline-block", width: "8px", height: "15px", background: "var(--accent-cyan)" }}
                />
                <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>AI Model Initialization Complete. Ready to collaborate.</span>
              </div>
            </div>

            {/* Neural Nodes Micro Graphic Overlay */}
            <div
              style={{
                padding: "1rem 1.5rem",
                background: "rgba(7, 9, 14, 0.6)",
                borderTop: "1px solid var(--card-border)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.8rem",
                textAlign: "center"
              }}
            >
              <div style={{ background: "rgba(6, 182, 212, 0.1)", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid rgba(6, 182, 212, 0.2)" }}>
                <Cpu size={18} style={{ color: "var(--accent-cyan)", marginBottom: "0.2rem" }} />
                <div style={{ fontSize: "0.75rem", fontWeight: 600 }}>Neural Nets</div>
              </div>
              <div style={{ background: "rgba(139, 92, 246, 0.1)", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid rgba(139, 92, 246, 0.2)" }}>
                <Eye size={18} style={{ color: "var(--accent-violet)", marginBottom: "0.2rem" }} />
                <div style={{ fontSize: "0.75rem", fontWeight: 600 }}>Computer Vision</div>
              </div>
              <div style={{ background: "rgba(99, 102, 241, 0.1)", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
                <Code2 size={18} style={{ color: "var(--accent-indigo)", marginBottom: "0.2rem" }} />
                <div style={{ fontSize: "0.75rem", fontWeight: 600 }}>Software Dev</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          #hero .container {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
