/* eslint-disable react/no-unescaped-entities */
import SlideUp from "@/components/Shared/animations/SlideUp";
import "../../Home/Services/Services.css";
import GitHubStats from "@/components/GitHubStats/GitHubStats";

const PersonalInfo = () => {
  return (
    <>
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
              INTRODUCTION
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
            <span className="text-white relative z-10">About</span>
            {/* Glow effect for "About" */}
            <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
          </span>

          <span
            className="relative ml-4 inline-block animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="relative z-10 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Me
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
          Get to know the person behind the code
          <span className="inline-block mx-3 text-[#34a578] animate-bounce">
            •
          </span>
          my journey, passions, and philosophy
        </p>
      </div>

      {/* <div className="">
        <div className="grid md:grid-cols-2 grid-cols-1 mt-16 md:gap-8">
  
          <div className="md:w-full bg-gradient-to-br from-[#0C1222] via-[#131a30] to-[#0C1222] border border-[#26272F] rounded-2xl p-8 shadow-2xl shadow-[#34a578]/5 hover:shadow-[#34a578]/10 transition-shadow duration-500">
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
      </div> */}

      <div className="mt-20 md:mt-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Content Card */}
          <div className="relative group">
            {/* Glowing background effect */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#34a578]/10 via-transparent to-cyan-400/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Main content card */}
            <div className="relative bg-gradient-to-br from-white/[0.03] via-black/20 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden group-hover:border-[#34a578]/40 transition-all duration-500">
              {/* Animated border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#34a578]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#34a578]/20 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-cyan-400/20 rounded-bl-lg"></div>

              {/* Content container */}
              <div className="relative z-10">
                {/* Introduction with animated marker */}
                <SlideUp>
                  <div className="relative mb-10">
                    {/* Animated vertical line */}
                    <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#34a578] via-[#45d19c] to-transparent rounded-full"></div>

                    {/* Floating dot */}
                    <div className="absolute -left-7 top-4 w-3 h-3 bg-gradient-to-br from-[#34a578] to-cyan-400 rounded-full animate-pulse shadow-lg shadow-[#34a578]/30"></div>

                    {/* Text content */}
                    {/* <div className="pl-6">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#34a578] rounded-full animate-ping"></span>
                        Full-Stack Developer
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-300 tracking-wide">
                        I bridge the gap between beautiful front-end interfaces
                        and
                        <span className="inline-block mx-2 bg-gradient-to-r from-[#34a578] to-cyan-400 bg-clip-text text-transparent font-medium">
                          robust back-end architecture
                        </span>
                        . My passion lies in crafting digital experiences that
                        are not just functional, but truly exceptional.
                      </p>
                    </div> */}

                    {/* ===================  */}
                    {/* <div className="pl-6">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#34a578] rounded-full animate-ping"></span>
                        Full-Stack Developer
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-300 tracking-wide">
                        I bridge the gap between beautiful front-end interfaces
                        and
                        <span className="inline-block mx-2 bg-gradient-to-r from-[#34a578] to-cyan-400 bg-clip-text text-transparent font-medium">
                          robust back-end architecture
                        </span>
                        . My passion lies in crafting digital experiences that
                        are not just functional, but truly exceptional.
                      </p>
                      <div className="mt-6 space-y-4">
                        <p className="text-gray-300 leading-relaxed flex items-start gap-2">
                          <span className="text-[#34a578] mt-1.5">↪</span>
                          Transforming complex challenges into elegant solutions
                          through clean code and modern technologies.
                        </p>
                        <p className="text-gray-300 leading-relaxed flex items-start gap-2">
                          <span className="text-cyan-400 mt-1.5">↪</span>
                          Committed to writing scalable, maintainable code that
                          stands the test of time and growth.
                        </p>
                      </div>
                    </div> */}

                    {/* ============================  */}
                    <div className="pl-6">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#34a578] rounded-full animate-ping"></span>
                        Full-Stack Developer
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-300 tracking-wide">
                        I bridge the gap between beautiful front-end interfaces
                        and
                        <span className="inline-block mx-2 bg-gradient-to-r from-[#34a578] to-cyan-400 bg-clip-text text-transparent font-medium">
                          robust back-end architecture
                        </span>
                        . My passion lies in crafting digital experiences that
                        are not just functional, but truly exceptional.
                      </p>
                      <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[#34a578]/5 to-transparent border-l-4 border-[#34a578]">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#34a578] to-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <p className="text-gray-300">
                              Building performant applications that deliver
                              seamless user experiences across all platforms.
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-[#34a578] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs">↗</span>
                            </div>
                            <p className="text-gray-300">
                              Continuously evolving with emerging technologies
                              to create innovative digital solutions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SlideUp>

                {/* Tech Stack Section */}
                <SlideUp delay={0.2}>
                  <div className="relative p-6 rounded-xl bg-gradient-to-r from-[#34a578]/10 via-[#45d19c]/5 to-transparent border border-[#34a578]/30 backdrop-blur-sm group-hover:border-[#34a578]/50 transition-all duration-500">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-2 right-2 w-4 h-4 border border-[#34a578]/30 rounded-full animate-ping"></div>
                      <div
                        className="absolute bottom-2 left-2 w-4 h-4 border border-cyan-400/30 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>

                    {/* Header */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full animate-pulse"></div>
                        <h4 className="font-bold text-white text-xl tracking-wide">
                          Tech Stack Expertise
                        </h4>
                        <div className="ml-auto text-xs px-3 py-1 bg-white/5 rounded-full text-gray-400 border border-white/10">
                          Modern Stack
                        </div>
                      </div>

                      {/* Tech badges with staggered animation */}
                      {/* Tech badges with staggered animation */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {[
                          {
                            name: "JavaScript",
                            color: "from-yellow-400/20",
                            toColor: "to-yellow-600/10",
                          },
                          {
                            name: "TypeScript",
                            color: "from-blue-400/20",
                            toColor: "to-blue-600/10",
                          },
                          {
                            name: "React.js",
                            color: "from-cyan-400/20",
                            toColor: "to-cyan-600/10",
                          },
                          {
                            name: "Next.js",
                            color: "from-gray-400/20",
                            toColor: "to-black/10",
                          },
                          {
                            name: "Redux",
                            color: "from-purple-400/20",
                            toColor: "to-purple-600/10",
                          },
                          {
                            name: "Tailwind",
                            color: "from-teal-400/20",
                            toColor: "to-cyan-600/10",
                          },
                          {
                            name: "Node.js",
                            color: "from-green-400/20",
                            toColor: "to-green-600/10",
                          },
                          {
                            name: "Express.js",
                            color: "from-gray-400/20",
                            toColor: "to-gray-600/10",
                          },
                          {
                            name: "MongoDB",
                            color: "from-green-500/20",
                            toColor: "to-green-700/10",
                          },
                          {
                            name: "PostgreSQL",
                            color: "from-blue-500/20",
                            toColor: "to-blue-700/10",
                          },

                          {
                            name: "GraphQL",
                            color: "from-pink-400/20",
                            toColor: "to-pink-600/10",
                          },
                          {
                            name: "Docker",
                            color: "from-blue-400/20",
                            toColor: "to-cyan-600/10",
                          },
                        ].map((tech, i) => (
                          <span
                            key={tech.name}
                            className="px-4 py-3 rounded-xl text-sm text-gray-300 border border-white/10 backdrop-blur-sm hover:scale-105 hover:border-white/20 hover:text-white transition-all duration-300 group-hover:shadow-lg"
                            style={{
                              background: `linear-gradient(135deg, 
                                ${tech.color
                                  .replace("from-", "rgba(")
                                  .replace("/20", ", 0.08)")}, 
                                ${tech.toColor
                                  .replace("to-", "rgba(")
                                  .replace("/10", ", 0.04)")})`,
                              animationDelay: `${i * 0.05}s`,
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span>{tech.name}</span>
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#34a578]">
                                →
                              </span>
                            </div>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SlideUp>

                {/* Philosophy & Call to Action */}
                <SlideUp delay={0.4}>
                  <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/10 backdrop-blur-sm group-hover:border-cyan-400/30 transition-all duration-500">
                    {/* Quote icon */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#34a578] to-cyan-400 flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    <div className="pl-4">
                      <p className="text-lg leading-relaxed text-gray-300 italic mb-6">
                        "I thrive at the intersection of creativity and
                        technology, building solutions that are not only
                        functional but also delightful to use."
                      </p>

                      {/* CTA Section */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-white">
                            Open to opportunities
                          </span>
                        </div>

                        <a
                          href="#contact"
                          className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#34a578]/10 to-cyan-400/10 border border-[#34a578]/30 text-white hover:from-[#34a578]/20 hover:to-cyan-400/20 hover:border-[#34a578]/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                        >
                          <span>Let's Connect</span>
                          <svg
                            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
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
                      </div>

                      {/* Stats preview */}
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="text-xl font-bold text-white">
                            50+
                          </div>
                          <div className="text-xs text-gray-400">Projects</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="text-xl font-bold text-white">
                            2.5+
                          </div>
                          <div className="text-xs text-gray-400">Years</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="text-xl font-bold text-white">∞</div>
                          <div className="text-xs text-gray-400">Learning</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            </div>
          </div>

          {/* Right Column*/}
          <div className="relative">
            {/* Add GitHub Stats here */}
            <GitHubStats
              totalContributions={841}
              currentStreak={11}
              longestStreak={11}
              repositories={112}
              githubUrl="https://github.com/alive1258"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
