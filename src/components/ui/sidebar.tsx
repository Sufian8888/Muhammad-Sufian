"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiHome,
  FiLayers,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

const NavLinks = [
  { href: "#home", label: "Home", icon: <FiHome className="w-5 h-5" /> },
  {
    href: "#tech-stack",
    label: "Tech Stack",
    icon: <FiLayers className="w-5 h-5" />,
  },
  {
    href: "#projects",
    label: "Projects",
    icon: <FiBriefcase className="w-5 h-5" />,
  },
  { href: "/contact", label: "Contact", icon: <FiMail className="w-5 h-5" /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-indigo-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 cursor-pointer md:hidden p-2 rounded-full bg-gray-800 shadow-lg text-gray-300 hover:bg-gray-700"
      >
        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </button>

      {/* Desktop sidebar */}
      <div className="hidden md:flex flex-col fixed left-4 top-1/2 -translate-y-1/2 w-16 bg-gray-900 border border-gray-800 transition-all duration-300 z-40 rounded py-6 shadow-lg">
        <div className="flex flex-col justify-evenly gap-6">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center justify-center text-gray-400 hover:text-indigo-400"
            >
              <div className="p-2 rounded-lg group-hover:bg-gray-800 transition-colors">
                {link.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile sidebar (overlay) */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile sidebar menu */}
      <div
        className={`md:hidden fixed top-0 bottom-0 left-0 w-64 bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out shadow-xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-xl font-bold text-white">
              Muhammad Sufian
            </Link>
            <button onClick={() => setIsOpen(false)}>
              <FiX className="h-6 w-6 text-gray-300" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center text-gray-300 hover:text-indigo-400 py-2"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-4">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
