import "../../Home/Services/Services.css";
import { BiBox } from "react-icons/bi";

import EducationAnimation from "./EducationAnimation";

const Education = () => {
  return (
    <div id="education" className="md:mt-40 pt-10 container pb-10">
      {/* education */}

      <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2">
        <span>My</span>
        <span className="text-[#34a578]">Education</span>
      </div>
      <div className="md:mt-20 mt-10 grid md:grid-cols-2 grid-cols-1 gap-6">
        {/* education */}
        <div>
          {/* education 1 */}
          <div className="flex gap-6 ">
            {/* education 1 */}
            <div className="box ">
              <div className="space-y-2 px-3 py-3">
                <h4>(Pursuing)</h4>
                <div className="border-b w-28 border-[#34a578]"></div>
                <h1 className="md:text-2xl text-xl">
                  Bachelor of Computer Science and Engineering (B.Sc. in CSE)
                </h1>
                <p>
                  IUBAT - International University of Business Agriculture and
                  Technology.{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <div className="rounded-full flex justify-center items-center w-10 h-10  bg-[#34a578]">
                <BiBox size={20} className="text-white" />
              </div>
              <div className="border-l-2 border-gray-400 md:h-40 h-36"></div>
            </div>
          </div>

          {/* education 2 */}

          <div className="flex gap-6 pt-4">
            <div className="box">
              <div className="space-y-2 px-3 py-3">
                <h4>2016 (Past)</h4>
                <div className="border-b w-28 border-[#34a578]"></div>
                <h1 className="md:text-2xl text-xl">
                  Higher Secondary Certificate (H.S.C)
                </h1>
                <p>Ullapara Science College, Ullapara, Sirajganj</p>
                <p>
                  Two years of education from Rajshahi board with a result of
                  GPA-5.00 out of GPA 5 .00 Concentration in Science, August
                  2016
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <div className="rounded-full flex justify-center items-center w-10 h-10 bg-[#34a578]">
                <BiBox size={20} className="text-white" />
              </div>
              <div className="border-l-2 border-gray-400 md:h-40 h-36"></div>
            </div>
          </div>
          {/* education 3 */}
          <div className="flex gap-6 pt-4">
            <div className="box">
              <div className="space-y-2 px-3 py-3">
                <h4>2014 (Past)</h4>
                <div className="border-b w-28 border-[#34a578]"></div>
                <h1 className="md:text-2xl text-xl">
                  Secondary School Certificate (S.S.C)
                </h1>
                <p>Goyhatta Saleha Ishaque High School, Ullapara, Sirajganj</p>
                <p>
                  Two years of education from Rajshahi board with a result of
                  GPA-5.00 out of GPA 5 .00 Concentration in Science, August
                  2014
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <div className="rounded-full flex justify-center items-center w-10 h-10 bg-[#34a578]">
                <BiBox size={20} className="text-white" />
              </div>
              <div className="border-l-2 border-gray-400 md:40 h-36"></div>
            </div>
          </div>
        </div>
        {/* educationAnimation */}
        <div className="box p-3">
          <EducationAnimation />
        </div>
      </div>
    </div>
  );
};

export default Education;
