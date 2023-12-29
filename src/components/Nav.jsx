import React from "react";
import Logo from "../assets/logo-2.svg";

const Nav = ({ setDropdown }) => {
  return (
    <div className="w-full h-[10vh]  flex flex-row items-center justify-center   text-[white] absolute font-semibold">
      <div className="lg:w-[50vw] w-full lg:px-[0rem] px-[2rem] flex flex-row justify-between items-center ">
        <img src={Logo} className="w-[120px]" />
        <span className="lg:flex hidden  w-full  gap-[2rem] items-center  list-none justify-between ">
          <li className="">
            <a
              className="
            hover:cursor-pointer
            hover:bg-[#7D5DF6] rounded-[20px]
            px-[30px] py-[5px]
            hover:text-[white]
             ease-in-out duration-200 "
            >
              How it works ?
            </a>
          </li>
          <li>
            <a
              className="
            hover:cursor-pointer
            hover:bg-[#7D5DF6] rounded-[20px]
            px-[30px] py-[5px]
             ease-in-out duration-200
             hover:text-[white]
             "
            >
              commodity
            </a>
          </li>
          <li>
            <a
              className="
            hover:cursor-pointer
            hover:bg-[#7D5DF6] rounded-[20px]
            px-[30px] py-[5px]
            hover:text-[white]
             ease-in-out duration-200 "
            >
              Services
            </a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
        </span>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 50 50"
            className="lg:hidden md:block cursor-pointer"
            fill="white"
            onClick={setDropdown}
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
