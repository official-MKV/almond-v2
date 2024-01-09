import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import cube from "../assets/cube2.png";
import cubegif from "../assets/cube-free.gif";
import chat from "../assets/chat.jpg";
import { motion } from "framer-motion";
import escrow from "../assets/escrow.svg";
const Security = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav black={true} />
      {/* <div>
        <button>Register</button>
      </div> */}
      <section className="w-screen h-screen flex lg:flex-row flex-col lg:items-center lg:justify-center lg:mt-[0] mt-[7rem]">
        <div className="lg:w-[50vw] lg:mx-[20vw] flex flex-col lg:gap-[0rem] lg: mx-[8vw]">
          <p className=" text-[gray]  font-medium lg:text-[1.5rem] text-[1.1rem]">
            Premium Security
          </p>
          <p className="lg:text-[4rem] text-[2rem] font-black w-[25rem] leading-[4rem] text-[#212121]">
            End-to-End Security
          </p>
          <p className="text-[black] font-medium lg:text-[1rem] text-[1rem]">
            Comprehensive Protection Across Every Layer: Ensuring the Integrity
            and Safety of Your Entire System with End-to-End Security Solutions.
          </p>
        </div>
        <div className="lg:w-[50vw] mt-[2vh]  max-[414px]:mt-[10vh]">
          <img className="w-[100%]" src={cube} />
        </div>
      </section>
      <section className="w-screen lg:h-screen h-[70vh] flex lg:justify-center lg:items-center  justify-start lg:flex-row flex-col-reverse lg:gap-[5rem] lg:mx-[10vw]">
        <div className=" lg:w-[20rem] lg:scale-[1] scale-[0.8]">
          <motion.img
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: [-300, -200, -100, 0],
              opacity: [0, 0, 0.5, 1],
            }}
            transition={{ duration: 0.7, ease: "linear" }}
            src={chat}
          />
        </div>
        <div className="lg:w-[50vw] flex flex-col lg:gap-[1rem] mx-[8vw]">
          <p className="lg:text-[4rem] text-[2.5rem] font-black  leading-[3.6rem] text-[#212121] uppercase mb-[1rem]">
            Available 24/7
          </p>
          <p className="text-[black] font-medium text-[1rem] lg:w-[30rem] w-[20rem]">
            Uninterrupted Accessibility: Your Solution, Always On. Experience
            the Convenience of 24/7 Availability, Tailored to Fit Your Schedule.
            Communicate to us at anytime with any problem you have.
          </p>
        </div>
      </section>
      <section className="w-screen lg:h-screen md:h-[60vh] h-[80vh] mt-[5rem] lg:text-center">
        <div className=" lg:w-full flex flex-col gap-[1rem] lg:items-center justify-center lg:mx-[0] mx-[8vw]">
          <p className="lg:text-[4rem]  text-[2.5rem]  font-black  leading-[3.6rem] text-[#212121] uppercase mb-[1rem] ">
            Explore the Strength of Escrow Accounts
          </p>
          <p className="text-[black] font-medium text-[1rem] lg:w-[30rem] md:w-[25rem] w-[20rem] md:mx-[8vw] ">
            Escrow accounts act as a reliable mediator, securing funds until
            both parties meet agreed-upon conditions. Explore the strength of
            escrow for transparent and secure financial exchanges, offering
            peace of mind in every transaction.
          </p>
          <div className="lg:w-[40rem] ">
            <img classname="" src={escrow} />
          </div>

          <button
            className="rounded-[1rem] p-[1rem]
           md:mx-[40vw] relative   border-solid border-[2px] border-[#7D5DF6]
          cursor-pointer font-semibold text-[#7D5DF6] hover:text-[white]
          hover:bg-[#7D5DF6] my-[1rem]

          "
          >
            Get started
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Security;
