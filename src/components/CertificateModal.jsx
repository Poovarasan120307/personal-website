import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Award, Calendar, Hash, Sparkles } from "lucide-react";

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="glass-card"
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: "580px",
            width: "100%",
            padding: "2rem",
            background: "rgba(13, 17, 26, 0.95)",
            border: "1px solid rgba(99, 102, 241, 0.4)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.7)"
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "0.6rem",
                  background: "rgba(99, 102, 241, 0.15)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-cyan)"
                }}
              >
                <Award size={24} />
              </div>
              <div>
                <span style={{ fontSize: "0.78rem", color: "var(--accent-cyan)", fontWeight: 700, textTransform: "uppercase" }}>
                  {certificate.issuer}
                </span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{certificate.title}</h3>
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--card-border)",
                color: "var(--text-secondary)",
                borderRadius: "0.5rem",
                padding: "0.4rem",
                cursor: "pointer"
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ background: "rgba(0,0,0,0.3)", padding: "0.8rem 1rem", borderRadius: "0.6rem", border: "1px solid var(--card-border)" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.2rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Hash size={14} /> Credential ID
              </div>
              <div style={{ fontFamily: "var(--font-code)", fontSize: "0.88rem", color: "#38bdf8", wordBreak: "break-all" }}>
                {certificate.credentialId}
              </div>
            </div>

            {certificate.date && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                <Calendar size={16} style={{ color: "var(--accent-cyan)" }} />
                <span>Issued Date: <strong>{certificate.date}</strong></span>
              </div>
            )}

            <div>
              <span style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "0.5rem" }}>
                Verified Competencies:
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {certificate.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "0.78rem",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "0.3rem",
                      background: "rgba(99, 102, 241, 0.12)",
                      border: "1px solid rgba(99, 102, 241, 0.25)",
                      color: "var(--text-primary)"
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "0.8rem" }}>
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: 1 }}
            >
              <ShieldCheck size={18} />
              <span>{certificate.buttonText}</span>
              <ExternalLink size={14} />
            </a>
            <button onClick={onClose} className="btn btn-secondary">
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
