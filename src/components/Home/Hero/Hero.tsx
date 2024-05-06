import Image from "next/image";
import zamirulPic from "../../../../public/assets/image/zamirul_pic.png";
import { AiOutlineDownload } from "react-icons/ai";
import "../../Home/Services/Services.css";

const Hero = () => {
  return (
    <div id="hero" className="pt-36  container">
      <div className="grid md:grid-cols-2 grid-cols-1 md:space-x-32 pt-10 ">
        <div className="md:mt-6 text-[#ffffff]">
          <h1 className="md:text-4xl text-xl font-bold">
            This is <span className="text-[#34a578]">Zamirul Kabir.</span>
          </h1>
          <h2 className="md:text-4xl text-2xl font-bold pt-4">
            I am a Professional{" "}
            <span className="font-semibold text-[#34a578]">Web Developer.</span>
          </h2>
          <p className="pt-10 text-lg">
            With a keen eye for design and expertise in
            <span className="font-semibold text-[#34a578]">
              {" "}
              front-end development
            </span>
            ,I strive to create visually appealing and intuitive digital
            experiences focused on crafting clean & user-friendly experiences.
            Driven by a passion for user-centric design, my aim to craft
            websites and applications that not only look great but also provide
            seamless and enjoyable interactions. Attention to detail is at the
            core of my work. I strive for pixel-perfect designs and meticulously
            crafted code to ensure the highest level of quality in every
            project.
          </p>
          <div className="md:mt-12 mt-6 pb-6">
            <a href="/Resume_of_Zamirul.pdf" download="Resume_of_Zamirul.pdf">
              <button className="border-2 px-4 py-2 font-semibold flex gap-4 items-center border-[#34a578]   rounded-lg hover:btn  ">
                DOWNLOAD RESUME{" "}
                <AiOutlineDownload size={23} className="font-bold" />
              </button>
            </a>
          </div>
        </div>
        <div className="md:w-[480px] box mt-4">
          <Image
            className="bg-[#11152c]  pt-4"
            src={zamirulPic}
            width={480}
            height={400}
            alt="zamirulPic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
