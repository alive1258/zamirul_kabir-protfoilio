// import zamirulPic from "@/public/assets/image/zamirul_pic";
import { AiOutlineDownload } from "react-icons/ai";
import "../../Home/Services/Services.css";
import ZoomIn from "@/components/Shared/animations/ZoomIn";
import SlideLeft from "@/components/Shared/animations/SlideLeft";
import ImageWithSkeleton from "@/components/Shared/animations/ImageWithSkeleton";

const Hero = () => {
  const zamirulPic = "/assets/image/zamirul_pic.jpg";

  return (
    <div
      id="hero"
      className="md:pt-36 pb-28 py-14 relative h-full w-full bg-[#0f172a] overflow-hidden"
    >
      <div className="absolute md:block hidden blurred-blue-circle"></div>
      <div
        className="absolute rounded-full opacity-40 blur-[150px] bg-[#E9C12F]"
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
        className="absolute rounded-full opacity-[0.38] blur-[125px] bg-[#5158DA] pointer-events-none"
        style={{
          width: "699.729px",
          height: "626.07px",
          left: "152.271px",
          bottom: "-377.762px",
        }}
      ></div>
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_39px] "></div> */}

      <div className="absolute bottom-0 left-0 right-0 top-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_39px]"></div>

      <div className="grid md:grid-cols-2 grid-cols-1 container md:gap-20 gap-10 pt-10 ">
        {/* <div className="md:mt-6 text-[#ffffff]">
          <div className="flex space-x-2">
            <h1 className="md:text-4xl text-xl font-bold">This is</h1>
            <div className="typing-container md:text-4xl text-xl font-bold">
              <h3 className="typing-text">
                <span className="text-[#34a578]">Zamirul Kabir.</span>
              </h3>
            </div>
          </div>

          <h2 className="md:text-3xl text-2xl font-bold pt-4">
            I am a Professional
            <span className="font-semibold text-[#34a578]">
              {" "}
              Web Developer.
            </span>
          </h2>
       
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#34a578]/20 via-transparent to-cyan-500/20 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative mt-8 p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10">
              <SlideLeft delay={0.2}>
                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                  As a passionate{" "}
                  <span className="font-bold text-white bg-gradient-to-r from-[#34a578] to-cyan-400 bg-clip-text text-transparent">
                    Frontend-Focused Full-Stack Engineer
                  </span>{" "}
                  with{" "}
                  <span className="font-bold text-[#34a578]">2.5+ years</span>{" "}
                  of experience, I craft high-performing, visually refined web
                  applications that blend aesthetics with functionality.
                </p>
              </SlideLeft>

              <SlideLeft delay={0.4}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                    <span className="text-gray-300">
                      Clean, maintainable code with modern architecture
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <span className="text-gray-300">
                      Pixel-perfect, responsive UI/UX implementation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 bg-[#45d19c] rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                    <span className="text-gray-300">
                      Performance optimization & best practices
                    </span>
                  </div>
                </div>
              </SlideLeft>
            </div>
          </div>

          <div className="md:mt-6 mt-4 pb-6 z-50 md:flex md:space-y-0  space-x-7">
            <a href="/Resume_of_Zamirul.pdf" download="Resume_of_Zamirul.pdf">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#34a578] to-[#45d19c] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#34a578]/30 transition-all duration-300 hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#34a578] to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                <span className="relative flex items-center gap-3">
                  DOWNLOAD RESUME
                  <AiOutlineDownload
                    size={20}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                </span>
              </button>
            </a>
            <a href="#contact">
              <button className="group px-8 md:mt-0 mt-5 py-4 bg-transparent border-2 border-[#34a578]/30 text-white font-semibold rounded-xl hover:bg-[#34a578]/10 hover:border-[#34a578] transition-all duration-300">
                <span className="flex items-center gap-3">
                  Lets Connect
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                </span>
              </button>
            </a>
          </div>
        </div>
         */}

        <div className="md:mt-6 text-[#ffffff] relative">
          {/* Floating particles background */}
          <div className="absolute -inset-6 overflow-hidden pointer-events-none">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-[#34a578]/20 to-cyan-400/20 animate-float-slow"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10">
            {/* Animated intro line */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <div className="w-16 h-1 bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] rounded-full animate-glow" />
              <span className="text-sm font-semibold tracking-widest text-gray-400">
                WELCOME TO MY PORTFOLIO
              </span>
            </div>

            {/* Hero title with gradient effect */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                <span className="block">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-text-shimmer">
                    Zamirul Kabir
                  </span>
                </span>
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                    Full-Stack Developer
                  </span>
                </span>
              </h1>
            </div>

            {/* Animated subtitle */}
            <div className="mb-10 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#34a578]/20 via-transparent to-cyan-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="text-xl md:text-2xl font-semibold relative">
                <span className="text-gray-300">Crafting </span>
                <span className="relative inline-block">
                  <span className="text-[#34a578] font-bold animate-pulse-slow">
                    Digital Experiences
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full animate-width-pulse" />
                </span>
                <span className="text-gray-300"> that </span>
                <span className="text-cyan-400 font-bold animate-text-bounce">
                  Inspire
                </span>
              </h2>
            </div>

            <div className="relative group">
              {/* Hover glow effect only */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#34a578]/20 via-transparent to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              <div className="relative mt-8 p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-colors duration-500">
                <SlideLeft delay={0.2}>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6 group-hover:text-white/90 transition-colors duration-300">
                    As a passionate{" "}
                    <span className="font-bold text-white group-hover:text-[#34a578] transition-colors duration-300">
                      Frontend-Focused Full-Stack Engineer
                    </span>{" "}
                    with{" "}
                    <span className="font-bold text-[#34a578]">2.5+ years</span>{" "}
                    of experience, I craft high-performing, visually refined web
                    applications that blend aesthetics with functionality.
                  </p>
                </SlideLeft>

                <SlideLeft delay={0.4}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                        Clean, maintainable code with modern architecture
                      </span>
                    </div>
                    <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div
                        className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                        Pixel-perfect, responsive UI/UX implementation
                      </span>
                    </div>
                    <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div
                        className="w-2 h-2 bg-[#45d19c] rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                        Performance optimization & best practices
                      </span>
                    </div>
                  </div>
                </SlideLeft>
              </div>
            </div>

            <div className="md:mt-6 mt-4 pb-6 z-50 md:flex md:space-y-0  space-x-7">
              <a href="/Resume_of_Zamirul.pdf" download="Resume_of_Zamirul.pdf">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[#34a578] to-[#45d19c] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#34a578]/30 transition-all duration-300 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#34a578] to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                  <span className="relative flex items-center gap-3">
                    DOWNLOAD RESUME
                    <AiOutlineDownload
                      size={20}
                      className="group-hover:translate-y-1 transition-transform"
                    />
                  </span>
                </button>
              </a>
              <a href="#contact">
                <button className="group px-8 md:mt-0 mt-5 py-4 bg-transparent border-2 border-[#34a578]/30 text-white font-semibold rounded-xl hover:bg-[#34a578]/10 hover:border-[#34a578] transition-all duration-300">
                  <span className="flex items-center gap-3">
                    Lets Connect
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <ZoomIn>
          <div className="boxs md:h-[600px] rounded-2xl mt-4">
            <div className="z-20 p-1.5 relative overflow-hidden rounded-2xl cursor-pointer">
              <ImageWithSkeleton
                src={zamirulPic}
                alt="zamirulPic"
                width={400}
                height={700}
                classNameWrapper="p-1.5"
                classNameImage="w-full h-[570px] object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                priority
              />
            </div>
          </div>
        </ZoomIn>
      </div>
    </div>
  );
};

export default Hero;
