// /* eslint-disable react/no-unescaped-entities */
// import SlideUp from "@/components/Shared/animations/SlideUp";
// import "../../Home/Services/Services.css";
// import PersonalAnimation from "./PersonalAnimation";

// const PersonalInfo = () => {
//   return (
//     <>
//       <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2">
//         <span>About</span>
//         <span className="text-[#34a578]">Me</span>
//       </div>
//       <div className=" ">
//         <div className="grid md:grid-cols-2 grid-cols-1 mt-16 md:space-x-14">
//           <div className="md:w-[580px] bg-[#0C1222]  border border-[#26272F] rounded-lg  p-8 shadow-xl">
//             {/* <div className="md:w-[580px] bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl"> */}
//             <div className="flex items-center gap-3 mb-8">
//               <div className="w-3 h-10 bg-[#34a578] rounded-full"></div>
//               <h3 className="text-3xl font-bold text-white tracking-tight">
//                 Who I Am<span className="text-[#34a578] ml-2">?</span>
//               </h3>
//             </div>

//             <SlideUp>
//               <div className="relative">
//                 <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#34a578] to-transparent rounded-full"></div>
//                 <p className="text-lg leading-relaxed text-gray-300 pl-4">
//                   I specialize in working across the entire stack, from crafting
//                   responsive front-end interfaces to building robust back-end
//                   systems. My focus is on creating meaningful digital
//                   experiences that are fast, user-friendly, and maintainable.
//                 </p>
//               </div>
//             </SlideUp>

//             <SlideUp delay={0.3}>
//               <div className="mt-8 p-5 bg-gradient-to-r from-[#34a578]/10 to-transparent rounded-xl border border-[#34a578]/30">
//                 <div className="flex items-center gap-2 mb-3">
//                   <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
//                   <p className="font-bold text-white tracking-wide">
//                     Tech Stack I Work With
//                   </p>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "JavaScript",
//                     "TypeScript",
//                     "React.js",
//                     "Next.js",
//                     "Node.js",
//                     "Express.js",
//                     "MongoDB",
//                     "PostgreSQL",
//                     "NestJS",
//                   ].map((tech, i) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-[#34a578]/20 hover:border-[#34a578]/40 hover:scale-105 transition-all duration-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </SlideUp>

//             <SlideUp delay={0.6}>
//               <div className="mt-8 p-5 bg-gradient-to-r from-white/5 to-transparent rounded-xl">
//                 <p className="text-lg leading-relaxed text-gray-300 italic">
//                   "I'm open to new opportunities where I can grow, collaborate,
//                   and make a real impact. If you're looking for someone
//                   dedicated, curious, and ready to build meaningful
//                   products—let's create something amazing together."
//                 </p>
//                 <div className="flex items-center gap-2 mt-4">
//                   <div className="w-4 h-0.5 bg-[#34a578]"></div>
//                   <span className="text-sm text-[#34a578] font-medium">
//                     Ready to connect
//                   </span>
//                 </div>
//               </div>
//             </SlideUp>
//           </div>

//           <div className="box p-3 md:mt-0 mt-12 group ">
//             <SlideUp>
//               <PersonalAnimation />
//             </SlideUp>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PersonalInfo;

/* eslint-disable react/no-unescaped-entities */
import SlideUp from "@/components/Shared/animations/SlideUp";
import "../../Home/Services/Services.css";
import PersonalAnimation from "./PersonalAnimation";

const PersonalInfo = () => {
  return (
    <>
      <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2">
        <span className="text-white">About</span>
        <span className="text-[#34a578]">Me</span>
      </div>
      <div className="">
        <div className="grid md:grid-cols-2 grid-cols-1 mt-16 md:gap-8">
          {/* Updated card with better gradients */}
          <div className="md:w-full bg-gradient-to-br from-[#0C1222] via-[#131a30] to-[#0C1222] border border-[#26272F] rounded-2xl p-8 shadow-2xl shadow-[#34a578]/5 hover:shadow-[#34a578]/10 transition-shadow duration-500">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-10 bg-gradient-to-b from-[#34a578] to-[#45d19c] rounded-full"></div>
              <h3 className="text-3xl font-bold text-white tracking-tight">
                Who I Am
                <span className="text-[#34a578] ml-2 bg-gradient-to-r from-[#34a578] to-cyan-400 bg-clip-text text-transparent">
                  ?
                </span>
              </h3>
            </div>

            <SlideUp>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#34a578] via-[#45d19c] to-transparent rounded-full"></div>
                <p className="text-lg leading-relaxed text-gray-300 pl-4">
                  I specialize in working across the entire stack, from crafting
                  responsive front-end interfaces to building robust back-end
                  systems. My focus is on creating meaningful digital
                  experiences that are fast, user-friendly, and maintainable.
                </p>
              </div>
            </SlideUp>

            <SlideUp delay={0.3}>
              <div className="mt-8 p-5 bg-gradient-to-r from-[#34a578]/10 via-[#45d19c]/10 to-transparent rounded-xl border border-[#34a578]/40 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full animate-pulse"></div>
                  <p className="font-bold text-white tracking-wide">
                    Tech Stack I Work With
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React.js",
                    "Next.js",
                    "Redux",
                    "Node.js",
                    "Express.js",
                    "NestJS",
                    "MongoDB",
                    "PostgreSQL",
                  ].map((tech, i) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-br from-white/5 to-black/10 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-gradient-to-br hover:from-[#34a578]/20 hover:to-[#45d19c]/20 hover:border-[#34a578]/50 hover:text-white hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={0.6}>
              <div className="mt-8 p-5 bg-gradient-to-r from-white/[0.03] via-white/[0.02] to-transparent rounded-xl border border-white/10">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#34a578] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg leading-relaxed text-gray-300">
                    "I'm open to new opportunities where I can grow,
                    collaborate, and make a real impact. If you're looking for
                    someone honest, dedicated, curious, and ready to build
                    meaningful products—let's create something amazing
                    together."
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="flex-1 h-px bg-gradient-to-r from-[#34a578] to-transparent"></div>
                  <span className="text-sm font-medium bg-gradient-to-r from-[#34a578] to-cyan-400 bg-clip-text text-transparent">
                    Ready to connect
                  </span>
                  <div className="w-2 h-2 bg-[#34a578] rounded-full animate-ping"></div>
                </div>
              </div>
            </SlideUp>
          </div>

          <div className="box p-3 md:mt-0 mt-12 group">
            <SlideUp>
              <PersonalAnimation />
            </SlideUp>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
