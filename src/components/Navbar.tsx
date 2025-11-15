"use client";

import { useEffect, useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "skills", "projects", "education", "contact"];

    const handleScroll = () => {
      let current = "home";

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `transition ${
      activeSection === id
        ? "text-blue-300 font-semibold"
        : "text-white hover:text-blue-300"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0A1A2F]/80 backdrop-blur-md border-b border-blue-900/40 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Vaibhavi Mishra</h1>

        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#home" className={linkClass("home")}>Home</a>
          <a href="#skills" className={linkClass("skills")}>Skills</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#education" className={linkClass("education")}>Education</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0A1A2F] px-6 pb-4 space-y-3 font-medium">
          <a href="#home" className={linkClass("home")} onClick={() => setOpen(false)}>Home</a>
          <a href="#skills" className={linkClass("skills")} onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" className={linkClass("projects")} onClick={() => setOpen(false)}>Projects</a>
          <a href="#education" className={linkClass("education")} onClick={() => setOpen(false)}>Education</a>
          <a href="#contact" className={linkClass("contact")} onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};
