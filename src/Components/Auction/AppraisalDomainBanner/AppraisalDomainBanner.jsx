import React from "react";
import { Heading } from "../../Heading/Heading";
import InputComp from "../../InputComp/InputComp";

const AppraisalDomainBanner = () => {
  return (
    <div className="pt-4 sm:py-6 ">
      <div className="container mx-auto">
        <div className="py-10 mx-auto max-w-[800px]">
          <div className="text-center">
            <p className="mb-6 sm:text-lg text-[#CFD0D4]">
              Business Name Generator Service
            </p>
            <Heading
              as="h2"
              children="How much is your domain worth?"
              size="5xl"
              className="capitalize pr-10"
              fontWeight="700"
            />
            <p className="mb-6 lg:mb-8 sm:text-lg text-[#CFD0D4] mt-5">
              Tell us about your idea and GoDaddy AI Domain Search will create a
              targeted list of business and domain names for you.
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

export default AppraisalDomainBanner;
