"use client";
import { useState } from "react";
import { userInfo, headerItems } from "@/contants/contant";
import { NavItems } from "@/models/Header2";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from "react-scroll";
// import PreviousMap from "postcss/lib/previous-map";

const Header: React.FunctionComponent = () => {
  const [navItem, showNavItems] = useState<boolean>(false);

  return (
    <header className="bg-teal-600 p-2  justify-between fixed top-0 w-full z-10 md:flex">
      {/* left part */}

      <div className="flex justify-between">
        <h2 className="text-2xl font-bold cursor-pointer hover:text-teal-900">
          {userInfo.name}
        </h2>
        <GiHamburgerMenu
          size={30}
          className="md:hidden"
          onClick={() => showNavItems((prevState) => !prevState)}
        />
      </div>
      {/* right part */}
      <div
        className={`mr-8 md:space-x-6 mt-3 md:mt-0  md:block ${
          navItem ? "block" : "hidden"
        }`}
      >
        {Object.keys(headerItems).map((item) => (
          <ScrollLink
            to={headerItems[item as keyof NavItems].page}
            key={headerItems[item as keyof NavItems].label}
            className="block md:inline-block cursor-pointer hover:text-teal-900"
            spy={true}
            smooth={true}
          >
            {headerItems[item as keyof NavItems].label}
          </ScrollLink>
        ))}
      </div>
    </header>
  );
};
export default Header;

// key={headerItems[item as keyof NavItems].label}
