"use client";
import React from "react";
import Image from "next/image";
import { MySkillsCardProps } from "./Skills";
import "../Services/Services";
import { motion } from "framer-motion";

const SkillCard: React.FC<MySkillsCardProps> = ({ item }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: false }}
        className="skillsBg"
      >
        <div className="">
          <div className="flex justify-center items-center">
            <Image
              className="rounded-lg "
              src={item?.image}
              height={60}
              width={60}
              alt="JavascriptImg"
            />
          </div>
          <p className="pt-3 text-center text-xl">{item?.name}</p>
        </div>
      </motion.div>
    </>
  );
};

export default SkillCard;
