"use client";
import React, { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import zlogo from "../../../assets/image/zl2.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="w-full z-50 fixed bg-[#000814]  text-[#ffffff] border-b border-gray-600 ">
        <div className="py-4 container  md:h-24 font-semibold flex justify-between items-center ">
          <div className="">
            {/* <div className='cursor-pointer h-10 w-10 bg-[#34a578] rounded-full '>
                            <Link to='/' smooth={true} duration={500}>
                                <img className='' src={zlogo} alt="" />
                            </Link>
                        </div> */}

            <div>
              <Link to="home" smooth={true} duration={700}>
                <div className="md:text-3xl cursor-pointer text-xl space-x-2 font-bold mb-2">
                  <span className="text-[#34a578]">Z</span>amirul
                  <span className="text-[#34a578]">K</span>abir
                </div>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ul className="hidden cursor-pointer md:flex gap-8">
              <li>
                <Link to="home" smooth={true} duration={1100}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={1100}>
                  About
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={1100}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={1100}>
                  Services
                </Link>
              </li>

              <li>
                <Link to="portfolio" smooth={true} duration={1100}>
                  Portfolio
                </Link>
              </li>
              {/* <li>
                                <Link to='blog' smooth={true} duration={500}>
                                    Blog
                                </Link>
                            </li> */}
              <li>
                <Link to="contact" smooth={true} duration={1100}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div onClick={handleClick} className="md:hidden ">
            {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
          </div>
        </div>
        {/* mobile menu  */}

        <div>
          <div
            className={
              !nav
                ? "hidden"
                : "absolute bg-white dark:bg-black dark:text-white font-semibold w-full  h-screen md:hidden px-8"
            }
          >
            <li className="py-6 list-none">
              <Link
                onClick={handleClick}
                to="home"
                smooth={true}
                duration={1100}
              >
                Home
              </Link>
            </li>
            <div className="border-b-2 border-[#34a578]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link
                onClick={handleClick}
                to="about"
                smooth={true}
                duration={1100}
              >
                About
              </Link>
            </li>
            <div className="border-b-2 border-[#34a578]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link
                onClick={handleClick}
                to="skills"
                smooth={true}
                duration={1100}
              >
                Skills
              </Link>
            </li>
            <div className="border-b-2 border-[#34a578]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link
                onClick={handleClick}
                to="services"
                smooth={true}
                duration={1100}
              >
                Services
              </Link>
            </li>

            <div className="border-b-2 border-[#34a578]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link
                onClick={handleClick}
                to="portfolio"
                smooth={true}
                duration={1100}
              >
                Portfolio
              </Link>
            </li>
            <div className="border-b-2 border-[#34a578]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link
                onClick={handleClick}
                to="contact"
                smooth={true}
                duration={1100}
              >
                Contact
              </Link>
            </li>
          </div>
        </div>

        {/* Social icons */}
        <div className="hidden  lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
              <a
                target="_new"
                className="flex pl-4 pr-2 justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/zamirul-kabir-575a41279/"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                target="_new"
                className="flex pl-4 pr-2 justify-between items-center w-full text-gray-300"
                href="https://github.com/alive1258"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1877F2]">
              <a
                target="_new"
                className="flex pl-4 pr-2 justify-between items-center w-full text-gray-300"
                href="https://www.facebook.com/profile.php?id=100060866764137"
              >
                Facebook <FaFacebookF size={30} />
              </a>
            </li>
            {/* bg-[#565f69] */}
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E1306c] ">
              <a
                target="_new"
                className="flex pl-4 pr-2 justify-between items-center w-full text-gray-300"
                href="https://www.instagram.com/zamirul463/"
              >
                Instagram <BsInstagram size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
