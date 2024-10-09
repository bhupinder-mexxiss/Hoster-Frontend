import React from "react";
import { Heading } from "../Heading/Heading";
import icon13 from "../../assets/icons/icon13.png";
import icon14 from "../../assets/icons/icon14.png";
import icon12 from "../../assets/icons/icon12.png";
import icon15 from "../../assets/icons/icon15.png";

const WebsiteLive = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <div>
          <div className="max-w-[1040px] mx-auto">
            <Heading
              children="Get Your Website Live Today"
              size="4xl"
              fontWeight="600"
              className="text-center"
              as="h4"
            />
            <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6">
              Get everything that you require to set up your personal / business
              website and establish your online presence. Service includes web
              hosting in India, free domain registration along with 24x7
              Support.
            </p>
          </div>
          <div className="mt-14 max-w-[940px] mx-auto relative">
            <img src={icon15} className="w-[25%] sm:w-[28%] md:w-[34%] hidden xs:inline-block absolute left-20 md:left-[100px]" alt="" />
            <img src={icon15} className="w-[25%] sm:w-[30%] md:w-[34%] hidden xs:inline-block absolute top-[50px] right-[105px] sm:right-[125px] md:right-[135px] rotate-180" alt="" />
            <div className="grid grid-cols-2 gap-6 xs:flex items-center justify-between relative">
              <div>
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-pinkPurple-gradient-100 flex items-center justify-center">
                  <img src={icon13} alt="" className="w-12 md:w-16" />
                </div>
                <p className="text-white mt-3 sm:mt-5 text-sm sm:text-base md:text-lg font-medium text-center">
                  Register
                </p>
              </div>
              <div>
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-pinkPurple-gradient-100 flex items-center justify-center">
                  <img src={icon14} alt="" className="w-10 md:w-14" />
                </div>
                <p className="text-white mt-3 sm:mt-5 text-sm sm:text-base md:text-lg font-medium text-center">
                  Choose Plan
                </p>
              </div>
              <div>
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-pinkPurple-gradient-100 flex items-center justify-center">
                  <img src={icon12} alt="" className="w-12 md:w-16" />
                </div>
                <p className="text-white mt-3 sm:mt-5 text-sm sm:text-base md:text-lg font-medium text-center">
                  See your website live
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteLive;
