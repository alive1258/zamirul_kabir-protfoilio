import Image from "next/image";
import zamirulPic from "../../../../public/assets/image/zamirul_pic.png";
import { AiOutlineDownload } from "react-icons/ai";
import "../../Home/Services/Services.css";
import ZoomIn from "@/components/Shared/animations/ZoomIn";
import SlideLeft from "@/components/Shared/animations/SlideLeft";

import ImageWithSkeleton from "@/components/Shared/animations/ImageWithSkeleton";
// import AnimatedText from "@/components/Shared/animations/AnimatedText";

const Hero = () => {
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
        <div className="md:mt-6 text-[#ffffff]">
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
          <div className="pt-8 text-lg">
            <SlideLeft delay={0.4}>
              As a passionate{" "}
              <span className="font-semibold text-[#34a578]">
                Full-Stack Developer
              </span>{" "}
              <p>
                with over 2 years of hands-on experience, I specialize in
                building modern, responsive, and scalable web applications. With
                a strong foundation in both front-end and back-end technologies,
                I bring a balanced approach to design and functionality.
              </p>
            </SlideLeft>
            <br />
            <SlideLeft delay={0.9}>
              <p>
                {" "}
                I have a keen eye for detail and a deep appreciation for clean,
                user-focused design. My goal is to create digital experiences
                that are not only visually engaging but also intuitive and
                accessible. From pixel-perfect UI implementation to writing
                robust, maintainable code, I ensure every project meets the
                highest standards of quality and performance.
              </p>
              <p>
                {" "}
                I’m driven by curiosity, creativity, and a constant desire to
                improve—always seeking new challenges and opportunities to grow.
              </p>
            </SlideLeft>
            <br />
          </div>

          <div className="md:mt-2 mt-2 pb-6 z-50">
            <a href="/Resume_of_Zamirul.pdf" download="Resume_of_Zamirul.pdf">
              <button className="glowing-button  flex space-x-4">
                <span> DOWNLOAD RESUME </span>
                <AiOutlineDownload size={23} className="font-bold" />
              </button>
            </a>
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
