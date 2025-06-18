import SkillCard from "./SkillCard";

export interface MySkills {
  _id: string;
  name: string;
  image: string;
}
export interface MySkillsCardProps {
  item: MySkills;
  idx: number;
  delay: number;
}

const Skills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/skills`, {
    next: {
      revalidate: 30,
    },
  });
  const data: MySkills[] = await res.json();

  return (
    <>
      <div id="skills" className="overflow-hidden relative  text-[#ffffff] ">
        {/* Experience */}
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
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_39px] "></div>

        <div className="container py-28">
          <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2">
            <span>My</span>
            <span className="text-[#34a578]">Skills</span>
          </div>
          <div className="mt-16 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 ">
            {/* skill */}

            {data?.map((skill, idx) => (
              <SkillCard
                key={skill._id}
                item={skill}
                idx={idx}
                delay={idx * 0.3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
