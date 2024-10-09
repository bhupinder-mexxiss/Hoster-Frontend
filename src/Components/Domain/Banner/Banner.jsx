import React from "react";
import banner1 from "../../../assets/images/Banner1.png";
import { Heading } from "../../Heading/Heading";
import CustomButton from "../../CustomButton/CustomButton";
import InputComp from "../../InputComp/InputComp";

const Banner = () => {
  return (
    <div className="pt-4 sm:py-6 ">
      <div className="container mx-auto">
        <div>
          <div className="lg:flex flex-col lg:flex-row items-center relative py-10 gap-10">
            <div className="md:w-3/4 lg:w-3/5 order-2 lg:order-1 relative z-10">
              <p className="mb-6 sm:text-lg text-[#CFD0D4]">
                It all starts with registering a domain.
              </p>
              <Heading
                as="h2"
                children="It all starts with registering a domain."
                size="5xl"
                className="capitalize pr-10"
                fontWeight="700"
              />
              <p className="mt-6 sm:text-lg text-[#CFD0D4] flex">
                <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                Use the power of AI to generate a unique domain name
              </p>
              <p className="mb-8 sm:mb-12 sm:text-lg text-[#CFD0D4] mt-2 flex">
                <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                Get your .com for as low as ₹ 1.00*
              </p>
              <div className="max-w-[600px]">
                <InputComp
                  placeholder="Type Your Domain Name"
                  btnlabel="Search"
                />
                <div className="mt-6 sm:mt-8">
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                    <div className="text-center text-white">
                      <p className="text-lg ">.com</p>
                      <p className="text-sm opacity-60 mt-1 sm:mt-3">199/Mo</p>
                    </div>
                    <div className="text-center text-white">
                      <p className="text-lg">.org</p>
                      <p className="text-sm opacity-60 mt-1 sm:mt-3">179/Mo</p>
                    </div>
                    <div className="text-center text-white">
                      <p className="text-lg">.net</p>
                      <p className="text-sm opacity-60 mt-1 sm:mt-3">159/Mo</p>
                    </div>
                    <div className="text-center text-white">
                      <p className="text-lg">.co.uk</p>
                      <p className="text-sm opacity-60 mt-1 sm:mt-3">139/Mo</p>
                    </div>
                    <div className="text-center text-white">
                      <p className="text-lg">.info</p>
                      <p className="text-sm opacity-60 mt-1 sm:mt-3">119/Mo</p>
                    </div>
                    <div className="text-center text-white">
                      <p className="text-lg">.edu</p>
                      <p className="text-sm opacity-60 mt-1 sm:mt-3">99/Mo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full lg:w-2/5 order-2 lg:order-1 absolute lg:static top-0 left-1/2 -translate-x-1/2 lg:translate-x-0">
              <img
                src={banner1}
                alt=""
                className="ml-auto lg:mx-auto max-w-[620px] h-full w-full object-contain opacity-30 sm:opacity-50 lg:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
