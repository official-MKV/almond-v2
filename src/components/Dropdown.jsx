import React from "react";

const Dropdown = ({ handleClick, dropdown }) => {
  return (
    <div
      // onClick={handleClick}
      className={`fixed w-screen h-screen bg-black z-[10000] text-white ${
        dropdown ? "block" : "hidden"
      }`}
    >
      <span
        className="w-full flex items-center h-[5vh]  ml-[20rem] md:ml-[43rem] mt-[2rem]"
        onClick={handleClick}
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#FFFFFF"
          stroke="#FFFFFF"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>cancel</title>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g
                id="work-case"
                fill="#ffffff"
                transform="translate(91.520000, 91.520000)"
              >
                {" "}
                <polygon
                  id="Close"
                  points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
                >
                  {" "}
                </polygon>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </span>
      <span className="lg:flex flex flex-col w-full h-[50vh]  items-start text-[white]  list-none justify-between ml-[3rem] mt-[3rem] ">
        <li className="">
          <a
            className="
            hover:cursor-pointer
            hover:font-medium
            md:text-[1.5rem]
            hover:bg-[#7D5DF6] rounded-[20px]
            px-[30px] py-[5px]
          text-[white]
             ease-in-out duration-200 "
          >
            How it works ?
          </a>
        </li>
        <li>
          <a
            className="
            hover:cursor-pointer
            hover:font-medium
            md:text-[1.5rem]
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
            hover:font-medium
            md:text-[1.5rem]
            hover:bg-[#7D5DF6] rounded-[20px]
            px-[30px] py-[5px]
            hover:text-[white]
             ease-in-out duration-200 "
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="
            hover:cursor-pointer
            md:text-[1.5rem]
            hover:bg-[#7D5DF6] rounded-[20px]
            hover:font-medium
            px-[30px] py-[5px]
          text-[white]
             ease-in-out duration-200 "
          >
            Contact us
          </a>
        </li>
      </span>
    </div>
  );
};

export default Dropdown;
