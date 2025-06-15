"use client";
import React from "react";
import { motion } from "framer-motion";

interface SlideLeftProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SlideLeft = ({ children, className = "", delay = 1 }: SlideLeftProps) => {
  const slideLeftVariants = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: delay === 1 ? 0 : 0.4 * delay,
      },
    },
  };
  return (
    <motion.div
      className={className}
      variants={slideLeftVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideLeft;
