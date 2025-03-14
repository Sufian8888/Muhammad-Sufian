"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
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

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 md:hidden p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </button>

      {/* Theme switch button - fixed in top right for desktop */}
      <div className="hidden md:block fixed top-4 right-4 z-50">
        <ThemeSwitch />
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex flex-col fixed left-4 top-1/2 -translate-y-1/2 w-16  bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-300 z-40 rounded py-6 shadow-lg">
        <div className="flex flex-col justify-evenly gap-6">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center justify-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <div className="p-2 rounded-lg group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
                {link.icon}
              </div>
              {/* <span className="text-xs mt-1">{link.label}</span> */}
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
        className={`md:hidden fixed top-0 bottom-0 left-0 w-64 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out shadow-xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-xl font-bold">
              yourname
            </Link>
            <button onClick={() => setIsOpen(false)}>
              <FiX className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-4">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Theme</span>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
