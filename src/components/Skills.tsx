import { Code, Database, Cpu, Wrench, User } from "lucide-react";
import { JSX } from "react";

interface Skill {
  name: string;
  category: string;
}

interface SkillsProps {
  skills: Skill[];
}

const categoryColors: Record<string, string> = {
  "Programming Languages": "indigo",
  "Frontend Development": "purple",
  "Backend Development": "green",
  "Database": "orange",
  "Tools & Platforms": "cyan",
  "Soft Skills": "pink"
};

const categoryIcons: Record<string, JSX.Element> = {
  "Programming Languages": <Code className="w-6 h-6 text-indigo-400" />,
  "Frontend Development": <Code className="w-6 h-6 text-purple-400" />,
  "Backend Development": <Cpu className="w-6 h-6 text-green-400" />,
  "Database": <Database className="w-6 h-6 text-orange-400" />,
  "Tools & Platforms": <Wrench className="w-6 h-6 text-cyan-400" />,
  "Soft Skills": <User className="w-6 h-6 text-pink-400" />
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 mb-12 rounded-full"></div>

        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-14 text-lg">
          A structured overview of my technical skills, development tools, and professional strengths.
        </p>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {categories.map(category => {
            const color = categoryColors[category] || "indigo";

            return (
              <div
                key={category}
                className={`
                  p-6 rounded-2xl bg-gray-100 dark:bg-gray-800
                  border border-${color}-500/40
                  hover:border-${color}-400
                  shadow-sm hover:shadow-md transition-all
                `}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  {categoryIcons[category]}
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter(skill => skill.category === category)
                    .map(skill => {
                      return (
                        <span
                          key={skill.name}
                          className={`
                            px-4 py-2 rounded-full text-sm font-medium
                            bg-${color}-100 text-${color}-700
                            dark:bg-${color}-900/40 dark:text-${color}-200
                            hover:scale-105 transition-transform
                          `}
                        >
                          {skill.name}
                        </span>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
