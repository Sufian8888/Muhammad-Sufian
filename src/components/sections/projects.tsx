"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useMemo } from "react";
import Image from "next/image";
// Project data - replace with your own
const projects = [
  {
    id: "https://github.com/Sufian8888/Amazon-Clone",
    title: "Amazon Clone",
    category: "E-commerce",
    image: "/images/Amazon-Ecommerce.jpg",
  },
  {
    id: "https://github.com/Sufian8888/PasswordGenerator",
    title: "Password Generator",
    category: "Accounting",
    image: "/images/Password.png",
  },
  {
    id: "https://github.com/Sufian8888/WeatherApp",
    title: "Weather App",
    category: "Weather",
    image: "/images/Weather App.jpg",
  },
  {
    id: "https://github.com/Sufian8888/Todolist",
    title: "Todo List",
    category: "Educational",
    image: "/images/TO DO .png",
  },
  {
    id: 5,
    title: "Genral Blogging Webiste",
    category: "Business",
    image: "/images/project-placeholder.svg",
  },
  {
    id: "https://github.com/JokKing17/NextJsEcommerceProject",
    title: "Clothing Website",
    category: "E-commerce",
    image: "/images/Clothing.jpg",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const gridItems = useMemo(
    () =>
      Array(64)
        .fill(0)
        .map((_, i) => ({
          delay: i * 0.1,
        })),
    []
  );

  return (
    <section
      id="projects"
      className="py-20 px-4 relative overflow-hidden border-t border-b border-gray-200 dark:border-gray-800"
    >
      {/* Animated tech background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          <div className="grid grid-cols-8 gap-4 h-full transform rotate-12 scale-150">
            {gridItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.1 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: item.delay,
                }}
                className="bg-gray-500 w-full h-full"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Projects and Explorations
        </h2>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg transition-colors border-2 ${
                filter === category
                  ? "border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-gray-900"
                  : "border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 group hover:shadow-2xl hover:scale-105 transform transition-all duration-500 ease-out"
            >
              <div className="aspect-[6/3]  relative bg-gray-100 dark:bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <Link
                  href={`${project.id}`}
                  className="text-gray-900 dark:text-white font-medium flex justify-center items-center bg-blue-600 p-2 rounded hover:scale-105  mt-2 transition-colors hover:text-gray-900 dark:hover:text-gray-300"
                >
                  View Code on Github
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
