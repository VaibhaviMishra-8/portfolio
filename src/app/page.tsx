import { Navbar } from '@/src/components/Navbar';
import { Hero } from '@/src/components/Hero';
import { Skills } from '@/src/components/Skills';
import { Projects } from '@/src/components/Projects';
import { Education } from '@/src/components/Education';
import { Contact } from '@/src/components/Contact';

export default function Home() {
  const personalData = {
    name: "Vaibhavi Mishra",
    title: "Full Stack Developer",
    description:
      "I’m a third-year Computer Science and Engineering student with a strong foundation in full-stack development, data structures & algorithms, and software engineering principles.",
    imageUrl: "/trisha.jpg",
  };

  const skills = [
  // Programming Languages
  { name: "C++", category: "Programming Languages", level: 4 },
  { name: "Java", category: "Programming Languages", level: 4 },
  { name: "Python", category: "Programming Languages", level: 4 },
  { name: "JavaScript", category: "Programming Languages", level: 4 },
  { name: "TypeScript", category: "Programming Languages", level: 4 },

  // Frontend Development
  { name: "React.js", category: "Frontend Development", level: 5 },
  { name: "Next.js", category: "Frontend Development", level: 5 },
  { name: "Tailwind CSS", category: "Frontend Development", level: 4 },
  { name: "ShadCN UI", category: "Frontend Development", level: 3 },
  { name: "HTML5", category: "Frontend Development", level: 5 },
  { name: "CSS3", category: "Frontend Development", level: 5 },

  // Backend Development
  { name: "Node.js", category: "Backend Development", level: 4 },
  { name: "Express.js", category: "Backend Development", level: 4 },
  { name: "REST APIs", category: "Backend Development", level: 4 },

  // Database
  { name: "PostgreSQL", category: "Database", level: 3 },
  { name: "MySQL", category: "Database", level: 3 },
  { name: "MongoDB", category: "Database", level: 3 },
  { name: "Redis (Upstash)", category: "Database", level: 2 },

  // Tools & Platforms
  { name: "Git & GitHub", category: "Tools & Platforms", level: 5 },
  { name: "Linux", category: "Tools & Platforms", level: 4 },
  { name: "Docker", category: "Tools & Platforms", level: 3 },
  { name: "Vercel", category: "Tools & Platforms", level: 3 },
  { name: "Drizzle ORM", category: "Tools & Platforms", level: 2 },
  { name: "Authentication (Stack Auth / NextAuth)", category: "Tools & Platforms", level: 3 },

  // Soft Skills
  { name: "Problem Solving", category: "Soft Skills", level: 5 },
  { name: "Critical Thinking", category: "Soft Skills", level: 5 },
  { name: "Teamwork", category: "Soft Skills", level: 5 },
  { name: "Communication", category: "Soft Skills", level: 5 },
  { name: "Adaptability", category: "Soft Skills", level: 5 },
];


  const projects = [
    {
      id: "1",
      title: "Mode",
      description:
        "A full-stack issue tracking application built with Next.js, Drizzle ORM, PostgreSQL, and Server Actions. It allows authenticated users to create, update, manage, and delete issues with real-time UI updates using dynamic rendering and cache revalidation.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
      imageUrl: "mode.png",
      githubUrl: "https://github.com/VaibhaviMishra-8/Mode",
      liveUrl: "https://mode-chi.vercel.app",
    },
    {
      id: "2",
      title: "Wikimasters",
      description:
        "A full-stack article publishing platform where users can create, edit, and manage content with secure authentication and a clean, modern writing interface. It supports rich text editing, image uploads, and fast server-side operations using Next.js server actions.",
      technologies: ["Next.js", "React 19", "Tailwind CSS", "PostgreSQL","TypeScript"],
      imageUrl: "wikimaster.png",
      githubUrl: "https://github.com/VaibhaviMishra-8/wikimasters",
      liveUrl: "https://wikimasters-beige.vercel.app",
    },
    {
      id: "3",
      title: "food-delivery-app",
      description:
        "A full-stack food delivery application that allows users to browse restaurants, explore menus, place orders, and track deliveries in real time.Built with a focus on smooth user experience, responsive design, and efficient backend integration.",
      technologies: ["React.js", "React Router", "API integration"],
      imageUrl: "/food-app.png",
      githubUrl: "https://github.com/VaibhaviMishra-8/food-delivery-app",
      
    },
  ];

  const education = [
    {
      id: "1",
      degree: "B.Tech in Computer Science and Engineering (Data Science)",
      institution: "MCKV Institute of Engineering, Howrah, West Bengal",
      duration: "2023 - Present",
      gpa: "7.5 (up to 4th semester)",
      description:
        "Studying core computer science subjects with a focus on data science, algorithms, and software engineering.",
    },
    {
      id: "2",
      degree: "Higher Secondary Education (11th and 12th)",
      institution: "BSP Senior Secondary School sector-10, Bhilai, Chattisgarh",
      duration: "2021-2023",
      description:
        "Completed higher secondary education with strong performance in mathematics and science subjects.",
    },
    {
      id: "3",
      degree: "Higher Secondary Education (9th and 10th)",
      institution: "BSP Senior Secondary School sector-7, Bhilai, Chattisgarh",
      duration: "2019-2021",
      description:
        "Completed higher secondary education with strong performance in mathematics and science subjects.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero {...personalData} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Education education={education} />
      <Contact />
    </main>
  );
}
