import React from "react";
import { Heading } from "../../Heading/Heading";
import InputComp from "../../InputComp/InputComp";
import { Link } from "react-router-dom";

const NameGeneratorBanner = () => {
  return (
    <div className="py-14 md:py-16 lg:py-20 ">
      <div className="container mx-auto">
        <div>
          <div className=" text-center">
            <p className="mb-4 sm:mb-6 sm:text-lg text-[#CFD0D4]">
              Business Name Generator Service
            </p>
            <Heading
              as="h2"
              children="Find a business name and get going."
              size="5xl"
              className="capitalize max-w-[780px] mx-auto"
              fontWeight="700"
            />
            <p className="mt-4 sm:mt-6 mb-8 sm:mb-10 sm:text-lg text-[#CFD0D4] max-w-[570px] mx-auto">
              Tell us about your idea and GoDaddy AI Domain Search will create a
              targeted list of business and domain names for you.
            </p>
            <div className="max-w-[600px] mx-auto">
              <InputComp
                placeholder="Type us about your business"
                btnlabel="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameGeneratorBanner;
