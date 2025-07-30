"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiLayers,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

const NavLinks = [
  { href: "/", label: "Home", icon: <FiHome className="w-5 h-5" /> },
  {
    href: "/#tech-stack",
    label: "Tech Stack",
    icon: <FiLayers className="w-5 h-5" />,
  },
  {
    href: "/#projects",
    label: "Projects",
    icon: <FiBriefcase className="w-5 h-5" />,
  },
  { href: "/contact", label: "Contact", icon: <FiMail className="w-5 h-5" /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    // Set initial active link based on current path and hash
    const updateActiveLink = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === "/contact") {
        setActiveLink("/contact");
        setScrollProgress(0); // Reset progress bar on contact page
      } else if (hash && path === "/") {
        setActiveLink(`/${hash}`);
      } else if (path === "/") {
        setActiveLink("/");
      }
    };

    // Update active link on initial load and when URL changes
    updateActiveLink();
    window.addEventListener("popstate", updateActiveLink);
    window.addEventListener("hashchange", updateActiveLink);

    return () => {
      window.removeEventListener("popstate", updateActiveLink);
      window.removeEventListener("hashchange", updateActiveLink);
    };
  }, []);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      // Only show progress bar on home page, set to 0 on contact page
      if (window.location.pathname === "/contact") {
        setScrollProgress(0);
        return;
      }

      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Only update active link based on scroll if we're on the home page
      if (window.location.pathname === "/") {
        // Update active link based on scroll position
        const sections = ["home", "tech-stack", "projects"];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveLink(section === "home" ? "/" : `/#${section}`);
              break;
            }
          }
        }
      }
    };

    // Initial check for contact page
    if (window.location.pathname === "/contact") {
      setScrollProgress(0);
      setActiveLink("/contact");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-800/50 z-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </motion.div>

      {/* Mobile menu button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 cursor-pointer md:hidden p-3 rounded-full bg-gray-900/90 backdrop-blur-sm border border-gray-800 shadow-lg text-gray-300 hover:bg-gray-800"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </motion.div>
      </motion.button>

      {/* Desktop sidebar */}
      <motion.div
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:flex flex-col fixed left-4 top-1/2 -translate-y-1/2 w-16 bg-gray-900/80 backdrop-blur-sm border border-gray-800 transition-all duration-300 z-40 rounded-2xl py-6 shadow-2xl"
      >
        <div className="flex flex-col justify-evenly gap-6">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex flex-col items-center justify-center ${
                activeLink === link.href ||
                (activeLink === "/" && link.href === "/")
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-indigo-400"
              }`}
              onClick={(e) => {
                if (link.href === "/contact") {
                  setScrollProgress(0);
                  setActiveLink("/contact");
                } else if (
                  window.location.pathname === "/contact" &&
                  link.href.includes("#")
                ) {
                  e.preventDefault();
                  window.location.href = link.href;
                }
              }}
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className={`p-2 rounded-lg ${
                  activeLink === link.href
                    ? "bg-gray-800/80"
                    : "group-hover:bg-gray-800/60"
                } transition-colors relative`}
              >
                {link.icon}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-4 bg-blue-400 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Mobile sidebar (overlay) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 ${
          !isOpen && "pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile sidebar menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="md:hidden fixed top-0 bottom-0 left-0 w-64 bg-gray-900/95 backdrop-blur-sm z-40 border-r border-gray-800 shadow-2xl"
      >
        <div className="flex flex-col h-full p-6">
          <motion.div
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/"
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600"
            >
              Muhammad Sufian
            </Link>
            <motion.button
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX className="h-6 w-6 text-gray-300" />
            </motion.button>
          </motion.div>

          <div className="flex flex-col gap-4">
            {NavLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all ${
                    activeLink === link.href ||
                    (activeLink === "/" && link.href === "/")
                      ? "text-blue-400 bg-gray-800/50"
                      : "text-gray-300 hover:text-indigo-400 hover:bg-gray-800/30"
                  }`}
                  onClick={(e) => {
                    setIsOpen(false);
                    // If we're on the contact page and clicking a hash link, navigate to home first
                    if (
                      window.location.pathname === "/contact" &&
                      link.href.includes("#")
                    ) {
                      e.preventDefault();
                      window.location.href = link.href;
                    }
                  }}
                >
                  <span className="mr-4">{link.icon}</span>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
