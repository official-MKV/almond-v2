import React from "react";
import { collection, addDoc } from "firebase/firestore";
import acoin from "../assets/a-coin.svg";
import { db } from "../firebase_init.js";
import { useState } from "react";

const RegisterPopup = ({ popup, handleClick }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const sendtoDatabase = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "WaitList"), {
        email: email,
        phone: phone,
      });
      setEmail("");
      setPhone("");
      setSuccess(true);

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      handleClick(false);
    }
  };
  return (
    <div
      className={` transition-all duration-700 ease-in-out ${
        popup ? "block" : "hidden"
      } w-screen h-screen bg-black/25 fixed flex justify-center items-center z-[100]`}
    >
      <div className="lg:w-[40%] h-[60%] md:h-[40%] md:w-[50%] bg-white z-100 rounded-2xl flex flex-col items-center ">
        <span
          className="w-full flex items-center justify-end mr-[2rem] mt-[1rem] cursor-pointer "
          onClick={handleClick}
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="black"
            stroke="black"
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
                  fill="black"
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

        <div
          className={`${
            success ? "block" : "hidden"
          } w-full flex flex-col justify-center items-center`}
        >
          <img src={acoin} />
          <p className="font-extrabold text-[2.3rem] w-[23rem] text-center leading-[2.4rem]">
            Welcome to the <span className="text-[#7D5DF6]">Almond Family</span>
          </p>
          <p className="text-[1rem] font-medium">
            You will be notified as soon as we launch
          </p>
          <p className="font-extralight text-[0.7rem] text-[#7D5DF6]">
            Expect weekly newsletter
          </p>
        </div>
        <div className={` ${success ? "hidden" : "block"}`}>
          <p className=" font-bold text-[2rem]  text-gray-700 w-[20rem] text-center">
            Sign up Now and join the waitlist
          </p>
          <form className="w-full lg:h-full  h-[80%] flex flex-col items-center justify-center mx-[1rem]">
            <div class="mb-4">
              <label
                for="email"
                class="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="makpjoseph1234@almond.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div class="mb-[2rem]">
              <label
                for="phone"
                class="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="09056595381"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              onClick={sendtoDatabase}
              className="w-[40%] bg-[#7D5DF6] text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopup;
