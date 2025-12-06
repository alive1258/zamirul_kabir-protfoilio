/* eslint-disable react/no-unescaped-entities */
import SlideUp from "@/components/Shared/animations/SlideUp";
import "../../Home/Services/Services.css";
import GitHubStats from "@/components/GitHubStats/GitHubStats";

const PersonalInfo = () => {
  return (
    <>
      {/* Title */}
      <div className="relative text-center mb-12 md:mb-24 px-4 sm:px-6">
        {/* Animated background gradient */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[150px] md:h-[200px] bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-400/10 blur-3xl opacity-60 rounded-full"></div>

        {/* Decorative pre-title elements */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <div className="w-6 md:w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
          <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#34a578] rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm font-medium text-gray-400 tracking-wider md:tracking-widest">
              INTRODUCTION
            </span>
            <div
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>
          <div className="w-6 md:w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
        </div>

        {/* Main title with gradient effect */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 relative">
          <span className="relative inline-block">
            <span className="text-white relative z-10">About</span>
            {/* Glow effect for "About" */}
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
          </span>

          <span
            className="relative ml-2 md:ml-4 inline-block animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="relative z-10 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Me
            </span>
            {/* Floating particles - hidden on mobile */}
            <div className="absolute -top-2 -right-2 w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full animate-bounce hidden sm:block"></div>
            <div
              className="absolute -bottom-1 -left-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#34a578] rounded-full animate-bounce hidden sm:block"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </span>
        </h1>

        {/* Animated separator */}
        <div className="mt-4 md:mt-6 flex items-center justify-center gap-3 md:gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#34a578] rounded-full animate-pulse"></div>
            <div
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#34a578] rounded-full animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className="mt-4 md:mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
          Get to know the person behind the code
          <span className="inline-block mx-2 md:mx-3 text-[#34a578] animate-bounce">
            •
          </span>
          my journey, passions, and philosophy
        </p>
      </div>

      <div className="mt-12 md:mt-24 px-1 sm:px-25">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {/* Left Column - Content Card */}

          {/* Personal Journey & Philosophy Section */}
          <SlideUp delay={0.2}>
            <div className="relative group md:h-[1010px] h-[550px] overflow-y-auto overflow-x-hidden ">
              {/* Glowing border effect */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#34a578]/20 via-transparent to-cyan-400/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Main card */}
              <div className="p-3 sm:p-6 md:p-8 relative bg-gradient-to-br from-white/[0.03] via-black/20 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl  overflow-hidden group-hover:border-[#34a578]/40 transition-all duration-500">
                {/* Animated corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t border-l border-[#34a578]/20 rounded-tl-lg sm:rounded-tl-xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b border-r border-cyan-400/20 rounded-br-lg sm:rounded-br-xl"></div>

                {/* Floating particles */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 bg-[#34a578] rounded-full animate-pulse"></div>
                <div
                  className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Section Header */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-6 md:mb-8 flex-wrap">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full animate-pulse"></div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      My Journey & Philosophy
                    </h3>
                    <div className="ml-auto text-xs px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-[#34a578]/20 to-cyan-400/20 rounded-full text-gray-400 border border-white/10 whitespace-nowrap">
                      The Story Behind
                    </div>
                  </div>

                  {/* Programming Journey */}
                  <div className="mb-8 md:mb-10 relative">
                    <div className="absolute -left-4 sm:-left-6 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-[#34a578] via-cyan-400 to-transparent rounded-full"></div>

                    <div className="pl-2 sm:pl-6">
                      <div className="flex items-center gap-2 mb-3 md:mb-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#34a578] to-cyan-400 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white">
                          My Coding Journey
                        </h4>
                      </div>

                      <div className="space-y-3 md:space-y-4">
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                          My journey into programming began with curiosity -
                          taking apart websites to see how they worked. What
                          started as a hobby soon became a passion as I
                          discovered the power of code to create meaningful
                          solutions.
                        </p>

                        <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-[#34a578]/10 via-transparent to-transparent border-l-2 sm:border-l-4 border-[#34a578]">
                          <p className="text-gray-400 text-sm sm:text-base">
                            From writing my first "Hello World" to building
                            full-stack applications, every line of code has been
                            a step in an ongoing adventure of learning and
                            growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* The Work I Enjoy */}
                  <div className="mb-8 md:mb-10">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 md:mb-6">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-400/20 to-[#34a578]/20 border border-cyan-400/30 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold text-white">
                        The Work I Love
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      {/* card 1 */}
                      <div className="relative group/stat">
                        {/* Main card */}
                        <div className="relative  md:h-72 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-xl border border-white/15 group-hover/stat:border-white/25 transition-all duration-500 shadow-xl sm:shadow-2xl shadow-black/30 group-hover/stat:shadow-[#34a578]/20 overflow-hidden">
                          {/* Animated background gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#34a578]/5 via-transparent to-cyan-400/5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-700"></div>

                          {/* Floating particles */}
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full blur-sm opacity-0 group-hover/stat:opacity-70 transition-opacity duration-500"></div>
                          <div
                            className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full blur-sm opacity-0 group-hover/stat:opacity-70 transition-opacity duration-500"
                            style={{ animationDelay: "0.3s" }}
                          ></div>

                          {/* Animated corner decorations */}
                          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-4 h-4 sm:w-6 sm:h-6 border-t border-l border-[#34a578]/40 rounded-tl opacity-0 group-hover/stat:opacity-100 transition-all duration-500 group-hover/stat:scale-110 sm:group-hover/stat:scale-125"></div>
                          <div
                            className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-4 h-4 sm:w-6 sm:h-6 border-b border-r border-cyan-400/40 rounded-br opacity-0 group-hover/stat:opacity-100 transition-all duration-500 group-hover/stat:scale-110 sm:group-hover/stat:scale-125"
                            style={{ transitionDelay: "0.1s" }}
                          ></div>

                          {/* Animated line effect */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#34a578] to-transparent group-hover/stat:w-3/4 transition-all duration-700"></div>

                          {/* Content */}
                          <div className="relative z-10 ">
                            {/* Header with animated icon */}
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 group/title">
                              <div className="relative">
                                {/* Pulsing circle */}
                                <div className="absolute -inset-2 sm:-inset-3 bg-[#34a578] rounded-full blur-sm sm:blur-md opacity-0 group-hover/stat:opacity-30 transition-opacity duration-500"></div>

                                {/* Animated icon container */}
                                <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-[#34a578]/20 to-cyan-400/20 border border-[#34a578]/30 flex items-center justify-center group-hover/stat:scale-110 group-hover/stat:rotate-12 transition-all duration-500">
                                  {/* Icon SVG */}
                                  <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4 text-[#34a578] group-hover/stat:text-white transition-colors duration-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                  </svg>

                                  {/* Animated dot */}
                                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover/stat:opacity-100"></div>
                                </div>
                              </div>

                              <h5 className="font-bold text-white text-sm sm:text-base tracking-wide relative">
                                Problem Solving
                                {/* Underline effect */}
                                <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#34a578] to-cyan-400 group-hover/stat:w-full transition-all duration-500"></div>
                              </h5>
                            </div>

                            {/* Description text with gradient effect */}
                            <div className="relative">
                              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover/stat:text-gray-200 transition-colors duration-300">
                                I thrive on tackling complex challenges and
                                finding elegant, efficient solutions that make a
                                real impact.
                              </p>

                              {/* Highlighted text effect on hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-[#34a578]/5 via-transparent to-cyan-400/5 rounded opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Progress bar indicator */}
                            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-400">
                                  Expertise Level
                                </span>
                                <span className="text-xs font-medium bg-gradient-to-r from-[#34a578] to-cyan-400 bg-clip-text text-transparent">
                                  95%
                                </span>
                              </div>
                              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-0 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 rounded-full group-hover/stat:w-[95%] transition-all duration-1000 ease-out"></div>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-1.5">
                              <span className="px-1.5 py-0.5 text-xs rounded-full bg-[#34a578]/10 text-[#34a578] border border-[#34a578]/20">
                                Analytical
                              </span>
                              <span className="px-1.5 py-0.5 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                                Creative
                              </span>
                              <span className="px-1.5 py-0.5 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                Strategic
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* card 2 */}
                      <div className="relative group/stat">
                        {/* Main card */}
                        <div className="relative md:h-72  p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-xl border border-white/15 group-hover/stat:border-white/25 transition-all duration-500 shadow-xl sm:shadow-2xl shadow-black/30 group-hover/stat:shadow-[#34a578]/20 overflow-hidden">
                          {/* Animated background gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#34a578]/5 via-transparent to-cyan-400/5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-700"></div>

                          {/* Floating particles */}
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full blur-sm opacity-0 group-hover/stat:opacity-70 transition-opacity duration-500"></div>
                          <div
                            className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full blur-sm opacity-0 group-hover/stat:opacity-70 transition-opacity duration-500"
                            style={{ animationDelay: "0.3s" }}
                          ></div>

                          {/* Animated corner decorations */}
                          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-4 h-4 sm:w-6 sm:h-6 border-t border-l border-[#34a578]/40 rounded-tl opacity-0 group-hover/stat:opacity-100 transition-all duration-500 group-hover/stat:scale-110 sm:group-hover/stat:scale-125"></div>
                          <div
                            className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-4 h-4 sm:w-6 sm:h-6 border-b border-r border-cyan-400/40 rounded-br opacity-0 group-hover/stat:opacity-100 transition-all duration-500 group-hover/stat:scale-110 sm:group-hover/stat:scale-125"
                            style={{ transitionDelay: "0.1s" }}
                          ></div>

                          {/* Animated line effect */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#34a578] to-transparent group-hover/stat:w-3/4 transition-all duration-700"></div>

                          {/* Content */}
                          <div className="relative z-10">
                            {/* Header with animated icon */}
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 group/title">
                              <div className="relative">
                                {/* Pulsing circle */}
                                <div className="absolute -inset-2 sm:-inset-3 bg-[#34a578] rounded-full blur-sm sm:blur-md opacity-0 group-hover/stat:opacity-30 transition-opacity duration-500"></div>

                                {/* Animated icon container */}
                                <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-[#34a578]/20 to-cyan-400/20 border border-[#34a578]/30 flex items-center justify-center group-hover/stat:scale-110 group-hover/stat:rotate-12 transition-all duration-500">
                                  {/* Icon SVG */}
                                  <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4 text-[#34a578] group-hover/stat:text-white transition-colors duration-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                  </svg>

                                  {/* Animated dot */}
                                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover/stat:opacity-100"></div>
                                </div>
                              </div>

                              <h5 className="font-bold text-white text-sm sm:text-base tracking-wide relative">
                                Creative Coding
                                {/* Underline effect */}
                                <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#34a578] to-cyan-400 group-hover/stat:w-full transition-all duration-500"></div>
                              </h5>
                            </div>

                            {/* Description text with gradient effect */}
                            <div className="relative">
                              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover/stat:text-gray-200 transition-colors duration-300">
                                Crafting beautiful, functional interactive
                                digital interfaces for exceptional user
                                experiences.
                              </p>

                              {/* Highlighted text effect on hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-[#34a578]/5 via-transparent to-cyan-400/5 rounded opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Progress bar indicator */}
                            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-400">
                                  Expertise Level
                                </span>
                                <span className="text-xs font-medium bg-gradient-to-r from-[#34a578] to-cyan-400 bg-clip-text text-transparent">
                                  96%
                                </span>
                              </div>
                              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-0 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 rounded-full group-hover/stat:w-[95%] transition-all duration-1000 ease-out"></div>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-1.5">
                              <span className="px-1.5 py-0.5 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                                UI/UX Focus
                              </span>
                              <span className="px-1.5 py-0.5 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                Innovative
                              </span>
                              <span className="px-1.5 py-0.5 text-xs rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                                Artistic
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* card 3*/}
                      <div className="relative group/stat">
                        {/* Main card */}
                        <div className="relative  md:h-72  p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-xl border border-white/15 group-hover/stat:border-white/25 transition-all duration-500 shadow-xl sm:shadow-2xl shadow-black/30 group-hover/stat:shadow-[#34a578]/20 overflow-hidden">
                          {/* Animated background gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#34a578]/5 via-transparent to-cyan-400/5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-700"></div>

                          {/* Floating particles */}
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full blur-sm opacity-0 group-hover/stat:opacity-70 transition-opacity duration-500"></div>
                          <div
                            className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full blur-sm opacity-0 group-hover/stat:opacity-70 transition-opacity duration-500"
                            style={{ animationDelay: "0.3s" }}
                          ></div>

                          {/* Animated corner decorations */}
                          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-4 h-4 sm:w-6 sm:h-6 border-t border-l border-[#34a578]/40 rounded-tl opacity-0 group-hover/stat:opacity-100 transition-all duration-500 group-hover/stat:scale-110 sm:group-hover/stat:scale-125"></div>
                          <div
                            className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-4 h-4 sm:w-6 sm:h-6 border-b border-r border-cyan-400/40 rounded-br opacity-0 group-hover/stat:opacity-100 transition-all duration-500 group-hover/stat:scale-110 sm:group-hover/stat:scale-125"
                            style={{ transitionDelay: "0.1s" }}
                          ></div>

                          {/* Animated line effect */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#34a578] to-transparent group-hover/stat:w-3/4 transition-all duration-700"></div>

                          {/* Content */}
                          <div className="relative z-10">
                            {/* Header with animated icon */}
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 group/title">
                              <div className="relative">
                                {/* Pulsing circle */}
                                <div className="absolute -inset-2 sm:-inset-3 bg-[#34a578] rounded-full blur-sm sm:blur-md opacity-0 group-hover/stat:opacity-30 transition-opacity duration-500"></div>

                                {/* Animated icon container */}
                                <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-[#34a578]/20 to-cyan-400/20 border border-[#34a578]/30 flex items-center justify-center group-hover/stat:scale-110 group-hover/stat:rotate-12 transition-all duration-500">
                                  {/* Icon SVG */}
                                  <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4 text-[#34a578] group-hover/stat:text-white transition-colors duration-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                  </svg>

                                  {/* Animated dot */}
                                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover/stat:opacity-100"></div>
                                </div>
                              </div>

                              <h5 className="font-bold text-white text-sm sm:text-base tracking-wide relative">
                                Collaboration
                                {/* Underline effect */}
                                <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#34a578] to-cyan-400 group-hover/stat:w-full transition-all duration-500"></div>
                              </h5>
                            </div>

                            {/* Description text with gradient effect */}
                            <div className="relative">
                              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover/stat:text-gray-200 transition-colors duration-300">
                                Working with teams to build something greater
                                than what any individual could create alone.
                              </p>

                              {/* Highlighted text effect on hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-[#34a578]/5 via-transparent to-cyan-400/5 rounded opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Progress bar indicator */}
                            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-400">
                                  Expertise Level
                                </span>
                                <span className="text-xs font-medium bg-gradient-to-r from-[#34a578] to-cyan-400 bg-clip-text text-transparent">
                                  96%
                                </span>
                              </div>
                              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-0 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 rounded-full group-hover/stat:w-[95%] transition-all duration-1000 ease-out"></div>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-1.5">
                              <span className="px-1.5 py-0.5 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                                UI/UX Focus
                              </span>
                              <span className="px-1.5 py-0.5 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                Innovative
                              </span>
                              <span className="px-1.5 py-0.5 text-xs rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                                Artistic
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* card 4*/}
                      <div className="relative group/stat">
                        {/* Main card */}
                        <div className="relative  md:h-72  p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-xl border border-white/15 group-hover/stat:border-white/25 transition-all duration-500 shadow-xl sm:shadow-2xl shadow-black/30 group-hover/stat:shadow-[#34a578]/20 overflow-hidden">
                          {/* Animated background gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#34a578]/5 via-transparent to-cyan-400/5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-700"></div>

                          {/* Floating particles */}
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full blur-sm opacity-0 group-hover/stat:opacity-70 transition-opacity duration-500"></div>
                          <div
                            className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full blur-sm opacity-0 group-hover/stat:opacity-70 transition-opacity duration-500"
                            style={{ animationDelay: "0.3s" }}
                          ></div>

                          {/* Animated corner decorations */}
                          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-4 h-4 sm:w-6 sm:h-6 border-t border-l border-[#34a578]/40 rounded-tl opacity-0 group-hover/stat:opacity-100 transition-all duration-500 group-hover/stat:scale-110 sm:group-hover/stat:scale-125"></div>
                          <div
                            className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-4 h-4 sm:w-6 sm:h-6 border-b border-r border-cyan-400/40 rounded-br opacity-0 group-hover/stat:opacity-100 transition-all duration-500 group-hover/stat:scale-110 sm:group-hover/stat:scale-125"
                            style={{ transitionDelay: "0.1s" }}
                          ></div>

                          {/* Animated line effect */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#34a578] to-transparent group-hover/stat:w-3/4 transition-all duration-700"></div>

                          {/* Content */}
                          <div className="relative z-10">
                            {/* Header with animated icon */}
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 group/title">
                              <div className="relative">
                                {/* Pulsing circle */}
                                <div className="absolute -inset-2 sm:-inset-3 bg-[#34a578] rounded-full blur-sm sm:blur-md opacity-0 group-hover/stat:opacity-30 transition-opacity duration-500"></div>

                                {/* Animated icon container */}
                                <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-[#34a578]/20 to-cyan-400/20 border border-[#34a578]/30 flex items-center justify-center group-hover/stat:scale-110 group-hover/stat:rotate-12 transition-all duration-500">
                                  {/* Icon SVG */}
                                  <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4 text-[#34a578] group-hover/stat:text-white transition-colors duration-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                  </svg>

                                  {/* Animated dot */}
                                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover/stat:opacity-100"></div>
                                </div>
                              </div>

                              <h5 className="font-bold text-white text-sm sm:text-base tracking-wide relative">
                                Continuous Learning
                                {/* Underline effect */}
                                <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#34a578] to-cyan-400 group-hover/stat:w-full transition-all duration-500"></div>
                              </h5>
                            </div>

                            {/* Description text with gradient effect */}
                            <div className="relative">
                              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover/stat:text-gray-200 transition-colors duration-300">
                                Continuously exploring new technologies and
                                methodologies to stay at the cutting edge.
                              </p>

                              {/* Highlighted text effect on hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-[#34a578]/5 via-transparent to-cyan-400/5 rounded opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Progress bar indicator */}
                            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-400">
                                  Expertise Level
                                </span>
                                <span className="text-xs font-medium bg-gradient-to-r from-[#34a578] to-cyan-400 bg-clip-text text-transparent">
                                  ∞%
                                </span>
                              </div>
                              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-0 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 rounded-full group-hover/stat:w-[95%] transition-all duration-1000 ease-out"></div>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-1.5">
                              <span className="px-1.5 py-0.5 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                                Curious
                              </span>
                              <span className="px-1.5 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Adaptable
                              </span>
                              <span className="px-1.5 py-0.5 text-xs rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                                Passionate
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-[#34a578]/10 to-transparent border border-[#34a578]/30">
                      <p className="text-gray-400 text-sm sm:text-base text-center">
                        "I believe in{" "}
                        <span className="text-white font-medium">
                          building things that matter
                        </span>{" "}
                        - software that improves lives, solves real problems,
                        and brings joy to users."
                      </p>
                    </div>
                  </div>

                  {/* Personality & Interests */}
                  <div>
                    <div className="mb-6 md:mb-8">
                      {/* Section Header with Animation */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-3 sm:gap-0">
                        <div className="flex items-center gap-2 sm:gap-3">
                          {/* Animated icon */}
                          <div className="relative">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br from-cyan-400/20 to-[#34a578]/20 border border-cyan-400/30 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                              <svg
                                className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <div className="absolute -inset-1.5 sm:-inset-2 bg-cyan-400/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                          </div>

                          <div>
                            <h5 className="text-lg sm:text-xl font-bold text-white">
                              Hobbies & Interests
                            </h5>
                            <p className="text-xs sm:text-sm text-gray-500">
                              What I enjoy beyond coding
                            </p>
                          </div>
                        </div>

                        <div>
                          <span className="text-xs text-gray-400 bg-white/5 px-2 sm:px-3 py-1 rounded-full">
                            Work-Life Balance
                          </span>
                          {/* Decorative element */}
                          <div className="flex items-center mt-1 sm:mt-2 gap-1.5 sm:gap-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div
                              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#34a578] rounded-full animate-pulse"
                              style={{ animationDelay: "0.3s" }}
                            ></div>
                            <div
                              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"
                              style={{ animationDelay: "0.6s" }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Hobbies Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                        {[
                          {
                            name: "🏸 Badminton",
                            desc: "Staying active and competitive",
                            color: "from-green-500/20",
                            borderColor: "border-green-500/30",
                            iconColor: "text-green-400",
                            gradient:
                              "from-green-500/10 via-green-500/5 to-transparent",
                          },
                          {
                            name: "🍳 Cooking",
                            desc: "Creating flavors & experiences",
                            color: "from-orange-500/20",
                            borderColor: "border-orange-500/30",
                            iconColor: "text-orange-400",
                            gradient:
                              "from-orange-500/10 via-red-500/5 to-transparent",
                          },
                          {
                            name: "📚 Reading",
                            desc: "Tech blogs & sci-fi novels",
                            color: "from-amber-500/20",
                            borderColor: "border-amber-500/30",
                            iconColor: "text-amber-400",
                            gradient:
                              "from-amber-500/10 via-amber-500/5 to-transparent",
                          },
                          {
                            name: "🎮 Gaming",
                            desc: "Problem-solving in virtual worlds",
                            color: "from-blue-500/20",
                            borderColor: "border-blue-500/30",
                            iconColor: "text-blue-400",
                            gradient:
                              "from-blue-500/10 via-blue-500/5 to-transparent",
                          },
                          {
                            name: "✈️ Travel",
                            desc: "Exploring new cultures & tech scenes",
                            color: "from-cyan-500/20",
                            borderColor: "border-cyan-500/30",
                            iconColor: "text-cyan-400",
                            gradient:
                              "from-cyan-500/10 via-cyan-500/5 to-transparent",
                          },
                          {
                            name: "🚴 Biking",
                            desc: "Adventures on two wheels",
                            color: "from-[#34a578]/20",
                            borderColor: "border-[#34a578]/30",
                            iconColor: "text-[#34a578]",
                            gradient:
                              "from-[#34a578]/10 via-[#45d19c]/5 to-transparent",
                          },
                        ].map((hobby, i) => (
                          <div key={i} className="relative group/hobby-card ">
                            {/* Glow effect */}
                            <div
                              className={`absolute -inset-0.5 bg-gradient-to-r ${hobby.color} rounded-lg sm:rounded-xl blur-sm opacity-0 group-hover/hobby-card:opacity-50 transition-opacity duration-500`}
                            ></div>

                            {/* Main card */}
                            <div
                              className={`relative  p-2 sm:p-3 md:h-40 h-32 rounded-lg sm:rounded-xl bg-gradient-to-br ${hobby.gradient} backdrop-blur-sm border border-white/10 ${hobby.borderColor} group-hover/hobby-card:border-white/30 transition-all duration-500 overflow-hidden`}
                            >
                              {/* Shimmer effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/hobby-card:translate-x-[100%] transition-transform duration-1000"></div>

                              {/* Corner decorations */}
                              <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 border-t border-l border-white/20 rounded-tl opacity-0 group-hover/hobby-card:opacity-100 transition-opacity duration-500"></div>
                              <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 border-b border-r border-white/20 rounded-br opacity-0 group-hover/hobby-card:opacity-100 transition-opacity duration-500"></div>

                              {/* Content */}
                              <div className="relative z-10">
                                {/* Icon and Title */}
                                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                  <div
                                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-gradient-to-br ${hobby.color} border border-white/10 flex items-center justify-center group-hover/hobby-card:scale-110 group-hover/hobby-card:rotate-3 transition-all duration-300`}
                                  >
                                    <span className="text-sm sm:text-lg">
                                      {hobby.name.split(" ")[0]}
                                    </span>
                                  </div>
                                  <div>
                                    <h6 className="font-semibold text-white text-xs sm:text-sm group-hover/hobby-card:text-gray-100 transition-colors">
                                      {hobby.name.split(" ").slice(1).join(" ")}
                                    </h6>
                                    {/* Animated indicator */}
                                    <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 sm:mt-1">
                                      <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse"></div>
                                      <div
                                        className="w-1 h-1 bg-white/50 rounded-full animate-pulse"
                                        style={{ animationDelay: "0.2s" }}
                                      ></div>
                                      <div
                                        className="w-1 h-1 bg-white/50 rounded-full animate-pulse"
                                        style={{ animationDelay: "0.4s" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>

                                {/* Description */}
                                <p className="text-xs text-gray-400 group-hover/hobby-card:text-gray-400 transition-colors leading-relaxed">
                                  {hobby.desc}
                                </p>

                                {/* Hover indicator */}
                                <div className="mt-2 sm:mt-3 flex items-center justify-between">
                                  <div className="text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 group-hover/hobby-card:bg-white/10 group-hover/hobby-card:text-white transition-all duration-300">
                                    Explore →
                                  </div>
                                  <div
                                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${hobby.iconColor.replace(
                                      "text-",
                                      "bg-"
                                    )} opacity-0 group-hover/hobby-card:opacity-100 transition-opacity duration-300`}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Decorative footer */}
                      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                        <div className="flex items-center justify-center gap-2 sm:gap-4">
                          <div className="w-6 sm:w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            Balancing code with creativity
                          </span>
                          <div className="w-6 sm:w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-[#34a578] to-transparent rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                    <div className="text-center">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-[#34a578] mx-auto mb-2 sm:mb-3 opacity-50"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-base sm:text-lg md:text-xl italic text-gray-400 max-w-2xl mx-auto px-2">
                        "Code is my craft, but life is my canvas. I believe in
                        building with purpose and living with passion."
                      </p>
                      <div className="mt-3 sm:mt-4 flex items-center justify-center gap-1 sm:gap-2">
                        <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-[#34a578] to-transparent rounded-full"></div>
                        <span className="text-xs sm:text-sm text-gray-400">
                          — That's me in a nutshell
                        </span>
                        <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>
          {/* Right Column */}
          <div className="relative">
            {/* Add GitHub Stats here */}
            <GitHubStats
              totalContributions={841}
              currentStreak={11}
              longestStreak={11}
              repositories={112}
              githubUrl="https://github.com/alive1258"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
