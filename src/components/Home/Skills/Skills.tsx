import Image from "next/image";
import reactImg from "../../../../public/assets/svg/skills/react.svg";
import NextJsImg from "../../../../public/assets/svg/skills/nextJS.svg";
import JavascriptImg from "../../../../public/assets/svg/skills/javascript.svg";
import TypescriptImg from "../../../../public/assets/svg/skills/typescript.svg";
import FigmaImg from "../../../../public/assets/svg/skills/figma.svg";
import TailwindImg from "../../../../public/assets/svg/skills/tailwind.svg";
import MaterialUIImg from "../../../../public/assets/svg/skills/materialui.svg";
import HTMLImg from "../../../../public/assets/svg/skills/html.svg";
import GitImg from "../../../../public/assets/svg/skills/git.svg";
import CSSImg from "../../../../public/assets/svg/skills/css.svg";
import FirebaseImg from "../../../../public/assets/svg/skills/firebase.svg";
import MongoDBImg from "../../../../public/assets/svg/skills/mongoDB.svg";
import BootstrapImg from "../../../../public/assets/svg/skills/bootstrap.svg";
import reduxImg from "../../../../public/assets/svg/skills/redux.svg";

const Skills = () => {
  return (
    <>
      <div id="skills" className="md:mt-40 mt-10 container text-[#ffffff] ">
        <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2">
          <span>My</span>
           <span className="text-[#34a578]">Skills</span>
        </div>
        <div className="mt-16 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 ">
          {/* JavascriptImg */}
          <div className="skillsBg">
            <div className="">
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-lg "
                  src={JavascriptImg}
                  height={60}
                  width={60}
                  alt="JavascriptImg"
                />
              </div>
              <p className="pt-3 text-center text-xl">Javascript</p>
            </div>
          </div>
          {/* TypescriptImg */}
          <div className="skillsBg">
            <div className="">
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-lg "
                  src={TypescriptImg}
                  height={60}
                  width={60}
                  alt="TypescriptImg"
                />
              </div>
              <p className="pt-3 text-center text-xl">Typescript</p>
            </div>
          </div>
          {/* react Img */}
          <div className="skillsBg">
            <div className="">
              <Image src={reactImg} height={60} width={60} alt="reactImg" />
              <p className="pt-3 text-center text-xl">React</p>
            </div>
          </div>
          {/* reduxImg */}
          <div className="skillsBg">
            <div className="">
              <Image src={reduxImg} height={60} width={60} alt="reduxImg" />
              <p className="pt-3 text-center text-xl">Redux</p>
            </div>
          </div>
          {/* NextJs Img */}
          <div className="skillsBg">
            <div className="">
              <Image src={NextJsImg} height={60} width={60} alt="reactImg" />
              <p className="pt-3 text-center text-xl">NextJs</p>
            </div>
          </div>
          {/* TailwindImg */}
          <div className="skillsBg">
            <div className="">
              <div className="flex justify-center items-center">
                <Image
                  src={TailwindImg}
                  height={60}
                  width={60}
                  alt="TailwindImg"
                />
              </div>
              <p className="pt-6 text-center text-xl">Tailwind CSS</p>
            </div>
          </div>

          {/* HTMLImg */}
          <div className="skillsBg">
            <div className="">
              <Image src={HTMLImg} height={60} width={60} alt="HTMLImg" />
              <p className="pt-3 text-center text-xl">HTML</p>
            </div>
          </div>
          {/* CSSImg */}
          <div className="skillsBg">
            <div className="">
              <Image src={CSSImg} height={60} width={60} alt="CSSImg" />
              <p className="pt-3 text-center text-xl">CSS</p>
            </div>
          </div>
          {/* BootstrapImg */}
          <div className="skillsBg">
            <div className="">
              <div className="flex justify-center items-center">
                <Image
                  src={BootstrapImg}
                  height={60}
                  width={60}
                  alt="BootstrapImg"
                />
              </div>
              <p className="pt-3 text-center text-xl">Bootstrap</p>
            </div>
          </div>
          {/* GitImg */}
          <div className="skillsBg">
            <div className="">
              <Image src={GitImg} height={60} width={60} alt="GitImg" />
              <p className="pt-3 text-center text-xl">Git</p>
            </div>
          </div>
          {/* FirebaseImg */}
          <div className="skillsBg">
            <div className="">
              <Image
                src={FirebaseImg}
                height={60}
                width={60}
                alt="FirebaseImg"
              />
              <p className="pt-3 text-center text-xl">Firebase</p>
            </div>
          </div>
          {/* MongoDBImg */}
          <div className="skillsBg">
            <div className="">
              <div className="flex justify-center items-center">
                <Image
                  src={MongoDBImg}
                  height={40}
                  width={50}
                  alt="MongoDBImg"
                />
              </div>
              <p className=" text-center text-xl">MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
