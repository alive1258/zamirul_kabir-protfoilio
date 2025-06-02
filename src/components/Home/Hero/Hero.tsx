import Image from "next/image";
import zamirulPic from "../../../../public/assets/image/zamirul_pic.png";
import { AiOutlineDownload } from "react-icons/ai";
import "../../Home/Services/Services.css";

const Hero = () => {
  return (
    <div id="hero" className="md:pt-36 pt-14  container">
      <div className="grid md:grid-cols-2 grid-cols-1 md:space-x-52 pt-10 ">
        <div className="md:mt-6 text-[#ffffff] md:w-[670px]">
          <h1 className="md:text-4xl text-xl font-bold">
            This is <span className="text-[#34a578]">Zamirul Kabir.</span>
          </h1>
          <h2 className="md:text-4xl text-2xl font-bold pt-4">
            I am a Professional{" "}
            <span className="font-semibold text-[#34a578]">Web Developer.</span>
          </h2>
          <p className="pt-10 text-lg">
  As a passionate <span className="font-semibold text-[#34a578]">Full-Stack Developer</span> with over 2 years of hands-on experience, I specialize in building modern, responsive, and scalable web applications. With a strong foundation in both front-end and back-end technologies, I bring a balanced approach to design and functionality. <br /><br />
  I have a keen eye for detail and a deep appreciation for clean, user-focused design. My goal is to create digital experiences that are not only visually engaging but also intuitive and accessible. From pixel-perfect UI implementation to writing robust, maintainable code, I ensure every project meets the highest standards of quality and performance. <br /><br />
  I’m driven by curiosity, creativity, and a constant desire to improve—always seeking new challenges and opportunities to grow.
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
     <div className="relative w-full box max-w-md h-80 md:h-[600px] mt-4">
  <Image
    className="rounded bg-[#11152c] object-cover"
    src={zamirulPic}
    alt="zamirulPic"
    fill
    sizes="(max-width: 768px) 100vw, 500px"
    priority // optional, for performance
  />
</div>

      </div>
    </div>
  );
};

export default Hero;
