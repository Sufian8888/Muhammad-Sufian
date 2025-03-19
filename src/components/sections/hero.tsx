"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { FiUserPlus } from "react-icons/fi";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useEffect, useState } from "react";

import Image from "next/image";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="home"
      className="pt-20 md:pt-14 pb-12 relative overflow-hidden bg-[#0d0f17] text-white"
    >
      {/* Animated Background */}

      {isClient && (
        <div className="absolute inset-0 opacity-5 grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }, (_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              className="w-full h-8 bg-gray-500 rounded-full transform rotate-45"
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center justify-between pl-10 pr-10 mb-16">
          {/* Availability Section */}

          <div className="flex justify-center animate-pulse items-center gap-3 text-gray-300 text-sm mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>

              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Available for work
          </div>

          {/* Social Links Section */}

          <div className="flex justify-center gap-4">
            {/* GitHub */}

            <a
              href="https://github.com/sufian8888"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 cursor-pointer hover:text-white transition duration-300 hover:scale-125"
            >
              <FaGithub size={28} />
            </a>

            {/* LinkedIn */}

            <a
              href="https://linkedin.com/in/muhammad-sufian-9309b8296/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 cursor-pointer hover:text-white transition duration-300 hover:scale-125"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center my-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <Image
                src="/Profile.png"
                alt="Muhammad Sufian"
                width={200}
                height={200}
                className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-[50%] object-cover border-4 hover:scale-110 cursor-pointer transition duration-300 shadow-[0px_0px_40px_rgba(0,0,255,0.7)]"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/200/374151/FFFFFF?text=Profile";
                }}
              />
            </motion.div>
          </div>

          {/* Sparkling Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-extrabold leading-tight relative "
          >
            Hi there! I&apos;m <br className="block md:hidden" />
            <span className="relative inline-block mt-4 animate-pulse">
              Muhammad Sufian
            </span>
          </motion.h1>

          {/* Subtitle / Intro */}

          <p className="text-lg text-gray-400 mt-4 mb-6">
            I&apos;m a passionate Front-End Developer crafting seamless and
            dynamic user experiences with React, Next.js, and modern UI
            frameworks like Tailwind CSS.
          </p>

          {/* Connect Button */}

          <Link
            href="https://github.com/Sufian8888"
            className="inline-flex items-center gap-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
          >
            <FiUserPlus className="w-5 h-5" />
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </section>
  );
}
