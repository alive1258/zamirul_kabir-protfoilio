"use client";

import Lottie from "lottie-react";

import zAnimate from "../../../../me.json";

const PersonalAnimation = () => {
  return (
    <>
      <Lottie className="h-96 w-full" animationData={zAnimate} loop={true} />
    </>
  );
};

export default PersonalAnimation;
