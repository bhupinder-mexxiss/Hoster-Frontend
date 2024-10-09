import React from "react";
import { Heading } from "../Heading/Heading";
import icon11 from "../../assets/icons/icon11.png";
import icon10 from "../../assets/icons/icon10.png";
import icon9 from "../../assets/icons/icon9.png";
import rupeeIcon from "../../assets/icons/rupeeIcon.png";
import { CurrencyRupeeOutlined } from "@mui/icons-material";
import CustomButton from "../CustomButton/CustomButton";

const WebHosting = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <div>
          <div>
            <Heading
              children="Web Hosting Add-Ons"
              size="4xl"
              fontWeight="600"
              className="text-center"
              as="h4"
            />
            <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6">
              HOST.CO.IN. offers several Add-Ons services that you can use to
              increase your web site's functionality, security, and more.
            </p>
          </div>
          <div className="mt-10 sm:mt-16 pb-[30px]">
            <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-5 gap-y-10 lg:gap-8">
              <div className="bg-pinkPurple-gradient-70 rounded-2xl md:rounded-3xl cstmshadow px-4 pt-6 xl:px-7 xl:pt-7 pb-10 lg:pb-12 text-center relative">
                <div>
                  <img src={icon10} alt="" className=" mx-auto h-12 sm:h-14 lg:h-[72px]" />
                </div>
                <Heading
                  children="SSL Certificate"
                  size="xxl"
                  fontWeight="600"
                  className="mt-6 lg:mt-8"
                />
                <p className="my-4 lg:mt-6 lg:mb-6 xl:mb-8 text-sm lg:text-base text-white max-w-[420px] mx-auto">
                  Secure your transactions, website's communication and internet
                  browser with SSL encryption certificates of HOST.CO.IN
                </p>
                <p className="text-white flex items-center gap-2 justify-center">
                  <img src={rupeeIcon} className="w-4 lg:w-5" alt="" />{" "}
                  <span>
                    <span className=" text-2xl lg:text-[32px]">2499/</span>
                    <span className="text-xl lg:text-2xl">Yr</span>
                  </span>
                </p>
                <CustomButton
                  label="Learn More"
                  variant="blueGradient"
                  size="lg"
                  height="60"
                  className="w-full max-w-[65%] md:max-w-[80%] xl:max-w-[300px] mx-auto -mb-6 lg:-mb-[30px] mt-8 absolute bottom-0 left-1/2 -translate-x-1/2"
                />
              </div>
              <div className="bg-pinkPurple-gradient-70 rounded-2xl md:rounded-3xl cstmshadow px-4 pt-6 xl:px-7 xl:pt-7 pb-10 lg:pb-12 text-center relative">
                <div>
                  <img src={icon11} alt="" className=" mx-auto h-12 sm:h-14 lg:h-[72px]" />
                </div>
                <Heading
                  children="Spam Experts"
                  size="xxl"
                  fontWeight="600"
                  className="mt-6 lg:mt-8"
                />
                <p className="my-4 lg:mt-6 lg:mb-6 xl:mb-8 text-sm lg:text-base text-white max-w-[420px] mx-auto">
                  Protect your mailbox from Spam, virus and malware with a
                  complete solution from India's web hosting provider HOST.CO.IN
                </p>
                <p className="text-white flex items-center gap-2 justify-center">
                  <img src={rupeeIcon} className="w-4 lg:w-5" alt="" />{" "}
                  <span>
                    <span className=" text-2xl lg:text-[32px]">90/</span>
                    <span className="text-xl lg:text-2xl">Mo</span>
                  </span>
                </p>
                <CustomButton
                  label="Learn More"
                  variant="blueGradient"
                  size="lg"
                  height="60"
                  className="w-full max-w-[65%] md:max-w-[80%] xl:max-w-[300px] mx-auto -mb-6 lg:-mb-[30px] mt-8 absolute bottom-0 left-1/2 -translate-x-1/2"
                />
              </div>
              <div className="bg-pinkPurple-gradient-70 rounded-2xl md:rounded-3xl cstmshadow px-4 pt-6 xl:px-7 xl:pt-7 pb-10 lg:pb-12 text-center relative">
                <div>
                  <img src={icon9} alt="" className=" mx-auto h-12 sm:h-14 lg:h-[72px]" />
                </div>
                <Heading
                  children="Backup Solutions"
                  size="xxl"
                  fontWeight="600"
                  className="mt-6 lg:mt-8"
                />
                <p className="my-4 lg:mt-6 lg:mb-6 xl:mb-8 text-sm lg:text-base text-white max-w-[420px] mx-auto">
                  Let the experts handle your crucial data, backup your data
                  from reliable backup and recovery solution from HOST.CO.IN
                </p>
                <p className="text-white flex items-center gap-2 justify-center">
                  <img src={rupeeIcon} className="w-4 lg:w-5" alt="" />{" "}
                  <span>
                    <span className=" text-2xl lg:text-[32px]">500/</span>
                    <span className="text-xl lg:text-2xl">Mo</span>
                  </span>
                </p>
                <CustomButton
                  label="Learn More"
                  variant="blueGradient"
                  size="lg"
                  height="60"
                  className="w-full max-w-[65%] md:max-w-[80%] xl:max-w-[300px] mx-auto -mb-6 lg:-mb-[30px] mt-8 absolute bottom-0 left-1/2 -translate-x-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebHosting;
