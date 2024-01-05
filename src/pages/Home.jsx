import React from "react";
import Nav from "../components/Nav";
import Hero from "../assets/hero-2.jpg";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import Dropdown from "../components/Dropdown";
import RegisterPopup from "../components/RegisterPopup";

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

import Comp1 from "../assets/comp1.png";
import Comp2 from "../assets/comp2.png";
import Comp3 from "../assets/comp3.png";
import Comp4 from "../assets/comp4.png";
import Comp5 from "../assets/comp5.png";
import Comp6 from "../assets/comp6.svg";
import Comp7 from "../assets/comp7.svg";
import Comp8 from "../assets/comp8.svg";
import Comp9 from "../assets/comp9.svg";
import gold from "../assets/gold.jpg";
import grains from "../assets/grains.jpg";
import oil from "../assets/oil.jpg";
import card1 from "../assets/card-1.png";
import card2 from "../assets/card-2.png";
import card3 from "../assets/card-3.png";
import { useState } from "react";

const Home = () => {
  const options = [grains, oil, gold];
  const [active, setActive] = useState(0);
  const [background, setBackground] = useState(grains);
  const [popUp, setPopup] = useState(false);

  const handleRegister = () => {
    setPopup(!popUp);
  };
  const changeBackground = (e) => {
    const target = e.target;
    const pos = target.id;
    setActive(pos);
    setBackground(options[pos]);
  };
  const swiperSlide = useSwiperSlide();
  const [dropdown, setDropdown] = useState(false);
  const menuClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="overflow-x-hidden">
      {/* <Menu dropdown menuClick={menuClick} /> */}
      <Nav handleClick={menuClick} dropdown={dropdown} />
      <Dropdown handleClick={menuClick} dropdown={dropdown} />
      <RegisterPopup popup={popUp} handleClick={handleRegister} />
      {/* Hero section */}
      <section
        className="bg-cover bg-center h-screen flex justify-center items-center overflow-x-hidden"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="flex justify-center items-center text-left w-[50vw]">
          <span className="z-[50] relative lg:bottom-[0rem] bottom-[5rem] flex gap-[2rem] flex-col">
            <p className="lg:text-[5rem] text-[3rem] text-[white] font-black leading-[1em] uppercase">
              The all-in One bank app.{" "}
            </p>
            <span className="flex flex-col gap-[0.2rem]">
              <p className="lg:text-[1rem] text-[white] w-[20rem] font-semibold">
                Why use like 20 different banking apps when you can use one that
                works well and does all of them ?
              </p>

              <button
                onClick={handleRegister}
                className="rounded-[1rem] lg:w-[300px] md:p-[1rem] bg-[#15F4B1] cursor-pointer hover:bg-[#10c28c] font-semibold text-[black]"
              >
                get app
              </button>
            </span>
          </span>
          <div class="border-solid border-r-[3px] border-l-[3px] border-t-[3px] border-gray-300 border- absolute right-[20rem] md:right-[12rem]  top-[13.5rem] md:top-[35rem] w-[26rem] md:scale-[0.7] h-[31rem] rounded-[30px] bg-[black]  bg-opacity-5">
            <img className="      bg-opacity-5" src={Comp1} />
          </div>
        </div>
      </section>
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
        <div className="lg:w-[50vw] w-[200vw] flex items-center justify-center mt-[3rem] ">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
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
              <Slide src={Comp3} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide src={Comp2} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide src={Comp4} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide src={Comp5} />
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

          <div className="w-full  h-[60vh] flex justify-center items-center ">
            <img
              src={card1}
              className="relative lg:scale-100 md:scale-100 scale-[0.7] lg:left-[12rem] md:left-[15rem] left-[17rem]  hover:rotate-90 transition-all duration-500 ease-in"
            />
            <img
              className=" lg:scale-100 scale-[0.7] md:scale-100  relative lg:left-[7rem] md:left-[6rem] left-[5rem] "
              src={card2}
            />
            <img
              className="  lg:scale-100 scale-[0.7]  md:scale-100 relative lg:right-[25rem]  right-[23rem] "
              src={card3}
            />
            {/* <Spline
              scene="https://prod.spline.design/jkIwlR-DuCdLVZ20/scene.splinecode"
              className="w-[50%]"
              style={{ width: "100%" }}
            /> */}
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
          <button className="rounded-[1rem] p-[1rem]  bg-[#15F4B1] cursor-pointer hover:bg-[#10c28c] font-semibold text-[black] my-[1rem]">
            See how it works
          </button>
        </div>
        <div className=" justify-start flex lg:w-full md:w-full md:justify-center ">
          <img
            className="lg:w-[20rem] md:w-[18rem] w-[15rem] rounded-[20px]"
            src={Comp6}
          />
          {/* <Spline scene="https://prod.spline.design/hKwXHwuN6kawj5SH/scene.splinecode" /> */}
        </div>
      </section>
      <section className="h-screen md:h-[100vh] flex lg:flex-row   flex-col-reverse gap-[1rem] justify-center items-center object-center lg:mt-[0] ">
        <div className="justify-start flex lg:w-full md:w-full md:justify-center">
          <img
            className="lg:w-[20rem] md:w-[19rem] w-[15rem] rounded-[20px]"
            src={Comp8}
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
          <button className="rounded-[1rem] p-[1rem] bg-[#15F4B1] cursor-pointer hover:bg-[#10c28c] font-semibold text-[black] mt-[1rem]">
            try it
          </button>
        </div>

        <div></div>
      </section>
      <section
        className="bg-cover bg-center h-screen md:h-[60vh] flex gap-[2rem] items-center flex-col justify-start overflow-x-hidden transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${background})` }}
      >
        <p className="font-extrabold lg:text-[3rem] lg:mt-[3rem] lg:w-[40rem]  md:w-[35rem] w-[20rem] text-[2rem] uppercase lg:text-center text-start leading-[1em] text-[white]">
          Invest in Grains, Oil, and Precious Metal
        </p>
        <span className="flex flex-col gap-[0.7rem]">
          <p className="text-white font-bold text-[1rem]">
            {" "}
            Unlock a Bountiful Portfolio with Commodities
          </p>
          <p className="text-white font-light md:w-[35rem] w-[20rem] ">
            From nutrient-rich grains to the energy potential of crude oil and
            the timeless allure of gold and precious metals, seize the
            opportunity to cultivate both your table and your wealth. Delve into
            fields of financial growth, where every investment is a harvest of
            prosperity.
          </p>
        </span>
        <button
          onClick={handleRegister}
          className="text-[black] bg-white hover:bg-[#c4c3c3] font-medium rounded-[1rem] p-[1rem] cursor-pointer"
        >
          Sign up now
        </button>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-[2rem]">
          <span
            className={` transition-all duration-500 ease-in-out ${
              active == 0
                ? "py-[0.5rem] px-[2rem] bg-[white] text-black font-medium rounded-[20px] border-white border-[0.1rem] cursor-pointer"
                : "py-[0.5rem] px-[2rem] bg-white/25 hover:bg-white/35 font-medium text-white rounded-[20px] border-white border-[0.1rem] backdrop-blur-lg cursor-pointer"
            }  `}
            id="0"
            onClick={changeBackground}
          >
            Grains🌽
          </span>
          <span
            className={`transition-all duration-500 ease-in-out ${
              active == 1
                ? "py-[0.5rem] px-[2rem] bg-[white] text-black font-medium rounded-[20px] border-white border-[0.1rem] cursor-pointer"
                : "py-[0.5rem] px-[2rem] bg-white/25 hover:bg-white/35 font-medium text-white rounded-[20px] border-white border-[0.1rem] backdrop-blur-lg cursor-pointer"
            }  `}
            id="1"
            onClick={changeBackground}
          >
            Oil 🛢️
          </span>
          <span
            className={` transition-all duration-500 ease-in-out ${
              active == 2
                ? "py-[0.5rem] px-[2rem] bg-[white] text-black font-medium rounded-[20px] border-white border-[0.1rem] cursor-pointer"
                : "py-[0.5rem] px-[2rem] bg-white/25 hover:bg-white/35 font-medium text-white rounded-[20px] border-white border-[0.1rem] backdrop-blur-lg cursor-pointer"
            }  `}
            id="2"
            onClick={changeBackground}
          >
            Metal 🧈🧈
          </span>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
