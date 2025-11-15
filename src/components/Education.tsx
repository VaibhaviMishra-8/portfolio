import React from 'react';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  gpa?: string;
}

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 px-4 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#1E293B] border border-indigo-800/40 rounded-xl p-6 hover:border-indigo-500/70 transition"
            >
              <h3 className="text-2xl font-semibold text-white">
                {edu.degree}
              </h3>

              <p className="text-indigo-300 text-lg font-medium mt-1">
                {edu.institution}
              </p>

              <p className="text-gray-400 mt-1">{edu.duration}</p>

              {edu.gpa && (
                <p className="text-gray-300 mt-3">
                  <span className="font-semibold text-white">GPA:</span> {edu.gpa}
                </p>
              )}

              {edu.description && (
                <p className="text-gray-300 mt-4">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
