import React from "react";
import banner1 from "../../assets/images/Banner1.png";
import { Heading } from "../Heading/Heading";
import CustomButton from "../CustomButton/CustomButton";

const Banner = () => {
  return (
    <div className="py-6 sm:py-10 lg:pt-14 lg::pb-36 ">
      <div className="container mx-auto">
        <div>
          <div className="lg:flex flex-col lg:flex-row items-center relative py-10">
            <div className="md:w-3/4 lg:w-3/5 order-2 lg:order-1 relative z-10">
              <Heading
                as="h2"
                children="Reliable Web Hosting Platform for Your Website"
                size="5xl"
                fontWeight="700"
                
              />
              <p className="my-6 sm:text-lg text-[#CFD0D4]">
                Fully Managed High Performance Web Hosting With Free Domain
              </p>
              <div className="xs:flex gap-4">
                <CustomButton
                  label="Try for 7 days free"
                  height="50"
                  className="px-6 md:px-8"
                />
                <CustomButton
                  label="Choose your plan"
                  variant="none"
                  height="50"
                  className="px-6 md:px-8 border border-white mt-3 xs:mt-0"
                />
              </div>
            </div>
            <div className="h-full w-full lg:w-2/5 order-2 lg:order-1 absolute lg:static top-0 left-1/2 -translate-x-1/2 lg:translate-x-0">
              <img src={banner1} alt="" className="ml-auto lg:mx-auto max-w-[620px] h-full w-full object-contain opacity-30 sm:opacity-50 lg:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
