"use client";

import Lottie from "lottie-react";

import zAnimate from "../../../../me.json";

const PersonalAnimation = () => {
  return (
    <>
      <Lottie
        className="md:h-96  md:w-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
        animationData={zAnimate}
        loop={true}
      />
    </>
  );
};

export default PersonalAnimation;
