"use client";
import { headerItems, userInfo } from "@/contants/contant";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import React from "react";
const Intro: React.FC = () => {
  return (
    <section
      id={headerItems.home.page}
      className="h-screen flex  flex-col text-center justify-center items-center md:flex-row md:text-start"
    >
      {/* left section */}

      <div>
        <Image
          src={userInfo.picture}
          alt="dp"
          width={150}
          height={150}
          className="rounded-full shadow-2xl"
        />
      </div>
      {/* right section */}
      <div className="md:ml-20 sm:ml-12 md:w-1/2">
        <h1 className="text-4xl hidden md:block mt-36 uppercase hover:text-teal-600">
          Web Developer
        </h1>
        <h1 className="text-2xl mt-5 md:text-3xl">
          {" "}
          Hi,I<span className="text-teal-600">&#39; </span>m&nbsp;
          <span className="text-teal-600 text-3xl md:text-4xl">
            Bisma Arshad
          </span>
        </h1>
        <p
          className="mt-4 mb-4"
          dangerouslySetInnerHTML={{ __html: userInfo.heading }}
        />

        <ScrollLink
          to={headerItems.project.page}
          className="bg-teal-600 flex items-center justify-center  cursor-pointer rounded-3xl w-28 h-10  text-neutral-100"
          spy={true}
          smooth={true}
        >
          Projects
        </ScrollLink>
      </div>
    </section>
  );
};
export default Intro;
