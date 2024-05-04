"use client";
import CountUp from "react-countup";

const PersonalInfo = () => {
  return (
    <>
      <h1 className="md:text-4xl text-2xl text-center font-semibold">
        About <span className="text-[#34a578]">Me</span>
      </h1>
      <div className=" px-2">
        <div className="grid md:grid-cols-2 grid-cols-1 mt-16 gap-6">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="space-y-4">
              <p>First Name : Zamirul</p>
              <p>Age : 26 Years</p>
              <p>
                Freelance : <span className="text-[#34a578]">Available</span>
              </p>
              <p>Phone : +88 01611910296</p>
              <p>Skype : live:.cid.28d0e9af847f87cd</p>
              <div data-aos="fade-up-right" className="md:pt-10 pb-6">
                {/* <ScrollLink to="contact"> */}
                <button className="px-4 py-2 font-semibold rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                  Hire Me
                </button>
                {/* </ScrollLink> */}
              </div>
            </div>
            <div className="space-y-4">
              <p>Last Name : Kabir</p>
              <p>Nationality : Bangladeshi</p>
              <p>Address : Sirajganj, Bangladesh</p>
              <p>Email : zamirulkabir999@gmail.com</p>
              <p>Languages : Bangla, English,Hindi,Arabic</p>
              <p></p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div data-aos="flip-left" className="border-2 ">
              <div className="px-6 py-4">
                <CountUp
                  className="text-4xl font-bold text-[#34a578]"
                  start={0}
                  end={25}
                  duration={12}
                />{" "}
                <sup className="text-2xl font-bold text-[#34a578]">+</sup>
                <p className="pt-4 text-xl ">COMPLETED PROJECTS</p>
              </div>
            </div>
            <div className="border-2">
              <div className="px-6 py-4">
                <CountUp
                  className="text-4xl font-bold text-[#34a578]"
                  start={0}
                  end={11}
                  duration={8}
                />{" "}
                <sup className="text-2xl font-bold text-[#34a578]">+</sup>
                <p className="pt-4 text-xl ">AWARDS WON</p>
              </div>
            </div>
            <div className="border-2">
              <div className="px-6 py-4">
                <CountUp
                  className="text-4xl font-bold text-[#34a578]"
                  start={0}
                  end={15}
                  duration={7}
                />{" "}
                <sup className="text-2xl font-bold text-[#34a578]">+</sup>
                <p className="pt-4 text-xl ">HAPPY CUSTOMERS</p>
              </div>
            </div>
            <div data-aos="flip-right" className="border-2">
              <div className="px-6 py-4">
                <CountUp
                  className="text-4xl font-bold text-[#34a578]"
                  start={0}
                  end={1}
                  duration={1}
                />{" "}
                <sup className="text-2xl font-bold text-[#34a578]">+</sup>
                <p className="pt-4 text-xl ">YEARS OF EXPERIENCE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
