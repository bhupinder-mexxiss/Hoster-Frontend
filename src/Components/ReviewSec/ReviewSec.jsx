import React, { useRef } from "react";
import { Heading } from "../Heading/Heading";
import user from "../../assets/images/user.png";
import starIcon from "../../assets/icons/starIcon.png";
import leftKey from "../../assets/icons/leftKey.png";
import rightKey from "../../assets/icons/rightKey.png";
import "./ReviewSec.css";
import Slider from "react-slick/lib/slider";

const ReviewSec = () => {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px",
          dots: true,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="pt-16 md:pt-20 lg:pt-28 ReviewSec">
      <div className="container mx-auto">
        <div>
          <div className="max-w-[980px] mx-auto">
            <Heading
              children="What our clients say"
              size="4xl"
              fontWeight="600"
              className="text-center"
              as="h4"
            />
            <p
              className="text-white text-[15px] xs:text-base sm:text-lg opacity-80 text-center 
mt-3 sm:mt-4 md:mt-6"
            >
              Your trusted hosting partner since 2005. Here's what some of our
              customers say about us
            </p>
          </div>
          <div className="md:px-8 mt-10 md:mt-14 relative">
            <button
              className="hidden md:inline-block absolute top-1/2 -translate-y-1/2 left-0 opacity-50 hover:opacity-100 duration-300"
              onClick={previous}
            >
              <img src={leftKey} className="w-7" alt="" />
            </button>
            <Slider ref={sliderRef} {...settings}>
              <div className="px-1 xs:px-3">
                <div>
                  <div>
                    <img
                      src={user}
                      alt=""
                      className="w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto"
                    />
                  </div>
                  <div className="relative py-5 sm:py-6 px-3 sm:px-5 rounded-2xl border border-white mt-8 box">
                    <p className="text-white text-sm sm:text-base line-clamp-3">
                      Host provides solid value in VPS hosting with great prices
                      that provide the best premium support and excellent
                      up-time in the industry.
                    </p>
                  </div>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-medium opacity-70 text-center my-3">
                    Mr. Israr Ahmad
                  </p>
                  <div>
                    <ul className="flex items-center justify-center gap-1">
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="px-1 xs:px-3">
                <div>
                  <div>
                    <img
                      src={user}
                      alt=""
                      className="w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto"
                    />
                  </div>
                  <div className="relative py-5 sm:py-6 px-3 sm:px-5 rounded-2xl border border-white mt-8 box">
                    <p className="text-white text-sm sm:text-base line-clamp-3">
                      Host provides solid value in VPS hosting with great prices
                      that provide the best premium support and excellent
                      up-time in the industry.
                    </p>
                  </div>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-medium opacity-70 text-center my-3">
                    Mr. Israr Ahmad
                  </p>
                  <div>
                    <ul className="flex items-center justify-center gap-1">
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="px-1 xs:px-3">
                <div>
                  <div>
                    <img
                      src={user}
                      alt=""
                      className="w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto"
                    />
                  </div>
                  <div className="relative py-5 sm:py-6 px-3 sm:px-5 rounded-2xl border border-white mt-8 box">
                    <p className="text-white text-sm sm:text-base line-clamp-3">
                      Host provides solid value in VPS hosting with great prices
                      that provide the best premium support and excellent
                      up-time in the industry.
                    </p>
                  </div>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-medium opacity-70 text-center my-3">
                    Mr. Israr Ahmad
                  </p>
                  <div>
                    <ul className="flex items-center justify-center gap-1">
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                      <li>
                        <img src={starIcon} alt="" className="w-3.5" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Slider>
            <button
              className="hidden md:inline-block absolute top-1/2 -translate-y-1/2 right-0 opacity-50 hover:opacity-100 duration-300"
              onClick={next}
            >
              <img src={rightKey} className="w-7" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSec;
