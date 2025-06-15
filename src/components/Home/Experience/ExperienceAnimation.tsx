"use client";
import Lottie from "lottie-react";

import experienceAnimate from "../../../../experience.json";

const ExperienceAnimation = () => {
  return (
    <>
      <Lottie
        className=" md:w-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
        animationData={experienceAnimate}
        loop={true}
      />
    </>
  );
};

export default ExperienceAnimation;
