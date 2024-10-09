import React from "react";
import { Heading } from "../Heading/Heading";
import InputComp from "../InputComp/InputComp";

const Newsletter = () => {
  return (
    <div className="bg-[#F1F1F11A] mt-16 md:mt-20 lg:mt-28">
      <div className="container mx-auto">
        <div className="py-10 sm:py-12 md:py-16">
          <div className="lg:flex items-center">
            <div className="lg:w-[55%] xl:w-3/5 text-center lg:text-start">
              <Heading
                children="Subscribe To Our Newsletter!"
                size="4xl"
                fontWeight="600"
                className=""
              />
              <p className="opacity-80 text-[15px] xs:text-base sm:text-lg mt-3 lg:mt-4 text-white">
                Get Regularly News and Exclusive Offers
              </p>
            </div>
            <div className="max-w-[550px] mx-auto lg:max-w-full lg:w-[45%] xl:w-2/5 mt-8">
              <InputComp placeholder="Enter Email" btnlabel="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
