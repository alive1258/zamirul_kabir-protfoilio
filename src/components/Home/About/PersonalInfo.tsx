/* eslint-disable react/no-unescaped-entities */
import SlideUp from "@/components/Shared/animations/SlideUp";
import "../../Home/Services/Services.css";
import PersonalAnimation from "./PersonalAnimation";
import SlideRight from "@/components/Shared/animations/SlideRight";
import SlideLeft from "@/components/Shared/animations/SlideLeft";
const PersonalInfo = () => {
  return (
    <>
      <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2">
        <span>About</span>
        <span className="text-[#34a578]">Me</span>
      </div>
      <div className=" ">
        <div className="grid md:grid-cols-2 grid-cols-1 mt-16 md:space-x-14">
          <div className="md:w-[540px]">
            <h3 className="text-3xl text-[#34a578] font-semibold">
              Who I Am ?
            </h3>

            <SlideLeft>
              <p className="text-lg leading-relaxed mt-7">
                I specialize in working across the entire stack, from crafting
                responsive front-end interfaces to building robust back-end
                systems. My focus is on creating meaningful digital experiences
                that are fast, user-friendly, and maintainable.
              </p>
            </SlideLeft>

            <p className="font-semibold text-[#34a578] mt-5">
              Tech Stack I Work With:
            </p>
            <SlideLeft delay={0.4}>
              <p className="text-lg leading-relaxed mt-2">
                JavaScript, TypeScript, React.js, Redux, Next.js, Node.js,
                Express.js,Mongoose, NestJS, MongoDB, PostgreSQL, MySQL
              </p>
            </SlideLeft>

            <SlideLeft delay={0.9}>
              <p className="text-lg leading-relaxed mt-5">
                I'm currently open to new opportunities where I can contribute,
                learn, and grow as part of a motivated and forward-thinking
                team. Let’s build something impactful together.
              </p>
            </SlideLeft>
          </div>
          {/* Lottie animation  */}
          {/* <div className="serviceBg p-3"> */}

          <div className="box p-3 md:mt-0 mt-12 group ">
            <SlideUp>
              <PersonalAnimation />
            </SlideUp>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
