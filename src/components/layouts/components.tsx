"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id }: SectionProps) => (
  <section
    id={id}
    className={`py-20 px-4 relative overflow-hidden ${className}`}
  >
    {children}
  </section>
);

export const Container = ({ children, className = "" }: SectionProps) => (
  <div className={`max-w-4xl mx-auto relative ${className}`}>{children}</div>
);

export const Grid = ({ children, className = "" }: SectionProps) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
  >
    {children}
  </div>
);

export const Card = ({ children, className = "" }: SectionProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 p-6 transition-colors hover:bg-white/10 ${className}`}
  >
    {children}
  </motion.div>
);

export const GlassCard = ({ children, className = "" }: SectionProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`glass rounded-lg p-6 ${className}`}
  >
    {children}
  </motion.div>
);

export const Heading = ({ children, className = "" }: SectionProps) => (
  <h2
    className={`text-3xl md:text-4xl font-bold mb-6 text-gradient ${className}`}
  >
    {children}
  </h2>
);

export const SubHeading = ({ children, className = "" }: SectionProps) => (
  <h3 className={`text-xl font-semibold mb-4 ${className}`}>{children}</h3>
);

export const GradientBorder = ({ children, className = "" }: SectionProps) => (
  <div
    className={`p-[1px] rounded-lg bg-gradient-to-r from-primary via-secondary to-accent ${className}`}
  >
    <div className="bg-gray-900 rounded-lg p-6">{children}</div>
  </div>
);
