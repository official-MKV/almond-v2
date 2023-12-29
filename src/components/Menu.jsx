import React from "react";

const Menu = ({ dropdown, menuClick }) => {
  return (
    <div
      onClick={menuClick}
      className={`w-screen h-screen z-[1000] fixed bg-white ${
        dropdown ? "block" : "hidden"
      }`}
    >
      <span className="lg:flex flex-col hidden  w-full  gap-[2rem] items-center  list-none justify-between text-black ">
        <li className=" text-black">
          <a
            className="
            hover:cursor-pointer
            hover:bg-[#7D5DF6] rounded-[20px]
            px-[30px] py-[5px]

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
             ease-in-out duration-200 "
          >
            Services
          </a>
        </li>
        <li>
          <a>Contact us</a>
        </li>
      </span>
    </div>
  );
};

export default Menu;
