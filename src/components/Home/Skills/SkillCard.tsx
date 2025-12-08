import React from "react";
import Image from "next/image";

import "../Services/Services";
import SlideUp from "@/components/Shared/animations/SlideUp";
// Add interface for the props
interface SkillCardProps {
  item: {
    _id: string;
    name: string;
    image: string;
    percentage?: number;
    description?: string;
  };
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ item, delay = 0 }) => {
  return (
    <SlideUp delay={delay}>
      <div className="group relative cursor-pointer">
        {/* Glowing background effect */}
        <div className="absolute -inset-3 bg-gradient-to-r from-[#34a578]/20 via-transparent to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

        {/* Main card container */}
        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-all duration-500 group-hover:scale-105">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

          {/* Floating corner decorations */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/10 rounded-tl-lg opacity-0 group-hover:opacity-100 group-hover:border-[#34a578] transition-all duration-300"></div>
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/10 rounded-br-lg opacity-0 group-hover:opacity-100 group-hover:border-cyan-400 transition-all duration-300"></div>

          {/* Icon/image container with hover effects */}
          <div className="relative flex justify-center items-center mb-5">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#34a578]/30 to-cyan-500/30 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* Middle ring */}
            <div className="absolute -inset-2 border-2 border-[#34a578]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Main icon container */}
            <div className="relative w-20 md:h-[60px] h-14 rounded-2xl bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#34a578]/10 group-hover:to-cyan-500/10 transition-all duration-500 group-hover:rotate-3">
              <Image
                className="rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                src={item?.image}
                height={50}
                width={50}
                alt={item?.name || "Skill icon"}
              />

              {/* Floating dots */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#34a578] rounded-full opacity-0 group-hover:opacity-100 animate-bounce"></div>
              <div
                className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>

          {/* Skill name with gradient */}
          <p className="text-center md:text-xl text-lg font-semibold mb-2">
            <span className="text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-200 group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
              {item?.name}
            </span>
          </p>

          {/* Hover indicator */}
          <div className="mt-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-1 text-sm text-[#34a578]">
              {/* <span>View details</span> */}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>

          {/* Bottom gradient line */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] rounded-full group-hover:w-16 transition-all duration-500"></div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-[#34a578] rounded-full animate-pulse"></div>
            <div
              className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-1 h-1 bg-[#45d19c] rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default SkillCard;
