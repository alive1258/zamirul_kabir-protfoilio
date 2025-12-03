"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { RiArrowUpLine } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [activeLink, setActiveLink] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleSetActive = (to: string) => {
    setActiveLink(to);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scroll = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollPercent(Math.round(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <div className="w-full z-50 fixed bg-[#000814]  text-[#ffffff] border-b border-gray-600 "> */}
      <header className="w-full z-50 fixed bg-[#0F172A]  text-[#ffffff] border border-white/10">
        <div className="py-4 max-w-full w-[1440px] mx-auto md:px-[70px] px-5 md:h-24 font-semibold flex justify-between items-center ">
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
                <Link
                  to="hero"
                  smooth={true}
                  duration={1100}
                  spy={true}
                  activeClass=""
                  onSetActive={handleSetActive}
                  onClick={() => setActiveLink("hero")}
                  className={
                    activeLink === "hero"
                      ? "active text-[#34a578]"
                      : "text-white"
                  }
                >
                  Hero
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={1100}
                  spy={true}
                  activeClass=""
                  onSetActive={handleSetActive}
                  onClick={() => setActiveLink("about")}
                  className={
                    activeLink === "about"
                      ? "active text-[#34a578]"
                      : "text-white"
                  }
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="experience"
                  smooth={true}
                  duration={1100}
                  spy={true}
                  activeClass=""
                  onSetActive={handleSetActive}
                  onClick={() => setActiveLink("experience")}
                  className={
                    activeLink === "experience"
                      ? "active text-[#34a578]"
                      : "text-white"
                  }
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={1100}
                  spy={true}
                  activeClass=""
                  onSetActive={handleSetActive}
                  onClick={() => setActiveLink("skills")}
                  className={
                    activeLink === "skills"
                      ? "active text-[#34a578]"
                      : "text-white"
                  }
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={1100}
                  spy={true}
                  activeClass=""
                  onSetActive={handleSetActive}
                  onClick={() => setActiveLink("projects")}
                  className={
                    activeLink === "projects"
                      ? "active text-[#34a578]"
                      : "text-white"
                  }
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="education"
                  smooth={true}
                  duration={1100}
                  spy={true}
                  activeClass=""
                  onSetActive={handleSetActive}
                  onClick={() => setActiveLink("education")}
                  className={
                    activeLink === "education"
                      ? "active text-[#34a578]"
                      : "text-white"
                  }
                >
                  Education
                </Link>
              </li>

              <li>
                <Link
                  to="blog"
                  smooth={true}
                  duration={1100}
                  spy={true}
                  activeClass=""
                  onSetActive={handleSetActive}
                  onClick={() => setActiveLink("blog")}
                  className={
                    activeLink === "blog"
                      ? "active text-[#34a578]"
                      : "text-white"
                  }
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={1100}
                  spy={true}
                  activeClass=""
                  onSetActive={handleSetActive}
                  onClick={() => setActiveLink("contact")}
                  className={
                    activeLink === "contact"
                      ? "active text-[#34a578]"
                      : "text-white"
                  }
                >
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
                to="hero"
                smooth={true}
                duration={1100}
              >
                Hero
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
                to="experience"
                smooth={true}
                duration={1100}
              >
                Experience
              </Link>
            </li>
            <div className="border-b-2 border-[#34a578]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link
                onClick={handleClick}
                to="education"
                smooth={true}
                duration={1100}
              >
                Education
              </Link>
            </li>
            <div className="border-b-2 border-[#34a578]"></div>
            <li className="py-6 list-none">
              {" "}
              <Link
                onClick={handleClick}
                to="projects"
                smooth={true}
                duration={1100}
              >
                Projects
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
                to="blog"
                smooth={true}
                duration={1100}
              >
                Blog
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

        {/* scroll Percent section    */}
        <div className="hidden lg:flex fixed flex-col right-0  mr-4 bottom-4">
          <div className="space-y-4 relative">
            <div
              className={`absolute right-0 mr-4 bottom-0 transition-opacity duration-500 ${
                scrollPercent === 100
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
            >
              <div
                className="group relative size-14 rounded-full flex justify-center items-center border-2 border-border-base bg-[#111217]"
                style={{
                  background: `conic-gradient(#34a578 ${
                    scrollPercent * 3.6
                  }deg, #E4E4E7 ${scrollPercent * 3.6}deg)`,
                }}
              >
                {/* Inner Circle with Percentage */}
                <div className="size-11 bg-[#111217] rounded-full flex items-center justify-center text-sm  text-[#34a578]">
                  {scrollPercent}%
                </div>

                {/* Scroll to top button (only visible on hover) */}
                <button
                  aria-label="Scroll to top"
                  onClick={scrollToTop}
                  className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full hover:bg-[#34a578] hover:border-[#34a578] cursor-pointer"
                >
                  <RiArrowUpLine className="text-white" size={28} />
                </button>
              </div>
            </div>

            {/* Scroll to top button */}
            <div
              onClick={scrollToTop}
              className={`absolute right-0  mr-4 bottom-4 bg-white size-14 ml-2 border-4 transition-all duration-500 ease-in-out group cursor-pointer hover:bg-[#34a578] hover:border-[#34a578] rounded-full flex justify-center items-center border-[#34a578] ${
                scrollPercent === 100
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <RiArrowUpLine
                className="text-[#34a578] group-hover:text-white"
                size={28}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
