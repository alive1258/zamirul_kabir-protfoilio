// import React from "react";
// import { BiBox } from "react-icons/bi";
// import { MyExperienceCardProps } from "./Experience";
// import SlideUp from "@/components/Shared/animations/SlideUp";

// const ExperienceCard: React.FC<MyExperienceCardProps> = ({
//   item,
//   delay = 0,
// }) => {
//   return (
//     <>
//       <div className="flex gap-6 text-[#ffffff] pb-4 ">
//         <div className="flex flex-col justify-center items-center ">
//           <div className="rounded-full flex justify-center items-center w-10 h-10  bg-[#34a578]">
//             <BiBox size={20} className="text-[#ffffff]" />
//           </div>
//           <div className="border-l-2 border-gray-400 md:h-40 h-36"></div>
//         </div>

//         {/* Experience  */}
//         <SlideUp delay={delay}>
//           <div className="box ">
//             <div className="">
//               <div className="space-y-2 px-3 py-3">
//                 <h4>{item?.date}</h4>
//                 <div className="border-b w-36 border-[#34a578]"></div>
//                 <h1 className="md:text-2xl text-xl">{item?.title}</h1>
//                 <h3 className="text-[#34a578]">{item?.company}</h3>
//                 <p>{item?.description}</p>
//               </div>
//             </div>
//           </div>
//         </SlideUp>
//       </div>
//     </>
//   );
// };

// export default ExperienceCard;

import React from "react";
import { BiBox, BiChevronRight, BiCalendar } from "react-icons/bi";
import { MyExperienceCardProps } from "./Experience";
import SlideUp from "@/components/Shared/animations/SlideUp";
import { motion } from "framer-motion";

const ExperienceCard: React.FC<MyExperienceCardProps> = ({
  item,
  delay = 0,
}) => {
  return (
    <div className="relative group">
      {/* Glowing background effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      <div className="relative flex gap-6 pb-8">
        {/* Timeline line and icon */}
        <div className="flex flex-col items-center">
          {/* Animated icon container */}
          <div className="relative z-10">
            {/* Outer glow ring */}
            <div className="absolute -inset-3 bg-gradient-to-br from-[#34a578] to-cyan-400 rounded-full opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500"></div>

            {/* Main icon container */}
            <div className="relative flex justify-center items-center w-14 h-14 bg-gradient-to-br from-[#34a578] to-[#45d19c] rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#34a578]/20">
              <BiBox size={24} className="text-white" />

              {/* Inner decorative rings */}
              <div className="absolute inset-2 border-2 border-white/20 rounded-full animate-ping-slow"></div>
              <div className="absolute inset-1 border border-white/10 rounded-full"></div>
            </div>

            {/* Floating dot animation */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce"></div>
          </div>

          {/* Animated timeline line */}
          <div className="relative mt-4">
            <div className="w-0.5 h-full bg-gradient-to-b from-[#34a578] via-gray-600 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              {/* Moving dot on timeline */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#34a578] rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
            </div>

            {/* Timeline end cap */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Experience Content */}
        <SlideUp delay={delay}>
          <div className="flex-1 relative">
            {/* Card with glassmorphism effect */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-all duration-500 group-hover:scale-[1.02]">
              {/* Date badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-[#34a578]/10 to-transparent rounded-full border border-[#34a578]/20 group-hover:border-[#34a578]/40 transition-colors duration-300">
                <BiCalendar className="text-[#34a578]" size={14} />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item?.date}
                </span>
              </div>

              {/* Title with animated underline */}
              <div className="mb-2">
                <h1 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-200 group-hover:to-white group-hover:bg-clip-text transition-all duration-300">
                  {item?.title}
                </h1>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full mb-3 group-hover:w-24 transition-all duration-500"></div>
              </div>

              {/* Company with gradient text */}
              <h3 className="text-xl font-semibold mb-4">
                <span className="bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent">
                  {item?.company}
                </span>
              </h3>

              {/* Description with fade effect */}
              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                {item?.description}
              </p>

              {/* Skills/Technologies used (if available) */}
              {/* {item?.technologies && (
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 bg-[#34a578] rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-400">Technologies Used</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300 group-hover:bg-[#34a578]/10 group-hover:border-[#34a578]/30 group-hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )} */}

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#34a578]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Hover indicator arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <BiChevronRight size={24} className="text-[#34a578]" />
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/10 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-cyan-500/10 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </SlideUp>
      </div>
    </div>
  );
};

export default ExperienceCard;
