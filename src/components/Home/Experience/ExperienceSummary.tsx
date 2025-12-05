"use client";
import React from "react";
import SlideUp from "@/components/Shared/animations/SlideUp";

const ExperienceSummary: React.FC = () => {
  return (
    <SlideUp delay={1.2}>
      <div className="mt-20 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-xl border border-white/10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Career Evolution
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              From frontend development to full-stack mastery, project
              leadership, and mentoring—each role has been a stepping stone in
              my continuous journey of growth and impact.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: "💻",
                  title: "Frontend Specialization",
                  description: "Modern React, Next.js, TypeScript",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  icon: "⚡",
                  title: "Full Stack Expertise",
                  description: "End-to-end application development",
                  gradient: "from-[#34a578] to-cyan-400",
                },
                {
                  icon: "🚀",
                  title: "Leadership & Mentoring",
                  description: "Project leadership & knowledge sharing",
                  gradient: "from-blue-500 to-cyan-400",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                  >
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-4 border-white/10">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-[#34a578] animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-400 border-l-blue-500 animate-spin-slow-reverse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl mb-2">📊</span>
                    <div className="text-sm font-medium text-white">
                      Continuous Growth
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default ExperienceSummary;
