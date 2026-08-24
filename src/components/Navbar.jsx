import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./Icons";
import { personalData } from "../data/personal";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Innovation", href: "#innovation" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "var(--nav-height)",
        zIndex: 50,
        transition: "all var(--transition-normal)",
        background: scrolled ? "rgba(7, 9, 14, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)" : "none"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%" }}>
        {/* Brand Logo */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "var(--gradient-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
              boxShadow: "0 0 15px rgba(6, 182, 212, 0.4)"
            }}
          >
            P
          </div>
          <div>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.15rem", letterSpacing: "-0.01em", color: "var(--text-primary)" }}>
              Poovarasan N
            </span>
            <span style={{ display: "block", fontSize: "0.7rem", color: "var(--accent-cyan)", fontWeight: 500 }}>
              AI & Data Science
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  padding: "0.4rem 0.8rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                  background: isActive ? "rgba(99, 102, 241, 0.15)" : "transparent",
                  border: isActive ? "1px solid rgba(99, 102, 241, 0.3)" : "1px solid transparent",
                  transition: "all var(--transition-fast)"
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Socials */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="btn-icon-only"
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="btn-icon-only"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--card-border)",
              color: "var(--text-primary)",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              cursor: "pointer"
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: "rgba(13, 17, 26, 0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--card-border)",
              overflow: "hidden"
            }}
          >
            <div className="container" style={{ padding: "1rem 1.5rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    background: activeSection === link.href.substring(1) ? "rgba(99, 102, 241, 0.2)" : "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--card-border)"
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
