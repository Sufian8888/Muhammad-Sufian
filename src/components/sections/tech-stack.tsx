"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    name: "Html",
    category: "Front End",
    icon: "/html.webp",
  },
  {
    name: "Css",
    category: "Front End",
    icon: "/css.webp",
  },
  {
    name: "Next JS",
    category: "Frontend Framework",
    icon: "/nextjs.png",
  },

  {
    name: "React JS",
    category: "Frontend Library",
    icon: "/react.webp",
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    icon: "/tailwind.webp",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "/mongodb.webp",
  },
  {
    name: "Node JS",
    category: "Backend Development",
    icon: "/nodejs.webp",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-20 px-4 relative overflow-hidden border-t border-b border-gray-200 dark:border-gray-800"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 opacity-40" />

      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold">Tech Stack</h2>
          <span className="text-gray-600 dark:text-gray-400">Full Stack</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden p-6 group hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            >
              <div className="relative z-10 flex flex-col">
                <div className="w-12 h-12 mb-4">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
