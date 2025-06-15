import Image from "next/image";
import React from "react";

const ChooseMe = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container md:mt-16">
        {/* card 1 */}
        <div
          className={` relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out  text-white bg-[#0f172a]  border border-[#1f223c] rounded-lg pl-5 pr-6 py-2.5 flex items-center justify-between overflow-hidden`}
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
          <div
            className="size-16 bg-no-repeat bg-cover flex items-center justify-center"
            style={{
              backgroundImage: "url(/assets/images/Polygon.png)",
            }}
          >
            <Image
              src="/assets/icons/f1.png"
              width={36}
              height={36}
              alt="icon"
            />
          </div>

          {/* Title and Value */}
          <div className="flex flex-col items-end">
            <p className={`text-secondary-base text-xl font-semibold`}>title</p>
            <div
              style={{
                backgroundColor: "rgba(236, 72, 153, 0.10)",
                borderColor: "rgba(236, 72, 153, 0.10)",
              }}
              className="border rounded-full size-10 mt-2 flex justify-center items-center"
            >
              <h1 className={`text-2xl text-primary-muted font-semibold`}>
                15
              </h1>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div
          className={` relative cursor-pointer  text-white bg-[#0f172a]  border border-[#1f223c] rounded-lg pl-5 pr-6 py-2.5 flex items-center justify-between overflow-hidden`}
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
          <div
            className="size-16 bg-no-repeat bg-cover flex items-center justify-center"
            style={{
              backgroundImage: "url(/assets/images/Polygon.png)",
            }}
          >
            <Image
              src="/assets/icons/f2.png"
              width={36}
              height={36}
              alt="icon"
            />
          </div>

          {/* Title and Value */}
          <div className="flex flex-col items-end">
            <p className={`text-secondary-base text-xl font-semibold`}>title</p>
            <div
              style={{
                backgroundColor: "rgba(236, 72, 153, 0.10)",
                borderColor: "rgba(236, 72, 153, 0.10)",
              }}
              className="border rounded-full size-10 mt-2 flex justify-center items-center"
            >
              <h1 className={`text-2xl text-primary-muted font-semibold`}>
                15
              </h1>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div
          className={` relative cursor-pointer  text-white bg-[#0f172a]  border border-[#1f223c] rounded-lg pl-5 pr-6 py-2.5 flex items-center justify-between overflow-hidden`}
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
          <div
            className="size-16 bg-no-repeat bg-cover flex items-center justify-center"
            style={{
              backgroundImage: "url(/assets/images/Polygon.png)",
            }}
          >
            <Image
              src="/assets/icons/f3.png"
              width={36}
              height={36}
              alt="icon"
            />
          </div>

          {/* Title and Value */}
          <div className="flex flex-col items-end">
            <p className={`text-secondary-base text-xl font-semibold`}>title</p>
            <div
              style={{
                backgroundColor: "rgba(236, 72, 153, 0.10)",
                borderColor: "rgba(236, 72, 153, 0.10)",
              }}
              className="border rounded-full size-10 mt-2 flex justify-center items-center"
            >
              <h1 className={`text-2xl text-primary-muted font-semibold`}>
                15
              </h1>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div
          className={` relative cursor-pointer  text-white bg-[#0f172a]  border border-[#1f223c] rounded-lg pl-5 pr-6 py-2.5 flex items-center justify-between overflow-hidden`}
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
          <div
            className="size-16 bg-no-repeat bg-cover flex items-center justify-center"
            style={{
              backgroundImage: "url(/assets/images/Polygon.png)",
            }}
          >
            <Image
              src="/assets/icons/f4.png"
              width={36}
              height={36}
              alt="icon"
            />
          </div>

          {/* Title and Value */}
          <div className="flex flex-col items-end">
            <p className={`text-secondary-base text-xl font-semibold`}>title</p>
            <div
              style={{
                backgroundColor: "rgba(236, 72, 153, 0.10)",
                borderColor: "rgba(236, 72, 153, 0.10)",
              }}
              className="border rounded-full size-10 mt-2 flex justify-center items-center"
            >
              <h1 className={`text-2xl text-primary-muted font-semibold`}>
                15
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseMe;
