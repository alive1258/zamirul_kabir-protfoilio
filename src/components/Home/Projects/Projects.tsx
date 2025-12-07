"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import SlideUp from "@/components/Shared/animations/SlideUp";
import { projectCategories, projectsData } from "../../../../utils/projectData";
import { RiArrowRightLine } from "react-icons/ri";
import BadgeLabel from "@/components/Shared/BadgeLabel/BadgeLabel";
import Button from "@/components/Shared/Button/Button";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // FILTERING PROJECTS BASED ON SELECTED CATEGORY
  const filteredData =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === selectedCategory);

  // Limit display to 5 projects unless showAll is true
  const displayData = showAll ? filteredData : filteredData.slice(0, 5);

  return (
    <section id="projects" className="container md:my-14 my-20">
      {/* START HEADER SECTION */}
      {/* START HEADER SECTION */}
      <BadgeLabel
        text="Portfolio"
        showFullHeader={true}
        showTitle={true}
        showSubtitle={true}
        titleText="My Projects"
        subtitle="A collection of my recent work showcasing modern web development and innovative solutions"
        className="mb-16 md:mb-24"
      />

      {/* END HEADER SECTION */}
      <SlideUp delay={0.3}>
        <div className="my-10 flex justify-center flex-wrap gap-3">
          {projectCategories?.map((cat) => (
            <div key={cat} className="relative group">
              {/* Glow effect container */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#3B82F6]/20 via-transparent to-cyan-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <button
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                className="relative"
              >
                {/* Glass morphism background */}
                <div
                  className={`relative px-6 py-2.5 rounded-3xl backdrop-blur-xl border text-sm font-satoshi font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-white/[0.15] to-white/[0.05] border-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/20"
                      : "bg-gradient-to-r from-white/[0.08] to-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:border-[#3B82F6]/50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {/* Animated dot indicator */}
                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        selectedCategory === cat
                          ? "bg-gradient-to-r from-[#3B82F6] to-cyan-400 animate-pulse"
                          : "bg-gray-600 group-hover:bg-[#3B82F6]"
                      }`}
                    ></div>

                    {cat}

                    {selectedCategory === cat && (
                      <span className="relative ml-1">
                        <span className="relative z-10 px-2 py-0.5 text-xs bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-full">
                          {filteredData.length}
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-full animate-ping opacity-30"></span>
                      </span>
                    )}
                  </span>
                </div>

                {/* Animated underline */}
                <div
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-full transition-all duration-500 ${
                    selectedCategory === cat ? "w-3/4" : "group-hover:w-3/4"
                  }`}
                ></div>
              </button>
            </div>
          ))}
        </div>
      </SlideUp>

      {/* START FILTERED PROJECT CARD LIST */}
      <div>
        {displayData?.length > 0 ? (
          displayData.map((item, idx) => (
            <ProjectCard
              item={item}
              idx={idx}
              key={`${item.id}-${selectedCategory}`}
              delay={idx * 0.3}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            {/* Empty state illustration */}
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              {/* Animated dots */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#3B82F6] rounded-full animate-ping opacity-20"></div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              No Projects Found
            </h3>
            <p className="text-gray-400 max-w-md mb-6">
              {selectedCategory === "All"
                ? "No projects available at the moment. Check back soon!"
                : `No projects found in the "${selectedCategory}" category. Try another category or check back later.`}
            </p>
          </div>
        )}
      </div>
      {/* END FILTERED PROJECT CARD LIST */}

      {filteredData.length > 5 && (
        <SlideUp className="pt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`font-satoshi font-medium transition-all duration-300 ease-in-out ${
              showAll
                ? "text-[#3B82F6] hover:text-blue-700"
                : "text-tertiary-base hover:text-[#3B82F6]"
            }`}
          >
            <span className="flex items-center gap-2">
              {showAll
                ? "Show Less Projects"
                : `Show All ${filteredData.length} Projects`}
              <RiArrowRightLine
                size={20}
                className={`transition-transform ${showAll ? "rotate-90" : ""}`}
              />
            </span>
          </button>
        </SlideUp>
      )}

      {/* View All Projects Button */}
      {/* <SlideUp className="pt-10 flex justify-center uppercase">
        <Link href="/projects">
          <Button content="View All Projects" />
        </Link>
      </SlideUp> */}
    </section>
  );
};

export default Projects;
