"use client";

import Lottie from "lottie-react";

import zAnimate from "../../../../me.json";

const PersonalAnimation = () => {
  return (
    <>
      <Lottie
        className="md:h-96 md:w-full"
        animationData={zAnimate}
        loop={true}
      />
    </>
  );
};

export default PersonalAnimation;
