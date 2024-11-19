import React from "react";
import Skills from "@/components/Skills";
// import Skillsitems from "@/components/Skillsitems";
import Myskills from "@/components/Myskills";

const About = () => {
  return (
    <div>
      <div className=" pl-10 pb-[3rem] pt-[4rem] md:pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap[3rem] items-center"></div>
        <div>
          <h1 className="text-[20px] font-semibold md:text-[35px] uppercase md:[1rem]">
            About Me <span className="text-yellow-400">!</span>
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Website <span className="text-yellow-400">developer</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              I'm a passionate web developer with a focus on creating responsive
              and user-friendly websites. With experience in HTML, CSS,
              JavaScript, and various frameworks like React, I thrive on turning
              complex problems into simple, beautiful solutions. My background
              in design enhances my ability to build visually appealing
              interfaces while ensuring optimal performance and accessibility.
              I’m always eager to learn new technologies and collaborate on
              innovative projects.
            </p>
          </div>
          <div className="mt-[3rem]  ml-36 flex items-center space-x-6">
            <button className="relative  flex h-[40px] w-[150px] items-center justify-center font-semibold overflow-hidden  bg-yellow-400 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 rounded-full before:bg-[#0c5c7e] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
              <span className="relative z-10 ">Read more</span>
            </button>
          </div>
        </div>
        <Skills />
        <Myskills />
      </div>
    </div>
  );
};

export default About;
