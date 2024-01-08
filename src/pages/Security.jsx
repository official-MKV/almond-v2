import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import cube from "../assets/cube2.png";
import cubegif from "../assets/cube-free.gif";

const Security = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav black={true} />
      {/* <div>
        <button>Register</button>
      </div> */}
      <section className="w-screen h-screen flex items-center justify-center">
        <div className="w-[50vw] ml-[25vw] flex flex-col gap-[1rem]">
          <p className=" text-[gray]  font-medium text-[1.5rem]">
            Premium Security
          </p>
          <p className="text-[4rem] font-black w-[25rem] leading-[3.6rem] text-[#212121]">
            End-to-End Security
          </p>
          <p className="text-[black] font-medium text-[1rem]">
            Comprehensive Protection Across Every Layer: Ensuring the Integrity
            and Safety of Your Entire System with End-to-End Security Solutions.
          </p>
        </div>
        <div className="w-[50vw] ">
          <img className="w-[80%]" src={cube} />
        </div>
      </section>
      <section className="w-screen h-screen">
        <div className="w-[50vw] ml-[25vw] flex flex-col gap-[1rem]">
          <p className=" text-[gray]  font-medium text-[1.5rem]">
            Always available
          </p>
          <p className="text-[4rem] font-black w-[25rem] leading-[3.6rem] text-[#212121]">
            End-to-End Security
          </p>
          <p className="text-[black] font-medium text-[1rem]">
            Comprehensive Protection Across Every Layer: Ensuring the Integrity
            and Safety of Your Entire System with End-to-End Security Solutions.
          </p>
        </div>
        <div className="w-[50vw] ">
          <img className="w-[80%]" src={cube} />
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Security;
