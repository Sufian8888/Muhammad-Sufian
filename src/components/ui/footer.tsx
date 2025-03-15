"use client";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const social = [
  {
    link: "https://github.com/Sufian8888",
    icon: FaGithub,
  },
  {
    link: "https://www.instagram.com/sufian8888/",
    icon: FaInstagram,
  },
  {
    link: "https://www.linkedin.com/in/muhammad-sufian-9309b8296",
    icon: FaLinkedin,
  },
];
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center h-96 bg-gray-50 dark:bg-gray-950 px-4">
      <div className="max-w-4xl text-gray-300 text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Have a Project Idea?
        </h2>
        <Link
          href="\contact"
          className="inline-flex items-center gap-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
        >
          Get in touch
        </Link>

        <div className="flex justify-center gap-6 mt-8">
          {social.map((id) => (
            <div
              key={id.icon.toString()} // Ensure a unique key
              onClick={() => window.open(id.link, "_blank")} // Open in a new tab
              className="w-10 h-10 p-2 border hover:scale-125 border-gray-600 rounded-full opacity-50 hover:opacity-100 transition cursor-pointer"
            >
              <id.icon size={24} />
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          © Copyright {currentYear}. All rights reserved.
        </p>
        <p className="text-sm">
          Made by{" "}
          <span className="text-blue-400 font-medium">Muhammad Sufian</span>.
        </p>
      </div>
    </footer>
  );
}
