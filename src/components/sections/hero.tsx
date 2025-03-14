"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiUserPlus } from "react-icons/fi";
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
      className="pt-20 md:pt-24 pb-12 relative overflow-hidden bg-[#0d0f17] text-white"
    >
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

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 text-gray-300 text-sm mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Available for work
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Hi there! I&apos;m Muhammad Sufian
              </h1>
              <p className="text-lg text-gray-400 mt-4 mb-6">
                I&apos;m a passionate Front-End Developer crafting seamless and
                dynamic user experiences with React, Next.js, and modern UI
                frameworks like Tailwind CSS.
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                <FiUserPlus className="w-5 h-5" />
                Let&apos;s Connect
              </Link>
            </div>
            <div className="rounded-xl flex items-center justify-center">
              <Image
                src="/Profile.jpeg"
                alt="Muhammad Sufian"
                width={200}
                height={200}
                className="w-48 h-48 rounded-full object-cover cursor-pointer hover:shadow-lg transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/200/374151/FFFFFF?text=Profile";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
