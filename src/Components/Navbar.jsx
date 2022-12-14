import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiCode } from "react-icons/hi";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import cv from "../assets/cv.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [hide, setHide] = useState(false);

  const hideHandler = () => {};

  return (
    <div className="fixed w-full lg:h-24 h-16 flex justify-between items-center px-4 bg-slate-900  text-gray-300">
      {/* logo */}
      <div className="hover:cursor-pointer animate-bounce duration-300">
        <HiCode size={40} className="text-pink-600" />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden z-10"
      >
        {!nav ? <FaBars size={20} /> : <FaTimes size={22} />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={() => setNav(!nav)}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={() => setNav(!nav)}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={() => setNav(!nav)}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link
            onClick={() => setNav(!nav)}
            to="work"
            smooth={true}
            duration={500}
          >
            Works
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={() => setNav(!nav)}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons > xs */}
      <div className="hidden xs:flex xs:fixed xs:flex-col xs:top-[40%] xs:left-0  ">
        <ul className="">
          <li className="w-[140px] h-[50px] left-0 flex justify-between items-center  ml-[-80px] hover:ml-[-5px] bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target={"_blank"}
              href="https://www.linkedin.com/in/mehrdadmousavi-b589761bb/?locale=en_US"
            >
              LinkedIn
              <FaLinkedin size={33} />
            </a>
          </li>
          <li className="my-2 w-[140px] h-[50px] left-0 flex justify-between items-center ml-[-80px] hover:ml-[-5px] bg-black">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target={"_blank"}
              href="https://github.com/Mehrdad-mousavi96"
            >
              Github
              <FaGithub size={33} />
            </a>
          </li>
          <li className="my-2 w-[140px] h-[50px] left-0 flex justify-between items-center ml-[-80px] hover:ml-[-5px] bg-[#7079d3]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target={"_blank"}
              href="mailto:mehrdad.fmousavi@gmail.com"
            >
              Email
              <HiOutlineMail size={33} />
            </a>
          </li>
          <li className="my-2 w-[140px] h-[50px] left-0 flex justify-between items-center ml-[-80px] hover:ml-[-5px] bg-[#1f484c]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target={"_blank"}
              href={cv}
              download
            >
              Resume
              <BsFillPersonLinesFill size={32} />
            </a>
          </li>
        </ul>
      </div>

      {/* social icons mobile */}
      <div className="flex fixed flex-col top-[40%] left-0 xs:hidden ">
        <ul className="">
          <li className="w-10 h-10 ml-1 flex justify-center items-center bg-blue-600">
            <a
              className="flex justify-center items-center text-gray-300"
              target={"_blank"}
              href="https://www.linkedin.com/in/mehrdadmousavi-b589761bb/?locale=en_US"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-10 h-10 ml-1 flex justify-center items-center my-2 bg-black">
            <a
              className="flex justify-center items-center text-gray-300"
              target={"_blank"}
              href="https://github.com/Mehrdad-mousavi96"
            >
              <FaGithub size={28} />
            </a>
          </li>
          <li className="w-10 h-10 ml-1 flex justify-center items-center my-2 bg-[#7079d3]">
            <a
              className="flex justify-center items-center text-gray-300"
              target={"_blank"}
              href="mailto:mehrdad.fmousavi@gmail.com"
            >
              <HiOutlineMail size={29} />
            </a>
          </li>
          <li className="w-10 h-10 ml-1 flex justify-center items-center my-2 bg-[#1f484c]">
            <a
              className="flex justify-center items-center text-gray-300"
              target={"_blank"}
              href={cv}
              download
            >
              <BsFillPersonLinesFill size={32} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
