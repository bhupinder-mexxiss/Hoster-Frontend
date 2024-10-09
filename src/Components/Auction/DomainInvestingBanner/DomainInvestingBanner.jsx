import React from "react";
import InputComp from "../../InputComp/InputComp";
import { Heading } from "../../Heading/Heading";

const DomainInvestingBanner = () => {
  return (
    <div className="pt-4 sm:py-6 ">
      <div className="container mx-auto">
        <div className="py-10 mx-auto max-w-[800px]">
          <div className="text-center">
            <p className="mb-6 sm:text-lg text-[#CFD0D4]">Domain Investing</p>
            <Heading
              as="h2"
              children="It’s easier than you think to invest in domains."
              size="5xl"
              className="capitalize pr-10"
              fontWeight="700"
            />
            <p className="mb-6 lg:mb-8 sm:text-lg text-[#CFD0D4] mt-5">
              With over 20+ million customers and 82+ million domains, our
              expertise as the world's largest domain registrar gives you the
              advantage.
            </p>
            <div className="">
              <InputComp
                placeholder="Type Your Domain Name"
                btnlabel="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainInvestingBanner;
