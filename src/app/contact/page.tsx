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
  const [status, setStatus] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://us-central1-your-project-id.cloudfunctions.net/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message Sent Successfully!");
        setFormData({ name: "", email: "", contact: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
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
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-2xl font-semibold text-gray-200"
        >
          Have a Project Idea?
        </motion.h2>
        <motion.p className="text-center text-gray-400 mt-1">msufianasad@gmail.com</motion.p>

        <motion.div className="flex justify-center gap-4 my-4">
          <a href="https://github.com/sufian8888" target="_blank">
            <FaGithub className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
          </a>
          <a href="https://linkedin.com/in/muhammad-sufian-9309b8296/" target="_blank">
            <FaLinkedin className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
          </a>
        </motion.div>

        <motion.form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" />
          <input type="text" name="contact" placeholder="Contact No" value={formData.contact} onChange={handleChange} className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"></textarea>
          <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full p-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:opacity-80 transition">
            Send Message
          </motion.button>
        </motion.form>

        {status && <p className="text-center text-gray-400 mt-2">{status}</p>}

        <motion.p className="text-center text-gray-500 text-sm mt-4">
          © Copyright 2024. All Rights Reserved.<br />
          Made by <span className="text-white font-semibold">Muhammad Sufian</span>
        </motion.p>
      </motion.div>
    </section>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { useState, useEffect } from "react";


// export default function Contact() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <section className="flex items-center justify-center min-h-screen bg-[#0d1423] text-white relative overflow-hidden">
//       {/* Animated Background */}
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
//         <motion.h2 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="text-center text-2xl font-semibold text-gray-200"
//         >
//           Have a Project Idea?
//         </motion.h2>
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="text-center text-gray-400 mt-1"
//         >
//           msufianasad@gmail.com
//         </motion.p>

//         {/* Social Icons */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className="flex justify-center gap-4 my-4"
//         >
//           <a
//             href="https://github.com/sufian8888"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
//           </a>
//           <a
//             href="https://linkedin.com/in/muhammad-sufian-9309b8296/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
//           </a>
//         </motion.div>

//         {/* Contact Form */}
//         <motion.form 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           className="space-y-4"
//         >
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
//           />
//           <input
//             type="text"
//             placeholder="Contact No"
//             className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
//           />
//           <textarea
//             placeholder="Message"
//             className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
//           ></textarea>

//           {/* Send Button */}
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full p-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:opacity-80 transition"
//           >
//             Send Message
//           </motion.button>
//         </motion.form>

//         {/* Footer */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.5 }}
//           className="text-center text-gray-500 text-sm mt-4"
//         >
//           © Copyright 2024. All Rights Reserved.
//           <br />
//           Made by{" "}
//           <span className="text-white font-semibold">Muhammad Sufian</span>
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// }
