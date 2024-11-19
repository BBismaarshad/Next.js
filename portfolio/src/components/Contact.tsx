import React from "react";

const Contact = () => {
  return (
    <div className=" ml-6 pt-[4rem] md:pt-[8rem] pb-[5rem] sm:mb-0">
      <h1 className="heading  justify-center items-center  text-[20px] font-semibold md:text-[40px] uppercase  md:[1rem] flex  ">
        Contact
      </h1>
      <div className=" mt-10 pt-[5rem] pb-[3rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
          <div>
            <p className="Heading__mini font-semibold md:text-[30px] mb-5 text-white">
              Reach Out to Us
            </p>
            <h1 className="Heading__primary">
              Shine On:{" "}
              <span className="text-yellow-400">Elevate Your Brand</span>{" "}
              beilliant
            </h1>
            <p className=" text-[15px] text-white mt-[1rem] opacity-75">
              <span>--</span> "Transforming Ideas into Digital Masterpieces"
            </p>
            <p className=" text-[15px] text-white mt-[1rem] opacity-75">
              <span>--</span> "Building Websites that Drive Success"
            </p>
            <p className=" text-[15px] text-white mt-[1rem] opacity-75">
              <span>--</span> "Where Code Meets Creativity"
            </p>
            <p className=" text-[15px] text-white mt-[1rem] opacity-75">
              <span>--</span> "Innovative Solutions for a Digital World"
            </p>
            <h1 className="mt-[2rem] mb-[2rem] text-yellow-400 text-[20px] underline font-bold">
              xyz@gmail.com
            </h1>
          </div>
          <div>
            <div className="grid  grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
              <input
                type="text"
                placeholder="Name"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="py-[0.7rem] mt-[1.5rem]  mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            />
            <textarea
              placeholder="Message"
              className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
              rows={4}
            ></textarea>
            <button className="py-[0.7rem]   mb-[1.5rem] w-full outline-none text-white bg-yellow-400 hover:bg-[#0c5c7e] rounded-full px-4 ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
