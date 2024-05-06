import React from "react";
import Image from "next/image";
import { MySkillsCardProps } from "./Skills";
import "../Services/Services";

const SkillCard: React.FC<MySkillsCardProps> = ({ item }) => {
  return (
    <>
      <div className="skillsBg">
        <div className="">
          <div className="flex justify-center items-center">
            <Image
              className="rounded-lg "
              src={item?.image}
              height={60}
              width={60}
              alt="JavascriptImg"
            />
          </div>
          <p className="pt-3 text-center text-xl">{item?.name}</p>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
