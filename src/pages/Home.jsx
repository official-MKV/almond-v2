import React, { lazy } from "react";
import Nav from "../components/Nav";
import Hero from "../assets/hero-2.jpg";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

import Slide from "../components/Slide";

// Lazy Loaded Components
const Footer = lazy(() => import("../components/Footer"));
const Dropdown = lazy(() => import("../components/Dropdown"));
const RegisterPopup = lazy(() => import("../components/RegisterPopup"));
const Globe = lazy(() => import("../components/Globe"));

import { animate, motion, useAnimate } from "framer-motion";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";

import Comp1 from "../assets/comp1.png";
import Comp2 from "../assets/comp2.png";
import Comp3 from "../assets/comp3.png";
import Comp4 from "../assets/comp4.png";
import Comp5 from "../assets/comp5.png";
import Comp8 from "../assets/comp8.svg";
import gold from "../assets/gold.jpg";
import grains from "../assets/grains.jpg";
import oil from "../assets/oil.jpg";
import card1 from "../assets/card-1.png";
import card2 from "../assets/card-2.png";
import card3 from "../assets/card-3.png";
import { useState, useRef } from "react";

const Home = () => {
  const options = [grains, oil, gold];
  const [active, setActive] = useState(0);
  const [background, setBackground] = useState(grains);
  const [popUp, setPopup] = useState(false);
  const [popupref, animate] = useAnimate();

  const handleRegister = () => {
    setPopup(!popUp);
    console.log(popUp);
    if (popUp == false) {
      animate(
        popupref.current,
        {
          opacity: [0, 1, 1],
          x: [100, 50, 0],
        },
        { duration: 2 }
      );
    } else {
      animate(
        popupref.current,
        {
          opacity: [1, 0.5, 0],
          x: [0, 50, 100],
        },
        { duration: 2 }
      );
    }
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
      <Nav handleClick={menuClick} dropdown={dropdown} black={false} />
      <Dropdown handleClick={menuClick} dropdown={dropdown} />
      <RegisterPopup
        forwardedref={popupref}
        popup={popUp}
        handleClick={handleRegister}
      />

      <section
        className="bg-cover bg-center h-screen flex justify-center items-center overflow-x-hidden"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="flex justify-center items-center text-left lg:w-[50vw] md:w-[70vw] h-full w-[100vw]">
          <span className="z-[50] relative lg:bottom-[0rem] bottom-[5rem] flex lg:gap-[2rem] flex-col w-full px-[1rem]">
            <motion.p
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3 }}
              initial={{ opacity: 0, y: -200 }}
              className="lg:text-[5rem] md:text-[4rem] text-[3rem] text-[white] font-black leading-[1em] uppercase"
            >
              The all-in One bank app.{" "}
            </motion.p>
            <span className="flex flex-col gap-[0.2rem]">
              <motion.p
                whileInView={{
                  x: [-200, -100, -50, 0],
                  opacity: [0, 0, 0.5, 1],
                }}
                transition={{ duration: 2 }}
                initial={{ opacity: 0, x: -200 }}
                className="lg:text-[1rem] text-[0.8rem] text-[white] lg:w-[30rem] font-semibold"
              >
                Discover unprecedented ease and empowerment with Almond—the
                all-in-one bank app. From intuitive interfaces to personalized
                solutions, cutting-edge tech, and swift support, we simplify,
                secure, and enhance your financial journey. Welcome to elevated
                banking.
              </motion.p>

              <button
                onClick={handleRegister}
                className="rounded-[1rem] lg:w-[20%] md:p-[1rem] w-[8rem] py-[1rem] mx-auto bg-[#7D5DF6] cursor-pointer hover:bg-[#ECE7FE]  font-bold hover:text-[black] text-[white] "
              >
                Get app
              </button>
            </span>
          </span>
          <div
            class="border-solid border-r-[3px] border-l-[3px] border-t-[3px]
         border-gray-300 absolute  bg-[black]
         top-[55vh] right-[0rem] mx-[2rem] h-[18rem] rounded-[30px]
         md:scale-[1] md:mx-[5rem]  md:h-[43vh] md:top-[35rem] md:rounded-[30px]
          lg:scale-[0.4] lg:absolute lg:left-[30rem] lg:h-full lg:top-[10rem]
         bg-opacity-5"
          >
            <img className="bg-opacity-5" src={Comp1} />
          </div>
        </div>
      </section>
      <section className="lg:h-screen md:h-[100vh] h-[80vh] bg-[white] flex flex-col items-center text-center overflow-x-hidden overflow-y-hidden">
        <div className="flex flex-col justify-center items-center lg:mt-[4rem] md:mt-[4rem] mt-[3rem] gap-[1rem] lg:w-[35rem] w-[20rem]">
          <p className="font-extrabold lg:text-[3.5rem]  text-[2rem] uppercase lg:text-center text-start leading-[1em]">
            Spend Everyday Like the 1%{" "}
          </p>
          <p className="font-semibold lg:text-[1.1rem] md:text- text-[0.8rem] lg:w-[35rem] lg:text-center text-start">
            Get a discount on everything, Send money from you NGN account to
            anywhere in the world, Accumulate points to use at the most
            luxurious institutions{" "}
          </p>
          <p className="font-light text-[0.8rem] lg:text-center text-start cursor-pointer hover:text-[#7154DD] ">
            T & C's apply
          </p>
        </div>
        {/* Slide */}
        <div className="lg:w-[50vw]   w-[200vw] flex items-center justify-center mt-[3rem] ">
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
      <section className="lg:h-screen  h-[75vh] flex flex-col bg-[black]  ">
        <div className="flex-[0.2] w-full flex flex-col justify-center items-center text-center ">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: [0, 0.5, 1], y: 0 }}
            transition={{ duration: 2 }}
            className="flex flex-col justify-center items-center mt-[6rem] gap-[0.5rem] lg:w-[35rem]  md:w-[35rem] w-[20rem]"
          >
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
          </motion.div>

          <div className="w-[100vw] lg:h-[60vh] h-[45vh] flex justify-center items-center  ">
            <motion.img
              initial={{ opacity: 0, rotate: -90 }}
              whileInView={{ opacity: 1, rotate: [-90, -45, 0] }}
              transition={{ duration: 3 }}
              src={card1}
              className="relative lg:w-[380px] md:w-[380px]   w-[234px] lg:left-[12rem] md:left-[10rem] left-[7rem] "
            />
            <motion.img
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: [0, 0.5, 1], rotate: [90, 45, 0] }}
              transition={{ duration: 3 }}
              className=" lg:w-[380px] md:w-[380px] w-[234px] md:rotate-[30] relative lg:left-[7rem] md:left-[6rem] left-[2rem] "
              src={card2}
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 0, 1] }}
              transition={{ duration: 3, delay: 1.5 }}
              className=" lg:w-[250px] md:w-[250px] w-[150px]   relative lg:right-[22rem] md:right-[23rem]  right-[14rem] "
              sty
              src={card3}
            />
          </div>
        </div>
      </section>
      <section className="lg:h-screen md:h-[75vh] h-[75vh] mt-[1rem] flex lg:flex-row flex-col  lg:justify-center lg:items-center  justify-center items-center lg:gap-[0.2rem]  ">
        <div
          className="
        flex flex-col
        lg:items-center
        lg:justify-center
        lg:w-full
        md:w-full md:justify-center
        md:items-center gap-[0.2rem] "
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="font-black lg:text-[3.5rem]
           md:text-[3rem] text-[1.8rem] uppercase
           md:text-center
           lg:text-start
           text-[black] lg:leading-[3rem]
           md:w-[35rem] w-[20rem]
           md:leading-[2.8rem] leading-[2rem]"
          >
            SEND AND RECEIVE MONEY FROM ACROSS THE GLOBE
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:text-[1rem] text-[0.8rem] mt-[0.8rem] font-semibold   md:w-[35rem] w-[20rem]"
          >
            Seamless Cross-Border Transactions: Receive money effortlessly with
            your universal account number, bridging the gap between continents,
            from the USA and the UK to Morocco.
          </motion.p>
          <button className="rounded-[1rem] p-[1rem]    border-solid border-[2px] border-[#7D5DF6] cursor-pointer font-semibold text-[#7D5DF6] hover:text-[white] hover:bg-[#7D5DF6] my-[1rem]">
            See how it works
          </button>
        </div>
        <div className=" justify-start flex lg:w-full md:w-full md:justify-center  ">
          {/* <motion.img
            whileInView={{ scale: [1, 0.5, 1] }}
            transition={{ duration: 2 }}
            className="lg:w-[30rem] md:w-[19rem] w-[15rem] "
            src={Comp8}
          /> */}
          <Globe />
          {/* <Spline scene="https://prod.spline.design/hKwXHwuN6kawj5SH/scene.splinecode" /> */}
        </div>
      </section>
      <section className="lg:h-screen md:h-[100vh] h-[75vh] mb-[2rem] flex lg:flex-row   flex-col-reverse lg:gap-[1rem] gap-[3rem] justify-center items-center object-center lg:mt-[0] ">
        <div className="justify-start flex lg:w-full md:w-full md:justify-center">
          <motion.img
            whileInView={{ scale: [1, 0.5, 1] }}
            transition={{ duration: 2 }}
            className="lg:w-[30rem] md:w-[19rem] w-[15rem] "
            src={Comp8}
          />
        </div>
        <div
          initial={{ opacity: 0 }}
          whileinView={{ opacity: 1 }}
          transition={{ duration: 6 }}
          className="
        flex flex-col
        lg:items-center
        lg:justify-center
        lg:w-full
        md:w-full md:justify-center
        md:items-center gap-[0.2rem] "
        >
          <motion.p
            className="font-black lg:text-[3.5rem]
           md:text-[3rem] text-[1.8rem] uppercase
           md:text-center
           lg:text-start
           text-[black] lg:leading-[3rem]
           md:w-[35rem] w-[20rem]
           md:leading-[2.8rem] leading-[2rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Premium financial security
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:text-[1rem] text-[0.8rem] mt-[0.8rem] font-semibold   md:w-[35rem] w-[20rem]"
          >
            Your Money, Our Priority: 360-Degree Security for Peace of Mind. Our
            dedicated team ensures 24/7 monitoring, vigilant customer care,
            anti-scam protection, and proactive fund retrieval
            efforts—safeguarding your financial peace in every scenario
          </motion.p>
          <a
            href="/how-we-secure-your-money"
            className="rounded-[1rem] p-[1rem] bg-[#7D5DF6] cursor-pointer hover:bg-[#ECE7FE] font-semibold hover:text-[black] mt-[1rem] text-[white] text-center"
          >
            Read more
          </a>
        </div>

        <div></div>
      </section>
      <section
        className="bg-cover bg-center lg:h-screen md:h-[60vh] h-[80vh]  flex gap-[2rem] items-center flex-col justify-start  transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${background})` }}
      >
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: [0, 0.5, 1], y: 0 }}
          transition={{ duration: 2 }}
          className="font-extrabold
          lg:text-[3rem] lg:mt-[3rem] lg:w-[40rem]
            md:w-[35rem] mt-[3rem] mx-[1rem]  text-[2rem] uppercase
            lg:text-center text-start leading-[1em] text-[white]"
        >
          Invest in Grains, Oil, and Precious Metal
        </motion.p>
        <motion.span
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: [0, 0.5, 1], x: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-[0.7rem]"
        >
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
        </motion.span>
        <button
          onClick={handleRegister}
          className=" bg-[#7D5DF6] hover:bg-[#c4c3c3] font-bold rounded-[1rem] p-[1rem] cursor-pointer text-[white] text-center"
        >
          Sign up now
        </button>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-[2rem] gap-[1rem]">
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={` transition-all duration-500 ease-in-out ${
              active == 0
                ? "py-[0.5rem] px-[2rem] bg-[white] text-black font-medium rounded-[20px] border-white border-[0.1rem] cursor-pointer"
                : "py-[0.5rem] px-[2rem] bg-white/25 hover:bg-white/35 font-medium text-white rounded-[20px] border-white border-[0.1rem] backdrop-blur-lg cursor-pointer"
            }  `}
            id="0"
            onClick={changeBackground}
          >
            Grains🌽
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={`transition-all duration-500 ease-in-out ${
              active == 1
                ? "py-[0.5rem] px-[2rem] bg-[white] text-black font-medium rounded-[20px] border-white border-[0.1rem] cursor-pointer"
                : "py-[0.5rem] px-[2rem] bg-white/25 hover:bg-white/35 font-medium text-white rounded-[20px] border-white border-[0.1rem] backdrop-blur-lg cursor-pointer"
            }  `}
            id="1"
            onClick={changeBackground}
          >
            Oil 🛢️
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -130 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={` transition-all duration-500 ease-in-out ${
              active == 2
                ? "py-[0.5rem] px-[2rem] bg-[white] text-black font-medium rounded-[20px] border-white border-[0.1rem] cursor-pointer"
                : "py-[0.5rem] px-[2rem] bg-white/25 hover:bg-white/35 font-medium text-white rounded-[20px] border-white border-[0.1rem] backdrop-blur-lg cursor-pointer"
            }  `}
            id="2"
            onClick={changeBackground}
          >
            Metal 🧈🧈
          </motion.span>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
