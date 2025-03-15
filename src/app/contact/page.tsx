"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("https://getform.io/f/byvkqgka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", contact: "", message: "" }); // Reset form
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error: unknown) {
      setStatus(
        error instanceof Error ? error.message : "Failed to send message."
      );
    } finally {
      setIsSubmitting(false);
    }
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact No"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
          ></textarea>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-2 text-white cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:opacity-80 transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {status && (
          <p className="text-center text-sm mt-4 text-green-400">{status}</p>
        )}

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

// "use client";

// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { useState, useEffect, ChangeEvent } from "react";

// export default function Contact() {
//   const [isClient, setIsClient] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     message: "",
//   });

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section className="flex items-center justify-center min-h-screen bg-[#0d1423] text-white relative overflow-hidden">
//       {isClient && (
//         <div className="absolute inset-0 opacity-10 grid grid-cols-6 gap-2">
//           {Array.from({ length: 24 }, (_, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0.1 }}
//               animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
//               transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
//               className="w-full h-8 bg-gray-500 rounded-full transform rotate-45"
//             />
//           ))}
//         </div>
//       )}

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-[#181e2e] p-8 rounded-lg shadow-lg w-96 relative z-10"
//       >
//         <h2 className="text-center text-2xl font-semibold text-gray-200">
//           Have a Project Idea?
//         </h2>
//         <p className="text-center text-gray-400 mt-1">msufianasad@gmail.com</p>

//         <div className="flex justify-center gap-4 my-4">
//           <a href="https://github.com/sufian8888" target="_blank">
//             <FaGithub className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
//           </a>
//           <a
//             href="https://linkedin.com/in/muhammad-sufian-9309b8296/"
//             target="_blank"
//           >
//             <FaLinkedin className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
//           </a>
//         </div>

//         {/* 🔹 FormSubmit Integration */}
//         <form
//           action="https://getform.io/f/byvkqgka"
//           method="POST"
//           className="space-y-4"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
//           />
//           <input
//             type="text"
//             name="contact"
//             placeholder="Contact No"
//             value={formData.contact}
//             onChange={handleChange}
//             className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
//           ></textarea>

//           {/* Hidden Fields (For Better Handling) */}
//           <input type="hidden" name="_captcha" value="false" />
//           <input
//             type="hidden"
//             name="_next"
//             value="https://muhammadsufian.vercel.app/contact"
//           />

//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full p-2 text-white cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:opacity-80 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>

//         <p className="text-center text-gray-500 text-sm mt-4">
//           © Copyright 2024. All Rights Reserved.
//           <br />
//           Made by{" "}
//           <span className="text-white font-semibold">Muhammad Sufian</span>
//         </p>
//       </motion.div>
//     </section>
//   );
// }
