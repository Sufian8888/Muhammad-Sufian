"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    technologies: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL", "C++"],
  },
  {
    category: "Frameworks",
    technologies: ["React.js", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    category: "Tools",
    technologies: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
  {
    category: "Databases",
    technologies: ["MySQL", "PostgreSQL", "MongoDB"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-8">
            <span className="text-indigo-600">02.</span> Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-md border border-gray-700"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-600/20 text-indigo-400 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 