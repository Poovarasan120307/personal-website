import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Sparkles, CheckCircle2 } from "lucide-react";
import { personalData } from "../data/personal";

export default function ResumeSection() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card"
          style={{
            padding: "3rem 2rem",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(13, 17, 26, 0.95) 0%, rgba(99, 102, 241, 0.15) 100%)",
            border: "1px solid rgba(99, 102, 241, 0.35)",
            boxShadow: "0 0 40px rgba(99, 102, 241, 0.15)"
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "1.2rem",
              background: "rgba(99, 102, 241, 0.2)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-cyan)",
              margin: "0 auto 1.5rem auto"
            }}
          >
            <FileText size={30} />
          </div>

          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.8rem" }}>
            Want to know more about my work?
          </h2>

          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 2rem auto" }}>
            Download my technical resume to review my academic credentials, software projects, and verified IBM & Wadhwani certifications.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={personalData.resumePath}
              download="Poovarasan_N_Resume.pdf"
              className="btn btn-primary"
              style={{ padding: "0.85rem 2rem", fontSize: "1.05rem" }}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <CheckCircle2 size={15} style={{ color: "var(--accent-cyan)" }} /> PDF Format
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <CheckCircle2 size={15} style={{ color: "var(--accent-cyan)" }} /> Verified Credentials
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <CheckCircle2 size={15} style={{ color: "var(--accent-cyan)" }} /> Up-to-date Projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
