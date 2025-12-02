// "use client";
// import Lottie from "lottie-react";

// import educationAnimation from "../../../../educationAnimation.json";

// const EducationAnimation = () => {
//   return (
//     <>
//       <Lottie animationData={educationAnimation} loop={true} />
//     </>
//   );
// };

// export default EducationAnimation;

"use client";
import Lottie from "lottie-react";
import educationAnimation from "../../../../educationAnimation.json";
import { useEffect, useRef, useState } from "react";

const EducationAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effects */}
      <div className="absolute -inset-6 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-[#34a578]/20 to-cyan-400/20 rounded-full blur-3xl animate-spin-slow"
          style={{
            left: `${mousePosition.x * 2 + 50}%`,
            top: `${mousePosition.y * 2 + 50}%`,
          }}
        ></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#34a578]/30 to-cyan-400/30 animate-float-slow"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main container with glass effect */}
      <div
        className="relative rounded-3xl bg-gradient-to-br from-white/10 via-white/[0.05] to-black/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl overflow-hidden group-hover:border-[#34a578]/50 transition-all duration-700"
        style={{
          transform: `perspective(1000px) rotateY(${
            mousePosition.x
          }deg) rotateX(${-mousePosition.y}deg)`,
          transition: "transform 0.3s ease-out, border 0.3s ease",
        }}
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-gradient-border"></div>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#34a578]/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#45d19c]/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#34a578]/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Lottie animation container */}
        <div className="relative z-10 p-2">
          <Lottie
            animationData={educationAnimation}
            loop={true}
            className={`transition-all duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>

        {/* Floating icons around the animation */}
        <div className="absolute top-6 left-10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <div className="w-8 h-8 bg-gradient-to-br from-[#34a578]/20 to-transparent border border-[#34a578]/30 rounded-lg flex items-center justify-center animate-bounce-slow">
            <span className="text-[#34a578] text-sm">📚</span>
          </div>
        </div>

        <div className="absolute top-10 right-12 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          <div
            className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-transparent border border-cyan-400/30 rounded-lg flex items-center justify-center animate-bounce-slow"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-cyan-400 text-sm">🎓</span>
          </div>
        </div>

        <div className="absolute bottom-12 left-12 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
          <div
            className="w-8 h-8 bg-gradient-to-br from-[#45d19c]/20 to-transparent border border-[#45d19c]/30 rounded-lg flex items-center justify-center animate-bounce-slow"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-[#45d19c] text-sm">🏆</span>
          </div>
        </div>

        {/* Bottom info bar */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/20">
            <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
            <span className="text-sm text-white/80">Educational Journey</span>
          </div>
        </div>

        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Outer glow */}
      <div className="absolute -z-10 -inset-8 bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
    </div>
  );
};

export default EducationAnimation;
