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
    <div
      id="education"
      className="md:pt-40 pt-10 overflow-hidden relative pb-10"
    >
      {/* education */} {/* Experience */}
      {/* BLURRED BLUE CIRCLE */}
      <div className="absolute md:block hidden blurred-blue-circle"></div>
      <div
        className="absolute rounded-full opacity-40 blur-[150px] bg-[#10b981]"
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
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_39px] "></div> */}
      <div className="container py-20">
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
    </div>
  );
};

export default Education;
