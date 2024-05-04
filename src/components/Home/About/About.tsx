import React from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";

const About = () => {
  return (
    <div id="about" className="md:mt-40 mt-10 container text-[#ffffff]">
      <PersonalInfo />
      <Education />
    </div>
  );
};

export default About;
