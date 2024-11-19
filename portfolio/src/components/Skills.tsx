import React from "react";
import Skillsitems from "./Skillsitems";

const skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] sm:mb-0">
      <h1 className="heading text-[20px] font-semibold md:text-[35px] uppercase  md:[1rem] flex  ">
        Education
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 gap-[2rem] md:grid-cols-2 items-center">
        <div>
          <Skillsitems
            title=" 2024 - Present  "
            year="BSC(IT)"
            sector="Karachi University(KU)"
            subject="Bachelor of Science  in information Technology"
            city="Karachi , Sindh, Pakistan"
          />
          <Skillsitems
            year=" Intermediate"
            title=" 2020 - 2023 "
            sector="  Government-Girls collage"
            subject="Commerce"
            city="Karachi , Sindh, Pakistan"
          />
        </div>
        <div>
          <Skillsitems
            title=" 2024 - Present /10 mos "
            year=" Course "
            sector="GIAIC "
            subject="GenAi, Web3, Mataverse"
            city="Karachi , Sindh, Pakistan"
          />
          <Skillsitems
            title=" 2018 - 2020 "
            year=" Matric"
            sector=" Sce-School Junior Model"
            subject="Science"
            city="Karachi , Sindh, Pakistan"
          />
        </div>
      </div>
    </div>
  );
};

export default skills;
