"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* dark:bg-[#0c5c7e] */}
      <div className=" footer mt-20   flex items-center   text-center justify-center   ">
        <div className=" footerwrapper 2xl: max-w-[80%] mx-auto">
          <div className="flex flex-wrap justify-center LG:justify-between mt-4 mx-4">
            <div className="left flex flex-wrap justify-center items-center">
              <h3 className=" logo text- 3xl font-semibold hover: text-yellow-400 h-min"></h3>
              <div className="socials flex mt-4 lg:mt-0 md: ml-4">
                <div className="icon items-center hover:bg-yellow-400">
                  <FaLinkedin />
                </div>
                <div className="icon  hover:bg-yellow-400">
                  <FaFacebookSquare />
                </div>
                <div className="icon hover:bg-yellow-400">
                  <FaGithub />
                </div>
                <div className="icon hover:bg-yellow-400">
                  <FaInstagramSquare />
                </div>
              </div>
            </div>

            <footer className=" py-4 px-4  mt-4 flex flex-wrap justify-center sm:justify-between">
              <div className=" credit text-sm dark:text-gray-400">
                {" "}
                created with by Bisma Arshad
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
