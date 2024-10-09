import React from "react";
import { Heading } from "../../Heading/Heading";
import icon17 from "../../../assets/icons/icon17.png";
import icon18 from "../../../assets/icons/icon18.png";
import icon19 from "../../../assets/icons/icon19.png";

const WhyTransfer = () => {
  return (
    <div className="py-16 md:py-20 lg:py-28 ">
      <div className="container mx-auto">
        <Heading
          children="Why transfer domains"
          size="4xl"
          fontWeight="600"
          className="text-center"
          as="h4"
        />
        <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6">
          HOST.CO.IN. offers several Add-Ons services that you can use to
          increase your web site's functionality, security, and more.
        </p>
        <div className="mt-10 md:mt-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5 md:gap-5 xl:gap-7">
            <div className="bg-pinkPurple-gradient-100 px-3 md:px-6 py-8 xl:p-8 2xl:p-10 text-center rounded-[30px]">
              <div>
                <img src={icon17} alt="" className="w-16 mx-auto" />
              </div>
              <Heading
                children="30-Day Guarantee"
                size="xxl"
                fontWeight="600"
                className="my-5"
              />
              <p className="text-white">
                Hostcity is the strategic partner for your online journey you
                every step of the way.
              </p>
            </div>
            <div className="bg-pinkPurple-gradient-100 px-6 py-8 xl:p-8 2xl:p-10 text-center rounded-[30px]">
              <div>
                <img src={icon18} alt="" className="w-16 mx-auto" />
              </div>
              <Heading
                children="MSSQL & ASP.NET"
                size="xxl"
                fontWeight="600"
                className="my-5"
              />
              <p className="text-white">
                Hostcity is the strategic partner for your online journey you
                every step of the way.
              </p>
            </div>
            <div className="bg-pinkPurple-gradient-100 px-6 py-8 xl:p-8 2xl:p-10 text-center rounded-[30px]">
              <div>
                <img src={icon19} alt="" className="w-16 mx-auto" />
              </div>
              <Heading
                children="24x7 Pro Support"
                size="xxl"
                fontWeight="600"
                className="my-5"
              />
              <p className="text-white">
                Hostcity is the strategic partner for your online journey you
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTransfer;
