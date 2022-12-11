import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Me1 from "../assets/Images/Untitled.png";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Me1})` }}
      name="home"
      className="w-full h-screen content-div "
    >
      {/* container */}
      <div className="max-w-[350px] xs:max-w-[350px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1100px] mx-auto pl-12 flex flex-col justify-center h-full">
        <p className="text-lg md:text-3xl text-pink-600 pt-2">Hi, my name is</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-300 mb-4">
          Mehrdad Mousavi
        </h1>
        <h2 className="text-xl md:text-3xl text-pink-600 pt-2">I am a</h2>
        <h2 className="text-3xl md:text-5xl text-gray-300 font-bold mb-4 lg:mb-6">
          Frontend Developer
        </h2>
        <p className="text-gray-400 py-4 sm:text-xl">
          I'm a frontend developer specializing in building (and occeasionally
          designing) exceptional degital experiences. Currently, I'm focused on
          building responsive frontend web application
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 border-white">
            View Work
            <span className="group-hover:rotate-90">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
