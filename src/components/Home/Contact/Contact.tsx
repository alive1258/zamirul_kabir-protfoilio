/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef } from "react";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import "../../Home/Services/Services.css";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_9uw0v8f",
        "template_2vak65q",
        form.current,
        "MgeqrvTpwff0O--dG"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="md:py-20 pt-10 overflow-hidden relative text-[#ffffff] "
    >
      {/* BLURRED BLUE CIRCLE */}
      <div className="absolute md:block hidden blurred-blue-circle"></div>
      <div
        className="absolute rounded-full opacity-40 blur-[150px] bg-[#10b981]"
        // 952fe9
        style={{
          width: "593.727px",
          height: "531.226px",
          right: "-72.727px",
          top: "-345.17px",
        }}
      ></div>

      {/* Blurred Effect - Blue Circle */}
      <div
        className="absolute rounded-full opacity-[0.38] blur-[125px] bg-[#5158DA]"
        style={{
          width: "699.729px",
          height: "626.07px",
          left: "152.271px",
          bottom: "-377.762px",
        }}
      ></div>

      {/* <div className="bottom-gradient-line"></div> */}
      <div className="custom-gradient-line"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_39px] "></div>

      <div className="container">
        <div className="md:text-4xl   text-2xl font-semibold justify-center item-center flex space-x-2">
          <span className="text-white">Contact </span>
          <span className="text-[#34a578]"> Me</span>
        </div>
        <div className="grid md:grid-cols-3 md:gap-8 md:mt-16 mt-8">
          <div>
            <div className="shadow-2xl box rounded-lg p-4">
              <h1 className="text-2xl font-semibold">GET IN TOUCH</h1>
              <p className="mt-4">
                DON'T BE SHY. I appreciate your openness to collaboration and
                discussion. If you have any new projects, creative ideas,
                opportunities that align with my expertise, I would be delighted
                to explore them further with you. Together, we can work towards
                bringing your visions to life and achieving great results.
                Please feel free to reach out to me anytime; I'm always here to
                listen and contribute to meaningful endeavors..
              </p>
              <div className="flex items-center mt-5 gap-4">
                <div className="bg-[#34a578]  text-white h-12 w-12 rounded-full flex items-center justify-center">
                  <AiOutlineMail size={30} className="" />
                </div>
                <div>
                  <p className="font-semibold">Mail Me</p>
                  <p>zamirulkabir999@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center mt-4 gap-4">
                <div className="bg-[#34a578]  text-white h-12 w-12 rounded-full flex items-center justify-center">
                  <BsWhatsapp size={30} className="" />
                </div>
                <div>
                  <p className="font-semibold">Whatsapp || Phone</p>
                  <p>+880 01611910296</p>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex md:gap-4 gap-2">
                  <p className="font-semibold text-lg">Follow us on:</p>

                  <div className="hover:scale-110 duration-500 transition-all bg-[#28589c] text-white h-8 w-8 rounded-full flex items-center justify-center">
                    <a
                      href="https://www.facebook.com/profile.php?id=100060866764137"
                      target="_new"
                    >
                      <FaFacebookF />
                    </a>
                  </div>
                  <div className="hover:scale-110 duration-500 transition-all bg-[#E1306c] text-white h-8 w-8 rounded-full flex items-center justify-center">
                    <a
                      href="https://www.instagram.com/zamirul463/"
                      target="_new"
                    >
                      <BsInstagram />
                    </a>
                  </div>
                  <div className="hover:scale-110 duration-500 transition-all bg-blue-600 text-white h-8 w-8 rounded-full flex items-center justify-center">
                    <a
                      href="https://www.linkedin.com/in/zamirul-kabir-575a41279/"
                      target="_new"
                    >
                      <BsLinkedin />
                    </a>
                  </div>
                  <div className="hover:scale-110 duration-500 transition-all bg-[#a01c23] text-white h-8 w-8 rounded-full flex items-center justify-center">
                    <FaPinterestP />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 px-6 md:px-20  shadow-2xl mb-4 box rounded-xl">
            <form ref={form} onSubmit={sendEmail} className="py-8">
              <div className="md:flex gap-6 ">
                <input
                  type="text"
                  name="from_name"
                  placeholder="First Name"
                  className="input  bg-[#11152c] border border-gray-800  rounded-lg p-2 w-full md:mt-2"
                />
                <input
                  type="text"
                  name="from_name"
                  placeholder="Last Name"
                  className="input bg-[#11152c] border border-gray-800 rounded-lg  p-2 w-full md:mt-2 mt-4"
                />
              </div>
              <div className="md:flex gap-6 mt-4">
                <input
                  type="number"
                  name="from_phone"
                  placeholder="Phone"
                  className="input bg-[#11152c] border border-gray-800 rounded-lg p-2 w-full md:mt-2"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  className="input bg-[#11152c] border border-gray-800 rounded-lg p-2 w-full md:mt-2 mt-4"
                />
              </div>
              <div className="mt-6">
                <input
                  type="text"
                  name="from_address"
                  placeholder="Adress"
                  className="input bg-[#11152c] border border-gray-800  rounded-lg p-2 input-bordered w-full "
                />
              </div>

              <div className="mt-6">
                <textarea
                  name="message"
                  className="textarea bg-[#11152c] border border-gray-800 rounded-lg p-2 textarea-bordered h-36 w-full"
                  placeholder="Message or description"
                ></textarea>
              </div>
              <div className="mt-4 flex justify-end">
                <input
                  type="submit"
                  value="Send message"
                  className="glow-button"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
