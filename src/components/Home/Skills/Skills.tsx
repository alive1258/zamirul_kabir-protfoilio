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
      <div id="skills" className="md:mt-40 mt-10 container text-[#ffffff] ">
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
    </>
  );
};

export default Skills;
