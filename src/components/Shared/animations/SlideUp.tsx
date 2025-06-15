"use client";
import React from "react";
import { motion } from "framer-motion";

interface SlideUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SlideUp = ({ children, className = "", delay = 1 }: SlideUpProps) => {
  const slideLeftVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
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

export default SlideUp;
