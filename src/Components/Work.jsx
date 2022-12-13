import React from "react";
import Food from "../assets/food.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-screen flex justify-center items-center bg-slate-900 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="xs:text-right pb-8 pl-4 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 tracking-wide">
            Work
          </p>
        </div>
        {/* body */}
        <div className="max-w-[350px] xs:max-w-[350px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1100px] w-full px-4 xs:px-4 py-2 mx-auto">
          <div className="text-center xs:text-center text-lg xs:text-xl md:text-2xl">
            <p className="">Check out some of my recent works</p>
          </div>
          <div className="w-full py-8 flex flex-col xs:flex-row gap-3 text-center mx-auto ml-3">
            {/* hover effects */}
            <div
              style={{ backgroundImage: `url(${Food})` }}
              className="shadow-lg w-[300px] xs:w-[400px] xs:h-[200px] xs:grid-cols-2  shadow-slate-600 group container rounded-md flex justify-center items-center mx-auto content-work"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <span className="2xl font-bold text-white tracking-wider">
                  React Js Application
                </span>
              </div>
              <div className="px-8 py-4 text-center  flex flex-col items-center justify-center">
                <a href="">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-800 hover:text-white duration-300">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-800 hover:text-white duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${Food})` }}
              className="shadow-lg w-[300px] xs:w-[400px] xs:grid-cols-2  shadow-slate-600 group container rounded-md flex justify-center items-center mx-auto content-work"
            >
              <div className="opacity-0 group-hover:opacity-80">
                <span className="2xl font-bold text-white tracking-wider">
                  React Js Application
                </span>
              </div>
              <div className="px-8 py-4 text-center  flex flex-col items-center justify-center">
                <a href="">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-800 hover:text-white duration-300">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-800 hover:text-white duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
