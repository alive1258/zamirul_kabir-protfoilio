// "use client";
// import {
//   FiGithub,
//   FiCalendar,
//   FiTrendingUp,
//   FiDatabase,
//   FiAward,
// } from "react-icons/fi";
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// interface StatCard {
//   title: string;
//   value: number;
//   icon: React.ElementType;
//   iconColor: string;
//   gradient: string;
//   bgGradient: string;
//   description: string;
//   subDescription?: string;
//   showFlame?: boolean;
//   showTrophy?: boolean;
//   showGrid?: boolean;
//   progress?: number;
//   delay: number;
// }

// interface GitHubStatsProps {
//   totalContributions?: number;
//   currentStreak?: number;
//   longestStreak?: number;
//   repositories?: number;
//   startDate?: string;
//   currentStreakDates?: string;
//   longestStreakDates?: string;
//   githubUrl?: string;
// }

// const GitHubStats: React.FC<GitHubStatsProps> = ({
//   totalContributions = 841,
//   currentStreak = 11,
//   longestStreak = 11,
//   repositories = 112,
//   startDate = "Oct 6, 2021",
//   currentStreakDates = "Nov 22 - Dec 2",
//   longestStreakDates = "Nov 22 - Dec 2",
//   githubUrl = "https://github.com/yourusername",
// }) => {
//   const counterRef = useRef<HTMLDivElement>(null);
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsInView(true);
//           observer.unobserve(entries[0].target);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const stats: StatCard[] = [
//     {
//       title: "Total Contributions",
//       value: totalContributions,
//       icon: FiDatabase,
//       iconColor: "text-[#34a578]",
//       gradient: "from-[#34a578] via-cyan-400 to-transparent",
//       bgGradient: "from-[#34a578]/20 to-cyan-400/10",
//       description: `${startDate} - Present`,
//       progress: 95,
//       delay: 0,
//     },
//     {
//       title: "Current Streak",
//       value: currentStreak,
//       icon: FiTrendingUp,
//       iconColor: "text-cyan-400",
//       gradient: "from-cyan-400 via-[#34a578] to-transparent",
//       bgGradient: "from-cyan-400/20 to-[#34a578]/10",
//       description: currentStreakDates,
//       subDescription: `${currentStreak} days`,
//       showFlame: true,
//       delay: 0.1,
//     },
//     {
//       title: "Longest Streak",
//       value: longestStreak,
//       icon: FiAward,
//       iconColor: "text-[#45d19c]",
//       gradient: "from-[#45d19c] via-[#34a578] to-transparent",
//       bgGradient: "from-[#45d19c]/20 to-[#34a578]/10",
//       description: longestStreakDates,
//       subDescription: `${longestStreak} days record`,
//       showTrophy: true,
//       delay: 0.2,
//     },
//     {
//       title: "Repositories",
//       value: repositories,
//       icon: FiGithub,
//       iconColor: "text-purple-400",
//       gradient: "from-purple-500 via-[#34a578] to-transparent",
//       bgGradient: "from-purple-500/20 to-[#34a578]/10",
//       description: "Public & Private",
//       subDescription: "Continuous projects",
//       showGrid: true,
//       delay: 0.3,
//     },
//   ];

//   return (
//     <div className="relative " ref={counterRef}>
//       {/* Background effects */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#34a578]/5 via-transparent to-cyan-400/5 rounded-3xl blur-2xl"></div>

//       {/* Header */}
//       <div className="relative z-10 text-center mb-12">
//         <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
//           <FiGithub className="text-[#34a578] animate-pulse" />
//           <span className="text-sm font-medium text-gray-400 tracking-widest">
//             GITHUB ACTIVITY
//           </span>
//           <div
//             className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
//             style={{ animationDelay: "0.3s" }}
//           />
//         </div>

//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           <span className="text-white">Development</span>
//           <span className="ml-3 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent">
//             Journey
//           </span>
//         </h2>

//         <p className="text-gray-400 max-w-2xl mx-auto">
//           Consistent contributions and open-source involvement
//           <span className="inline-block mx-2 text-[#34a578] animate-bounce">
//             •
//           </span>
//           tracking progress through code
//         </p>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {stats.map((stat) => {
//           const Icon = stat.icon;
//           return (
//             <motion.div
//               key={stat.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: stat.delay }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <div
//                 className={`absolute -inset-0.5 bg-gradient-to-br ${stat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
//               />

//               <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:border-[#34a578]/40 transition-all duration-500">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div
//                     className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.bgGradient} border border-white/10 flex items-center justify-center`}
//                   >
//                     <Icon className={`w-6 h-6 ${stat.iconColor}`} />
//                   </div>
//                   <div>
//                     <div className="text-3xl font-bold text-white mb-1">
//                       {isInView ? stat.value.toLocaleString() : "0"}
//                     </div>
//                     <div className="text-sm text-gray-400">{stat.title}</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
//                   <FiCalendar className="w-4 h-4" />
//                   <span>{stat.description}</span>
//                 </div>

//                 {stat.subDescription && (
//                   <div className="text-xs text-gray-500 mt-1">
//                     {stat.subDescription}
//                   </div>
//                 )}

//                 {/* Progress bar */}
//                 {stat.progress !== undefined && (
//                   <div className="mt-4 w-full h-2 bg-white/5 rounded-full overflow-hidden">
//                     <motion.div
//                       className="h-full bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full"
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${stat.progress}%` }}
//                       transition={{ duration: 1, delay: 0.5 }}
//                       viewport={{ once: true }}
//                     />
//                   </div>
//                 )}

//                 {/* Special visualizations */}
//                 {stat.showFlame && (
//                   <div className="mt-4 flex justify-center">
//                     <div className="relative">
//                       <div className="w-8 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-full animate-pulse" />
//                       <div className="absolute -top-1 -inset-x-2 h-4 bg-gradient-to-b from-orange-400/50 to-transparent rounded-full blur-sm" />
//                     </div>
//                   </div>
//                 )}

//                 {stat.showTrophy && (
//                   <div className="mt-4 flex justify-center">
//                     <div className="relative">
//                       <div className="w-10 h-10 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
//                         <FiAward className="w-5 h-5 text-white" />
//                       </div>
//                       <div className="absolute -inset-2 bg-gradient-to-b from-yellow-400/20 to-transparent rounded-full blur-sm" />
//                     </div>
//                   </div>
//                 )}

//                 {stat.showGrid && (
//                   <div className="mt-4 grid grid-cols-4 gap-1">
//                     {[...Array(8)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="aspect-square rounded bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:from-[#34a578]/30 group-hover:to-cyan-400/30 transition-all duration-300"
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* GitHub Profile Link */}
//       <div className="text-center mt-12">
//         <a
//           href={githubUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#34a578]/10 to-cyan-400/10 border border-white/10 rounded-2xl text-white hover:from-[#34a578]/20 hover:to-cyan-400/20 hover:border-[#34a578]/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm group/btn"
//         >
//           <FiGithub className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-300" />
//           <div className="text-left">
//             <div className="font-medium">View GitHub Profile</div>
//             <div className="text-sm text-gray-400 group-hover/btn:text-gray-300 transition-colors">
//               Explore repositories & contributions
//             </div>
//           </div>
//           <svg
//             className="w-5 h-5 ml-4 group-hover/btn:translate-x-2 transition-transform duration-300"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M17 8l4 4m0 0l-4 4m4-4H3"
//             />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default GitHubStats;

// ==================================

// "use client";
// import {
//   FiGithub,
//   FiCalendar,
//   FiTrendingUp,
//   FiDatabase,
//   FiAward,
// } from "react-icons/fi";
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// interface StatCard {
//   title: string;
//   value: number;
//   icon: React.ElementType;
//   color: string;
//   delay: number;
// }

// interface GitHubStatsProps {
//   totalContributions?: number;
//   currentStreak?: number;
//   longestStreak?: number;
//   repositories?: number;
//   startDate?: string;
//   currentStreakDates?: string;
//   longestStreakDates?: string;
//   githubUrl?: string;
// }

// const GitHubStats: React.FC<GitHubStatsProps> = ({
//   totalContributions = 841,
//   currentStreak = 11,
//   longestStreak = 11,
//   repositories = 112,
//   startDate = "Oct 6, 2021",
//   currentStreakDates = "Nov 22 - Dec 2",
//   longestStreakDates = "Nov 22 - Dec 2",
//   githubUrl = "https://github.com/alive1258",
// }) => {
//   const [isInView, setIsInView] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   const stats: StatCard[] = [
//     {
//       title: "Contributions",
//       value: totalContributions,
//       icon: FiDatabase,
//       color: "from-[#34a578] to-cyan-400",
//       delay: 0.1,
//     },
//     {
//       title: "Current Streak",
//       value: currentStreak,
//       icon: FiTrendingUp,
//       color: "from-cyan-400 to-[#34a578]",
//       delay: 0.2,
//     },
//     {
//       title: "Longest Streak",
//       value: longestStreak,
//       icon: FiAward,
//       color: "from-[#45d19c] to-[#34a578]",
//       delay: 0.3,
//     },
//     {
//       title: "Repositories",
//       value: repositories,
//       icon: FiGithub,
//       color: "from-purple-500 to-[#34a578]",
//       delay: 0.4,
//     },
//   ];

//   return (
//     <div className="relative" ref={ref}>
//       {/* Glowing background effect */}
//       <div className="absolute -inset-6 bg-gradient-to-br from-[#34a578]/10 via-transparent to-cyan-400/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

//       {/* Main content card */}
//       <div className="relative bg-gradient-to-br from-white/[0.03] via-black/20 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden group-hover:border-[#34a578]/40 transition-all duration-500">
//         {/* Animated border effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#34a578]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

//         {/* Decorative corner elements */}
//         <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#34a578]/20 rounded-tr-lg"></div>
//         <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-cyan-400/20 rounded-bl-lg"></div>

//         {/* Content */}
//         <div className="relative z-10">
//           {/* Header */}
//           <div className="flex items-center gap-3 mb-8">
//             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#34a578] to-cyan-400 flex items-center justify-center">
//               <FiGithub className="w-5 h-5 text-white" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-white">GitHub Activity</h3>
//               <p className="text-sm text-gray-400">Code contribution metrics</p>
//             </div>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 gap-4 mb-8">
//             {stats.map((stat, index) => {
//               const Icon = stat.icon;
//               return (
//                 <motion.div
//                   key={stat.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: stat.delay }}
//                   viewport={{ once: true }}
//                   className="relative group/stat"
//                 >
//                   <div
//                     className={`absolute -inset-0.5 bg-gradient-to-br ${stat.color} rounded-xl blur opacity-0 group-hover/stat:opacity-50 transition-opacity duration-500`}
//                   />

//                   <div className="relative p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover/stat:border-[#34a578]/40 transition-all duration-300">
//                     <div className="flex items-center gap-3 mb-2">
//                       <div
//                         className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}/20 border border-white/10`}
//                       >
//                         <Icon
//                           className={`w-4 h-4 ${stat.color
//                             .split(" ")[0]
//                             .replace("from-", "text-")}`}
//                         />
//                       </div>
//                       <div className="text-2xl font-bold text-white">
//                         {isInView ? stat.value.toLocaleString() : "0"}
//                       </div>
//                     </div>
//                     <div className="text-sm text-gray-400">{stat.title}</div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Timeline */}
//           <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-[#34a578]/10 via-[#45d19c]/5 to-transparent border border-[#34a578]/30">
//             <div className="flex items-center gap-2 mb-3">
//               <FiCalendar className="w-4 h-4 text-[#34a578]" />
//               <span className="text-sm font-medium text-white">
//                 Activity Timeline
//               </span>
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-gray-400">Started:</span>
//                 <span className="text-white">{startDate}</span>
//               </div>
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-gray-400">Current Streak:</span>
//                 <span className="text-[#34a578]">{currentStreakDates}</span>
//               </div>
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-gray-400">Longest Streak:</span>
//                 <span className="text-cyan-400">{longestStreakDates}</span>
//               </div>
//             </div>
//           </div>

//           {/* GitHub Link */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <a
//               href={githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group/link flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#34a578]/10 to-cyan-400/10 border border-[#34a578]/30 text-white hover:from-[#34a578]/20 hover:to-cyan-400/20 hover:border-[#34a578]/50 transition-all duration-300"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#34a578] to-cyan-400 flex items-center justify-center">
//                   <FiGithub className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <div className="font-medium">View GitHub Profile</div>
//                   <div className="text-xs text-gray-400 group-hover/link:text-gray-300">
//                     Explore repositories & contributions
//                   </div>
//                 </div>
//               </div>
//               <svg
//                 className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GitHubStats;

// =====================================

"use client";
import {
  FiGithub,
  FiCalendar,
  FiTrendingUp,
  FiDatabase,
  FiAward,
  FiCode,
  FiPieChart,
} from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

interface StatCard {
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
  delay: number;
}

interface Language {
  name: string;
  percentage: number;
  color: string;
}

interface GitHubStatsProps {
  totalContributions?: number;
  currentStreak?: number;
  longestStreak?: number;
  repositories?: number;
  startDate?: string;
  currentStreakDates?: string;
  longestStreakDates?: string;
  githubUrl?: string;
  languages?: Language[];
}

const GitHubStats: React.FC<GitHubStatsProps> = ({
  totalContributions = 841,
  currentStreak = 11,
  longestStreak = 11,
  repositories = 112,
  startDate = "Oct 6, 2021",
  currentStreakDates = "Nov 22 - Dec 2",
  longestStreakDates = "Nov 22 - Dec 2",
  githubUrl = "https://github.com/alive1258",
  languages = [
    { name: "JavaScript", percentage: 64.4, color: "#f7df1e" },
    { name: "TypeScript", percentage: 19.57, color: "#3178c6" },
    { name: "HTML", percentage: 9.74, color: "#e34c26" },
    { name: "CSS", percentage: 6.29, color: "#1572b6" },
  ],
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats: StatCard[] = [
    {
      title: "Contributions",
      value: totalContributions,
      icon: FiDatabase,
      color: "from-[#34a578] to-cyan-400",
      delay: 0.1,
    },
    {
      title: "Current Streak",
      value: currentStreak,
      icon: FiTrendingUp,
      color: "from-cyan-400 to-[#34a578]",
      delay: 0.2,
    },
    {
      title: "Longest Streak",
      value: longestStreak,
      icon: FiAward,
      color: "from-[#45d19c] to-[#34a578]",
      delay: 0.3,
    },
    {
      title: "Repositories",
      value: repositories,
      icon: FiGithub,
      color: "from-purple-500 to-[#34a578]",
      delay: 0.4,
    },
  ];

  // Calculate pie chart angles
  const calculatePieChart = () => {
    let currentAngle = 0;
    return languages.map((lang) => {
      const angle = (lang.percentage / 100) * 360;
      const startAngle = currentAngle;
      currentAngle += angle;
      return { ...lang, startAngle, angle };
    });
  };

  const pieSegments = calculatePieChart();

  return (
    <div className="relative group h-full" ref={ref}>
      {/* Glowing background effect */}
      <div className="absolute -inset-6 bg-gradient-to-br from-[#34a578]/10 via-transparent to-cyan-400/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Main content card */}
      <div className="relative bg-gradient-to-br from-white/[0.03] via-black/20 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden group-hover:border-[#34a578]/40 transition-all duration-500">
        {/* Animated border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#34a578]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#34a578]/20 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-cyan-400/20 rounded-bl-lg"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#34a578] to-cyan-400 flex items-center justify-center">
              <FiGithub className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">GitHub Analytics</h3>
              <p className="text-sm text-gray-400">Code metrics & languages</p>
            </div>
          </div>

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  viewport={{ once: true }}
                  className="relative group/stat"
                >
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-br ${stat.color} rounded-xl blur opacity-0 group-hover/stat:opacity-50 transition-opacity duration-500`}
                  />

                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover/stat:border-[#34a578]/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}/20 border border-white/10`}
                      >
                        <Icon
                          className={`w-4 h-4 ${stat.color
                            .split(" ")[0]
                            .replace("from-", "text-")}`}
                        />
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {isInView ? stat.value.toLocaleString() : "0"}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">{stat.title}</div>
                  </div>
                </motion.div>
              );
            })}
          </div> */}

          {/* good  */}

          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: stat.delay,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="relative group/stat"
                >
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover/stat:opacity-[0.03] transition-opacity duration-700`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/stat:opacity-100 translate-x-[-100%] group-hover/stat:translate-x-[100%] transition-all duration-1000" />
                  </div>

                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/15 group-hover/stat:border-white/25 transition-all duration-500 shadow-2xl shadow-black/20 group-hover/stat:shadow-[#34a578]/10">
                    <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/20 rounded-tl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cyan-400/30 rounded-br opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />

                    <div className="relative ">
                      <motion.div
                        className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${stat.color}/10 border border-white/10 inline-flex group-hover/stat:shadow-lg`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { type: "spring", stiffness: 300 },
                        }}
                      >
                        <Icon
                          className={`w-6 h-6 ${stat.color
                            .split(" ")[0]
                            .replace("from-", "text-")}`}
                        />

                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300" />
                      </motion.div>

                      <div className="mb-2 ">
                        <div
                          className={`text-3xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent leading-none`}
                        >
                          {isInView ? (
                            <CountUp
                              end={stat.value}
                              duration={2}
                              separator=","
                              className="inline-block"
                            />
                          ) : (
                            "0"
                          )}
                          {["Contributions", "Repositories"].includes(
                            stat.title
                          ) && <span className="text-lg ml-1">+</span>}
                        </div>

                        <div className="text-3xl font-black text-black/20 absolute top-0.5 left-0.5 blur-sm opacity-70">
                          {isInView ? stat.value.toLocaleString() : "0"}
                        </div>
                      </div>

                      <div className="relative">
                        <span className="text-sm font-medium text-gray-300 group-hover/stat:text-white transition-colors duration-300 relative z-10">
                          {stat.title}
                        </span>
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full group-hover/stat:w-full transition-all duration-700" />
                      </div>

                      <div className="absolute -top-1 -right-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1 h-1 rounded-full bg-gradient-to-br ${stat.color} opacity-0 group-hover/stat:opacity-100`}
                            style={{
                              top: `${i * 4}px`,
                              right: `${i * 4}px`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#34a578]/0 via-cyan-400/0 to-transparent opacity-0 group-hover/stat:opacity-10 blur-md transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  viewport={{ once: true }}
                  className="relative group/stat"
                >
          
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover/stat:opacity-10 transition-opacity duration-500`}
                    />
                  
                    <div className="absolute inset-0 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      <div
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </div>
                  </div>

             
                  <div className="relative p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover/stat:border-white/20 transition-all duration-300">
                    <div className="flex items-start justify-between">
                  
                      <div className="flex items-start gap-3">
                  
                        <div className="relative">
                          <div
                            className={`p-2.5 rounded-lg bg-gradient-to-br ${stat.color}/10 border border-white/10 group-hover/stat:scale-110 transition-transform duration-300`}
                          >
                            <Icon
                              className={`w-4 h-4 ${stat.color
                                .split(" ")[0]
                                .replace("from-", "text-")}`}
                            />
                          </div>
                     
                          <div className="absolute -inset-2 border border-white/10 rounded-lg opacity-0 group-hover/stat:opacity-100 animate-ping-slow" />
                        </div>

                        <div>
                    
                          <div className="flex items-baseline gap-1">
                            <div className="text-2xl md:text-3xl font-bold text-white">
                              {isInView ? stat.value.toLocaleString() : "0"}
                            </div>
                            <div
                              className={`text-sm font-semibold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                            >
                              {stat.title === "Contributions" && "+ commits"}
                              {stat.title === "Repositories" && "+ repos"}
                            </div>
                          </div>

                      
                          <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                            {stat.title}
                          </div>
                        </div>
                      </div>

                    
                      <div className="opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#34a578] to-cyan-400 animate-pulse" />
                      </div>
                    </div>

            
                    <div className="mt-3 relative">
                      <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${Math.min(
                              100,
                              (stat.value /
                                (stat.title === "Contributions"
                                  ? 1000
                                  : stat.title === "Repositories"
                                  ? 200
                                  : 20)) *
                                100
                            )}%`,
                          }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    
                      <div className="absolute top-0 h-0.5 w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full opacity-0 group-hover/stat:opacity-100 animate-shimmer" />
                    </div>
                  </div>

              
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/stat:opacity-100 -z-10 blur-md transition-opacity duration-500 group-hover/stat:translate-y-[-2px] transition-transform" />
                </motion.div>
              );
            })}
          </div> */}

          {/* Most Used Languages with Pie Chart */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 mt-7"
          >
            <div className="flex items-center justify-between  mb-4">
              <div className="flex items-center gap-2">
                <FiCode className="w-4 h-4 text-[#34a578]" />
                <span className="text-lg font-medium text-white">
                  Most Used Languages
                </span>
              </div>
              <FiPieChart className="w-4 h-4 text-gray-500" />
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-center mt-4">
              {/* Pie Chart Visualization */}
              <div className="relative w-36 h-36">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {pieSegments.map((segment, index) => (
                    <motion.circle
                      key={segment.name}
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke={segment.color}
                      strokeWidth="20"
                      strokeDasharray={`${(segment.angle / 360) * 251.2} 251.2`}
                      strokeDashoffset={`${
                        -251.2 * (segment.startAngle / 360)
                      }`}
                      initial={{ strokeDasharray: "0 251.2" }}
                      whileInView={{
                        strokeDasharray: `${
                          (segment.angle / 360) * 251.2
                        } 251.2`,
                      }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {languages[0].percentage.toFixed(0)}%
                  </span>
                </div>
              </div>

              {/* Languages List */}
              <div className="flex-1 space-y-3">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group/lang"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full transition-transform duration-300 group-hover/lang:scale-125"
                          style={{ backgroundColor: language.color }}
                        />
                        <span className="text-[16px] text-gray-300">
                          {language.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[16px] font-medium text-white">
                          {language.percentage.toFixed(1)}%
                        </span>
                        <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${language.percentage}%` }}
                            viewport={{ once: true }}
                            style={{ backgroundColor: language.color }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-[#34a578]/10 via-[#45d19c]/5 to-transparent border border-[#34a578]/30">
            <div className="flex items-center gap-2 mb-3">
              <FiCalendar className="w-4 h-4 text-[#34a578]" />
              <span className="text-lg font-medium text-white">
                Activity Timeline
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[16px]">
                <span className="text-gray-400">Started:</span>
                <span className="text-white">{startDate}</span>
              </div>
              <div className="flex items-center justify-between text-[16px]">
                <span className="text-gray-400">Current Streak:</span>
                <span className="text-[#34a578]">{currentStreakDates}</span>
              </div>
              <div className="flex items-center justify-between text-[16px]">
                <span className="text-gray-400">Longest Streak:</span>
                <span className="text-cyan-400">{longestStreakDates}</span>
              </div>
            </div>
          </div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#34a578]/10 to-cyan-400/10 border border-[#34a578]/30 text-white hover:from-[#34a578]/20 hover:to-cyan-400/20 hover:border-[#34a578]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#34a578] to-cyan-400 flex items-center justify-center">
                  <FiGithub className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium">View GitHub Profile</div>
                  <div className="text-xs text-gray-400 group-hover/link:text-gray-300">
                    Explore repositories & contributions
                  </div>
                </div>
              </div>
              <svg
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
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
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
