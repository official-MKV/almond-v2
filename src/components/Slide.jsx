import React from "react";
import { useSwiperSlide } from "swiper/react";

const Slide = ({ src }) => {
  const swiperSlide = useSwiperSlide();
  return (
    <img
      src={src}
      alt="Image 2"
      className={` w-[80%]    md:w-[80%] h-auto rounded-[20px] transition-all duration-1000 ease-in-out  ${
        swiperSlide.isActive
          ? "scale-100 rounded-[20px]"
          : "scale-75 rounded-[10px]"
      }  `}
    />
  );
};

export default Slide;
