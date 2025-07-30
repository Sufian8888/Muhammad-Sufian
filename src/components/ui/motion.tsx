"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Fade in animation component
export const FadeIn = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

// Scale in animation component
export const ScaleIn = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

// Slide in from side animation component
export const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
}: {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
}) => {
  const directionMap = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    top: { x: 0, y: -100 },
    bottom: { x: 0, y: 100 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

// Stagger children animation component
export const StaggerContainer = ({
  children,
  delay = 0.1,
}: {
  children: ReactNode;
  delay?: number;
}) => (
  <motion.div
    variants={{
      show: {
        transition: {
          staggerChildren: delay,
        },
      },
    }}
    initial="hidden"
    animate="show"
  >
    {children}
  </motion.div>
);

// Stagger item component
export const StaggerItem = ({ children }: { children: ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// Hover scale effect component
export const HoverScale = ({
  children,
  scale = 1.05,
}: {
  children: ReactNode;
  scale?: number;
}) => (
  <motion.div
    whileHover={{ scale }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);
