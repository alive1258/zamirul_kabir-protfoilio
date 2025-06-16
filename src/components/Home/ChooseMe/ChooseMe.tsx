import SlideUp from "@/components/Shared/animations/SlideUp";
import Image from "next/image";
import React from "react";

const ChooseMe = () => {
  return (
    <>
      <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2 md:mt-20">
        <span className="text-white">Why </span>
        <span className="text-[#34a578]">Choose Me</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container md:mt-16">
        {/* card 1 */}
        <SlideUp delay={0.1}>
          <div
            className={` relative cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_4px_#10B981] hover:shadow-emerald-500 transition-all duration-300 ease-in-out  text-white bg-[#0f172a]  border border-[#1f223c] rounded-lg  py-4 px-2 flex items-center justify-between overflow-hidden`}
          >
            {/* Top gradient border */}
            <div
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent`}
            />
            {/* Bottom gradient border */}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent`}
            />

            {/* Icon background */}
            <div className="">
              <Image
                src="/assets/icons/f1.png"
                width={36}
                height={36}
                alt="icon"
              />
            </div>

            {/* Title and Value */}
            <div className="flex flex-col items-end">
              <p className={`text-emerald-500 text-xl font-semibold`}>
                Years of Coding Passion
              </p>
              <div
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.10)", // emerald-500 background with opacity
                  borderColor: "rgba(16, 185, 129, 0.10)", // emerald-500 border with opacity
                }}
                className="border px-4 py-2 rounded-lg mt-2 flex justify-center items-center"
              >
                <h1 className={`text-2xl text-primary-muted font-semibold`}>
                  4
                </h1>
              </div>
            </div>
          </div>
        </SlideUp>
        {/* card 2 */}
        <SlideUp delay={0.3}>
          <div
            className={`hover:scale-105 hover:shadow-[0_0_20px_4px_#10B981] hover:shadow-blue-500 transition-all duration-300 ease-in-out relative cursor-pointer  text-white bg-[#0f172a]  border border-[#1f223c] rounded-lg pl-5 pr-6 py-4  flex items-center justify-between overflow-hidden`}
          >
            {/* Top gradient border */}
            <div
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent`}
            />
            {/* Bottom gradient border */}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent`}
            />

            {/* Icon background */}
            <div className="">
              <Image
                src="/assets/icons/f2.png"
                width={36}
                height={36}
                alt="icon"
              />
            </div>

            {/* Title and Value */}
            <div className="flex flex-col items-end">
              <p className={`text-blue-500 text-xl font-semibold`}>
                Client Satisfaction Rate
              </p>
              <div
                style={{
                  backgroundColor: "rgba(59, 130, 246, 0.10)", // blue-500 with 10% opacity
                  borderColor: "rgba(59, 130, 246, 0.10)", // blue-500 with 10% opacity
                }}
                className="border px-4 py-2 rounded-lg mt-2 flex justify-center items-center"
              >
                <h1 className={`text-2xl text-primary-muted font-semibold`}>
                  100%
                </h1>
              </div>
            </div>
          </div>
        </SlideUp>
        {/* card 3 */}
        <SlideUp delay={0.6}>
          <div
            className={`hover:scale-105 hover:shadow-[0_0_20px_4px_#10B981] hover:shadow-violet-500 transition-all duration-300 ease-in-out relative cursor-pointer  text-white bg-[#0f172a]  border border-[#1f223c] rounded-lg pl-5 pr-6 py-4  flex items-center justify-between overflow-hidden`}
          >
            {/* Top gradient border */}
            <div
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent`}
            />
            {/* Bottom gradient border */}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent`}
            />

            {/* Icon background */}
            <div>
              <Image
                src="/assets/icons/f3.png"
                width={36}
                height={36}
                alt="icon"
              />
            </div>

            {/* Title and Value */}
            <div className="flex flex-col items-end">
              <p className={`text-violet-500 text-xl font-semibold`}>
                Performance-Optimize
              </p>
              <div
                style={{
                  backgroundColor: "rgba(236, 72, 153, 0.10)",
                  borderColor: "rgba(236, 72, 153, 0.10)",
                }}
                className="border px-4 py-2 rounded-lg mt-2 flex justify-center items-center"
              >
                <h1 className={`text-2xl text-primary-muted font-semibold`}>
                  95+
                </h1>
              </div>
            </div>
          </div>
        </SlideUp>
        {/* card 4 */}
        <SlideUp delay={0.9}>
          <div
            className={`hover:scale-105 hover:shadow-[0_0_20px_4px_#10B981] hover:shadow-pink-500 transition-all duration-300 ease-in-out relative cursor-pointer  text-white bg-[#0f172a]  border border-[#1f223c] rounded-lg pl-5 pr-6 py-4  flex items-center justify-between overflow-hidden`}
          >
            {/* Top gradient border */}
            <div
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent`}
            />
            {/* Bottom gradient border */}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent`}
            />

            {/* Icon background */}
            <div>
              <Image
                src="/assets/icons/f4.png"
                width={36}
                height={36}
                alt="icon"
              />
            </div>

            {/* Title and Value */}
            <div className="flex flex-col items-end">
              <p className={`text-pink-500 text-xl font-semibold`}>
                Clean Git Workflow
              </p>
              <div
                style={{
                  backgroundColor: "rgba(236, 72, 153, 0.10)", // pink-500 with 10% opacity
                  borderColor: "rgba(236, 72, 153, 0.10)",
                }}
                className="border px-4 py-2 rounded-lg mt-2 flex justify-center items-center"
              >
                <h1 className={`text-2xl text-primary-muted font-semibold`}>
                  100%
                </h1>
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </>
  );
};

export default ChooseMe;
