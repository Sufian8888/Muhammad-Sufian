"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const [isClient, setIsClient] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm("service_yv7aihp", "template_ybv88ea", formRef.current, {
        publicKey: "0P-1kuJmTaezamU0k",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again!");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-[#0d1423] text-white relative overflow-hidden">
      {isClient && (
        <div className="absolute inset-0 opacity-10 grid grid-cols-6 gap-2">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#181e2e] p-8 rounded-lg shadow-lg w-96 relative z-10"
      >
        <h2 className="text-center text-2xl font-semibold text-gray-200">
          Have a Project Idea?
        </h2>
        <p className="text-center text-gray-400 mt-1">msufianasad@gmail.com</p>

        <div className="flex justify-center gap-4 my-4">
          <a href="https://github.com/sufian8888" target="_blank">
            <FaGithub className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-sufian-9309b8296/"
            target="_blank"
          >
            <FaLinkedin className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
          </a>
        </div>

        {/* Contact Form using EmailJS */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact No"
            className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-2 text-white cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:opacity-80 transition"
          >
            Send Message
          </motion.button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-4">
          © Copyright 2024. All Rights Reserved.
          <br />
          Made by{" "}
          <span className="text-white font-semibold">Muhammad Sufian</span>
        </p>
      </motion.div>
    </section>
  );
}
