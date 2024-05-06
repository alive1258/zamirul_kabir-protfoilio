"use client";
import Lottie from "lottie-react";

import educationAnimation from "../../../../educationAnimation.json";

const EducationAnimation = () => {
  return <>
            <Lottie
              
              animationData={educationAnimation}
              loop={true}
            />

  </>;
};

export default EducationAnimation;
