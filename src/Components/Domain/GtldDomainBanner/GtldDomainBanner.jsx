import React from "react";
import { Heading } from "../../Heading/Heading";
import InputComp from "../../InputComp/InputComp";
import { Link } from "react-router-dom";

const GtldDomainBanner = () => {
  return (
    <div className="py-14 md:py-16 lg:py-20 ">
      <div className="container mx-auto">
        <div>
          <div className=" text-center">
            <p className="mb-4 sm:mb-6 sm:text-lg text-[#CFD0D4]">
              gTLD Domain Names
            </p>
            <Heading
              as="h2"
              children="Grow your business with new domain extensions."
              size="5xl"
              className="capitalize max-w-[890px] mx-auto"
              fontWeight="700"
            />
            <div className="mt-6 sm:mt-8 ">
              <p className="mb-2 sm:text-lg text-[#CFD0D4] flex sm:justify-center text-start">
                <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                100s of domains specific to your business
              </p>
              <p className="mb-2 sm:text-lg text-[#CFD0D4] flex sm:justify-center text-start">
                <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                Expert guides for world-class support
              </p>
              <p className="mb-2 sm:text-lg text-[#CFD0D4] flex sm:justify-center text-start">
                <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                Trusted manager of 82+ million domains
              </p>
            </div>
            <div className="max-w-[600px] mt-10 sm:mt-14 mx-auto">
              <InputComp placeholder="Search Domain" btnlabel="Search" />
              <p className="mt-4 sm:mt-6  text-sm sm:text-base md:text-lg text-[#CFD0D4]">
                Looking for a new domain?{" "}
                <Link className="text-[#CF0B8D] text-sm sm:text-base">Search available domains</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GtldDomainBanner;
