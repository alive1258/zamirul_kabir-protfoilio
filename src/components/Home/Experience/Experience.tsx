import SlideUp from "@/components/Shared/animations/SlideUp";
import "../../Home/Services/Services.css";
import ExperienceAnimation from "./ExperienceAnimation";
import ExperienceCard from "./ExperienceCard";

export interface MyExperience {
  _id: string;
  date: string;
  title: string;
  company: string;
  description: string;
}
export interface MyExperienceCardProps {
  item: MyExperience;
  idx: number;
  delay: number;
}

const Experience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/experiences`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data: MyExperience[] = await res.json();

  return (
    <div
      id="experience"
      className="md:mt-40 pt-10 overflow-hidden relative  pb-10"
    >
      {/* Experience */}
      {/* BLURRED BLUE CIRCLE */}
      <div className="absolute md:block hidden blurred-blue-circle"></div>
      <div
        className="absolute rounded-full opacity-40 blur-[150px] bg-[#d946ef]"
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

      {/* <div className="bottom-gradient-line"></div> */}
      <div className="custom-gradient-line"></div>
      <div className="container">
        <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2">
          <span className="text-[#ffffff]">My</span>
          <span className="text-[#34a578]">Experience</span>
        </div>
        <div className="md:mt-20 mt-10 grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="box p-3 group">
            <SlideUp>
              <ExperienceAnimation />
            </SlideUp>
          </div>
          {/* Experience */}
          <div>
            {data?.map((experience, idx) => (
              <ExperienceCard
                key={experience._id}
                idx={idx}
                delay={idx * 0.3}
                item={experience}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
