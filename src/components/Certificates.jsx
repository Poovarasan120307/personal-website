import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, ExternalLink, Hash, Calendar, Eye } from "lucide-react";
import { certificatesData } from "../data/certificates";
import CertificateModal from "./CertificateModal";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="section" style={{ background: "rgba(13, 17, 26, 0.4)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Authentic certificates verified from IBM SkillsBuild, Wadhwani Foundation, and LearnTube.ai.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: "1.8rem"
          }}
        >
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card"
              style={{
                padding: "1.8rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer"
              }}
              onClick={() => setSelectedCert(cert)}
            >
              <div>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "var(--accent-cyan)",
                      letterSpacing: "0.05em"
                    }}
                  >
                    {cert.issuer}
                  </span>
                  <span
                    style={{
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.3rem",
                      background: "rgba(16, 185, 129, 0.15)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      color: "#34d399",
                      fontSize: "0.72rem",
                      fontWeight: 700
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                  {cert.title}
                </h3>

                {/* ID snippet */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.8rem", fontFamily: "var(--font-code)" }}>
                  <Hash size={14} style={{ color: "var(--accent-cyan)" }} />
                  <span>ID: {cert.credentialId.substring(0, 16)}...</span>
                </div>

                {cert.date && (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                )}

                {/* Skills Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: "0.72rem",
                        padding: "0.18rem 0.5rem",
                        borderRadius: "0.3rem",
                        background: "rgba(255, 255, 255, 0.04)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--card-border)"
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Button */}
              <div style={{ paddingTop: "0.8rem", borderTop: "1px solid var(--card-border)", display: "flex", gap: "0.6rem" }}>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn btn-outline"
                  style={{ width: "100%", padding: "0.55rem 0.9rem", fontSize: "0.85rem" }}
                >
                  <ShieldCheck size={16} />
                  <span>{cert.buttonText}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <style>{`
        @media (max-width: 576px) {
          #certificates .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
