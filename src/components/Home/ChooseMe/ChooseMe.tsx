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
      icon: "/assets/icons/f2.png",
      title: "Projects Delivered",
      value: "50+",
      color: "amber",
    },
    {
      icon: "/assets/icons/f1.png",
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
        {/* Title */}
        <div className="relative text-center mb-16 md:mb-24">
          {/* Animated background gradient */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-400/10 blur-3xl opacity-60 rounded-full"></div>

          {/* Decorative pre-title elements */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
              <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-400 tracking-widest">
                WHY CHOOSE ME
              </span>
              <div
                className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              ></div>
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
          </div>

          {/* Main title with gradient effect */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 relative">
            <span className="relative inline-block">
              <span className="text-white relative z-10">
                Building Digital Excellence with
              </span>
              {/* Glow effect for "About" */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
            </span>

            <span
              className="relative ml-4 inline-block animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="relative z-10 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Precision & Passion
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

          {/* Subtitle */}
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed px-4">
            I combine technical expertise with creative problem-solving to
            <span className="inline-block mx-3 text-[#34a578] animate-bounce">
              •
            </span>
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
            {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0C1222] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0C1222] to-transparent z-10"></div> */}

            {/* Infinite scroll track */}
            <div className="flex space-x-6 w-max py-4">
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
