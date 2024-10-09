import React from "react";
import { Heading } from "../Heading/Heading";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";

const JoinUs = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <Heading
          children="What will you get if you join us ?"
          size="4xl"
          fontWeight="600"
          className="text-center"
          as="h4"
        />
        <p
          className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6"
        >
          Get the best hosting service at the price you can afford
        </p>
        <div className="flex flex-wrap xs:grid grid-cols-3 md:grid-cols-5 mt-14 gap-y-8 md:gap-0 justify-between">
          <div className="basis-1/2 xs:w-full text-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-pinkPurple-gradient-70 flex items-center justify-center mb-5 mx-auto">
              <img src={icon1} alt="" className="w-12 lg:w-14" />
            </div>
            <Heading children="5000+" size="xxl" fontWeight="500" />
            <p className="mt-1 text-white opacity-60 text-sm lg:text-base">
              Happy Clients
            </p>
          </div>
          <div className="basis-1/2 xs:w-full text-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-pinkPurple-gradient-70 flex items-center justify-center mb-5 mx-auto">
              <img src={icon2} alt="" className="w-12 lg:w-14" />
            </div>
            <Heading children="Maximum" size="xxl" fontWeight="500" />
            <p className="mt-1 text-white opacity-60 text-sm lg:text-base">
              Uptime
            </p>
          </div>
          <div className="basis-1/2 xs:w-full text-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-pinkPurple-gradient-70 flex items-center justify-center mb-5 mx-auto">
              <img src={icon3} alt="" className="w-12 lg:w-14" />
            </div>
            <Heading children="20+" size="xxl" fontWeight="500" />
            <p className="mt-1 text-white opacity-60 text-sm lg:text-base">
              Server Locations
            </p>
          </div>
          <div className="basis-1/2 xs:w-full text-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-pinkPurple-gradient-70 flex items-center justify-center mb-5 mx-auto">
              <img src={icon4} alt="" className="w-12 lg:w-14" />
            </div>
            <Heading children="24/7" size="xxl" fontWeight="500" />
            <p className="mt-1 text-white opacity-60 text-sm lg:text-base">
              Live Support
            </p>
          </div>
          <div className="basis-1/2 xs:w-full text-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-pinkPurple-gradient-70 flex items-center justify-center mb-5 mx-auto">
              <img src={icon5} alt="" className="w-12 lg:w-14" />
            </div>
            <Heading children="Tire 3" size="xxl" fontWeight="500" />
            <p className="mt-1 text-white opacity-60 text-sm lg:text-base">
              Certified Data Center
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
