import { AiOutlineDownload } from "react-icons/ai";
import "../../Home/Services/Services.css";
import ZoomIn from "@/components/Shared/animations/ZoomIn";
import SlideLeft from "@/components/Shared/animations/SlideLeft";
import ImageWithSkeleton from "@/components/Shared/animations/ImageWithSkeleton";
import { FiCode, FiStar } from "react-icons/fi";
import {
  FaDev,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";

const Hero = () => {
  const zamirulPic = "/assets/image/zamirul_pic.jpg";

  return (
    <div
      id="hero"
      className="md:pt-28 pb-28 py-12 relative h-full w-full bg-[#0f172a] overflow-hidden"
    >
      <div className="absolute md:block hidden blurred-blue-circle"></div>
      <div
        className="absolute rounded-full opacity-40 blur-[150px] bg-[#E9C12F]"
        // 952fe9
        style={{
          width: "593.727px",
          height: "531.226px",
          right: "-72.727px",
          top: "-345.17px",
        }}
      ></div>

      {/* Blurred Effect - Blue Circle */}
      <div
        className="absolute rounded-full opacity-[0.38] blur-[125px] bg-[#5158DA] pointer-events-none"
        style={{
          width: "699.729px",
          height: "626.07px",
          left: "152.271px",
          bottom: "-377.762px",
        }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_39px] "></div>

      <div className="grid md:grid-cols-2 grid-cols-1 container md:gap-20 gap-10 pt-10 ">
        <div className=" text-[#ffffff] relative">
          {/* Floating particles background */}
          <div className="absolute -inset-6 overflow-hidden pointer-events-none">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-[#34a578]/20 to-cyan-400/20 animate-float-slow"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10">
            {/* Animated intro line */}
            <div className="flex items-center gap-3 mb-3 animate-fade-in">
              <div className="w-16 h-1 bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] rounded-full animate-glow" />
              <span className="text-sm font-semibold tracking-widest text-gray-400">
                WELCOME TO MY PORTFOLIO
              </span>
            </div>

            {/* Hero title with gradient effect */}
            <div className="">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                <span className="block">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-text-shimmer">
                    Zamirul Kabir
                  </span>
                </span>

                <span className="bg-gradient-to-r animate-pulse-slow from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Full-Stack Developer
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full animate-width-pulse" />
              </h1>
            </div>

            <div className="relative group">
              {/* Hover glow effect only */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#34a578]/20 via-transparent to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              <div className="relative mt-5 p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-colors duration-500">
                <SlideLeft delay={0.2}>
                  <p className="text-[16px] leading-relaxed text-gray-300 mb-6 group-hover:text-white/90 transition-colors duration-300">
                    As a dedicated{" "}
                    <span className="font-bold text-white group-hover:text-[#34a578] transition-colors duration-300">
                      Frontend-Focused Full-Stack Engineer
                    </span>{" "}
                    with{" "}
                    <span className="font-bold text-[#34a578]">2.5+ years</span>{" "}
                    of experience, I specialize in transforming complex
                    requirements into elegant, performant solutions that drive
                    business growth. My career spans{" "}
                    <span className="font-bold text-cyan-400">
                      35+ production projects
                    </span>{" "}
                    across fintech, SaaS, e-commerce, and enterprise platforms,
                    consistently delivering exceptional user experiences that
                    exceed client expectations.
                  </p>
                </SlideLeft>

                <SlideLeft delay={0.4}>
                  <div className="">
                    <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300"></div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                        <div
                          className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                          Mastery of modern frontend ecosystems (React, Next.js,
                          ) with{" "}
                          <span className="font-medium text-cyan-300">
                            5,000+ hours
                          </span>{" "}
                          dedicated to pixel-perfect implementation and
                          responsive design systems
                        </span>
                      </div>
                      <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                        <div
                          className="w-2 h-2 bg-[#45d19c] rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                          Performance-first mindset optimizing Core Web Vitals,
                          reducing load times by
                          <span className="font-medium text-[#45d19c]">
                            {" "}
                            40-60%
                          </span>{" "}
                          and improving user retention
                        </span>
                      </div>
                    </div>
                  </div>
                </SlideLeft>

                {/* Stats Grid */}
                <SlideLeft delay={0.6}>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 rounded-lg bg-white/5 group/stat hover:bg-white/10 transition-colors duration-300">
                        <div className="text-2xl font-bold text-[#34a578]">
                          2.5+
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          Years Experience
                        </div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-white/5 group/stat hover:bg-white/10 transition-colors duration-300">
                        <div className="text-2xl font-bold text-cyan-400">
                          35+
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          Projects
                        </div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-white/5 group/stat hover:bg-white/10 transition-colors duration-300">
                        <div className="text-2xl font-bold text-[#45d19c]">
                          5K+
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          Coding Hours
                        </div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-white/5 group/stat hover:bg-white/10 transition-colors duration-300">
                        <div className="text-2xl font-bold text-white">
                          100%
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          Client Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>
                </SlideLeft>
              </div>
            </div>

            <div className="md:mt-6 mt-4 pb-6 z-50 md:flex md:space-y-0  space-x-7">
              <a href="/Resume_of_Zamirul.pdf" download="Resume_of_Zamirul.pdf">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[#34a578] to-[#45d19c] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#34a578]/30 transition-all duration-300 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#34a578] to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                  <span className="relative flex items-center gap-3">
                    DOWNLOAD RESUME
                    <AiOutlineDownload
                      size={20}
                      className="group-hover:translate-y-1 transition-transform"
                    />
                  </span>
                </button>
              </a>
              <a href="#contact">
                <button className="group px-8 md:mt-0 mt-5 py-4 bg-transparent border-2 border-[#34a578]/30 text-white font-semibold rounded-xl hover:bg-[#34a578]/10 hover:border-[#34a578] transition-all duration-300">
                  <span className="flex items-center gap-3">
                    Lets Connect
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* right side imhaeg  */}
        <ZoomIn>
          <div className=" rounded-2xl mt-4">
            {/* Right Column - Profile Image with 3D Effect */}
            <div className="relative">
              {/* Floating container */}
              <div className="relative group">
                {/* Outer glow layers */}
                <div className="absolute -inset-8 bg-gradient-to-br from-[#34a578]/30 via-transparent to-cyan-400/30 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                <div className="absolute -inset-4 bg-gradient-to-br from-[#34a578]/20 via-transparent to-cyan-400/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700"></div>

                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 rounded-[28px] bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] opacity-0 group-hover:duration-300 ease-in-out transition-all group-hover:opacity-100 animate-gradient-x-fast"></div>

                {/* Main image container */}
                <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-white/[0.06] via-black/40 to-white/[0.03] backdrop-blur-2xl border border-white/20 p-3 group-hover:border-transparent transition-all duration-700 transform group-hover:rotate-[0.5deg]">
                  <ZoomIn>
                    <ImageWithSkeleton
                      src={zamirulPic}
                      alt="Zamirul Kabir - Full Stack Developer & Tech Lead"
                      width={700}
                      height={610}
                      classNameWrapper="relative overflow-hidden rounded-2xl"
                      classNameImage="w-full h-[500px] md:h-[610px] object-cover rounded-2xl group-hover:scale-110 transition-transform duration-[1.2s] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                      priority
                    />
                  </ZoomIn>

                  {/* Floating tech badges */}
                  <div className="absolute top-7 right-1">
                    <div className="relative group/badge">
                      <div className="absolute -inset-3 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative px-5 py-3 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full text-white font-bold shadow-2xl shadow-[#34a578]/30 ">
                        <span className="flex items-center gap-2">
                          <FiCode className="text-lg" />
                          REACT.js
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-96 left-1">
                    <div className="relative group/badge">
                      <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>
                      <div
                        className="relative px-5 py-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full text-white font-bold shadow-2xl shadow-cyan-400/30"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <span className="flex items-center gap-2">
                          <FiStar className="text-lg" />
                          Problem Solver
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-52 left-1">
                    <div className="relative group/badge">
                      <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>
                      <div
                        className="relative px-5 py-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full text-white font-bold shadow-2xl shadow-cyan-400/30"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <span className="flex items-center gap-2">
                          <FiStar className="text-lg" />
                          Team Lead
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-1">
                    <div className="relative group/badge">
                      <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>
                      <div
                        className="relative px-5 py-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full text-white font-bold shadow-2xl shadow-cyan-400/30 "
                        style={{ animationDelay: "0.5s" }}
                      >
                        <span className="flex items-center gap-2">
                          <FiStar className="text-lg" />
                          NEXT.js
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status indicator with pulse */}
                  <div className="absolute top-8 left-8 group/status">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-[#34a578]/20 rounded-full blur opacity-0 group-hover/status:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center gap-3 px-4 py-3 bg-black/60 backdrop-blur-2xl rounded-full border border-white/20">
                        <div className="relative">
                          <div className="w-3 h-3 bg-[#34a578] rounded-full animate-pulse"></div>
                          <div className="absolute -inset-2 border border-[#34a578]/30 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-sm font-semibold text-white">
                          Available for Hire
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-10 -right-10 md:block hidden">
                <div
                  className="relative group/stats animate-fade-in"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="absolute -inset-6 bg-gradient-to-br from-[#34a578]/10 to-cyan-400/10 rounded-3xl blur-2xl opacity-0 group-hover/stats:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative p-6 bg-gradient-to-br from-white/[0.06] via-black/40 to-white/[0.03] backdrop-blur-2xl border border-white/20 rounded-3xl min-w-[280px] transform group-hover/stats:translate-y-[-5px] transition-transform duration-500">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-black text-white mb-2 animate-count-up">
                        841+
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        GitHub Contributions
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                      <div className="text-sm text-gray-300 font-medium">
                        Active since 2021
                      </div>
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4 w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] rounded-full animate-progress"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* socail icon  */}

              {/* Social Icons Section */}
              <div className="mt-6">
                <div className="flex flex-wrap  gap-4 md:gap-5">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/zamirul-kabir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                    aria-label="LinkedIn"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <FaLinkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      LinkedIn
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/alive1258"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                    aria-label="GitHub"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <FaGithub className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      GitHub
                    </span>
                  </a>

                  {/* Medium */}
                  <a
                    href="https://medium.com/@zamirulkabir999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/20"
                    aria-label="Medium"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <FaMedium className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Medium
                    </span>
                  </a>

                  {/* Dev.to */}
                  <a
                    href="https://dev.to/zamirul_kabir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/20"
                    aria-label="Dev.to"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <FaDev className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Dev.to
                    </span>
                  </a>

                  {/*     <FaFacebookF className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                   */}
                  <a
                    href="https://www.facebook.com/zamirul.kabir.s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                    aria-label="Facebook"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <FaFacebookF className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Facebook
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ZoomIn>
      </div>
    </div>
  );
};

export default Hero;
