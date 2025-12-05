"use client";
import React from "react";
import SlideUp from "@/components/Shared/animations/SlideUp";

const ExperienceHeader: React.FC = () => {
  return (
    <SlideUp delay={0.1}>
      <div className="relative text-center mb-12 md:mb-16">
        <div className="flex flex-col items-center gap-6 mb-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-1 bg-gradient-to-r from-transparent to-[#34a578] rounded-full"></div>
            <div className="px-5 py-2.5 bg-gradient-to-r from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-full">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300 tracking-widest">
                  CAREER TIMELINE
                </span>
                <div
                  className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-[#34a578] rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
              </div>
            </div>
            <div className="w-8 h-1 bg-gradient-to-r from-[#34a578] to-transparent rounded-full"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 relative">
          <span className="relative inline-block">
            <span className="text-white relative z-10">Experience</span>
            <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
          </span>
          <span className="relative ml-3 md:ml-6 inline-block animate-fade-up">
            <span className="relative z-10 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent">
              Journey
            </span>
          </span>
        </h1>

        <div className="mt-12 flex items-center justify-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
          <div className="flex items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-[#34a578] to-cyan-400 animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            My professional growth journey, unfolding through diverse roles and
            impactful projects
          </p>
        </div>
      </div>
    </SlideUp>
  );
};

export default ExperienceHeader;
