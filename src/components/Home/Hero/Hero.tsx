import React from "react";
import zamirulPic from "../../../../public/assets/image/zamirul_pic.png";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="/" className="pt-40  container">
      <div className="grid md:grid-cols-2 grid-cols-1 md:space-x-48 pt-10 px-2">
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
            , I strive to create visually appealing and intuitive digital
            experiences focused on crafting clean & user-friendly experiences.
            Driven by a passion for user-centric design, I aim to craft websites
            and applications that not only look great but also provide seamless
            and enjoyable interactions. Attention to detail is at the core of my
            work. I strive for pixel-perfect designs and meticulously crafted
            code to ensure the highest level of quality in every project.
          </p>
          <div className="md:mt-12 mt-6 pb-6">
            <a href="/Resume_of_Zamirul.pdf" download="Resume_of_Zamirul.pdf">
              <button className="border-2 font-semibold flex gap-4 items-center border-[#34a578] duration-300 transition-all px-6 py-4 rounded-lg hover:bg-[#34a578] transition ease-in-out delay-150">
                DOWNLOAD RESUME{" "}
                <AiOutlineDownload size={23} className="font-bold" />
              </button>
            </a>
          </div>
        </div>
        <div className="bg-[#3e5d5c] md:w-[420px]  mt-4">
          <div className="md:relative pt-4 rounded-lg ">
            <Image
              className=" bg-[#5eab92] md:-right-5 pt-4"
              src={zamirulPic}
              alt="zamirulPic"
              width={420}
              height={440}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
