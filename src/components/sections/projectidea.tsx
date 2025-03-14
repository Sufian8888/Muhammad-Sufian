"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function ProjectIdea() {
  const circles = useMemo(
    () =>
      Array(20)
        .fill(0)
        .map((_, i) => ({
          top: `${i * 5}%`,
          left: `${(i * 7) % 100}%`,
          size: 50 + (i % 3) * 50,
          delay: i * 0.2,
        })),
    []
  );

  return (
    <section
      id="projectid"
      className="py-24 px-4 relative overflow-hidden border-t border-gray-200 dark:border-gray-800"
    >
      {/* Animated tech background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          {circles.map((circle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: circle.delay,
              }}
              className="absolute rounded-full bg-gray-500"
              style={{
                top: circle.top,
                left: circle.left,
                width: `${circle.size}px`,
                height: `${circle.size}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Have a Project Idea?</h2>
          <div className="mb-10">
            <a
              href="mailto:msufianasad@gmail.com"
              className="border-2 border-gray-900 dark:border-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 text-gray-900 dark:text-white font-medium px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
