"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-8">
            <span className="text-indigo-600">01.</span> About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className="text-gray-400 mb-4">
                Hello! My name is Your Name, and I enjoy creating things that live on the internet. 
                My interest in web development started back in 2012 when I decided to try editing custom 
                Tumblr themes &mdash; turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!
              </p>
              
              <p className="text-gray-400 mb-4">
                Fast-forward to today, and I&apos;ve had the privilege of working at an advertising agency, 
                a start-up, a huge corporation, and a student-led design studio. My main focus these days 
                is building accessible, inclusive products and digital experiences.
              </p>
              
              <p className="text-gray-400 mb-6">
                Here are a few technologies I&apos;ve been working with recently:
              </p>
              
              <ul className="grid grid-cols-2 gap-2 text-gray-400 mb-6">
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">▹</span> JavaScript (ES6+)
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">▹</span> React.js
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">▹</span> Next.js
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">▹</span> TypeScript
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">▹</span> HTML & CSS
                </li>
                <li className="flex items-center">
                  <span className="text-indigo-600 mr-2">▹</span> SQL
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <div className="relative group">
                <div className="absolute -inset-2 rounded-md bg-indigo-600/20 opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
                <div className="relative aspect-square rounded-md overflow-hidden border-2 border-indigo-600 bg-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Your Photo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 