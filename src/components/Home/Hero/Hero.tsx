// import zamirulPic from "@/public/assets/image/zamirul_pic";
import { AiOutlineDownload } from "react-icons/ai";
import "../../Home/Services/Services.css";
import ZoomIn from "@/components/Shared/animations/ZoomIn";
import SlideLeft from "@/components/Shared/animations/SlideLeft";
import ImageWithSkeleton from "@/components/Shared/animations/ImageWithSkeleton";
import { FiCode, FiStar } from "react-icons/fi";

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
            <div className="flex items-center gap-3 mb-5 animate-fade-in">
              <div className="w-16 h-1 bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] rounded-full animate-glow" />
              <span className="text-sm font-semibold tracking-widest text-gray-400">
                WELCOME TO MY PORTFOLIO
              </span>
            </div>

            {/* Hero title with gradient effect */}
            <div className="mb-4">
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

              <div className="relative mt-8 p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-colors duration-500">
                <SlideLeft delay={0.2}>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6 group-hover:text-white/90 transition-colors duration-300">
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
                      25+ production projects
                    </span>{" "}
                    across fintech, SaaS, e-commerce, and enterprise platforms,
                    consistently delivering exceptional user experiences that
                    exceed client expectations.
                  </p>
                </SlideLeft>

                <SlideLeft delay={0.4}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300"></div>
                    <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div
                        className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                        Mastery of modern frontend ecosystems (React, Next.js, )
                        with{" "}
                        <span className="font-medium text-cyan-300">
                          5,000+ hours
                        </span>{" "}
                        dedicated to pixel-perfect implementation and responsive
                        design systems
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
                          25+
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

                {/* <div className="relative group/badge">
                  <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>
                  <div
                    className="relative px-5 py-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full text-white font-bold shadow-2xl shadow-cyan-400/30 animate-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <span className="relative flex items-center gap-3">
                      DOWNLOAD RESUME
                      <AiOutlineDownload
                        size={20}
                        className="group-hover:translate-y-1 transition-transform"
                      />
                    </span>
                  </div>
                </div> */}
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
        <ZoomIn>
          <div className=" rounded-2xl mt-4">
            {/* <div className="z-20 p-1.5 relative overflow-hidden rounded-2xl cursor-pointer">
              <ImageWithSkeleton
                src={zamirulPic}
                alt="zamirulPic"
                width={400}
                height={700}
                classNameWrapper="p-1.5"
                classNameImage="w-full h-[570px] object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                priority
              />
            </div> */}

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
                      height={700}
                      classNameWrapper="relative overflow-hidden rounded-2xl"
                      classNameImage="w-full h-[600px] md:h-[700px] object-cover rounded-2xl group-hover:scale-110 transition-transform duration-[1.2s] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                      priority
                    />
                  </ZoomIn>

                  {/* Floating tech badges */}
                  <div className="absolute top-7 right-1">
                    <div className="relative group/badge">
                      <div className="absolute -inset-3 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative px-5 py-3 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full text-white font-bold shadow-2xl shadow-[#34a578]/30 animate-float">
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
                        className="relative px-5 py-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full text-white font-bold shadow-2xl shadow-cyan-400/30 animate-float"
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
                        className="relative px-5 py-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full text-white font-bold shadow-2xl shadow-cyan-400/30 animate-float"
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
                        className="relative px-5 py-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full text-white font-bold shadow-2xl shadow-cyan-400/30 animate-float"
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
            </div>
          </div>
        </ZoomIn>
      </div>
    </div>
  );
};

export default Hero;

// "use client";

// import { AiOutlineDownload, AiOutlineArrowRight } from "react-icons/ai";
// import {
//   FiGithub,
//   FiLinkedin,
//   FiTwitter,
//   FiCode,
//   FiStar,
//   FiAward,
// } from "react-icons/fi";
// import { HiOutlineSparkles, HiOutlineFire } from "react-icons/hi";
// import { MdOutlineRocketLaunch } from "react-icons/md";
// import "../../Home/Services/Services.css";
// import ZoomIn from "@/components/Shared/animations/ZoomIn";
// import SlideLeft from "@/components/Shared/animations/SlideLeft";
// import ImageWithSkeleton from "@/components/Shared/animations/ImageWithSkeleton";

// const Hero = () => {
//   const zamirulPic = "/assets/image/zamirul_pic.jpg";

//   const socialLinks = [
//     {
//       icon: FiGithub,
//       href: "https://github.com/alive1258",
//       label: "GitHub",
//       color: "from-purple-500/20 to-purple-600/10",
//       iconColor: "text-purple-400",
//     },
//     {
//       icon: FiLinkedin,
//       href: "https://linkedin.com",
//       label: "LinkedIn",
//       color: "from-blue-500/20 to-blue-600/10",
//       iconColor: "text-blue-400",
//     },
//     {
//       icon: FiTwitter,
//       href: "https://twitter.com",
//       label: "Twitter",
//       color: "from-cyan-500/20 to-cyan-600/10",
//       iconColor: "text-cyan-400",
//     },
//     {
//       icon: FiCode,
//       href: "https://",
//       label: "Portfolio",
//       color: "from-[#34a578]/20 to-[#45d19c]/10",
//       iconColor: "text-[#34a578]",
//     },
//   ];

//   const achievements = [
//     {
//       icon: FiStar,
//       value: "2.5+",
//       label: "Years Experience",
//       color: "from-[#34a578] to-cyan-400",
//     },
//     {
//       icon: FiAward,
//       value: "50+",
//       label: "Projects",
//       color: "from-cyan-400 to-[#34a578]",
//     },
//     {
//       icon: HiOutlineFire,
//       value: "841+",
//       label: "GitHub Commits",
//       color: "from-[#45d19c] to-[#34a578]",
//     },
//     {
//       icon: MdOutlineRocketLaunch,
//       value: "100%",
//       label: "Client Focus",
//       color: "from-[#34a578] to-[#45d19c]",
//     },
//   ];

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen w-full bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-hidden"
//     >
//       {/* Advanced 3D Background */}
//       <div className="absolute inset-0">
//         {/* Moving gradient orbs */}
//         <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[#34a578]/15 via-transparent to-cyan-400/10 rounded-full blur-3xl animate-orb-float"></div>
//         <div
//           className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/10 via-transparent to-[#34a578]/15 rounded-full blur-3xl animate-orb-float"
//           style={{ animationDelay: "3s", animationDuration: "25s" }}
//         ></div>

//         {/* Geometric grid with gradient */}
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,165,120,0.1),transparent_70%)]"></div>
//           <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
//         </div>

//         {/* Animated gradient lines */}
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#34a578] to-transparent animate-shimmer"></div>
//         <div
//           className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer"
//           style={{ animationDelay: "2s" }}
//         ></div>

//         {/* Floating particles */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(40)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute rounded-full bg-gradient-to-br from-[#34a578]/30 to-cyan-400/30 animate-particle-float"
//               style={{
//                 width: `${Math.random() * 4 + 1}px`,
//                 height: `${Math.random() * 4 + 1}px`,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${i * 0.1}s`,
//                 animationDuration: `${Math.random() * 20 + 10}s`,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-16 md:py-28 relative">
//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
//           {/* Left Column - Content */}
//           <div className="relative z-20">
//             {/* Glowing badge */}
//             <div className="relative inline-block mb-12 group/badge">
//               <div className="absolute -inset-3 bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] rounded-full blur-lg opacity-0 group-hover/badge:opacity-30 transition-opacity duration-700"></div>
//               <div className="relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/20 rounded-full animate-fade-in">
//                 <HiOutlineSparkles className="text-[#34a578] text-xl animate-spin-slow" />
//                 <span className="text-sm font-semibold text-white tracking-widest">
//                   OPEN TO OPPORTUNITIES
//                 </span>
//                 <div className="flex items-center gap-1">
//                   <div className="w-1.5 h-1.5 bg-[#34a578] rounded-full animate-pulse"></div>
//                   <div
//                     className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
//                     style={{ animationDelay: "0.3s" }}
//                   ></div>
//                   <div
//                     className="w-1.5 h-1.5 bg-[#45d19c] rounded-full animate-pulse"
//                     style={{ animationDelay: "0.6s" }}
//                   ></div>
//                 </div>
//               </div>
//             </div>

//             {/* Hero Title with Glitch Effect */}
//             <div className="mb-10 relative">
//               <div className="absolute -inset-6 bg-gradient-to-br from-[#34a578]/10 via-transparent to-cyan-400/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000"></div>

//               <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 relative">
//                 <span className="block text-white">
//                   ZAMIRUL
//                   <span className="absolute top-0 left-0 text-[#34a578] opacity-20 animate-glitch">
//                     ZAMIRUL
//                   </span>
//                 </span>
//                 <span className="block bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x-fast">
//                   KABIR
//                   <span
//                     className="absolute top-0 left-0 bg-gradient-to-r from-cyan-400 via-[#34a578] to-[#45d19c] bg-clip-text text-transparent opacity-30 animate-glitch"
//                     style={{ animationDelay: "0.1s" }}
//                   >
//                     KABIR
//                   </span>
//                 </span>
//               </h1>

//               {/* Animated title underline */}
//               <div className="relative mt-8">
//                 <div className="flex items-center gap-4">
//                   <div className="w-24 h-1 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full animate-pulse"></div>
//                   <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
//                     FULL-STACK <span className="text-[#34a578]">DEVELOPER</span>
//                     <span className="text-gray-500 mx-3">•</span>
//                     <span className="text-cyan-400">TECH LEAD</span>
//                   </h2>
//                   <div
//                     className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-[#34a578] rounded-full animate-pulse"
//                     style={{ animationDelay: "1s" }}
//                   ></div>
//                 </div>
//               </div>
//             </div>

//             {/* Interactive Description Card */}
//             <div className="relative group/card mb-12">
//               {/* Card glow effect */}
//               <div className="absolute -inset-6 bg-gradient-to-r from-[#34a578]/20 via-cyan-400/10 to-[#45d19c]/20 rounded-3xl blur-2xl opacity-0 group-hover/card:opacity-100 transition-all duration-1000"></div>

//               {/* Animated border */}
//               <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] opacity-0 group-hover/card:opacity-100 animate-gradient-x"></div>

//               <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] via-black/40 to-white/[0.02] backdrop-blur-2xl border border-white/15 group-hover/card:border-transparent transition-all duration-700">
//                 <SlideLeft delay={0.4}>
//                   <p className="text-xl leading-relaxed text-gray-300 mb-8 group-hover/card:text-white/90 transition-colors duration-500">
//                     Crafting{" "}
//                     <span className="font-bold text-white">
//                       high-performance web applications
//                     </span>{" "}
//                     with
//                     <span className="bg-gradient-to-r from-[#34a578] to-cyan-400 bg-clip-text text-transparent font-black mx-2">
//                       cutting-edge technologies
//                     </span>
//                     . Expert in building scalable solutions that merge
//                     <span className="text-cyan-400 font-semibold">
//                       {" "}
//                       innovation
//                     </span>{" "}
//                     with
//                     <span className="text-[#34a578] font-semibold">
//                       {" "}
//                       practicality
//                     </span>
//                     .
//                   </p>
//                 </SlideLeft>

//                 {/* Tech stack indicators */}
//                 <div className="flex flex-wrap gap-3 mb-8">
//                   {[
//                     "React",
//                     "Next.js",
//                     "TypeScript",
//                     "Node.js",
//                     "Tailwind",
//                     "MongoDB",
//                   ].map((tech, i) => (
//                     <span
//                       key={tech}
//                       className="px-4 py-2 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-gray-300 text-sm font-medium hover:bg-gradient-to-br hover:from-[#34a578]/20 hover:to-cyan-400/10 hover:border-[#34a578]/40 hover:text-white hover:scale-105 transition-all duration-300 animate-fade-in"
//                       style={{ animationDelay: `${0.6 + i * 0.1}s` }}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Achievements Grid */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   {achievements.map((achievement, index) => {
//                     const Icon = achievement.icon;
//                     return (
//                       <div
//                         key={achievement.label}
//                         className="relative group/achievement animate-fade-in"
//                         style={{ animationDelay: `${0.8 + index * 0.1}s` }}
//                       >
//                         <div
//                           className={`absolute -inset-1 bg-gradient-to-br ${achievement.color} rounded-xl blur opacity-0 group-hover/achievement:opacity-30 transition-opacity duration-500`}
//                         ></div>

//                         <div className="relative p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover/achievement:border-transparent transition-all duration-300">
//                           <div className="flex items-center gap-3 mb-2">
//                             <div
//                               className={`p-2 rounded-lg bg-gradient-to-br ${achievement.color}/20 border border-white/10`}
//                             >
//                               <Icon className="text-xl text-white" />
//                             </div>
//                             <div className="text-2xl font-bold text-white">
//                               {achievement.value}
//                             </div>
//                           </div>
//                           <div className="text-xs text-gray-400 font-medium">
//                             {achievement.label}
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-6 mb-12">
//               {/* Primary CTA with 3D effect */}
//               <a
//                 href="/Resume_of_Zamirul.pdf"
//                 download
//                 className="group/primary relative flex-1"
//               >
//                 <div className="absolute -inset-4 bg-gradient-to-r from-[#34a578] via-cyan-500 to-[#45d19c] rounded-3xl blur-2xl opacity-0 group-hover/primary:opacity-40 transition-all duration-700"></div>
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#34a578] to-[#45d19c] rounded-2xl opacity-0 group-hover/primary:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>

//                 <button className="relative w-full px-10 py-5 bg-gradient-to-r from-[#34a578] to-[#45d19c] text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-[#34a578]/50 transition-all duration-500 hover:scale-105 group-hover/primary:translate-y-[-2px] flex items-center justify-center gap-4 overflow-hidden">
//                   {/* Shimmer effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/primary:translate-x-[100%] transition-transform duration-1000"></div>

//                   <AiOutlineDownload className="text-2xl group-hover/primary:animate-bounce" />
//                   <span className="text-lg">Download Resume</span>
//                   <AiOutlineArrowRight className="text-xl opacity-0 group-hover/primary:opacity-100 group-hover/primary:translate-x-2 transition-all duration-300" />
//                 </button>
//               </a>

//               {/* Secondary CTA with glass effect */}
//               <a href="#contact" className="group/secondary relative flex-1">
//                 <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-transparent to-white/10 rounded-3xl blur-2xl opacity-0 group-hover/secondary:opacity-30 transition-opacity duration-700"></div>

//                 <button className="relative w-full px-10 py-5 bg-white/[0.07] backdrop-blur-2xl border border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-[#34a578]/50 transition-all duration-500 hover:scale-105 group-hover/secondary:translate-y-[-2px] flex items-center justify-center gap-4">
//                   <span className="text-lg">Start Project</span>
//                   <AiOutlineArrowRight className="text-xl group-hover/secondary:translate-x-2 transition-transform duration-300" />
//                 </button>
//               </a>
//             </div>

//             {/* Social Links with Enhanced Design */}
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
//               <span className="text-sm font-semibold text-gray-400 tracking-widest flex items-center gap-2">
//                 <div className="w-8 h-px bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full"></div>
//                 CONNECT WITH ME
//                 <div className="w-8 h-px bg-gradient-to-r from-cyan-400 to-[#34a578] rounded-full"></div>
//               </span>

//               <div className="flex items-center gap-4">
//                 {socialLinks.map((social, index) => {
//                   const Icon = social.icon;
//                   return (
//                     <a
//                       key={social.label}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`relative group/social animate-fade-in`}
//                       style={{ animationDelay: `${1.2 + index * 0.1}s` }}
//                     >
//                       <div
//                         className={`absolute -inset-3 bg-gradient-to-br ${social.color} rounded-2xl blur opacity-0 group-hover/social:opacity-30 transition-opacity duration-500`}
//                       ></div>

//                       <div className="relative p-3 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover/social:border-transparent transition-all duration-300">
//                         <Icon
//                           className={`w-6 h-6 ${social.iconColor} group-hover/social:scale-110 transition-transform duration-300`}
//                         />
//                       </div>

//                       {/* Tooltip */}
//                       <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg text-xs text-white opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                         {social.label}
//                         <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 border-b border-r border-white/10 rotate-45"></div>
//                       </div>
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Profile Image with 3D Effect */}
//           <div className="relative">
//             {/* Floating container */}
//             <div className="relative group">
//               {/* Outer glow layers */}
//               <div className="absolute -inset-8 bg-gradient-to-br from-[#34a578]/30 via-transparent to-cyan-400/30 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
//               <div className="absolute -inset-4 bg-gradient-to-br from-[#34a578]/20 via-transparent to-cyan-400/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700"></div>

//               {/* Animated gradient border */}
//               <div className="absolute -inset-0.5 rounded-[28px] bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] opacity-0 group-hover:opacity-100 animate-gradient-x-fast"></div>

//               {/* Main image container */}
//               <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-white/[0.06] via-black/40 to-white/[0.03] backdrop-blur-2xl border border-white/20 p-3 group-hover:border-transparent transition-all duration-700 transform group-hover:rotate-[0.5deg]">
//                 <ZoomIn>
//                   <ImageWithSkeleton
//                     src={zamirulPic}
//                     alt="Zamirul Kabir - Full Stack Developer & Tech Lead"
//                     width={700}
//                     height={900}
//                     classNameWrapper="relative overflow-hidden rounded-2xl"
//                     classNameImage="w-full h-[700px] md:h-[850px] object-cover rounded-2xl group-hover:scale-110 transition-transform duration-[1.2s] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
//                     priority
//                   />
//                 </ZoomIn>

//                 {/* Floating tech badges */}
//                 <div className="absolute -top-6 -right-6">
//                   <div className="relative group/badge">
//                     <div className="absolute -inset-3 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>
//                     <div className="relative px-5 py-3 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full text-white font-bold shadow-2xl shadow-[#34a578]/30 animate-float">
//                       <span className="flex items-center gap-2">
//                         <FiCode className="text-lg" />
//                         REACT.js
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute -bottom-6 -left-6">
//                   <div className="relative group/badge">
//                     <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>
//                     <div
//                       className="relative px-5 py-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full text-white font-bold shadow-2xl shadow-cyan-400/30 animate-float"
//                       style={{ animationDelay: "0.5s" }}
//                     >
//                       <span className="flex items-center gap-2">
//                         <FiStar className="text-lg" />
//                         NEXT.js
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Status indicator with pulse */}
//                 <div className="absolute top-8 left-8 group/status">
//                   <div className="relative">
//                     <div className="absolute -inset-3 bg-[#34a578]/20 rounded-full blur opacity-0 group-hover/status:opacity-100 transition-opacity duration-500"></div>
//                     <div className="relative flex items-center gap-3 px-4 py-3 bg-black/60 backdrop-blur-2xl rounded-full border border-white/20">
//                       <div className="relative">
//                         <div className="w-3 h-3 bg-[#34a578] rounded-full animate-pulse"></div>
//                         <div className="absolute -inset-2 border border-[#34a578]/30 rounded-full animate-ping"></div>
//                       </div>
//                       <span className="text-sm font-semibold text-white">
//                         Available for Hire
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating stats card */}
//             <div className="absolute -bottom-10 -right-10 md:block hidden">
//               <div
//                 className="relative group/stats animate-fade-in"
//                 style={{ animationDelay: "1.5s" }}
//               >
//                 <div className="absolute -inset-6 bg-gradient-to-br from-[#34a578]/10 to-cyan-400/10 rounded-3xl blur-2xl opacity-0 group-hover/stats:opacity-100 transition-opacity duration-700"></div>

//                 <div className="relative p-6 bg-gradient-to-br from-white/[0.06] via-black/40 to-white/[0.03] backdrop-blur-2xl border border-white/20 rounded-3xl min-w-[280px] transform group-hover/stats:translate-y-[-5px] transition-transform duration-500">
//                   <div className="text-center mb-4">
//                     <div className="text-4xl font-black text-white mb-2 animate-count-up">
//                       841+
//                     </div>
//                     <div className="text-sm text-gray-400 font-medium">
//                       GitHub Contributions
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-center gap-3">
//                     <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
//                     <div className="text-sm text-gray-300 font-medium">
//                       Active since 2021
//                     </div>
//                     <div
//                       className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
//                       style={{ animationDelay: "0.3s" }}
//                     ></div>
//                   </div>

//                   {/* Progress bar */}
//                   <div className="mt-4 w-full h-2 bg-white/5 rounded-full overflow-hidden">
//                     <div className="h-full bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] rounded-full animate-progress"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Scroll Indicator */}
//       <div
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in"
//         style={{ animationDelay: "2s" }}
//       >
//         <div className="flex flex-col items-center gap-4">
//           <span className="text-sm text-gray-500 font-medium tracking-widest animate-pulse">
//             SCROLL TO EXPLORE
//           </span>
//           <div className="relative">
//             <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-gradient-to-b from-[#34a578] via-cyan-400 to-[#45d19c] rounded-full mt-2 animate-scroll-dot"></div>
//             </div>
//             <div className="absolute -inset-4 border-2 border-[#34a578]/10 rounded-full animate-ping-slow"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
