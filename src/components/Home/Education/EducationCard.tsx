import React from "react";
import { BiBox } from "react-icons/bi";
import { MyEducationCardProps } from "./Education";
import SlideUp from "@/components/Shared/animations/SlideUp";

const EducationCard: React.FC<MyEducationCardProps> = ({ item, delay = 0 }) => {
  return (
    <>
      <div className="flex gap-6 text-[#ffffff] pb-4">
        {/* Experience  */}
        <SlideUp delay={delay}>
          <div className="box">
            <div className="space-y-2 px-3 py-3">
              <h4>{item?.date}</h4>
              <div className="border-b w-36 border-[#34a578]"></div>
              <h1 className="md:text-2xl text-xl">{item?.certificate}</h1>
              <h3 className="text-[#34a578]">{item?.name}</h3>
              <p>{item?.description}</p>
            </div>
          </div>
        </SlideUp>
        <div className="flex flex-col justify-center items-center ">
          <div className="rounded-full flex justify-center items-center w-10 h-10  bg-[#34a578]">
            <BiBox size={20} className="text-[#ffffff]" />
          </div>
          <div className="border-l-2 border-gray-400 md:h-40 h-36"></div>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
