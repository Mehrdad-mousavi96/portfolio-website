import React from "react";
import Me2 from "../assets/Images/about.png";

const About = () => {
  return (
    <div
      name="about"
      style={{ backgroundImage: `url(${Me2})` }}
      className="bg-slate-900 text-gray-300 w-full h-screen content-div my-16"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="xs:text-right pb-8 pl-4 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 tracking-wide">
            About
          </p>
        </div>
        <div className="max-w-[350px] xs:max-w-[350px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1100px] w-full px-8 py-2 grid gap-8">
          <div className="flex flex-col text-center font-semibold text-gray-300">
            <p className="font-bold text-xl xs:text-2xl md:text-3xl">
              Hi, I'm Mehrdad, Nice to meet you.
            </p>
            <p className="my-2 text-lg xs:text-xl md:text-2xl font-semibold">
              Please take a look around.
            </p>
          </div>
          <div className="w-full text-center text-gray-300 font-light md:text-xl xs:my-2 lg:my-4">
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
