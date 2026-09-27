import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "./Icons";
import { personalData } from "../data/personal";

// Built-in static fallback based on verified repos
const fallbackRepos = [
  {
    id: 1,
    name: "2D-Graphics-Editor",
    description: "A menu-driven 2D graphics editor developed using C programming concepts and a character-based canvas.",
    html_url: "https://github.com/Poovarasan-reva/2D-Graphics-Editor",
    language: "C",
    stargazers_count: 0
  },
  {
    id: 2,
    name: "DSA-club",
    description: "A Java repository for practicing and exploring Data Structures and Algorithms concepts.",
    html_url: "https://github.com/Poovarasan-reva/DSA-club",
    language: "Java",
    stargazers_count: 0
  },
  {
    id: 3,
    name: "web-developing",
    description: "A web development project created while exploring practical web development concepts and JavaScript.",
    html_url: "https://github.com/Poovarasan-reva/web-developing",
    language: "JavaScript",
    stargazers_count: 0
  },
  {
    id: 4,
    name: "Web",
    description: "A practical web development project demonstrating my exploration of website and web application development.",
    html_url: "https://github.com/Poovarasan-reva/Web",
    language: "HTML",
    stargazers_count: 0
  }
];

export default function GitHubSection() {
  const [repos, setRepos] = useState(fallbackRepos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Poovarasan-reva/repos?sort=updated&per_page=6")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(() => {
        // Keep fallback repos on error or rate limit
        setLoading(false);
      });
  }, []);


  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Github size={14} />
            <span>Open Source Ecosystem</span>
          </div>
          <h2 className="section-title">
            My Code. My Projects. <span className="gradient-text">My GitHub.</span>
          </h2>
          <p className="section-subtitle">
            Exploring transparent software development through active GitHub repositories.
          </p>
        </div>

        {/* GitHub Header CTA Box */}
        <div
          className="glass-card"
          style={{
            padding: "2rem",
            marginBottom: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
            background: "linear-gradient(135deg, rgba(13, 17, 26, 0.9) 0%, rgba(15, 23, 42, 0.7) 100%)",
            border: "1px solid rgba(99, 102, 241, 0.3)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "1rem",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--card-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)"
              }}
            >
              <Github size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700 }}>@Poovarasan-reva</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                Public repositories showcasing C, Java, Python, and Web implementations.
              </p>
            </div>
          </div>

          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Github size={18} />
            <span>View GitHub Profile</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Repositories Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.id || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="glass-card"
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-code)", color: "var(--accent-cyan)", fontWeight: 600 }}>
                    {repo.language || "Multi-Language"}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                    <Star size={14} style={{ color: "var(--accent-amber)" }} />
                    <span>{repo.stargazers_count || 0}</span>
                  </div>
                </div>

                <h4 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                  {repo.name}
                </h4>

                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "1rem" }}>
                  {repo.description || "Public repository exploring software development concepts."}
                </p>
              </div>

              <div style={{ paddingTop: "0.8rem", borderTop: "1px solid var(--card-border)" }}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.85rem",
                    color: "var(--accent-cyan)",
                    fontWeight: 600
                  }}
                >
                  <span>Explore Repository</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
