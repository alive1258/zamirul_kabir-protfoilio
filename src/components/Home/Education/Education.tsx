import SlideUp from "@/components/Shared/animations/SlideUp";
import "../../Home/Services/Services.css";
import EducationAnimation from "./EducationAnimation";
import EducationCard from "./EducationCard";

export interface MyEducation {
  _id: string;
  date: string;
  certificate: string;
  name: string;
  description: string;
}
export interface MyEducationCardProps {
  item: MyEducation;
  idx: number;
  delay: number;
}

const Education = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/educations`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data: MyEducation[] = await res.json();

  return (
    <div id="education" className="md:mt-40 pt-10 container pb-10">
      {/* education */}

      <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2">
        <span className="text-[#ffffff]">My</span>
        <span className="text-[#34a578]">Education</span>
      </div>
      <div className="md:mt-20 mt-10 grid md:grid-cols-2 grid-cols-1 gap-6">
        {/* education */}
        <div>
          {data?.map((education, idx) => (
            <EducationCard
              key={education._id}
              item={education}
              idx={idx}
              delay={idx * 0.3}
            />
          ))}
        </div>
        {/* educationAnimation */}
        <div className="box p-3">
          <SlideUp>
            <EducationAnimation />
          </SlideUp>
        </div>
      </div>
    </div>
  );
};

export default Education;
