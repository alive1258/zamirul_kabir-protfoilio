// import SlideUp from "@/components/Shared/animations/SlideUp";
// import "../../Home/Services/Services.css";
// import ExperienceAnimation from "./ExperienceAnimation";
// import ExperienceCard from "./ExperienceCard";
// import { FiChevronRight } from "react-icons/fi";

// export interface MyExperience {
//   _id: string;
//   date: string;
//   title: string;
//   company: string;
//   description: string;
// }
// export interface MyExperienceCardProps {
//   item: MyExperience;
//   idx: number;
//   delay: number;
// }

// const Experience = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/experiences`,
//     {
//       next: {
//         revalidate: 30,
//       },
//     }
//   );
//   const data: MyExperience[] = await res.json();

//   return (
//     <div
//       id="experience"
//       className="relative min-h-screen py-20 md:py-32 overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Animated gradient orbs */}
//         <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-[#34a578]/20 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
//         <div
//           className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-[#34a578]/10 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "2s" }}
//         ></div>

//         {/* Grid pattern background */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:60px_60px]"></div>

//         {/* Animated lines */}
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#34a578]/30 to-transparent animate-shimmer"></div>
//         <div
//           className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-shimmer"
//           style={{ animationDelay: "1s" }}
//         ></div>
//       </div>

//       <div className="container relative z-10">
//         {/* Section Header with Modern Design */}
//         <div className="text-center mb-16 md:mb-24">
//           {/* Pre-title badge */}

//           {/* Decorative pre-title elements */}
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
//             <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
//               <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
//               <span className="text-sm font-medium text-gray-400 tracking-widest">
//                 PROFESSIONAL JOURNY
//               </span>
//               <div
//                 className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
//                 style={{ animationDelay: "0.3s" }}
//               ></div>
//             </div>
//             <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
//           </div>

//           {/* Main Title */}
//           <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
//             <span
//               className="text-white animate-fade-up inline-block"
//               style={{ animationDelay: "0.2s" }}
//             >
//               My
//             </span>
//             <span
//               className="relative ml-4 inline-block animate-fade-up"
//               style={{ animationDelay: "0.3s" }}
//             >
//               <span className="relative z-10 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
//                 Experience
//               </span>
//               {/* Floating particles */}
//               <div className="absolute -top-3 -right-3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
//               <div
//                 className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#34a578] rounded-full animate-bounce"
//                 style={{ animationDelay: "0.2s" }}
//               ></div>
//             </span>
//           </h1>

//           {/* Animated underline */}

//           {/* Animated separator */}
//           <div className="mt-6 flex items-center justify-center gap-6">
//             <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
//               <div
//                 className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
//                 style={{ animationDelay: "0.3s" }}
//               ></div>
//               <div
//                 className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"
//                 style={{ animationDelay: "0.6s" }}
//               ></div>
//             </div>
//             <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
//           </div>

//           {/* Description */}
//           <p
//             className="mt-10 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed animate-fade-up"
//             style={{ animationDelay: "0.5s" }}
//           >
//             A timeline of my professional growth, achievements, and the
//             <span className="inline-block mx-2 text-[#34a578] animate-bounce">
//               •
//             </span>
//             milestones that shaped my career
//           </p>
//         </div>

//         {/* Experience Content Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
//           {/* Left Column - Animation/Visual */}
//           <div className="lg:col-span-5 relative">
//             {/* Floating card container */}
//             <div className="sticky top-24">
//               <div className="relative group">
//                 {/* Glow effect */}
//                 <div className="absolute  -inset-4 bg-gradient-to-br from-[#34a578]/20 via-transparent to-cyan-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

//                 {/* Main card */}
//                 <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden group-hover:border-[#34a578]/40 transition-all duration-500">
//                   {/* Animated border */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#34a578]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

//                   {/* Content */}
//                   <div className="relative z-10">
//                     <div className="flex items-center gap-3 mb-6">
//                       <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#34a578] to-cyan-400 flex items-center justify-center">
//                         <FiChevronRight className="text-white text-lg" />
//                       </div>
//                       <h3 className="text-xl font-semibold text-white">
//                         Career Timeline
//                       </h3>
//                     </div>

//                     <p className="text-gray-400 mb-8 leading-relaxed">
//                       {data?.length || 0} professional experiences that
//                       contributed to my expertise in software development and
//                       problem-solving.
//                     </p>

//                     {/* Stats with modern design */}
//                     {/* Modern Stats Grid */}
//                     <div className="grid grid-cols-2 gap-4">
//                       {/* Role Counter */}
//                       <div className="relative p-4 rounded-xl bg-gradient-to-br from-[#34a578]/10 to-transparent border border-[#34a578]/20 group hover:from-[#34a578]/15 hover:border-[#34a578]/40 transition-all duration-500">
//                         {/* Floating particles */}
//                         <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100"></div>

//                         <div className="relative">
//                           {/* Animated number */}
//                           <div className="relative inline-block">
//                             <div
//                               className="text-3xl font-bold text-white mb-1 animate-count-up"
//                               data-target={data?.length || 0}
//                             >
//                               {data?.length || 0}
//                             </div>
//                             {/* Reflection effect */}
//                             <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"></div>
//                           </div>

//                           {/* Label with icon */}
//                           <div className="flex items-center gap-2 mt-2">
//                             <div className="w-2 h-2 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full animate-pulse"></div>
//                             <span className="text-sm font-medium text-gray-300">
//                               Roles
//                             </span>
//                           </div>

//                           {/* Progress bar */}
//                           <div className="mt-3 w-full h-1 bg-white/5 rounded-full overflow-hidden">
//                             <div
//                               className="h-full bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full transition-all duration-1000"
//                               style={{
//                                 width: `${Math.min(
//                                   100,
//                                   ((data?.length || 0) / 10) * 100
//                                 )}%`,
//                               }}
//                             ></div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Companies Counter */}
//                       <div className="relative p-4 rounded-xl bg-gradient-to-br from-cyan-400/10 to-transparent border border-cyan-400/20 group hover:from-cyan-400/15 hover:border-cyan-400/40 transition-all duration-500">
//                         {/* Floating particles */}
//                         <div
//                           className="absolute bottom-2 left-2 w-2 h-2 bg-[#34a578] rounded-full animate-bounce opacity-0 group-hover:opacity-100"
//                           style={{ animationDelay: "0.3s" }}
//                         ></div>

//                         <div className="relative">
//                           {/* Animated number */}
//                           <div className="relative inline-block">
//                             <div
//                               className="text-3xl font-bold text-white mb-1 animate-count-up"
//                               data-target={
//                                 new Set(data?.map((exp) => exp.company)).size ||
//                                 0
//                               }
//                             >
//                               {new Set(data?.map((exp) => exp.company)).size ||
//                                 0}
//                             </div>
//                             {/* Reflection effect */}
//                             <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm"></div>
//                           </div>

//                           {/* Label with icon */}
//                           <div className="flex items-center gap-2 mt-2">
//                             <div
//                               className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-[#34a578] rounded-full animate-pulse"
//                               style={{ animationDelay: "0.2s" }}
//                             ></div>
//                             <span className="text-sm font-medium text-gray-300">
//                               Companies
//                             </span>
//                           </div>

//                           {/* Progress bar */}
//                           <div className="mt-3 w-full h-1 bg-white/5 rounded-full overflow-hidden">
//                             <div
//                               className="h-full bg-gradient-to-r from-cyan-400 to-[#34a578] rounded-full transition-all duration-1000"
//                               style={{
//                                 width: `${Math.min(
//                                   100,
//                                   ((new Set(data?.map((exp) => exp.company))
//                                     .size || 0) /
//                                     5) *
//                                     100
//                                 )}%`,
//                               }}
//                             ></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Corner accents */}
//                   <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#34a578]/30 rounded-tr-lg"></div>
//                   <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-cyan-400/30 rounded-bl-lg"></div>
//                 </div>
//               </div>

//               {/* Optional: Add ExperienceAnimation component here */}
//               <div className="mt-8">
//                 <div className="box p-3 group">
//                   <SlideUp>
//                     <ExperienceAnimation />
//                   </SlideUp>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Timeline */}
//           <div className="lg:col-span-7">
//             {/* Timeline Container */}
//             <div className="relative">
//               {/* Timeline line */}
//               <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#34a578] via-gray-600 to-transparent rounded-full"></div>

//               {/* Right Column - Timeline */}
//               <div className="lg:col-span-7">
//                 {/* Timeline Container */}
//                 <div className="relative">
//                   {/* Timeline line */}
//                   <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#34a578] via-gray-600 to-transparent rounded-full"></div>

//                   {/* Timeline Cards Container with Fixed Height and Scroll */}
//                   <div className="relative h-[820px] pl-8  md:pl-12">
//                     <div className="h-full overflow-y-auto pr-4 timeline-scrollbar">
//                       <div className="space-y-4 pt-6">
//                         {data?.map((experience, idx) => (
//                           <div key={experience._id} className="relative  group">
//                             {/* Timeline dot */}
//                             <div className="absolute left-[-27px] top-6 w-4 h-4 bg-gradient-to-br from-[#34a578] to-cyan-400 rounded-full border-4 border-gray-900 z-10 group-hover:scale-125 transition-transform duration-300"></div>
//                             <div className="absolute left-[-27px] top-6 w-4 h-4 bg-[#34a578] rounded-full animate-ping opacity-20"></div>

//                             <ExperienceCard
//                               idx={idx}
//                               delay={idx * 0.2}
//                               item={experience}
//                             />
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Scroll gradient overlay */}
//                     <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>
//                     <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Scroll indicator */}
//               <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm animate-bounce">
//                 <div className="w-1.5 h-1.5 bg-[#34a578] rounded-full"></div>
//                 <span>Scroll to explore</span>
//                 <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div
//           className="mt-20 text-center animate-fade-up"
//           style={{ animationDelay: "0.8s" }}
//         >
//           <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
//             <span className="text-gray-400">Want to know more?</span>
//             <a
//               href="#contact"
//               className="flex items-center gap-2 text-[#34a578] hover:text-cyan-400 transition-colors"
//             >
//               <span>Get in touch</span>
//               <FiChevronRight className="mt-0.5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

// components/Home/Experience/Experience.js
"use client"; // ADD THIS - Make it a client component

import { useEffect, useState } from "react"; // Add these imports
import SlideUp from "@/components/Shared/animations/SlideUp";
import "../../Home/Services/Services.css";
import ExperienceAnimation from "./ExperienceAnimation";
import ExperienceCard from "./ExperienceCard";
import { FiChevronRight } from "react-icons/fi";

export interface MyExperience {
  _id: string;
  date: string;
  title: string;
  company: string;
  description: string;
}
export interface MyExperienceCardProps {
  item: MyExperience;
  idx: number;
  delay: number;
}

const Experience = () => {
  // Remove async
  const [experiences, setExperiences] = useState<MyExperience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data in useEffect (client-side)
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/experiences`
        );
        const data = await res.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        id="experience"
        className="relative min-h-screen py-20 md:py-32 overflow-hidden"
      >
        <div className="container relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">My</span>
              <span className="ml-4 text-[#34a578]">Experience</span>
            </h1>
            <p className="mt-10 text-gray-400 text-lg max-w-2xl mx-auto">
              Loading experiences...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="experience"
      className="relative min-h-screen py-20 md:py-32 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-[#34a578]/20 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-[#34a578]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Animated lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#34a578]/30 to-transparent animate-shimmer"></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-shimmer"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header with Modern Design */}
        <div className="text-center mb-16 md:mb-24">
          {/* Decorative pre-title elements */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
              <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-400 tracking-widest">
                PROFESSIONAL JOURNY
              </span>
              <div
                className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              ></div>
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            <span
              className="text-white animate-fade-up inline-block"
              style={{ animationDelay: "0.2s" }}
            >
              My
            </span>
            <span
              className="relative ml-4 inline-block animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="relative z-10 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Experience
              </span>
              {/* Floating particles */}
              <div className="absolute -top-3 -right-3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
              <div
                className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#34a578] rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </span>
          </h1>

          {/* Animated separator */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
          </div>

          {/* Description */}
          <p
            className="mt-10 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            A timeline of my professional growth, achievements, and the
            <span className="inline-block mx-2 text-[#34a578] animate-bounce">
              •
            </span>
            milestones that shaped my career
          </p>
        </div>

        {/* Experience Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column - Animation/Visual */}
          <div className="lg:col-span-5 relative">
            {/* Floating card container */}
            <div className="sticky top-24">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute  -inset-4 bg-gradient-to-br from-[#34a578]/20 via-transparent to-cyan-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Main card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden group-hover:border-[#34a578]/40 transition-all duration-500">
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#34a578]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#34a578] to-cyan-400 flex items-center justify-center">
                        <FiChevronRight className="text-white text-lg" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        Career Timeline
                      </h3>
                    </div>

                    <p className="text-gray-400 mb-8 leading-relaxed">
                      {experiences?.length || 0} professional experiences that
                      contributed to my expertise in software development and
                      problem-solving.
                    </p>

                    {/* Modern Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Role Counter */}
                      <div className="relative p-4 rounded-xl bg-gradient-to-br from-[#34a578]/10 to-transparent border border-[#34a578]/20 group hover:from-[#34a578]/15 hover:border-[#34a578]/40 transition-all duration-500">
                        {/* Floating particles */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100"></div>

                        <div className="relative">
                          {/* Animated number */}
                          <div className="relative inline-block">
                            <div
                              className="text-3xl font-bold text-white mb-1 animate-count-up"
                              data-target={experiences?.length || 0}
                            >
                              {experiences?.length || 0}
                            </div>
                            {/* Reflection effect */}
                            <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"></div>
                          </div>

                          {/* Label with icon */}
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-300">
                              Roles
                            </span>
                          </div>

                          {/* Progress bar */}
                          <div className="mt-3 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full transition-all duration-1000"
                              style={{
                                width: `${Math.min(
                                  100,
                                  ((experiences?.length || 0) / 10) * 100
                                )}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Companies Counter */}
                      <div className="relative p-4 rounded-xl bg-gradient-to-br from-cyan-400/10 to-transparent border border-cyan-400/20 group hover:from-cyan-400/15 hover:border-cyan-400/40 transition-all duration-500">
                        {/* Floating particles */}
                        <div
                          className="absolute bottom-2 left-2 w-2 h-2 bg-[#34a578] rounded-full animate-bounce opacity-0 group-hover:opacity-100"
                          style={{ animationDelay: "0.3s" }}
                        ></div>

                        <div className="relative">
                          {/* Animated number */}
                          <div className="relative inline-block">
                            <div
                              className="text-3xl font-bold text-white mb-1 animate-count-up"
                              data-target={
                                new Set(experiences?.map((exp) => exp.company))
                                  .size || 0
                              }
                            >
                              {new Set(experiences?.map((exp) => exp.company))
                                .size || 0}
                            </div>
                            {/* Reflection effect */}
                            <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm"></div>
                          </div>

                          {/* Label with icon */}
                          <div className="flex items-center gap-2 mt-2">
                            <div
                              className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-[#34a578] rounded-full animate-pulse"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <span className="text-sm font-medium text-gray-300">
                              Companies
                            </span>
                          </div>

                          {/* Progress bar */}
                          <div className="mt-3 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-400 to-[#34a578] rounded-full transition-all duration-1000"
                              style={{
                                width: `${Math.min(
                                  100,
                                  ((new Set(
                                    experiences?.map((exp) => exp.company)
                                  ).size || 0) /
                                    5) *
                                    100
                                )}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#34a578]/30 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-cyan-400/30 rounded-bl-lg"></div>
                </div>
              </div>

              {/* Optional: Add ExperienceAnimation component here */}
              <div className="mt-8">
                <div className="box p-3 group">
                  <SlideUp>
                    <ExperienceAnimation />
                  </SlideUp>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:col-span-7">
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#34a578] via-gray-600 to-transparent rounded-full"></div>

              {/* Timeline Cards Container with Fixed Height and Scroll */}
              <div className="relative h-[820px] pl-8  md:pl-12">
                <div className="h-full overflow-y-auto pr-4 timeline-scrollbar">
                  <div className="space-y-4 pt-6">
                    {experiences?.map((experience, idx) => (
                      <div key={experience._id} className="relative  group">
                        {/* Timeline dot */}
                        <div className="absolute left-[-27px] top-6 w-4 h-4 bg-gradient-to-br from-[#34a578] to-cyan-400 rounded-full border-4 border-gray-900 z-10 group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="absolute left-[-27px] top-6 w-4 h-4 bg-[#34a578] rounded-full animate-ping opacity-20"></div>

                        <ExperienceCard
                          idx={idx}
                          delay={idx * 0.2}
                          item={experience}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scroll gradient overlay */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm animate-bounce">
              <div className="w-1.5 h-1.5 bg-[#34a578] rounded-full"></div>
              <span>Scroll to explore</span>
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-20 text-center animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-gray-400">Want to know more?</span>
            <a
              href="#contact"
              className="flex items-center gap-2 text-[#34a578] hover:text-cyan-400 transition-colors"
            >
              <span>Get in touch</span>
              <FiChevronRight className="mt-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
