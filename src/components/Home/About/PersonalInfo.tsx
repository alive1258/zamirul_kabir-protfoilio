/* eslint-disable react/no-unescaped-entities */
import "../../Home/Services/Services.css";
import PersonalAnimation from "./PersonalAnimation";
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

            <p className="text-lg pt-7">
              I'm Zamirul Kabir, a committed and enthusiastic coder. I'm always
              looking for new methods to improve my abilities, and I thrive on
              learning and accepting new technologies. As a coder, I have a
              strong desire to solve problems and a fast learning curve. My area
              of expertise is JavaScript, and I enjoy using its capabilities to
              create creative solutions. I'm open to a variety of work options
              that fit my goals and skill set. In my professional journey, I've
              cultivated a strong foundation in JavaScript, enabling me to
              tackle challenges with creativity and efficiency. I'm excited
              about the prospect of exploring new opportunities that allow me to
              leverage my skills and contribute meaningfully
            </p>
          </div>
          {/* Lottie animation  */}
          {/* <div className="serviceBg p-3"> */}
          <div className="box p-3 md:mt-0 mt-12">
            <PersonalAnimation />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
