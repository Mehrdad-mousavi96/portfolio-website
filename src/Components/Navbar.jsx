import React, { useState } from "react";
import { HiCode } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="fixed w-full h-24 flex justify-between items-center px-4 bg-slate-900 text-gray-300">
      {/* logo */}
      <div className="hover:cursor-pointer animate-bounce duration-300">
        <HiCode size={40} className="text-pink-600" />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>Contact</li>
        <li>About</li>
        <li>Experience</li>
        <li>Work</li>
        <li>Home</li>
      </ul>

      {/* hamburger */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden z-10"
      >
        {!nav ? <FaBars size={20} /> : <FaTimes size={22} />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
