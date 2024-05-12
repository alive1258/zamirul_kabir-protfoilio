"use client";
import Lottie from "lottie-react";

import experienceAnimate from "../../../../experience.json";

const ExperienceAnimation = () => {
  return (
    <>
      <Lottie animationData={experienceAnimate} loop={true} />
    </>
  );
};

export default ExperienceAnimation;
