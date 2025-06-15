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
    <div id="experience" className="md:mt-40 pt-10 container pb-10">
      {/* Experience */}

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
  );
};

export default Experience;
