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

      {/* START CATEGORY FILTER BUTTONS */}
      {/* START CATEGORY FILTER BUTTONS - Glass Morphism */}
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
      {/* END CATEGORY FILTER BUTTONS */}

      {/* START FILTERED PROJECT CARD LIST */}
      <div>
        {displayData?.map((item, idx) => (
          <ProjectCard
            item={item}
            idx={idx}
            key={`${item.id}-${selectedCategory}`}
            delay={idx * 0.3}
          />
        ))}
      </div>
      {/* END FILTERED PROJECT CARD LIST */}

      {/* Show More/Less Button */}
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
      <SlideUp className="pt-10 flex justify-center uppercase">
        <Link href="/projects">
          <Button content="View All Projects" />
        </Link>
      </SlideUp>

      {/* Stats Section */}
      <SlideUp>
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">
                {projectsData.length}
              </div>
              <div className="text-gray-600 text-sm">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">
                {projectsData.filter((p) => p.featured).length}
              </div>
              <div className="text-gray-600 text-sm">Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">
                {
                  Array.from(new Set(projectsData.map((p) => p.category)))
                    .length
                }
              </div>
              <div className="text-gray-600 text-sm">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">
                {
                  Array.from(new Set(projectsData.flatMap((p) => p.tags)))
                    .length
                }
              </div>
              <div className="text-gray-600 text-sm">Technologies</div>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default Projects;
