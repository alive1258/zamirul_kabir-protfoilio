// import SlideUp from "@/components/Shared/animations/SlideUp";
// import Image from "next/image";
// import React from "react";
// import {
//   FaStar,
//   FaHeart,
//   FaMoon,
//   FaRocket,
//   FaShieldAlt,
//   FaClock,
//   FaCode,
// } from "react-icons/fa";

// // Reusable Card Component for Scroll Section
// const Card = ({
//   icon,
//   title,
//   desc,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   desc: string;
// }) => {
//   return (
//     // <div className="group min-w-[260px] max-w-[260px] bg-[#0f172a] border border-[#1f223c] rounded-xl text-white shadow hover:shadow-emerald-500 cursor-pointer transition-all duration-300 ease-in-out p-6 mx-2">
//     <div className="group min-w-[260px] max-w-[260px] w-full bg-[#0f172a] border border-[#1f223c] sm:w-[90%]  px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#00838d] before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[38] before:transition-all before:ease-out before:duration-[300ms] z-[0]">
//       {icon}
//       <h3 className="text-lg transition-all duration-500 group-hover:text-white ease-out font-bold text-emerald-400 text-center">
//         {title}
//       </h3>
//       <p className="text-sm transition-all duration-500 group-hover:text-white ease-out text-gray-400 mt-2 text-center">
//         {desc}
//       </p>
//     </div>
//   );
// };

// const ChooseMe = () => {
//   return (
//     <div className="pb-20  overflow-hidden relative">
//       <div
//         className="absolute rounded-full opacity-[0.38] blur-[125px] bg-[#5158DA]"
//         style={{
//           width: "699.729px",
//           height: "626.07px",
//           left: "152.271px",
//           bottom: "-377.762px",
//         }}
//       ></div>
//       <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2 mt-10 md:mt-20">
//         <span className="text-white">Why </span>
//         <span className="text-[#34a578]">Choose Me</span>
//       </div>

//       <div className="grid grid-cols-1 container md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-y-0 gap-y-6  mt-16">
//         {/* card 1 */}
//         <SlideUp delay={0.1}>
//           <div
//             className={` relative cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_4px_#10B981] hover:shadow-emerald-500 transition-all duration-300 ease-in-out  text-white bg-[#0f172a]  border border-[#1f223c] rounded-lg  py-4 px-2 flex items-center justify-between overflow-hidden`}
//           >
//             {/* Top gradient border */}
//             <div
//               className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent`}
//             />
//             {/* Bottom gradient border */}
//             <div
//               className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent`}
//             />

//             {/* Icon background */}
//             <div className="">
//               <Image
//                 src="/assets/icons/f1.png"
//                 width={36}
//                 height={36}
//                 alt="icon"
//               />
//             </div>

//             {/* Title and Value */}
//             <div className="flex flex-col items-end">
//               <p className={`text-emerald-500 text-xl font-semibold`}>
//                 Years of Coding Passion
//               </p>
//               <div
//                 style={{
//                   backgroundColor: "rgba(16, 185, 129, 0.10)", // emerald-500 background with opacity
//                   borderColor: "rgba(16, 185, 129, 0.10)", // emerald-500 border with opacity
//                 }}
//                 className="border px-4 py-2 rounded-lg mt-2 flex justify-center items-center"
//               >
//                 <h1 className={`text-2xl text-primary-muted font-semibold`}>
//                   4+
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </SlideUp>
//         {/* card 2 */}
//         <SlideUp delay={0.3}>
//           <div
//             className={`hover:scale-105 hover:shadow-[0_0_20px_4px_#10B981] hover:shadow-blue-500 transition-all duration-300 ease-in-out relative cursor-pointer  text-white bg-[#0f172a]  border border-[#1f223c] rounded-lg pl-5 pr-6 py-4  flex items-center justify-between overflow-hidden`}
//           >
//             {/* Top gradient border */}
//             <div
//               className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent`}
//             />
//             {/* Bottom gradient border */}
//             <div
//               className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent`}
//             />

//             {/* Icon background */}
//             <div className="">
//               <Image
//                 src="/assets/icons/f2.png"
//                 width={36}
//                 height={36}
//                 alt="icon"
//               />
//             </div>

//             {/* Title and Value */}
//             <div className="flex flex-col items-end">
//               <p className={`text-blue-500 text-xl font-semibold`}>
//                 Client Satisfaction Rate
//               </p>
//               <div
//                 style={{
//                   backgroundColor: "rgba(59, 130, 246, 0.10)", // blue-500 with 10% opacity
//                   borderColor: "rgba(59, 130, 246, 0.10)", // blue-500 with 10% opacity
//                 }}
//                 className="border px-4 py-2 rounded-lg mt-2 flex justify-center items-center"
//               >
//                 <h1 className={`text-2xl text-primary-muted font-semibold`}>
//                   100%
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </SlideUp>
//         {/* card 3 */}
//         <SlideUp delay={0.6}>
//           <div
//             className={`hover:scale-105 hover:shadow-[0_0_20px_4px_#10B981] hover:shadow-violet-500 transition-all duration-300 ease-in-out relative cursor-pointer  text-white bg-[#0f172a]  border border-[#1f223c] rounded-lg pl-5 pr-6 py-4  flex items-center justify-between overflow-hidden`}
//           >
//             {/* Top gradient border */}
//             <div
//               className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent`}
//             />
//             {/* Bottom gradient border */}
//             <div
//               className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent`}
//             />

//             {/* Icon background */}
//             <div>
//               <Image
//                 src="/assets/icons/f3.png"
//                 width={36}
//                 height={36}
//                 alt="icon"
//               />
//             </div>

//             {/* Title and Value */}
//             <div className="flex flex-col items-end">
//               <p className={`text-violet-500 text-xl font-semibold`}>
//                 Performance-Optimize
//               </p>
//               <div
//                 style={{
//                   backgroundColor: "rgba(236, 72, 153, 0.10)",
//                   borderColor: "rgba(236, 72, 153, 0.10)",
//                 }}
//                 className="border px-4 py-2 rounded-lg mt-2 flex justify-center items-center"
//               >
//                 <h1 className={`text-2xl text-primary-muted font-semibold`}>
//                   95+
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </SlideUp>
//         {/* card 4 */}
//         <SlideUp delay={0.9}>
//           <div
//             className={`hover:scale-105 hover:shadow-[0_0_20px_4px_#10B981] hover:shadow-pink-500 transition-all duration-300 ease-in-out relative cursor-pointer  text-white bg-[#0f172a]  border border-[#1f223c] rounded-lg pl-5 pr-6 py-4  flex items-center justify-between overflow-hidden`}
//           >
//             {/* Top gradient border */}
//             <div
//               className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent`}
//             />
//             {/* Bottom gradient border */}
//             <div
//               className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent`}
//             />

//             {/* Icon background */}
//             <div>
//               <Image
//                 src="/assets/icons/f4.png"
//                 width={36}
//                 height={36}
//                 alt="icon"
//               />
//             </div>

//             {/* Title and Value */}
//             <div className="flex flex-col items-end">
//               <p className={`text-pink-500 text-xl font-semibold`}>
//                 Clean Git Workflow
//               </p>
//               <div
//                 style={{
//                   backgroundColor: "rgba(236, 72, 153, 0.10)", // pink-500 with 10% opacity
//                   borderColor: "rgba(236, 72, 153, 0.10)",
//                 }}
//                 className="border px-4 py-2 rounded-lg mt-2 flex justify-center items-center"
//               >
//                 <h1 className={`text-2xl text-primary-muted font-semibold`}>
//                   100%
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </SlideUp>
//       </div>

//       <div className="mt-20 overflow-hidden container">
//         {/* Title */}

//         {/* Scroll Track */}
//         <div className="infinite-scroll-track flex animate-scroll space-x-4 w-max">
//           {/* 7 Cards with React Icons */}
//           <Card
//             icon={<FaStar className="text-yellow-500 text-3xl mb-2 mx-auto" />}
//             title="Expertise & Quality"
//             desc="Years of experience delivering scalable, maintainable, and modern digital solutions."
//           />
//           <Card
//             icon={<FaHeart className="text-red-500 text-3xl mb-2 mx-auto" />}
//             title="Client-Centric Approach"
//             desc="Focused on understanding your goals to build what truly serves your business."
//           />
//           <Card
//             icon={<FaMoon className="text-indigo-500 text-3xl mb-2 mx-auto" />}
//             title="Reliable & Available"
//             desc="Always available for feedback, updates, and support — even after delivery."
//           />
//           <Card
//             icon={<FaRocket className="text-pink-500 text-3xl mb-2 mx-auto" />}
//             title="Fast & Optimized"
//             desc="Optimized for performance to ensure your web or mobile app runs smoothly."
//           />
//           <Card
//             icon={
//               <FaShieldAlt className="text-blue-600 text-3xl mb-2 mx-auto" />
//             }
//             title="Secure Development"
//             desc="Security best practices are built into every layer of your project."
//           />
//           <Card
//             icon={
//               <FaClock className="text-emerald-500 text-3xl mb-2 mx-auto" />
//             }
//             title="On-Time Delivery"
//             desc="Committed to delivering your project on time, every time."
//           />
//           <Card
//             icon={<FaCode className="text-purple-500 text-3xl mb-2 mx-auto" />}
//             title="Clean & Modern Code"
//             desc="I write efficient, maintainable, and industry-standard code for long-term success."
//           />

//           {/* Optional: Duplicate for seamless loop */}
//           <Card
//             icon={<FaStar className="text-yellow-500 text-3xl mb-2 mx-auto" />}
//             title="Expertise & Quality"
//             desc="Years of experience delivering scalable, maintainable, and modern digital solutions."
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChooseMe;
"use client";

import SlideUp from "@/components/Shared/animations/SlideUp";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaStar,
  FaHeart,
  FaMoon,
  FaRocket,
  FaShieldAlt,
  FaClock,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaSync,
  FaChartLine,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";

// Enhanced Card Component
const Card = ({
  icon,
  title,
  desc,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative min-w-[300px] max-w-[300px] cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className="absolute -inset-3 bg-gradient-to-r from-[#34a578]/20 via-transparent to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      {/* Main card */}
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-all duration-500 group-hover:scale-105">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#34a578] via-transparent to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

        {/* Corner decorations */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/10 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-cyan-500/10 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Icon container */}
        <div className="relative mb-4 flex justify-center">
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#34a578]/10 group-hover:to-cyan-500/10 transition-all duration-500 group-hover:rotate-3">
            <div className="text-3xl transform transition-all duration-500 group-hover:scale-110">
              {icon}
            </div>

            {/* Floating dots */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#34a578] rounded-full opacity-0 group-hover:opacity-100 animate-bounce"></div>
          </div>

          {/* Number badge */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#34a578] to-cyan-400 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
            {index + 1}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-white text-center mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-200 group-hover:to-white group-hover:bg-clip-text transition-all duration-500">
          {title}
        </h3>

        <p className="text-sm text-gray-400 text-center group-hover:text-white/90 transition-colors duration-300">
          {desc}
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full group-hover:w-16 transition-all duration-500"></div>
      </div>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({
  icon,
  title,
  value,
  color,
  delay,
}: {
  icon: string;
  title: string;
  value: string;
  color: string;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    const target = parseInt(value);
    if (value.includes("+")) {
      const timer = setTimeout(() => {
        let start = 0;
        const increment = Math.ceil(target / 50);
        const counter = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(counter);
          } else {
            setCount(start);
          }
        }, 30);
      }, delay * 300);
      return () => clearTimeout(timer);
    }
  }, [value, delay]);

  const colorClasses: Record<
    string,
    { bg: string; text: string; border: string }
  > = {
    emerald: {
      bg: "from-[#34a578]/20 to-emerald-500/10",
      text: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    blue: {
      bg: "from-blue-500/20 to-cyan-500/10",
      text: "text-blue-400",
      border: "border-blue-500/20",
    },
    violet: {
      bg: "from-violet-500/20 to-purple-500/10",
      text: "text-violet-400",
      border: "border-violet-500/20",
    },
    pink: {
      bg: "from-pink-500/20 to-rose-500/10",
      text: "text-pink-400",
      border: "border-pink-500/20",
    },
    amber: {
      bg: "from-amber-500/20 to-orange-500/10",
      text: "text-amber-400",
      border: "border-amber-500/20",
    },
  };

  const currentColor = colorClasses[color] || colorClasses.emerald;

  return (
    <SlideUp delay={delay}>
      <div className="group relative cursor-pointer ">
        {/* Glowing background */}
        <div
          className={`absolute -inset-2 bg-gradient-to-r ${currentColor.bg} rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        ></div>

        {/* Main card */}
        <div
          className={`relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border ${currentColor.border} transition-all duration-300 group-hover:scale-105`}
        >
          {/* Animated icon */}
          <div className="relative mb-4">
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${currentColor.bg} border ${currentColor.border} flex items-center justify-center`}
            >
              <Image
                src={icon}
                width={24}
                height={24}
                alt="icon"
                className="filter brightness-125"
              />
            </div>

            {/* Floating ring */}
            <div
              className={`absolute inset-0 border-2 ${currentColor.border} rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}
            ></div>
          </div>

          {/* Title */}
          <p className={`text-lg font-semibold ${currentColor.text} mb-2`}>
            {title}
          </p>

          {/* Animated value */}
          <div
            className={`border ${currentColor.border} rounded-lg px-4 py-3 bg-gradient-to-br from-white/5 to-transparent`}
          >
            <h1 className={`text-3xl font-bold ${currentColor.text}`}>
              {value.includes("+") ? `${count}+` : value}
            </h1>
          </div>

          {/* Progress line */}
          <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${
                currentColor.bg.split(" ")[0]
              } ${
                currentColor.bg.split(" ")[1]
              } rounded-full transition-all duration-1000 ease-out`}
              style={{ width: value.includes("+") ? "85%" : "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

const ChooseMe = () => {
  const cards = [
    {
      icon: <FaStar className="text-yellow-500" />,
      title: "Expertise & Quality",
      desc: "Years of experience delivering scalable, maintainable, and modern digital solutions.",
    },
    {
      icon: <FaHeart className="text-red-500" />,
      title: "Client-Centric Approach",
      desc: "Focused on understanding your goals to build what truly serves your business.",
    },
    {
      icon: <FaMoon className="text-indigo-500" />,
      title: "Reliable & Available",
      desc: "Always available for feedback, updates, and support — even after delivery.",
    },
    {
      icon: <FaRocket className="text-pink-500" />,
      title: "Fast & Optimized",
      desc: "Optimized for performance to ensure your web or mobile app runs smoothly.",
    },
    {
      icon: <FaShieldAlt className="text-blue-600" />,
      title: "Secure Development",
      desc: "Security best practices are built into every layer of your project.",
    },
    {
      icon: <FaClock className="text-emerald-500" />,
      title: "On-Time Delivery",
      desc: "Committed to delivering your project on time, every time.",
    },
    {
      icon: <FaCode className="text-purple-500" />,
      title: "Clean & Modern Code",
      desc: "I write efficient, maintainable, and industry-standard code for long-term success.",
    },
    {
      icon: <FaUsers className="text-cyan-400" />,
      title: "Collaborative Approach",
      desc: "Work closely with teams to ensure seamless integration and project success.",
    },
    {
      icon: <FaLightbulb className="text-amber-400" />,
      title: "Innovative Solutions",
      desc: "Always exploring new technologies and approaches to solve complex problems.",
    },
    {
      icon: <FaSync className="text-green-400" />,
      title: "Continuous Learning",
      desc: "Constantly updating skills to stay ahead in the rapidly evolving tech landscape.",
    },
    {
      icon: <FaChartLine className="text-teal-400" />,
      title: "Results-Driven",
      desc: "Focus on delivering measurable results that impact your business positively.",
    },
    {
      icon: <FaLayerGroup className="text-orange-400" />,
      title: "Full-Stack Expertise",
      desc: "End-to-end development capabilities from concept to deployment.",
    },
  ];

  const stats = [
    {
      icon: "/assets/icons/f1.png",
      title: "Years of Coding Passion",
      value: "4+",
      color: "emerald",
    },
    {
      icon: "/assets/icons/f2.png",
      title: "Client Satisfaction Rate",
      value: "100%",
      color: "blue",
    },
    {
      icon: "/assets/icons/f3.png",
      title: "Performance-Optimized",
      value: "95+",
      color: "violet",
    },
    {
      icon: "/assets/icons/f4.png",
      title: "Clean Git Workflow",
      value: "100%",
      color: "pink",
    },
    {
      icon: "/assets/icons/f5.png",
      title: "Projects Delivered",
      value: "50+",
      color: "amber",
    },
    {
      icon: "/assets/icons/f6.png",
      title: "Hours of Development",
      value: "5000+",
      color: "emerald",
    },
  ];

  const processSteps = [
    {
      icon: "🔍",
      title: "Discovery & Planning",
      desc: "Understanding your vision and requirements",
    },
    {
      icon: "🎨",
      title: "Design & Prototyping",
      desc: "Creating intuitive and beautiful designs",
    },
    {
      icon: "💻",
      title: "Development",
      desc: "Building with modern technologies and best practices",
    },
    {
      icon: "🧪",
      title: "Testing & Quality",
      desc: "Rigorous testing for flawless performance",
    },
    {
      icon: " 🚀",
      title: "Deployment",
      desc: "Smooth launch with ongoing support",
    },
  ];

  return (
    <div className="py-32 overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#34a578]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#34a578]/10 to-transparent border border-[#34a578]/30 mb-6">
            <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-400 tracking-widest">
              WHY CHOOSE ME
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building Digital Excellence with{" "}
            <span className="bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent">
              Precision & Passion
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I combine technical expertise with creative problem-solving to
            deliver exceptional results that drive business growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatsCard
              key={stat.title}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              color={stat.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            My <span className="text-[#34a578]">Development Process</span>
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#34a578] via-cyan-400 to-transparent hidden md:block"></div>

            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="relative p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 text-center">
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <h4 className="font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-400">{step.desc}</p>

                    {/* Step number */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#34a578] to-cyan-400 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Connector arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-0.5 bg-gradient-to-r from-[#34a578] to-cyan-400"></div>
                      <div className="absolute right-0 top-1/2 transform translate-y-1/2 w-2 h-2 border-r-2 border-b-2 border-[#34a578] rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Infinite Scroll Section */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            What Sets Me <span className="text-[#34a578]">Apart</span>
          </h3>

          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0C1222] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0C1222] to-transparent z-10"></div>

            {/* Infinite scroll track */}
            <div className="flex animate-scroll space-x-6 w-max py-4">
              {cards.concat(cards).map((card, index) => (
                <Card
                  key={`${card.title}-${index}`}
                  icon={card.icon}
                  title={card.title}
                  desc={card.desc}
                  index={index % cards.length}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#34a578] via-cyan-500 to-[#45d19c] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
              <FaCheckCircle className="text-5xl text-[#34a578] mx-auto mb-4 animate-pulse" />

              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to Build Something Amazing?
              </h3>

              <p className="text-gray-400 mb-6">
                Lets collaborate to turn your ideas into reality with
                cutting-edge technology and exceptional craftsmanship.
              </p>

              <button className="px-8 py-3 bg-gradient-to-r from-[#34a578] to-[#45d19c] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#34a578]/30 transition-all duration-300 hover:scale-105">
                Start Your Project Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseMe;
