import { BiBox } from "react-icons/bi";

const Education = () => {
  return (
    <div className="md:mt-40 pt-10  px-2 pb-10">
      <h1 className="md:text-4xl text-2xl font-semibold text-center">
        EXPERIENCE & EDUCATION
      </h1>
      <div className="md:mt-20 mt-10 grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="flex gap-6">
          <div className="flex flex-col justify-center items-center ">
            <div className="rounded-full flex justify-center items-center w-10 h-10  bg-[#34a578]">
              <BiBox size={20} className="text-white" />
            </div>
            <div className="border-l-2 border-gray-400 md:h-28 h-36"></div>
          </div>

          <div className="space-y-2">
            <h4>2023 Present</h4>
            <div className="border-b w-28 border-[#34a578]"></div>
            <h1 className="md:text-2xl text-xl">WEB DEVELOPER</h1>
            <p>
              Overall, as a web developer, my goal is to create efficient,
              functional, and visually appealing websites and web applications
              that meet the needs of clients and provide a seamless experience
              for users.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col justify-center items-center ">
            <div className="rounded-full flex justify-center items-center w-10 h-10 bg-[#34a578]">
              <BiBox size={20} className="text-white" />
            </div>
            <div className="border-l-2 border-gray-400 md:h-28 h-36"></div>
          </div>

          <div className="space-y-2">
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
        <div className="flex gap-6">
          <div className="flex flex-col justify-center items-center ">
            <div className="rounded-full flex justify-center items-center w-10 h-10 bg-[#34a578]">
              <BiBox size={20} className="text-white" />
            </div>
            <div className="border-l-2 border-gray-400 md:h-28 h-36"></div>
          </div>

          <div className="space-y-2">
            <h4>2021 Present</h4>
            <div className="border-b w-28 border-[#34a578]"></div>
            <h1 className="md:text-2xl text-xl">SEO Marketing</h1>
            <p>
              SEO marketing also involves monitoring and analyzing website
              performance, conducting competitor research, and making
              data-driven optimizations to improve search engine rankings and
              overall online presence.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col justify-center items-center ">
            <div className="rounded-full flex justify-center items-center w-10 h-10 bg-[#34a578]">
              <BiBox size={20} className="text-white" />
            </div>
            <div className="border-l-2 border-gray-400 md:h-28 h-36"></div>
          </div>

          <div className="space-y-2">
            <h4>2016 (Past)</h4>
            <div className="border-b w-28 border-[#34a578]"></div>
            <h1 className="md:text-2xl text-xl">
              Higher Secondary Certificate (H.S.C)
            </h1>
            <p>Ullapara Science College, Ullapara, Sirajganj</p>
            <p>
              Two years of education from Rajshahi board with a result of
              GPA-5.00 out of GPA 5 .00 Concentration in Science, August 2016
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col justify-center items-center ">
            <div className="rounded-full flex justify-center items-center w-10 h-10 bg-[#34a578]">
              <BiBox size={20} className="text-white" />
            </div>
            <div className="border-l-2 border-gray-400 md:h-28 h-36"></div>
          </div>

          <div className="space-y-2">
            <h4>2020 (Past)</h4>
            <div className="border-b w-28 border-[#34a578]"></div>
            <h1 className="md:text-2xl text-xl">Digital Marketing</h1>
            <p>
              Digital marketing is a strategic approach to promoting products,
              services, or brands using digital channels such as websites,
              social media, email marketing, and mobile apps.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col justify-center items-center ">
            <div className="rounded-full flex justify-center items-center w-10 h-10 bg-[#34a578]">
              <BiBox size={20} className="text-white" />
            </div>
            <div className="border-l-2 border-gray-400 md:h-28 h-36"></div>
          </div>

          <div className="space-y-2">
            <h4>2014 (Past)</h4>
            <div className="border-b w-28 border-[#34a578]"></div>
            <h1 className="md:text-2xl text-xl">
              Secondary School Certificate (S.S.C)
            </h1>
            <p>Goyhatta Saleha Ishaque High School, Ullapara, Sirajganj</p>
            <p>
              Two years of education from Rajshahi board with a result of
              GPA-5.00 out of GPA 5 .00 Concentration in Science, August 2014
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
