import React from "react";
import {
  ArrowRight,
  Mail,
  FolderOpen,
  Linkedin,
  Github,
  Phone,
  MapPin,
} from "lucide-react";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({
  name,
  title,
  description,
  imageUrl,
}) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 py-20 transition-colors"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I am{" "}
            <span className="text-indigo-600 dark:text-indigo-400">{name}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            {title}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>

          {/* SOCIAL LINKS (Clickable) */}
          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://www.linkedin.com/in/vaibhavi-mishra08"
              target="_blank"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            <a
              href="https://github.com/VaibhaviMishra-8"
              target="_blank"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          {/* PERSONAL INFO (Not Clickable) */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Mail className="w-5 h-5" />
              trisha.mishra.18.17@gmail.com
            </div>

            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Phone className="w-5 h-5" />
              +91 70115 13176
            </div>

            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <MapPin className="w-5 h-5" />
              Kolkata, West Bengal, India
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
  
  {/* VIEW PROJECTS → Scroll to section */}
  <a
    href="#projects"
    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition shadow-sm hover:shadow"
  >
    <FolderOpen className="w-5 h-5" /> View Projects
  </a>

  {/* CONTACT ME → Scroll to contact section */}
  <a
    href="#contact"
    className="flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition shadow-sm hover:shadow"
  >
    <Mail className="w-5 h-5" /> Contact Me
  </a>

</div>

        </div>

        {/* IMAGE */}
        {imageUrl && (
          <div className="flex justify-center">
            <img
              src={imageUrl}
              alt={name}
              className="w-80 h-80 rounded-xl object-cover shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};
