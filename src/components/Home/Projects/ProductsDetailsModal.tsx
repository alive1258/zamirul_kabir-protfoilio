"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarAlt,
  FaUserTie,
  FaLightbulb,
  FaCheckCircle,
  FaChartLine,
  FaCode,
  FaRocket,
  FaLayerGroup,
  FaArrowUp,
} from "react-icons/fa";
import { Project } from "../../../../utils/projectData";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";

interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Handle scroll to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        setShowScrollTop(contentRef.current.scrollTop > 300);
      }
    };

    const currentRef = contentRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      return () => currentRef.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Technology icons mapping
  const techIcons: Record<string, React.ReactNode> = {
    "Next.js": <SiNextdotjs className="text-gray-300" size={20} />,
    TypeScript: <SiTypescript className="text-blue-500" size={20} />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-500" size={20} />,
    React: <SiReact className="text-blue-400" size={20} />,
    "React Query": <FaCode className="text-red-400" size={20} />,
    Stripe: <FaCode className="text-indigo-400" size={20} />,
    "Framer Motion": <FaCode className="text-pink-400" size={20} />,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-[#3B82F6] to-cyan-400 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={18} />
        </button>
      )}

      <div
        ref={modalRef}
        className="relative max-w-6xl w-full h-[90vh] flex flex-col rounded-2xl bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-800 border border-white/10 shadow-2xl shadow-black/50 overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all backdrop-blur-sm"
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>

        {/* Header with gradient - Fixed */}
        <div className="relative pt-10 pb-6 px-8 border-b border-white/10 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-800 flex-shrink-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3B82F6] via-cyan-400 to-[#3B82F6]"></div>

          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-cyan-400 flex items-center justify-center flex-shrink-0">
              <FaLayerGroup size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {project.name}
              </h2>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#3B82F6]/20 to-cyan-400/20 text-[#3B82F6] text-sm font-medium border border-[#3B82F6]/30">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 text-sm font-medium border border-yellow-500/30 flex items-center gap-1">
                    <FaLightbulb size={12} />
                    Featured Project
                  </span>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaUserTie size={12} />
                  <span>{project.role}</span>
                  <span className="mx-1">•</span>
                  <FaCalendarAlt size={12} />
                  <span>{project.duration}</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-base md:text-lg mt-4">
            {project.description}
          </p>
        </div>

        {/* Scrollable content - Takes remaining space */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#3B82F6]/30 scrollbar-track-transparent"
        >
          <div className="p-6 md:p-8 space-y-8">
            {/* Project Image */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="relative h-48 md:h-64 lg:h-80">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                  priority
                  quality={90}
                />
              </div>
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/0 via-transparent to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
              {/* Left Column - Description & Tech Stack */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                {/* Detailed Description */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    Project Overview
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-[#3B82F6]/10 via-transparent to-transparent border-l-4 border-[#3B82F6]">
                      <p className="text-gray-300 text-sm md:text-base">
                        This project demonstrates modern web development
                        practices with a focus on performance, scalability, and
                        user experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse"></div>
                    Technology Stack
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                    {project.tech_stack.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#3B82F6]/40 transition-all group/tech"
                      >
                        <div className="flex-shrink-0">
                          {techIcons[tech] || (
                            <FaCode className="text-gray-400" size={18} />
                          )}
                        </div>
                        <span className="text-gray-300 text-xs md:text-sm font-medium group-hover/tech:text-white transition-colors truncate">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Key Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.key_features?.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base">
                          {feature}
                        </p>
                      </div>
                    )) || (
                      <p className="text-gray-400 text-sm md:text-base">
                        No key features specified.
                      </p>
                    )}
                  </div>
                </div>

                {/* Challenges Faced */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    Challenges & Solutions
                  </h3>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <FaChartLine className="text-red-400" size={16} />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-300 text-sm md:text-base mb-2">
                            {challenge}
                          </p>
                          <div className="pl-4 border-l-2 border-[#3B82F6]/30">
                            <p className="text-sm text-gray-400 italic">
                              Implemented solution through careful architecture
                              planning and optimization techniques.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6 md:space-y-8">
                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-cyan-400/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-6">
                    Project Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm md:text-base">
                        Complexity
                      </span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div
                            key={star}
                            className={`w-2 h-4 rounded-sm ${
                              star <= 4 ? "bg-[#3B82F6]" : "bg-gray-700"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm md:text-base">
                        Development Time
                      </span>
                      <span className="text-white font-medium">
                        {project.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm md:text-base">
                        Team Size
                      </span>
                      <span className="text-white font-medium">
                        Solo Project
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm md:text-base">
                        Status
                      </span>
                      <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                        Live & Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Role & Company Info */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <FaUserTie className="text-[#3B82F6]" />
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-400">Client</div>
                      <div className="text-white font-medium text-sm md:text-base">
                        {project.company}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Role</div>
                      <div className="text-white font-medium text-sm md:text-base">
                        {project.role}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Timeline</div>
                      <div className="text-white font-medium text-sm md:text-base">
                        {project.duration}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Project Type</div>
                      <div className="text-white font-medium text-sm md:text-base">
                        {project.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Links */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-6">
                    Project Links
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-gradient-to-r from-[#3B82F6] to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity group/link"
                    >
                      <span className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
                        <FaExternalLinkAlt size={16} />
                        Live Demo
                      </span>
                      <div className="opacity-0 group-hover/link:opacity-100 transition-opacity">
                        →
                      </div>
                    </a>
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:text-white transition-all group/link"
                    >
                      <span className="flex items-center gap-2 md:gap-3 text-sm md:text-base">
                        <FaGithub size={16} />
                        GitHub Repository
                      </span>
                      <div className="opacity-0 group-hover/link:opacity-100 transition-opacity">
                        →
                      </div>
                    </a>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <FaCheckCircle className="text-green-400" />
                    Key Achievements
                  </h3>
                  <div className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        <p className="text-gray-300 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Future Improvements */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaRocket className="text-cyan-400" />
                Future Plans & Improvements
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Add AI-powered features",
                  "Implement PWA capabilities",
                  "Expand to mobile platforms",
                  "Add multi-language support",
                  "Enhanced analytics dashboard",
                  "Real-time collaboration features",
                ].map((plan, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-white/5 via-transparent to-transparent border border-white/10 hover:border-cyan-400/30 transition-all"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm">{plan}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="px-6 md:px-8 py-4 border-t border-white/10 bg-black/30 flex-shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              Project ID:{" "}
              <span className="text-gray-300 font-mono">{project.id}</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-all text-sm"
              >
                Scroll to Top
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#3B82F6] to-cyan-400 text-white hover:opacity-90 transition-opacity font-medium"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
