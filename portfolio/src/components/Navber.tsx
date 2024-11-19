"use client";
import React from "react";
import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";
const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="   container  pt-8">
      <div className="flex justify-between  items-center text-center">
        <div className="text-2xl  text-[#0c5c7e] font-semibold uppercase ml-10">
          Front<span className="text-yellow-400"> end-</span>dev
        </div>
        <ul className=" font-semibold  text-[#0c5c7e]  text-xl text-center gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink">
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li className="menuLink">
            {" "}
            <Link href="/about">About</Link>
          </li>
          <li className="menuLink">
            {" "}
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <GoEyeClosed size={30} /> : <CiMenuKebab size={30} />}
        </div>
      </div>
      {isMenuOpen && (
        <ul className="flex text-[#0c5c7e]  text-center flex-col gap-4 mt-4 md:hidden">
          <li className="menuLink">
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="menuLink">
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="menuLink">
            <Link href="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navber;
