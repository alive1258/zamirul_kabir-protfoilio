"use client";

import React from "react";
import SlideUp from "../animations/SlideUp";

interface BadgeLabelProps {
  text: string;
  className?: string;
  color?: "primary" | "secondary" | "custom";
  customColor?: string;
  showFullHeader?: boolean;
  showSubtitle?: boolean;
  subtitle?: string;
  showTitle?: boolean;
  titleText?: string;
  titleColor?: string;
}

const BadgeLabel: React.FC<BadgeLabelProps> = ({
  text,
  className = "",
  color = "primary",
  customColor = "#34a578",
  showFullHeader = false,
  showSubtitle = false,
  subtitle = "Technologies & tools I've mastered to craft exceptional digital experiences",
  showTitle = false,
  titleText = "My Skills",
  titleColor = "from-[#34a578] via-[#45d19c] to-cyan-400",
}) => {
  // Define color schemes
  const colorSchemes = {
    primary: {
      dot: "#34a578",
      gradient: "from-[#34a578] via-[#45d19c] to-cyan-400",
      light: "from-[#34a578]/10 via-transparent to-cyan-400/10",
    },
    secondary: {
      dot: "#3B82F6",
      gradient: "from-[#3B82F6] via-[#60a5fa] to-[#93c5fd]",
      light: "from-[#3B82F6]/10 via-transparent to-[#93c5fd]/10",
    },
    custom: {
      dot: customColor,
      gradient: `from-[${customColor}] via-[${customColor}]99 to-[${customColor}]cc`,
      light: `from-[${customColor}]/10 via-transparent to-[${customColor}]/10`,
    },
  };

  const colors = colorSchemes[color];

  // If showing full header, render the complete beautiful header
  if (showFullHeader) {
    return (
      <div className={`relative text-center mb-16 md:mb-24 ${className}`}>
        {/* Animated background gradient */}
        <div
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[150px] md:h-[200px] blur-3xl opacity-60 rounded-full"
          style={{
            background:
              color === "custom"
                ? `linear-gradient(to right, ${customColor}20, transparent, ${customColor}20)`
                : undefined,
          }}
        >
          {color !== "custom" && (
            <div
              className={`w-full h-full bg-gradient-to-r ${colors.light} rounded-full`}
            ></div>
          )}
        </div>

        {/* Decorative pre-title elements */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: colors.dot }}
            ></div>
            <span className="text-sm font-medium text-gray-400 tracking-widest">
              {text.toUpperCase()}
            </span>
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: color === "primary" ? "#06b6d4" : colors.dot,
                animationDelay: "0.3s",
              }}
            ></div>
          </div>
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
        </div>

        {/* Main title with gradient effect */}
        {showTitle && (
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 relative">
            <span className="relative inline-block">
              <span className="text-white relative z-10">My</span>
              {/* Glow effect for "My" */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
            </span>

            <span
              className="relative ml-4 inline-block animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <span
                className={`relative z-10 bg-gradient-to-r ${titleColor} bg-clip-text text-transparent animate-gradient-x`}
              >
                {titleText.split(" ")[1] || titleText}
              </span>
              {/* Floating particles */}
              <div
                className="absolute -top-3 -right-3 w-3 h-3 rounded-full animate-bounce"
                style={{
                  backgroundColor: color === "primary" ? "#06b6d4" : colors.dot,
                }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full animate-bounce"
                style={{
                  backgroundColor: colors.dot,
                  animationDelay: "0.2s",
                }}
              ></div>
            </span>
          </h1>
        )}

        {/* Animated separator */}
        <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: colors.dot }}
            ></div>
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: color === "primary" ? "#06b6d4" : colors.dot,
                animationDelay: "0.3s",
              }}
            ></div>
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: colors.dot,
                animationDelay: "0.6s",
              }}
            ></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
        </div>

        {/* Subtitle */}
        {showSubtitle && (
          <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            {subtitle}
            <span className="inline-block mx-2 animate-bounce">•</span>
          </p>
        )}
      </div>
    );
  }

  // Original compact badge version
  return (
    <SlideUp>
      <div
        className={`flex items-center justify-center mb-8 md:mb-12 ${className}`}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>

          <div className="relative">
            {/* Glow effect */}
            <div
              className="absolute -inset-3 sm:-inset-4 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-full"
              style={{
                background:
                  color === "custom"
                    ? `linear-gradient(to right, ${customColor}20, transparent, ${customColor}20)`
                    : undefined,
              }}
            >
              {color !== "custom" && (
                <div
                  className={`w-full h-full bg-gradient-to-r ${colors.light} rounded-full`}
                ></div>
              )}
            </div>

            {/* Main badge */}
            <div className="relative px-4 sm:px-5 py-2 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
              <div className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: colors.dot }}
                ></div>
                <span className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider">
                  {text.toUpperCase()}
                </span>
                <div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor:
                      color === "primary" ? "#06b6d4" : colors.dot,
                    animationDelay: "0.3s",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </SlideUp>
  );
};

export default BadgeLabel;
