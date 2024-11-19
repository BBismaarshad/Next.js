import React from "react";

interface Props {
  title: string;
  year: string;
  sector: string;
  subject: string;
  city: string;
}

const Skillsitems = ({ title, year, sector, subject, city }: Props) => {
  return (
    <div className="mb-[4rem]  md:mb-[8rem]">
      <span className="px-[2rem] text-white py-[0.9rem] font-bold text-[18px] border-[2px] border-[#0c5c7e]">
        {year}
      </span>
      <h1 className="mt-[2rem] font-semibold mb-[1rem] text-[20px] sm:text-[15px] uppercase md:text-[20px] text-yellow-400">
        {title}
      </h1>
      <p className="text-white font-normal w-[80%] text-[15px] opacity-80">
        {sector}
      </p>
      <p className="text-white font-normal w-[80%] text-[12px] opacity-80">
        {subject}
      </p>
      <p className="text-white font-normal w-[80%] text-[10px] opacity-80">
        {city}
      </p>
    </div>
  );
};

export default Skillsitems;
