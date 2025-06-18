import Image from "next/image";
import zamirulPic from "../../../../public/assets/image/zamirul_pic.png";
import { AiOutlineDownload } from "react-icons/ai";
import "../../Home/Services/Services.css";
import ZoomIn from "@/components/Shared/animations/ZoomIn";
import SlideLeft from "@/components/Shared/animations/SlideLeft";
import SlideUp from "@/components/Shared/animations/SlideUp";
import ImageWithSkeleton from "@/components/Shared/animations/ImageWithSkeleton";
// import AnimatedText from "@/components/Shared/animations/AnimatedText";

const Hero = () => {
  return (
    <div id="hero" className="md:pt-36 pt-14  container">
      <div className="grid md:grid-cols-2 grid-cols-1  md:gap-20 gap-10 pt-10 ">
        <div className="md:mt-6 text-[#ffffff]">
          {/* <AnimatedText
            lines={["This is Zamirul Kabir."]}
            className="md:text-4xl text-start text-xl font-bold"
          /> */}
          <div className="typing-container md:text-4xl text-xl font-bold">
            <h3 className="typing-text">
              This is <span className="text-[#34a578]">Zamirul Kabir.</span>
            </h3>
          </div>
          {/* <h1 className="md:text-4xl text-xl font-bold">
            This is <span className="text-[#34a578]">Zamirul Kabir.</span>
          </h1> */}
          <h2 className="md:text-4xl text-2xl font-bold pt-4">
            I am a Professional{" "}
            <span className="font-semibold text-[#34a578]">Web Developer.</span>
          </h2>
          <div className="pt-10 text-lg">
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
            </SlideLeft>
            <br />
            <SlideLeft delay={1.3}>
              <p>
                {" "}
                I’m driven by curiosity, creativity, and a constant desire to
                improve—always seeking new challenges and opportunities to grow.
              </p>
            </SlideLeft>
          </div>

          <SlideUp>
            <div className="md:mt-12 mt-6 pb-6">
              <a href="/Resume_of_Zamirul.pdf" download="Resume_of_Zamirul.pdf">
                <button className="glowing-button flex space-x-4">
                  <span> DOWNLOAD RESUME </span>
                  <AiOutlineDownload size={23} className="font-bold" />
                </button>
              </a>
            </div>
          </SlideUp>
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
