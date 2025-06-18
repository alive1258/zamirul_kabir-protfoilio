import React from "react";
import ProjectCard from "./ProjectCard";

export interface MyProjects {
  _id: string;
  name: string;
  image: string;
  live_link: string;
  rating: string;
  review: string;
  category: string;
  gitHub_link: string;
  video_showcasing: string;
  gitHub_link_server: string;
  tec1: string;
  tec2: string;
  tec3: string;
  tec4: string;
  tec5: string;
  tec6: string;
  tec7: string;
  tec8: string;
  Des1: string;
  Des2: string;
  Des3: string;
  Des4: string;
}
export interface MyProjectsCardProps {
  item: MyProjects;
  idx: number;
  delay: number;
}

const Projects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/projects`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data: MyProjects[] = await res.json();
  return (
    <div className="">
      {/* <div className="bg-[#0F172A]"> */}
      <div id="projects" className="container py-20 text-[#ffffff] ">
        <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2">
          <span>My</span>
          <span className="text-[#34a578]">Projects</span>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-10">
          {data?.slice(0, 6)?.map((project: MyProjects, idx) => (
            <ProjectCard
              item={project}
              key={project._id}
              idx={idx}
              delay={idx * 0.3}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
