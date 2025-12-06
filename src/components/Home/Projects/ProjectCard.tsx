// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// import Link from "next/link";
// import { Project } from "../../../../utils/projectData";
// import SlideUp from "@/components/Shared/animations/SlideUp";
// import { RiArrowRightLine } from "react-icons/ri";
// import ProjectDetailsModal from "./ProductsDetailsModal";

// interface ProjectCardProps {
//   item: Project;
//   idx: number;
//   delay?: number;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ item, idx, delay = 0 }) => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <SlideUp delay={delay}>
//         <div className="relative bg-gradient-to-br from-white/[0.03] via-black/30 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 my-8 grid md:grid-cols-2 grid-cols-1 gap-8 overflow-hidden group hover:border-[#3B82F6]/40 transition-all duration-500">
//           {/* Optional gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/0 via-transparent to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//           {/* START IMAGE SECTION */}
//           <div className={`${idx % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
//             <div className="relative overflow-hidden rounded-2xl">
//               <Image
//                 className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
//                 src={item?.image}
//                 alt={item?.name}
//                 height={384}
//                 width={500}
//               />
//               {/* Featured badge */}
//               {item.featured && (
//                 <div className="absolute top-4 left-4 bg-[#3B82F6] text-white px-3 py-1 rounded-full text-xs font-semibold">
//                   Featured
//                 </div>
//               )}
//             </div>
//           </div>
//           {/* END IMAGE SECTION */}

//           {/* START TEXT SECTION */}
//           <div className={`${idx % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
//             {/* Company Logo and Name */}
//             <div className="flex items-center gap-x-4 md:mt-8 mt-4">
//               <Image
//                 className="md:size-10 size-7"
//                 src={item?.logo}
//                 alt={item?.company}
//                 height={40}
//                 width={40}
//               />
//               <div>
//                 <h4 className="text-secondary-base md:text-2xl text-[20px] font-satoshi font-bold">
//                   {item?.company}
//                 </h4>
//                 <div className="flex items-center gap-2 mt-1">
//                   <span className="text-sm text-gray-500">{item?.role}</span>
//                   <span className="text-gray-300">•</span>
//                   <span className="text-sm text-gray-500">
//                     {item?.duration}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Project Title */}
//             <h1 className="md:text-[32px] text-[20px] md:mt-10 mt-4 font-satoshi font-bold">
//               <button
//                 onClick={() => setShowModal(true)}
//                 className="text-primary-base hover:text-[#3B82F6] text-left"
//               >
//                 {item?.name}
//               </button>
//             </h1>

//             {/* Project Description */}
//             <p className="text-[#71717A] font-satoshi font-medium text-[16px] mt-6 ">
//               {item?.description}
//             </p>

//             {/* Tags */}
//             <div className="md:mt-6 mt-4 flex flex-wrap gap-3">
//               {item?.tags?.map((tag, idx) => (
//                 <span
//                   key={idx}
//                   className="border border-[#71717A] font-satoshi font-medium text-tertiary-base hover:text-[#3B82F6] hover:border-[#3B82F6] cursor-pointer rounded-3xl px-4 py-2 text-sm transition-all duration-300 ease-in-out"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Stats */}
//             <div className="md:mt-6 mt-4 flex flex-wrap gap-4">
//               {item.achievements.slice(0, 2).map((achievement, idx) => (
//                 <div key={idx} className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
//                   <span className="text-sm text-gray-600">{achievement}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Action Links */}
//             <div className="md:mt-9 mt-5 flex flex-wrap gap-6">
//               {/* View Live Project Link */}
//               <div className="group w-fit">
//                 <div className="flex items-center gap-x-2 border-b border-[#71717A] group-hover:border-[#3B82F6] transition-transform duration-300 ease-in-out group-hover:translate-x-2">
//                   <Link href={item.live_link} target="_blank">
//                     <span className="text-[#71717A] text-sm font-satoshi font-bold uppercase cursor-pointer group-hover:text-[#3B82F6]">
//                       View Live
//                     </span>
//                   </Link>
//                   <RiArrowRightLine
//                     size={20}
//                     className="text-[#71717A] group-hover:text-[#3B82F6] transition-all duration-300 ease-in-out"
//                   />
//                 </div>
//               </div>

//               {/* GitHub Link */}
//               <div className="group w-fit">
//                 <div className="flex items-center gap-x-2 border-b border-[#71717A] group-hover:border-[#3B82F6] transition-transform duration-300 ease-in-out group-hover:translate-x-2">
//                   <Link href={item.github_link} target="_blank">
//                     <span className="text-[#71717A] text-sm font-satoshi font-bold uppercase cursor-pointer group-hover:text-[#3B82F6]">
//                       View Code
//                     </span>
//                   </Link>
//                   <RiArrowRightLine
//                     size={20}
//                     className="text-[#71717A] group-hover:text-[#3B82F6] transition-all duration-300 ease-in-out"
//                   />
//                 </div>
//               </div>

//               {/* View Details Link */}
//               <div className="group w-fit">
//                 <div className="flex items-center gap-x-2 border-b border-[#71717A] group-hover:border-[#3B82F6] transition-transform duration-300 ease-in-out group-hover:translate-x-2">
//                   <button
//                     onClick={() => setShowModal(true)}
//                     className="text-[#71717A] text-sm font-satoshi font-bold uppercase cursor-pointer group-hover:text-[#3B82F6]"
//                   >
//                     View Details
//                   </button>
//                   <RiArrowRightLine
//                     size={20}
//                     className="text-[#71717A] group-hover:text-[#3B82F6] transition-all duration-300 ease-in-out"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* END TEXT SECTION */}
//         </div>
//       </SlideUp>

//       {/* Project Details Modal */}
//       {showModal && (
//         <ProjectDetailsModal
//           project={item}
//           onClose={() => setShowModal(false)}
//         />
//       )}
//     </>
//   );
// };

// export default ProjectCard;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../../../utils/projectData";
import SlideUp from "@/components/Shared/animations/SlideUp";
import { RiArrowRightLine } from "react-icons/ri";
import ProjectDetailsModal from "./ProductsDetailsModal";

interface ProjectCardProps {
  item: Project;
  idx: number;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item, idx, delay = 0 }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <SlideUp delay={delay}>
        <div
          className="relative group my-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glowing background effect */}
          <div className="absolute -inset-3 bg-gradient-to-r from-[#3B82F6]/20 via-transparent to-cyan-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

          {/* Main card */}
          <div className="relative bg-gradient-to-br from-white/[0.03] via-black/30 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 grid md:grid-cols-2 gap-8 overflow-hidden group-hover:border-[#3B82F6]/40 transition-all duration-500">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/0 via-transparent to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Floating particles */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-[#3B82F6] rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>

            {/* Animated corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#3B82F6]/20 rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-cyan-400/20 rounded-br-xl"></div>

            {/* START IMAGE SECTION */}
            <div
              className={`relative ${
                idx % 2 !== 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                {/* Image container with glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6]/30 via-transparent to-cyan-400/30 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"></div>

                <Image
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] relative z-10"
                  src={item?.image}
                  alt={item?.name}
                  height={384}
                  width={500}
                />

                {/* Featured badge with glow */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-[#3B82F6] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative px-3 py-1 bg-gradient-to-r from-[#3B82F6] to-cyan-500 text-white rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        Featured
                      </div>
                    </div>
                  </div>
                )}

                {/* Category overlay */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                    {item.category}
                  </div>
                </div>
              </div>
            </div>
            {/* END IMAGE SECTION */}

            {/* START TEXT SECTION */}
            <div
              className={`relative ${
                idx % 2 !== 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              {/* Company Logo and Name */}
              <div className="flex items-center gap-x-4 mb-6">
                <div className="relative group/logo">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#3B82F6]/20 to-transparent rounded-full blur-sm opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    className="relative z-10 md:size-10 size-7 rounded-lg"
                    src={item?.logo}
                    alt={item?.company}
                    height={40}
                    width={40}
                  />
                </div>
                <div>
                  <h4 className="text-white md:text-2xl text-[20px] font-satoshi font-bold">
                    {item?.company}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-400">{item?.role}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400">
                      {item?.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Title */}
              <h1 className="md:text-[32px] text-[20px] mb-4 font-satoshi font-bold">
                <button
                  onClick={() => setShowModal(true)}
                  className="text-white hover:text-[#3B82F6] text-left transition-colors duration-300 relative group/title"
                >
                  {item?.name}
                  {/* Animated underline */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-cyan-400 group-hover/title:w-full transition-all duration-500"></div>
                </button>
              </h1>

              {/* Project Description */}
              <p className="text-gray-400 font-satoshi font-medium text-[16px] mb-6 leading-relaxed">
                {item?.description}
              </p>

              {/* Tags with hover effects */}
              <div className="mb-6 flex flex-wrap gap-3">
                {item?.tags?.map((tag, idx) => (
                  <div key={idx} className="relative group/tag">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-3xl blur opacity-0 group-hover/tag:opacity-30 transition-opacity duration-300"></div>
                    <span className="relative px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 font-satoshi font-medium rounded-3xl text-sm hover:text-white hover:border-[#3B82F6]/50 transition-all duration-300 cursor-pointer">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats with animated dots */}
              <div className="mb-6 flex flex-wrap gap-4">
                {item.achievements.slice(0, 2).map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-2 group/stat">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-[#3B82F6] rounded-full blur opacity-0 group-hover/stat:opacity-30 transition-opacity duration-300"></div>
                      <div className="relative w-2 h-2 bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover/stat:text-gray-300 transition-colors">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Links with enhanced animations */}
              <div className="flex flex-wrap gap-6">
                {[
                  {
                    label: "View Live",
                    href: item.live_link,
                    external: true,
                    icon: <RiArrowRightLine size={20} />,
                  },
                  {
                    label: "View Code",
                    href: item.github_link,
                    external: true,
                    icon: <RiArrowRightLine size={20} />,
                  },
                  {
                    label: "View Details",
                    action: () => setShowModal(true),
                    icon: <RiArrowRightLine size={20} />,
                  },
                ].map((link, idx) => (
                  <div key={idx} className="group/link w-fit">
                    <div className="flex items-center gap-x-2">
                      {link.href ? (
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-x-2"
                        >
                          <span className="text-gray-400 text-sm font-satoshi font-bold uppercase cursor-pointer group-hover/link:text-[#3B82F6] transition-all duration-300 border-b border-transparent group-hover/link:border-[#3B82F6] pb-1">
                            {link.label}
                          </span>
                          <RiArrowRightLine
                            size={20}
                            className="text-gray-400 group-hover/link:text-[#3B82F6] group-hover/link:translate-x-1 transition-all duration-300"
                          />
                        </Link>
                      ) : (
                        <button
                          onClick={link.action}
                          className="flex items-center gap-x-2"
                        >
                          <span className="text-gray-400 text-sm font-satoshi font-bold uppercase cursor-pointer group-hover/link:text-[#3B82F6] transition-all duration-300 border-b border-transparent group-hover/link:border-[#3B82F6] pb-1">
                            {link.label}
                          </span>
                          <RiArrowRightLine
                            size={20}
                            className="text-gray-400 group-hover/link:text-[#3B82F6] group-hover/link:translate-x-1 transition-all duration-300"
                          />
                        </button>
                      )}
                    </div>
                    {/* Animated line effect */}
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent w-0 group-hover/link:w-full transition-all duration-500 mt-1"></div>
                  </div>
                ))}
              </div>
            </div>
            {/* END TEXT SECTION */}
          </div>
        </div>
      </SlideUp>

      {/* Project Details Modal */}
      {showModal && (
        <ProjectDetailsModal
          project={item}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
