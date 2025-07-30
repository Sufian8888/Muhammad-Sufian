"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-950 to-black flex items-center justify-center z-50">
      <div className="relative">
        {/* Background blur effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 blur-3xl bg-blue-500/20"
          style={{ transform: "scale(2)" }}
        />

        {/* Outer circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-24 h-24 rounded-full border-4 border-gray-700 relative"
        >
          {/* Spinning gradient circles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2 - i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-full h-full rounded-full border-4 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent"
                style={{ opacity: 1 - i * 0.2 }}
              />
            </motion.div>
          ))}

          {/* Pulsing center */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full blur-sm" />
          </motion.div>
        </motion.div>

        {/* Loading text with gradient */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute mt-32 left-1/2 -translate-x-1/2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white font-medium tracking-wider"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
