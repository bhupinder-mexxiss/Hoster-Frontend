import React, { useState } from "react";
import { Heading } from "../../Heading/Heading";
import image16 from "../../../assets/images/image16.png";
import image17 from "../../../assets/images/image17.png";
import image18 from "../../../assets/images/image18.png";
import Slider from "react-slick";
import { FastForward } from "@mui/icons-material";
import CustomButton from "../../CustomButton/CustomButton";

const WebsiteTemplates = () => {
  const [isActive, setIsActive] = useState("Online Store");
  const Cate = [
    "Online Store",
    "Coming Soon",
    "Fashion & Beauty",
    "Home Service",
    "Health & Fitness",
    "Restaurant & Food",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "28%",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "18%",
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "8%",
        },
      },
      {
        breakpoint: 660,
        settings: {
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "10%",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: "6%",
        },
      },
      {
        breakpoint: 992,
        settings: {
          //   slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <div className="pt-16 md:pt-20 lg:pt-24 ">
      <div className="container mx-auto ">
        <div className="mx-auto ">
          <p className="text-white text-center lg:text-lg mb-5 ">
            Website Templates
          </p>
          <Heading
            as="h4"
            children="Whatever website you'll build, it'll look good."
            size="4xl"
            className="capitalize text-center"
            fontWeight="700"
          />
          <div className="flex flex-wrap gap-2 gap-y-4 md:gap-5 mt-5 justify-center">
            {Cate.map((e, index) => (
              <button
                key={index}
                className={`text-sm md:text-base lg:text-lg py-2 px-7 border rounded-full hover:border-white duration-300 ${
                  isActive === e
                    ? "bg-white border-white text-[#03091D]"
                    : "text-white border-[#81848E]"
                }`}
                onClick={() => setIsActive(e)}
              >
                {e}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 md:mt-14">
          <div>
            <Slider {...settings}>
              <div className="px-2 sm:px-3">
                <div className=" h-[250px] sm:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden relative group">
                  <img
                    src={image16}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bg-[#000000BF] w-full h-full top-0 left-0 flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300">
                    <div className="flex flex-col gap-5">
                      <CustomButton
                        label="Start Editing"
                        variant="pinkPurple-100"
                        height="50"
                        className="w-full min-w-[180px] md:min-w-[250px] mx-auto"
                      />
                      <CustomButton
                        label="Preview"
                        variant="none"
                        height="50"
                        className="border border-white w-full min-w-[180px] md:min-w-[250px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 sm:px-3">
                <div className=" h-[250px] sm:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden relative group">
                  <img
                    src={image17}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bg-[#000000BF] w-full h-full top-0 left-0 flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300">
                    <div className="flex flex-col gap-5">
                      <CustomButton
                        label="Add to Cart"
                        variant="pinkPurple-100"
                        height="50"
                        className="w-full min-w-[180px] md:min-w-[250px] mx-auto"
                      />
                      <CustomButton
                        label="Start for Free"
                        variant="none"
                        height="50"
                        className="border border-white w-full min-w-[180px] md:min-w-[250px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 sm:px-3">
                <div className=" h-[250px] sm:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden relative group">
                  <img
                    src={image18}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bg-[#000000BF] w-full h-full top-0 left-0 flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300">
                    <div className="flex flex-col gap-5">
                      <CustomButton
                        label="Add to Cart"
                        variant="pinkPurple-100"
                        height="50"
                        className="w-full min-w-[180px] md:min-w-[250px] mx-auto"
                      />
                      <CustomButton
                        label="Start for Free"
                        variant="none"
                        height="50"
                        className="border border-white w-full min-w-[180px] md:min-w-[250px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="md:mt-6">
            <Slider {...settings2}>
              <div className="px-2 sm:px-3">
                <div className=" h-[250px] sm:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden relative group">
                  <img
                    src={image16}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bg-[#000000BF] w-full h-full top-0 left-0 flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300">
                    <div className="flex flex-col gap-5">
                      <CustomButton
                        label="Start Editing"
                        variant="pinkPurple-100"
                        height="50"
                        className="w-full min-w-[180px] md:min-w-[250px] mx-auto"
                      />
                      <CustomButton
                        label="Preview"
                        variant="none"
                        height="50"
                        className="border border-white w-full min-w-[180px] md:min-w-[250px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 sm:px-3">
                <div className=" h-[250px] sm:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden relative group">
                  <img
                    src={image17}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bg-[#000000BF] w-full h-full top-0 left-0 flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300">
                    <div className="flex flex-col gap-5">
                      <CustomButton
                        label="Add to Cart"
                        variant="pinkPurple-100"
                        height="50"
                        className="w-full min-w-[180px] md:min-w-[250px] mx-auto"
                      />
                      <CustomButton
                        label="Start for Free"
                        variant="none"
                        height="50"
                        className="border border-white w-full min-w-[180px] md:min-w-[250px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 sm:px-3">
                <div className=" h-[250px] sm:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden relative group">
                  <img
                    src={image18}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bg-[#000000BF] w-full h-full top-0 left-0 flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300">
                    <div className="flex flex-col gap-5">
                      <CustomButton
                        label="Add to Cart"
                        variant="pinkPurple-100"
                        height="50"
                        className="w-full min-w-[180px] md:min-w-[250px] mx-auto"
                      />
                      <CustomButton
                        label="Start for Free"
                        variant="none"
                        height="50"
                        className="border border-white w-full min-w-[180px] md:min-w-[250px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteTemplates;
