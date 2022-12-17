import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";
import { useState } from "react";

const Work = () => {
  const slides = [
    {
      url: "/images/food.png",
    },
    {
      url: "/images/food2.png",
    },
    {
      url: "/images/food3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fillDot, setFillDot] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      name="work"
      className="w-full h-screen flex justify-center items-center bg-slate-900 text-gray-300"
    >
      <img src={""} alt="" />
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

          {/* slider */}
          <div className="py-8 flex flex-col gap-3 text-center mx-auto ml-3">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="relative shadow-lg w-[300px] xs:w-[400px] h-[150px] xs:h-[200px] xs:grid-cols-2 shadow-slate-600 group container duration-300 rounded-md flex items-center mx-auto content-work"
            >
              {/* left arrow */}
              <span
                onClick={prevSlide}
                className="rotate-180 left-3 absolute top-[45%]"
              >
                <BsFillArrowRightCircleFill
                  size={25}
                  className="cursor-pointer text-slate-800"
                />
              </span>
              {/* right arrow */}
              <span onClick={nextSlide} className="right-3 absolute top-[45%]">
                <BsFillArrowRightCircleFill
                  size={25}
                  className="cursor-pointer text-slate-800"
                />
              </span>
            </div>
            <div className="flex justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-2xl cursor-pointer"
                >
                  <RxDotFilled className="flex after:text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
