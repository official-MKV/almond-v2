import React from "react";

const SectionBlank = ({ img, title, subtext, btntxt, reverse }) => {
  return (
    <section
      className={`h-screen md:h-[75vh] flex lg:flex-row  ${
        reverse ? "flex-col-reverse" : "flex-col"
      } gap-[1rem] justify-center items-center object-center lg:mt-[0] `}
    >
      <div className="text-start justify-start flex w-[20rem]">
        <img
          className="lg:w-[20rem] md:w-[19rem] w-[15rem] rounded-[20px]"
          src={img}
        />
      </div>
      <div className="lg:flex-[0.6]  flex flex-col w-[20rem]  md:w-full md:justify-center md:items-center ">
        <p
          className="font-black lg:text-[3.5rem]
       md:text-[3rem] text-[1.8rem] uppercase
       md:text-center
       text-[black] lg:leading-[3rem]
       md:w-[35rem] w-[20rem]
       md:leading-[2.8rem] leading-[2rem]"
        >
          {title}
        </p>
        <p className="  mt-[0.8rem] font-semibold text-[0.8rem]   md:w-[35rem] w-[20rem] md:text-center">
          {subtext}
        </p>
        <button className="w-[100px] h-[40px] rounded-2xl bg-[#15F4B1] cursor-pointer hover:bg-[#10c28c] font-semibold text-[black] mt-[1rem]">
          try it
        </button>
      </div>

      <div></div>
    </section>
  );
};

export default SectionBlank;
