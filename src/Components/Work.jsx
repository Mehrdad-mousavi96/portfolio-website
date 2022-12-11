import React from "react";
// import WorkImg from '../assets/'

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-screen flex justify-center items-center bg-slate-900 text-gray-300 my-16"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="xs:text-right pb-8 pl-4 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 tracking-wide">
            Work
          </p>
        </div>
        {/* body */}
        <div className="max-w-[350px] xs:max-w-[350px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1100px] w-full h-full px-8 xs:px-4 py-2 mx-auto bg-red-800">
          <div className="text-center xs:text-center text-lg xs:text-xl md:text-2xl">
            <p className="">Check out some of my recent works</p>
          </div>
          <div className="w-full py-8 grid lg:grid-cols-4 grid-cols-3 gap-3 text-center mx-auto ml-3">
            {/* hover effects */}
            <div className="shadow-lg shadow-slate-600 group container rounded-md flex justify-center items-center mx-auto">
              <span></span>
              <div>
                <a href="">
                  <button></button>
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
