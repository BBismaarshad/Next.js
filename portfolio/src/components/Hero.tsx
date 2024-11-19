"use client";
import React from "react";
import Image from "next/image";
import my from "../../public/images/my.png";

const Hero = () => {
  return (
    <div>
      <div className="  pt-[4vh]  md:mt-20 md:pt-[12vh] h-[85:vh] md:h-[100vh] custom-bg">
        <div className=" flex justify-center flex-col w-[80%] h-[100%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
            <div>
              <h1 className="  xl:text-[50px] lg:text-[40px] md:[50px] sm:text-[25px] font-semibold leading-[2.4rem] text-white">
                Hi,I<span className=" text-4xl text-[#0c5c7e]">'</span>m
                <br />
                <span className=" text-5xl text-[#0c5c7e]">
                  {" "}
                  Bisma Arshad{" "}
                </span>{" "}
              </h1>

              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[25px] font-semibold leading-[2.4rem] text-white">
                Get to know
                <span className=" text-4xl text-yellow-400"> Me</span>
              </h1>

              <p className="mt-[ 1.4rem]  text-[15px] md:text-[13px] text-slate-300 ">
                Passionate Web Developer Crafting Responsive and User-Friendly
                Websites Specializing in Modern Technologies and Frameworks
                Bringing Ideas to Life Through Innovative Design Your Partner in
                Digital Transformation.
              </p>

              <div className="mt-[3rem] flex items-center space-x-6">
                <button className="relative  flex h-[40px] w-[90px] items-center justify-center font-semibold overflow-hidden  bg-yellow-400 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 rounded-full before:bg-[#01949a] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10 ">Hire </span>
                </button>
                <button className="relative  flex h-[40px] w-[150px] items-center justify-center font-semibold overflow-hidden bg-yellow-400 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 rounded-full before:bg-[#01949a] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10 ">Download CV </span>
                </button>
              </div>
            </div>
            <div className="hidden md:block  ">
              {" "}
              <Image
                src={my}
                alt="my"
                width={1000}
                height={1000}
                className="object-contain mb-24 rounded-3xl  ml-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
