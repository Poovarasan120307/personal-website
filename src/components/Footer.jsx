import React from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";
import { personalData } from "../data/personal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--card-border)",
        padding: "3rem 0 2rem 0"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "2rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "var(--gradient-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "0.9rem"
                }}
              >
                P
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)" }}>
                Poovarasan N
              </h3>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
              {personalData.headline}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon-only"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon-only"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <button
              onClick={scrollToTop}
              className="btn-icon-only"
              aria-label="Scroll to top"
              title="Back to Top"
              style={{ background: "rgba(99, 102, 241, 0.15)", color: "var(--accent-cyan)", borderColor: "rgba(99, 102, 241, 0.3)" }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
          <div>
            © 2026 Poovarasan N. All rights reserved.
          </div>
          <div>
            Built with React, Vite & Modern Dark Glassmorphism Design.
          </div>
        </div>
      </div>
    </footer>
  );
}
