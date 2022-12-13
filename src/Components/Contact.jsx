import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex flex-col justify-center items-center bg-slate-900 text-gray-300"
    >
      <div className="xs:text-right pb-8 pl-4 text-center">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 tracking-wide">
          Contact Me
        </p>
      </div>
      {/* container */}
      <div className="max-w-[350px] xs:max-w-[350px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1100px] mx-auto pl-6 flex flex-col justify-center items-center w-full h-full">
        <div className="text-center xs:text-center text-lg xs:text-xl md:text-2xl">
          <p className="">Submit me the form below or shoot me an email</p>
        </div>
        <form
            method="POST"
          action="https://getform.io/f/55f78b18-5aaf-45f3-a948-cb5ddd7cfa4f"
          className="flex flex-col w-full items-center"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="my-4 p-2 bg-[#ccd6f6] text-center w-64 text-slate-900 font-semibold"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="my-4 p-2 bg-[#ccd6f6] text-center w-64 text-slate-900 font-semibold"
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            className="my-4 p-2 bg-[#ccd6f6] text-center text-slate-900 xs:w-3/4  "
            placeholder="Message"
          ></textarea>
          <button type="submit " className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 my-8 mx-auto items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
