import React from "react";
import Image from "next/image";
import { MySkillsCardProps } from "./Skills";
import "../Services/Services";
import SlideUp from "@/components/Shared/animations/SlideUp";

const SkillCard: React.FC<MySkillsCardProps> = ({ item, delay = 0 }) => {
  return (
    <>
      <SlideUp delay={delay}>
        <div className="skillsBg  relative cursor-pointer overflow-hidden">
          {/* Top gradient border */}
          <div
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent`}
          />
          {/* Bottom gradient border */}
          <div
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent`}
          />
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
        </div>
      </SlideUp>
    </>
  );
};

export default SkillCard;
