import SkillCard from "./SkillCard";

export interface MySkills {
  _id: string;
  name: string;
  image: string;
}
export interface MySkillsCardProps {
  item: MySkills;
  idx: number;
  delay: number;
}

const Skills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/skills`, {
    next: {
      revalidate: 30,
    },
  });
  const data: MySkills[] = await res.json();

  return (
    <>
      <div id="skills" className="overflow-hidden relative  text-[#ffffff] ">
        {/* Experience */}
        {/* BLURRED BLUE CIRCLE */}
        <div className="absolute md:block hidden blurred-blue-circle"></div>
        <div
          className="absolute rounded-full opacity-40 blur-[150px] bg-[#10b981]"
          // 952fe9
          style={{
            width: "593.727px",
            height: "531.226px",
            right: "-72.727px",
            top: "-345.17px",
          }}
        ></div>

        {/* Blurred Effect - Blue Circle */}
        <div
          className="absolute rounded-full opacity-[0.38] blur-[125px] bg-[#5158DA]"
          style={{
            width: "699.729px",
            height: "626.07px",
            left: "152.271px",
            bottom: "-377.762px",
          }}
        ></div>

        <div className="absolute md:block hidden bottom-gradient-line"></div>

        <div className="container py-28">
          {/* skill  */}

          <div className="relative text-center mb-16 md:mb-24">
            {/* Animated background gradient */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-400/10 blur-3xl opacity-60 rounded-full"></div>

            {/* Decorative pre-title elements */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
                <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-400 tracking-widest">
                  Skills
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
                <span className="text-white relative z-10">My</span>
                {/* Glow effect for "About" */}
                <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
              </span>

              <span
                className="relative ml-4 inline-block animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="relative z-10 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Skills
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
              Technologies & tools Ive mastered to craft exceptional digital
              <span className="inline-block mx-2 text-[#34a578] animate-bounce">
                •
              </span>
              experiences
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 ">
            {/* skill */}

            {data?.map((skill, idx) => (
              <SkillCard
                key={skill._id}
                item={skill}
                idx={idx}
                delay={idx * 0.3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
