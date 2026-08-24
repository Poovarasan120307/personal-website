import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Copy, Check, MessageSquare, Sparkles } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";
import { personalData } from "../data/personal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.socials.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="section" style={{ background: "rgba(13, 17, 26, 0.6)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Intelligent Together.</span>
          </h2>
          <p className="section-subtitle">
            I'm always interested in learning, collaborating, building projects and exploring new opportunities in technology.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "3rem", alignItems: "start" }}>
          
          {/* Left Contact Buttons & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>
                Connect Directly
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", lineHeight: 1.6, marginBottom: "1.8rem" }}>
                Reach out via professional channels or copy my primary contact address.
              </p>

              {/* Social Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ justifyContent: "flex-start", padding: "0.85rem 1.2rem", fontSize: "0.95rem" }}
                >
                  <Github size={20} />
                  <span>GitHub: @Poovarasan-reva</span>
                </a>

                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ justifyContent: "flex-start", padding: "0.85rem 1.2rem", fontSize: "0.95rem" }}
                >
                  <Linkedin size={20} />
                  <span>LinkedIn Profile</span>
                </a>

                {/* Email Copy Card */}
                <div
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    border: "1px solid var(--card-border)",
                    borderRadius: "0.75rem",
                    padding: "0.85rem 1.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", overflow: "hidden" }}>
                    <Mail size={20} style={{ color: "var(--accent-cyan)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.88rem", fontFamily: "var(--font-code)", color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {personalData.socials.emailPlaceholder}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-icon-only"
                    title="Copy Email Address"
                    style={{ flexShrink: 0 }}
                  >
                    {copied ? <Check size={16} style={{ color: "var(--accent-emerald)" }} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

              <div style={{ padding: "1rem", borderRadius: "0.6rem", background: "rgba(99, 102, 241, 0.1)", border: "1px solid rgba(99, 102, 241, 0.2)", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                💡 <strong>Editable Contact Notice:</strong> Email address placeholder can be updated anytime in <code>src/data/personal.js</code>.
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>
                Send a Message
              </h3>

              {formSubmitted ? (
                <div style={{ padding: "2rem", textAlign: "center", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "0.8rem" }}>
                  <Sparkles size={32} style={{ color: "var(--accent-emerald)", margin: "0 auto 0.8rem auto" }} />
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#34d399", marginBottom: "0.3rem" }}>
                    Message Received!
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    Thank you for reaching out. I will respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "0.6rem",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid var(--card-border)",
                        color: "var(--text-primary)",
                        fontSize: "0.92rem",
                        outline: "none"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "0.6rem",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid var(--card-border)",
                        color: "var(--text-primary)",
                        fontSize: "0.92rem",
                        outline: "none"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Message Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Project collaboration / AI discussion"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "0.6rem",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid var(--card-border)",
                        color: "var(--text-primary)",
                        fontSize: "0.92rem",
                        outline: "none"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "0.6rem",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid var(--card-border)",
                        color: "var(--text-primary)",
                        fontSize: "0.92rem",
                        outline: "none",
                        resize: "vertical"
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          #contact .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
