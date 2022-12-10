import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Redux from "../assets/redux.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen flex justify-center items-center bg-slate-900 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="xs:text-right pb-8 pl-4 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 tracking-wide">
            Skills
          </p>
        </div>
        {/* body */}
        <div className="max-w-[350px] xs:max-w-[350px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1100px] w-full h-full px-8 xs:px-4 py-2 mx-auto">
          <div className="text-right xs:text-center text-lg xs:text-xl md:text-2xl">
            <p className="">The technologies I've worked with</p>
          </div>
          <div className="w-full py-8 grid lg:grid-cols-4 grid-cols-3 gap-3 text-center mx-auto ml-3">
            <div className="shadow-md flex flex-col items-center justify-center shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-20" src={HTML} alt="Hml Icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md flex flex-col items-center justify-center shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-20" src={CSS} alt="Hml Icon" />
              <p className="my-4">Css</p>
            </div>
            <div className="shadow-md flex flex-col items-center justify-center shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-20" src={JavaScript} alt="Hml Icon" />
              <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md flex flex-col items-center justify-center shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-20" src={ReactImg} alt="Hml Icon" />
              <p className="my-4">React Js</p>
            </div>
            <div className="shadow-md flex flex-col items-center justify-center shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-20" src={GitHub} alt="Hml Icon" />
              <p className="my-4">GitHub</p>
            </div>
            <div className="shadow-md flex flex-col items-center justify-center shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-20" src={Tailwind} alt="Hml Icon" />
              <p className="my-4">Tailwind</p>
            </div>
            <div className="shadow-md flex flex-col items-center justify-center shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-20" src={Redux} alt="Hml Icon" />
              <p className="my-4">Redux</p>
            </div>
            {/* <div className="shadow-md flex flex-col items-center justify-center shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-20" src={HTML} alt="Hml Icon" />
              <p className="my-4">HTML</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
