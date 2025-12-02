"use client";

import Lottie from "lottie-react";
import zAnimate from "../../../../me.json";
import { useEffect, useRef } from "react";

const PersonalAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } =
          containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        containerRef.current.style.setProperty("--mouse-x", x.toString());
        containerRef.current.style.setProperty("--mouse-y", y.toString());
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative group">
      {/* Main container */}
      <div className="relative rounded-2xl  border-white/20 p-6 shadow-2xl overflow-hidden">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl animate-shimmer" />

        {/* Lottie animation */}
        <div className="relative z-10">
          <Lottie
            className="md:h-full md:w-full transform transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
            animationData={zAnimate}
            loop={true}
          />
        </div>

        {/* Floating particles */}
        <div
          className="absolute top-2 left-2 w-2 h-2 bg-[#34a578] rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="absolute bottom-4 right-4 w-3 h-3 bg-cyan-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"></div>

        {/* Quote/Description Section */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-[#34a578] flex-shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
            <div>
              <p className="text-sm text-gray-300 italic">
                Turning ideas into interactive experiences through clean code
                and modern design
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#34a578]/30 to-transparent"></div>
                <span className="text-xs text-[#34a578] font-medium whitespace-nowrap">
                  Passion-driven developer
                </span>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#34a578]/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive hint */}
      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <div className="flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-xs text-white/70">
            zamirulkabir999@gmail.com
          </span>
          <div className="w-1 h-1 bg-[#34a578] rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAnimation;
