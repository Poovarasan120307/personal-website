import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroStats from "./components/HeroStats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import InnovationSection from "./components/InnovationSection";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import GitHubSection from "./components/GitHubSection";
import ExploringAndInterests from "./components/ExploringAndInterests";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <HeroStats />
        <About />
        <Skills />
        <Projects />
        <InnovationSection />
        <Certificates />
        <Achievements />
        <Education />
        <GitHubSection />
        <ExploringAndInterests />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
