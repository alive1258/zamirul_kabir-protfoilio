"use client";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogModal from "./BlogModal";

import SlideUp from "@/components/Shared/animations/SlideUp";
import { blogsData } from "../../../../utils/blogs";

const BlogSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  const displayedBlogs = showAll ? blogsData : blogsData.slice(0, 6);

  return (
    <section id="blog" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
      </div>

      <div className="container relative z-10 px-4">
        {/* Header */}
        <SlideUp delay={0.1}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-8 h-1 bg-gradient-to-r from-transparent to-[#34a578] rounded-full"></div>
              <div className="px-5 py-2.5 bg-gradient-to-r from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-full">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-300 tracking-widest">
                    BLOG & ARTICLES
                  </span>
                  <div
                    className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-[#34a578] rounded-full animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                </div>
              </div>
              <div className="w-8 h-1 bg-gradient-to-r from-[#34a578] to-transparent rounded-full"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Technical</span>
              <span className="ml-4 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Exploring software architecture, design patterns, and development
              best practices through in-depth articles.
            </p>
          </div>
        </SlideUp>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedBlogs?.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onViewDetails={setSelectedBlog}
            />
          ))}
        </div>

        {/* Show More/Less Button */}
        {blogsData?.length > 6 && (
          <SlideUp delay={0.5}>
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#34a578]/20 via-cyan-400/20 to-[#34a578]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent">
                  <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-white font-semibold">
                    {showAll ? "Show Less" : "Show More Articles"}
                  </span>
                  <div
                    className={`transition-transform duration-300 ${
                      showAll ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Floating dots */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#34a578] to-cyan-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </button>
            </div>
          </SlideUp>
        )}

        {/* Stats */}
        <SlideUp delay={0.7}>
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  value: blogsData.length,
                  label: "Total Articles",
                  icon: "📚",
                },
                { value: "15K+", label: "Total Views", icon: "👁️" },
                { value: "8+", label: "Categories", icon: "🏷️" },
                { value: "25+", label: "Topics Covered", icon: "💡" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm border border-white/10"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </SlideUp>
      </div>

      {/* Blog Modal */}
      <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
    </section>
  );
};

export default BlogSection;
