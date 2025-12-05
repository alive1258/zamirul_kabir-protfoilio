// "use client";
// import React, { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Blog } from "../../../../utils/blogs";

// interface BlogModalProps {
//   blog: Blog | null;
//   onClose: () => void;
// }

// const BlogModal: React.FC<BlogModalProps> = ({ blog, onClose }) => {
//   useEffect(() => {
//     if (blog) {
//       document.body.style.overflow = "hidden";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [blog]);

//   if (!blog) return null;

//   const renderContent = () => {
//     return blog.content.map((section, index) => {
//       switch (section.type) {
//         case "lead":
//           return (
//             <p
//               key={index}
//               className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed"
//             >
//               {section.content}
//             </p>
//           );

//         case "paragraph":
//           return (
//             <p key={index} className="text-gray-300 mb-6 leading-relaxed">
//               {section.content}
//             </p>
//           );

//         case "stage":
//           if (!section.data) return null;
//           return (
//             <div
//               key={index}
//               className="mb-8 p-4 sm:p-6 bg-gray-800/50 rounded-xl border border-gray-700/50"
//             >
//               <div className="flex items-start gap-3 mb-4">
//                 <span className="text-2xl">{section.data.stageNumber}</span>
//                 <h3 className="text-lg sm:text-xl font-semibold text-white">
//                   {section.data.title}
//                 </h3>
//               </div>

//               <p className="text-gray-300 mb-4">
//                 <strong>🎯 Goal:</strong> {section.data.goal}
//               </p>

//               <div className="mb-4">
//                 <h4 className="text-white font-medium mb-2">Key Tasks:</h4>
//                 <ul className="space-y-2">
//                   {section.data.tasks.map((task, taskIndex) => (
//                     <li
//                       key={taskIndex}
//                       className="flex items-start gap-2 text-gray-300"
//                     >
//                       <span>{task.icon}</span>
//                       <span>{task.text}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50">
//                 <p className="text-gray-300">
//                   <strong>💡 Why it matters:</strong> {section.data.insight}
//                 </p>
//               </div>
//             </div>
//           );

//         case "author":
//           return (
//             <div key={index} className="mt-8 pt-6 border-t border-gray-700/50">
//               <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
//                 🙋‍♂️ About Me
//               </h3>
//               <p className="text-gray-300">{section.content}</p>
//             </div>
//           );

//         case "hashtags":
//           return (
//             <div key={index} className="mt-8 pt-6 border-t border-gray-700/50">
//               <div className="flex flex-wrap gap-2">
//                 {section.content?.split(" ").map((tag, tagIndex) => (
//                   <span
//                     key={tagIndex}
//                     className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           );

//         default:
//           return null;
//       }
//     });
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/90 backdrop-blur-sm"
//         onClick={onClose}
//       >
//         {/* Mobile Swipe Indicator */}
//         <div className="block sm:hidden absolute top-3 left-1/2 transform -translate-x-1/2 z-20">
//           <div className="w-12 h-1.5 bg-white/30 rounded-full"></div>
//         </div>

//         <motion.div
//           initial={{ scale: 0.95, opacity: 0, y: 20 }}
//           animate={{ scale: 1, opacity: 1, y: 0 }}
//           exit={{ scale: 0.95, opacity: 0, y: 20 }}
//           transition={{ type: "spring", damping: 25, stiffness: 300 }}
//           className="relative max-w-4xl w-full overflow-y-scroll h-[90vh] sm:h-[85vh] sm:rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl overflow-hidden flex flex-col"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Modal Header */}
//           <div className="flex-shrink-0 bg-gradient-to-b from-gray-900 to-gray-900/80 backdrop-blur-sm border-b border-white/10">
//             <div className="relative p-4 sm:p-6 md:p-8">
//               {/* Close Button */}
//               <button
//                 onClick={onClose}
//                 className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//               >
//                 <svg
//                   className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:rotate-90 transition-transform duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>

//               {/* Blog Icon and Title Container */}
//               <div className="flex flex-col items-center">
//                 {/* Blog Icon */}
//                 <div className="mb-3 sm:mb-4 md:mb-6">
//                   <div className="text-3xl sm:text-4xl md:text-5xl">
//                     {blog.icon}
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-2 sm:mb-3 md:mb-4 px-2">
//                   {blog.title}
//                 </h2>

//                 {/* Meta Info Row */}
//                 <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 text-gray-300 mb-3 sm:mb-4 md:mb-6 w-full">
//                   {/* Category Badge */}
//                   <div className="flex items-center gap-2">
//                     <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10 backdrop-blur-sm">
//                       {blog.category}
//                     </span>
//                   </div>

//                   {/* Divider */}
//                   <div className="hidden sm:block w-px h-4 bg-white/20"></div>

//                   {/* Read Time and Date */}
//                   <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm">
//                     <div className="flex items-center gap-1 sm:gap-2">
//                       <svg
//                         className="w-3 h-3 sm:w-4 sm:h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                       </svg>
//                       <span>{blog.readTime}</span>
//                     </div>
//                     <div className="flex items-center gap-1 sm:gap-2">
//                       <svg
//                         className="w-3 h-3 sm:w-4 sm:h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                         />
//                       </svg>
//                       <span>{blog.date}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Author Info */}
//                 <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
//                     {blog.author.charAt(0)}
//                   </div>
//                   <div>
//                     <div className="text-white font-medium text-sm sm:text-base">
//                       {blog.author}
//                     </div>
//                     <div className="text-gray-400 text-xs sm:text-sm">
//                       {blog.authorRole}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Stats */}
//                 <div className="flex justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
//                   <div className="text-center">
//                     <div className="text-base sm:text-lg font-bold text-white">
//                       {blog.views}
//                     </div>
//                     <div className="text-gray-400 text-xs sm:text-sm">
//                       Views
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-base sm:text-lg font-bold text-white">
//                       {blog.likes}
//                     </div>
//                     <div className="text-gray-400 text-xs sm:text-sm">
//                       Likes
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-base sm:text-lg font-bold text-white">
//                       {blog.shares}
//                     </div>
//                     <div className="text-gray-400 text-xs sm:text-sm">
//                       Shares
//                     </div>
//                   </div>
//                 </div>

//                 {/* Tags */}
//                 <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4">
//                   {blog.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="px-2 py-1 text-xs sm:text-sm rounded-full bg-white/10 border border-white/20 text-gray-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Modal Content - Scrollable Area */}
//           <div className="flex-grow overflow-y-auto">
//             <div className="p-4 sm:p-6 md:p-8">
//               <div className="prose prose-invert max-w-none">
//                 {renderContent()}
//               </div>
//             </div>
//           </div>

//           {/* Modal Footer */}
//           <div className="flex-shrink-0 bg-gradient-to-t from-gray-900 to-gray-900/80 backdrop-blur-sm border-t border-white/10">
//             <div className="p-3 sm:p-4 md:p-6">
//               <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
//                 <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
//                   <button className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
//                     <svg
//                       className="w-4 h-4 sm:w-5 sm:h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
//                       />
//                     </svg>
//                     <span>Like ({blog.likes})</span>
//                   </button>
//                   <button className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
//                     <svg
//                       className="w-4 h-4 sm:w-5 sm:h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
//                       />
//                     </svg>
//                     <span>Share ({blog.shares})</span>
//                   </button>
//                 </div>
//                 <button
//                   onClick={onClose}
//                   className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 text-sm sm:text-base"
//                 >
//                   <span className="text-white">Close Article</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default BlogModal;

"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Blog } from "../../../../utils/blogs";

interface BlogModalProps {
  blog: Blog | null;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ blog, onClose }) => {
  useEffect(() => {
    if (blog) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [blog]);

  if (!blog) return null;

  const renderContent = () => {
    return blog.content.map((section, index) => {
      switch (section.type) {
        case "lead":
          return (
            <p
              key={index}
              className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed"
            >
              {section.content}
            </p>
          );

        case "paragraph":
          return (
            <p key={index} className="text-gray-300 mb-6 leading-relaxed">
              {section.content}
            </p>
          );

        case "stage":
          if (!section.data) return null;
          return (
            <div
              key={index}
              className="mb-8 p-4 sm:p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">{section.data.stageNumber}</span>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {section.data.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-4">
                <strong className="text-blue-300">🎯 Goal:</strong>{" "}
                {section.data.goal}
              </p>

              <div className="mb-4">
                <h4 className="text-white font-medium mb-2">Key Tasks:</h4>
                <ul className="space-y-3">
                  {section.data.tasks.map((task, taskIndex) => (
                    <li
                      key={taskIndex}
                      className="flex items-start gap-3 text-gray-300 bg-gray-900/30 p-3 rounded-lg hover:bg-gray-900/50 transition-colors"
                    >
                      <span className="text-xl mt-0.5">{task.icon}</span>
                      <span className="flex-1">{task.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-gray-900/50 rounded-lg border border-blue-500/20">
                <p className="text-gray-300">
                  <strong className="text-amber-300">💡 Why it matters:</strong>{" "}
                  {section.data.insight}
                </p>
              </div>
            </div>
          );

        case "author":
          return (
            <div key={index} className="mt-10 pt-8 border-t border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold">
                    {blog.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    About the Author
                  </h3>
                  <p className="text-gray-400 text-sm">{blog.authorRole}</p>
                </div>
              </div>
              <p className="text-gray-300 pl-14">{section.content}</p>
            </div>
          );

        case "hashtags":
          return (
            <div key={index} className="mt-10 pt-8 border-t border-gray-700/50">
              <div className="flex flex-wrap gap-2">
                {section.content?.split(" ").map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1.5 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-gray-600 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );

        default:
          return null;
      }
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Mobile Swipe Indicator */}
        <div className="block sm:hidden absolute top-3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-12 h-1.5 bg-white/30 rounded-full"></div>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-4xl w-full h-[70vh] sm:rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header - Fixed */}
          <div className="flex-shrink-0 bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-sm border-b border-white/10">
            <div className="relative p-4 sm:p-6">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
                aria-label="Close modal"
              >
                <svg
                  className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:rotate-90 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Blog Icon and Title Container */}
              <div className="flex flex-col items-center">
                {/* Blog Icon */}
                <div className="mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl">
                    {blog.icon}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-2 sm:mb-3 px-2">
                  {blog.title}
                </h2>

                {/* Meta Info Row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-gray-300 mb-3 sm:mb-4 w-full">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      {blog.category}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block w-px h-4 bg-white/20"></div>

                  {/* Read Time and Date */}
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{blog.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {blog.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-medium text-sm sm:text-base">
                      {blog.author}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      {blog.authorRole}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-bold text-white">
                      {blog.views.toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      Views
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-bold text-white">
                      {blog.likes.toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      Likes
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-bold text-white">
                      {blog.shares.toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      Shares
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs sm:text-sm rounded-full bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Content - Scrollable Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="max-w-3xl mx-auto">
                {renderContent()}

                {/* Optional: Add a "Back to top" button for long articles */}
                <div className="mt-10 pt-8 border-t border-gray-700/50">
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 text-white flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    <span>Back to Top</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer - Fixed */}
          <div className="flex-shrink-0 bg-gradient-to-t from-gray-900 to-gray-900/95 backdrop-blur-sm border-t border-white/10">
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base group"
                    onClick={() => {
                      // Handle like functionality
                      console.log("Liked:", blog.id);
                    }}
                  >
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                      <svg
                        className="w-4 h-4 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                    </div>
                    <span>Like ({blog.likes.toLocaleString()})</span>
                  </button>
                  <button
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base group"
                    onClick={() => {
                      // Handle share functionality
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }}
                  >
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                      <svg
                        className="w-4 h-4 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </div>
                    <span>Share ({blog.shares.toLocaleString()})</span>
                  </button>
                </div>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:border-white/30 hover:bg-white/15 transition-all duration-300 text-sm sm:text-base font-medium group"
                >
                  <span className="text-white group-hover:scale-105 transition-transform inline-block">
                    Close Article
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogModal;
