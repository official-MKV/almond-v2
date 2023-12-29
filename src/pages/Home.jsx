import React from "react";
import Nav from "../components/Nav";
import Hero from "../assets/hero-img-2.jpg";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import Card from "../assets/card-3.png";

import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css/effect-fade";
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import Spline from "@splinetool/react-spline";

import Comp1 from "../assets/comp-1.png";
import r1 from "../assets/r-1.jpg";
import r2 from "../assets/r-2.jpg";
import r3 from "../assets/r-3.jpg";
import r4 from "../assets/r-4.jpg";
import r5 from "../assets/r-5.jpg";
import { useState } from "react";
import Menu from "../components/Menu";
const Home = () => {
  const swiperSlide = useSwiperSlide();
  const [dropdown, setDropdown] = useState(false);
  const menuClick = () => {
    setDropdown(!dropdown);
    console.log(dropdown);
  };

  return (
    <div className="overflow-x-hidden">
      {/* <Menu dropdown menuClick={menuClick} /> */}
      <Nav setDropdown={menuClick} />
      {/* Hero section */}
      <section
        className="bg-cover bg-center h-screen flex justify-center items-center overflow-x-hidden"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="flex justify-center items-center text-left w-[40rem]">
          <span className="z-[100] w-[70vw] relative lg:bottom-[0rem] bottom-[5rem] flex gap-[2rem] flex-col">
            <p className="lg:text-[5rem] text-[3rem] text-[white] font-black leading-[1em] uppercase">
              The all-in One bank app.{" "}
            </p>
            <span className="flex flex-col gap-[0.2rem]">
              <p className="lg:text-[0.8rem] text-[white] w-[280px] font-semibold">
                Why use like 20 different banking apps when you can use one that
                works well and does all of them ?
              </p>

              <button className="w-[100px] h-[40px] rounded-2xl bg-[#15F4B1] cursor-pointer hover:bg-[#10c28c] font-semibold text-[black]">
                get app
              </button>
            </span>
          </span>
          {/* <div className="absolute w-[300px] right-[30rem] top-[15rem] border-[5px] rounded-[30px] border-gray bg-[black] bg-opacity-5 p-4 max-w-xs mx-auto">
            <img className="w-full " src={Comp1} />
          </div> */}
        </div>
      </section>
      {/* Cool shit you can do with Almond section */}
      <section className="h-screen  bg-[white] flex flex-col items-center text-center overflow-x-hidden overflow-y-hidden">
        <div className="flex flex-col justify-center items-center lg:mt-[4rem] md:mt-[4rem] mt-[3rem] gap-[1rem] lg:w-[35rem] w-[20rem]">
          <p className="font-extrabold lg:text-[3.5rem]  text-[2rem] uppercase lg:text-center text-start leading-[1em]">
            Spend Everyday Like the 1%{" "}
          </p>
          <p className="font-semibold lg:text-[1rem] text-[0.8rem] lg:w-[35rem] lg:text-center text-start">
            Get a discount on everything, Send money from you NGN account to
            anywhere in the world, Accumulate points to use at the most
            luxurious institutions{" "}
          </p>
          <p className="font-light text-[0.8rem] lg:text-center text-start ">
            T & C's apply
          </p>
        </div>
        {/* Slide */}
        <div className="lg:w-[50vw] w-[200vw] flex items-center justify-center mt-[3rem]">
          <Swiper
            slidesPerView={3}
            spaceBetween={-20}
            centeredSlides={true}
            className="myswiper"
            style={{
              height: "100%",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <Slide src={r2} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide src={r2} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide src={r3} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide src={r4} />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="h-screen flex flex-col bg-[black]  ">
        <div className="flex-[0.2] w-full flex flex-col justify-center items-center text-center ">
          <div className="flex flex-col justify-center items-center mt-[6rem] gap-[0.5rem] lg:w-[35rem]  md:w-[35rem] w-[20rem]">
            <p
              className="font-black lg:text-[3.5rem]
              md:text-[3rem]  text-[white] text-[2rem]
              uppercase lg:text-center
              text-start md:text-center
            lg:w-[35rem]  md:w-[35rem] w-[20rem]
            leading-[1em]"
            >
              GET COOL ALMOND CARDS
            </p>
            <p className="font-semibold text-[1rem] w-full text-white lg:text-center text-start md:text-center">
              Get one that matches your vibe
            </p>
            <p className=" w-full font-light text-[0.8rem] text-[white] lg:text-center text-start md:text-center">
              Some cards are only available on subscription plans
            </p>
          </div>

          <div className="w-full flex items-center justify-center">
            <Spline
              scene="https://prod.spline.design/jkIwlR-DuCdLVZ20/scene.splinecode"
              className="w-[50%]"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </section>
      <section className="lg:h-screen md:h-[75vh] flex lg:flex-row flex-col  lg:justify-center lg:items-center  justify-center items-center gap-[0.2rem] ">
        <div
          className="
        flex flex-col
        lg:items-center
        lg:justify-center
        lg:w-full
        md:w-full md:justify-center
        md:items-center gap-[0.2rem] "
        >
          <p
            className="font-black lg:text-[3.5rem]
           md:text-[3rem] text-[1.8rem] uppercase
           md:text-center
           lg:text-start
           text-[black] lg:leading-[3rem]
           md:w-[35rem] w-[20rem]
           md:leading-[2.8rem] leading-[2rem]"
          >
            SEND AND RECEIVE MOENY FROM ACROSS THE GLOBE
          </p>
          <p className="lg:text-[1rem] text-[0.8rem] mt-[0.8rem] font-semibold   md:w-[35rem] w-[20rem]">
            Seamless Cross-Border Transactions: Receive money effortlessly with
            your universal account number, bridging the gap between continents,
            from the USA and the UK to Morocco.
          </p>
          <button className="w-[180px] h-[40px] rounded-2xl bg-[#15F4B1] cursor-pointer hover:bg-[#10c28c] font-semibold text-[black] my-[1rem]">
            See how it works
          </button>
        </div>
        <div className=" justify-start flex lg:w-full md:w-full md:justify-center ">
          <img
            className="lg:w-[20rem] md:w-[18rem] w-[15rem] rounded-[20px]"
            src={r5}
          />
        </div>
      </section>
      <section className="h-screen md:h-[100vh] flex lg:flex-row   flex-col-reverse gap-[1rem] justify-center items-center object-center lg:mt-[0] ">
        <div className="justify-start flex lg:w-full md:w-full md:justify-center">
          <img
            className="lg:w-[20rem] md:w-[19rem] w-[15rem] rounded-[20px]"
            src={r2}
          />
        </div>
        <div
          className="
        flex flex-col
        lg:items-center
        lg:justify-center
        lg:w-full
        md:w-full md:justify-center
        md:items-center gap-[0.2rem] "
        >
          <p
            className="font-black lg:text-[3.5rem]
           md:text-[3rem] text-[1.8rem] uppercase
           md:text-center
           lg:text-start
           text-[black] lg:leading-[3rem]
           md:w-[35rem] w-[20rem]
           md:leading-[2.8rem] leading-[2rem]"
          >
            Premium financial security
          </p>
          <p className="lg:text-[1rem] text-[0.8rem] mt-[0.8rem] font-semibold   md:w-[35rem] w-[20rem]">
            Your Money, Our Priority: 360-Degree Security for Peace of Mind. Our
            dedicated team ensures 24/7 monitoring, vigilant customer care,
            anti-scam protection, and proactive fund retrieval
            efforts—safeguarding your financial peace in every scenario
          </p>
          <button className="w-[100px] h-[40px] rounded-2xl bg-[#15F4B1] cursor-pointer hover:bg-[#10c28c] font-semibold text-[black] mt-[1rem]">
            try it
          </button>
        </div>

        <div></div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
