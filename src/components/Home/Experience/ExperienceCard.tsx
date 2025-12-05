"use client";
import React, { useState } from "react";
import SlideUp from "@/components/Shared/animations/SlideUp";

interface ExperienceCardProps {
  experience: {
    id: number;
    title: string;
    company: string;
    date: string;
    duration: string;
    location: string;
    type: string;
    description: string;
    achievements: string[];
    technologies: string[];
    icon: string;
    gradient: string;
  };
  index: number;
  totalCards: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
  totalCards,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SlideUp delay={index * 0.2}>
      <div className="relative">
        {/* Main Card */}
        <div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-xl border border-white/10">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-2xl">
              <div
                className={`absolute inset-0 ${experience.gradient} opacity-5 blur-sm rounded-2xl`}
              ></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-5 md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {/* <div className="text-2xl">{experience.icon}</div> */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-300 font-medium">
                          {experience.company}
                        </span>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            experience.type === "full-time"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                          }`}
                        >
                          {experience.type === "full-time"
                            ? "Full Time"
                            : "Part Time"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Date and Location */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-3">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{experience.date}</span>
                      <span className="px-2 py-0.5 bg-white/5 rounded-md">
                        {experience.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      <span
                        className={
                          experience.location.includes("Remote")
                            ? "text-cyan-400"
                            : "text-gray-400"
                        }
                      >
                        {experience.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Level Badge */}
                <div className="hidden md:block">
                  <div
                    className={`px-4 py-2 ${experience.gradient} rounded-full text-white font-bold text-sm`}
                  >
                    Level {totalCards - index}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {experience.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${experience.gradient}`}
                    ></div>
                    Key Achievements
                  </h4>
                </div>
                <div className="space-y-3">
                  {(isExpanded
                    ? experience.achievements
                    : experience.achievements.slice(0, 3)
                  ).map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full ${experience.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-400">{achievement}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="group relative px-4 py-2 text-sm mt-3 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 ${experience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className="relative z-10 flex items-center gap-2 text-gray-300 group-hover:text-white">
                    {isExpanded ? (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                        Show Less
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        Show More
                      </>
                    )}
                  </div>
                </button>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${experience.gradient}`}
                  ></div>
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default ExperienceCard;
