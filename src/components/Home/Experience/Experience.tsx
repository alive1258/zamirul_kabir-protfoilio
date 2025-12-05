"use client";
import React from "react";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceStats from "./ExperienceStats";
import ExperienceCard from "./ExperienceCard";
import ExperienceSummary from "./ExperienceSummary";

import SlideUp from "@/components/Shared/animations/SlideUp";
import { experiencesData } from "../../../../utils/experiences";

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="overflow-hidden relative text-[#ffffff] min-h-screen"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden md:block hidden">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#34a578]/20 to-cyan-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-[#34a578]/10 rounded-full blur-3xl animate-float"
          style={{ animationDuration: "25s", animationDelay: "5s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
      </div>

      <div className="container relative z-10 py-16 md:py-20 ">
        {/* Header */}
        <ExperienceHeader />

        {/* Stats */}
        <ExperienceStats />

        {/* Experience Cards */}
        <div className="relative space-y-14 md:space-y-20">
          {experiencesData?.map((experience, index) => (
            <div key={experience.id} className="relative">
              <ExperienceCard
                experience={experience}
                index={index}
                totalCards={experiencesData.length}
              />
            </div>
          ))}

          {/* Scroll Indicator */}
          <SlideUp delay={1}>
            <div className="mt-20 text-center">
              <div className="inline-flex flex-col items-center gap-3 animate-bounce">
                <span className="text-sm text-gray-500">
                  Scroll to explore timeline
                </span>
                <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-1">
                  <div className="w-1.5 h-1.5 bg-gradient-to-b from-[#34a578] to-cyan-400 rounded-full animate-scroll"></div>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Summary */}
          <ExperienceSummary />
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Experience;
