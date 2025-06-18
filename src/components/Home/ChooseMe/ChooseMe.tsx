import SlideUp from "@/components/Shared/animations/SlideUp";
import Image from "next/image";
import React from "react";
import {
  FaStar,
  FaHeart,
  FaMoon,
  FaRocket,
  FaShieldAlt,
  FaClock,
  FaCode,
} from "react-icons/fa";

// Reusable Card Component for Scroll Section
const Card = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    // <div className="min-w-[260px] max-w-[260px] bg-[#0f172a] border border-[#1f223c] rounded-xl text-white shadow hover:shadow-emerald-500 cursor-pointer transition-all duration-300 ease-in-out p-6 mx-2">
    <div className="w-full  dark:bg-[#0f172a] border border-[#1f223c] sm:w-[90%] min-w-[260px] max-w-[260px] bg-[#f2f8f9] px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#J] before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[38] before:transition-all before:ease-out before:duration-[300ms] z-[0]">
      {icon}
      <h3 className="text-lg transition-all duration-500 group-hover:text-white ease-out font-bold text-emerald-400 text-center">
        {title}
      </h3>
      <p className="text-sm transition-all duration-500 group-hover:text-white ease-out text-gray-400 mt-2 text-center">
        {desc}
      </p>
    </div>
  );
};

const ChooseMe = () => {
  return (
    <div className="overflow-hidden relative pb-20">
      <div className="md:text-4xl text-2xl font-semibold justify-center item-center flex space-x-2 mt-10 md:mt-20">
        <span className="text-white">Why </span>
        <span className="text-[#34a578]">Choose Me</span>
      </div>
      <div
        className="absolute rounded-full opacity-[0.38] blur-[125px] bg-[#10b981]"
        style={{
          width: "699.729px",
          height: "626.07px",
          left: "152.271px",
          bottom: "-377.762px",
        }}
      ></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-y-0 gap-y-6 container mt-16">
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
                  4+
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

      <div className="mt-20 overflow-hidden container">
        {/* Title */}

        {/* Scroll Track */}
        <div className="infinite-scroll-track flex animate-scroll space-x-4 w-max">
          {/* 7 Cards with React Icons */}
          <Card
            icon={<FaStar className="text-yellow-500 text-3xl mb-2 mx-auto" />}
            title="Expertise & Quality"
            desc="Years of experience delivering scalable, maintainable, and modern digital solutions."
          />
          <Card
            icon={<FaHeart className="text-red-500 text-3xl mb-2 mx-auto" />}
            title="Client-Centric Approach"
            desc="Focused on understanding your goals to build what truly serves your business."
          />
          <Card
            icon={<FaMoon className="text-indigo-500 text-3xl mb-2 mx-auto" />}
            title="Reliable & Available"
            desc="Always available for feedback, updates, and support — even after delivery."
          />
          <Card
            icon={<FaRocket className="text-pink-500 text-3xl mb-2 mx-auto" />}
            title="Fast & Optimized"
            desc="Optimized for performance to ensure your web or mobile app runs smoothly."
          />
          <Card
            icon={
              <FaShieldAlt className="text-blue-600 text-3xl mb-2 mx-auto" />
            }
            title="Secure Development"
            desc="Security best practices are built into every layer of your project."
          />
          <Card
            icon={
              <FaClock className="text-emerald-500 text-3xl mb-2 mx-auto" />
            }
            title="On-Time Delivery"
            desc="Committed to delivering your project on time, every time."
          />
          <Card
            icon={<FaCode className="text-purple-500 text-3xl mb-2 mx-auto" />}
            title="Clean & Modern Code"
            desc="I write efficient, maintainable, and industry-standard code for long-term success."
          />

          {/* Optional: Duplicate for seamless loop */}
          <Card
            icon={<FaStar className="text-yellow-500 text-3xl mb-2 mx-auto" />}
            title="Expertise & Quality"
            desc="Years of experience delivering scalable, maintainable, and modern digital solutions."
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseMe;
