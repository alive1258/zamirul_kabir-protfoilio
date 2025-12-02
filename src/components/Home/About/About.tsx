// import React from "react";
// import PersonalInfo from "./PersonalInfo";

// const About = () => {
//   return (
//     <div className="bg-[#0C1222]">
//       <div id="about" className="md:py-40 py-10 container text-[#ffffff]">
//         <PersonalInfo />
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import PersonalInfo from "./PersonalInfo";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#0C1222] via-[#131a30] to-[#0C1222]">
      <div id="about" className="md:py-40 py-10 container text-[#ffffff]">
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#34a578]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

          <PersonalInfo />
        </div>
      </div>
    </div>
  );
};

export default About;
