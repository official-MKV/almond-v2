import React from "react";

const NavLink = ({ Title, Link }) => {
  return (
    <div>
      <a
        className="
  hover:cursor-pointer
  hover:bg-[#5E46B9] rounded-[20px]
  px-[30px] py-[5px]
  text-[0.8rem]
  hover:text-[white]
   ease-in-out duration-200 "
        href={{ Link }}
      >
        {Title}
      </a>
    </div>
  );
};

export default NavLink;
