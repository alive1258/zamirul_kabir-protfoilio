"use client";

import SlideUp from "@/components/Shared/animations/SlideUp";

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    author: string;
    image: string;
    gradient: string;
    icon: string;
    views: number;
    tags: string[];
  };
  onViewDetails: (blog: any) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, onViewDetails }) => {
  return (
    <SlideUp delay={blog.id * 0.1}>
      <div className="group relative">
        {/* Card Container */}
        <div className="relative hover:scale-105 ease-in-out  overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-xl border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:shadow-2xl group-hover:shadow-black/30">
          {/* Content */}
          <div className="relative z-10">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${blog.gradient} opacity-30`}
              ></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-5xl opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
                  {blog.icon}
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white`}
                >
                  {blog.category}
                </span>
              </div>

              {/* View Count */}
              <div className="absolute top-4 right-4 flex items-center gap-1 text-sm text-white/80">
                <span>👁️</span>
                <span>{blog.views}</span>
              </div>
            </div>

            {/* Text Content */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-300 mb-3 line-clamp-2  ">
                {blog.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                {blog.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                  <span className="group-hover:text-gray-400 transition-colors duration-300">
                    {blog.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <span className="group-hover:text-gray-400 transition-colors duration-300">
                    {blog.readTime}
                  </span>
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {blog.author}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
                {blog.tags.length > 2 && (
                  <span className="px-2 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-500">
                    +{blog.tags.length - 2}
                  </span>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => onViewDetails(blog)}
                className="group/btn w-full py-3 rounded-lg bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <span className="text-gray-300 group-hover/btn:text-white transition-colors duration-300">
                    Read Article
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Floating Particles on Hover */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${blog.gradient} animate-pulse`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default BlogCard;
