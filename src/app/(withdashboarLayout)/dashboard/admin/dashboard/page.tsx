"use client";
import { GrBusinessService } from "react-icons/gr";
import { MdOutlineEventSeat } from "react-icons/md";
import { TbTimelineEvent } from "react-icons/tb";
import React from "react";
import { useGetProjectsQuery } from "@/redux/features/projectsApi";
import {
  useGetSkillsQuery
} from "@/redux/features/skillsApi";
import {
  useGetBlogsQuery
} from "@/redux/features/blogsApi";

const DashBoardHomePage = () => {
  const { data:ProjectsData } = useGetProjectsQuery("");
  const { data:SkillData} = useGetSkillsQuery("");
  const { data:BlogData} = useGetBlogsQuery("");

  return (
    <div className="pt-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:space-y-0 space-y-5 text-[#ffffff]">
        <div className="bg-[#219ebc]  md:h-44 h-20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h3 className="md:text-2xl font-bold">
              All My Projects : {ProjectsData?.length}
            </h3>
            <GrBusinessService className="text-[30px]" />
          </div>
        </div>
        <div className="bg-[#e76f51] md:h-44 h-20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h3 className="md:text-2xl font-bold">My Skills : {SkillData?.length}</h3>
            <TbTimelineEvent className="text-[30px]" />
          </div>
        </div>
        <div className="bg-[#0B63E5] md:h-44 h-20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h3 className="md:text-2xl font-bold">My Blog : {BlogData?.length}</h3>
            <MdOutlineEventSeat className="text-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHomePage;
