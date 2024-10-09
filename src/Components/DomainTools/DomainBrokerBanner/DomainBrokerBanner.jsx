import React from "react";
import { Heading } from "../../Heading/Heading";
import InputComp from "../../InputComp/InputComp";

const DomainBrokerBanner = () => {
  return (
    <div className="pt-4 sm:py-6 ">
      <div className="container mx-auto">
        <div className="py-10 mx-auto max-w-[800px]">
          <div className="text-center">
            <p className="mb-6 sm:text-lg text-[#CFD0D4]">Domain Broker Service</p>
            <Heading
              as="h2"
              children="Get the perfect domain — even if it's not available."
              size="5xl"
              className="capitalize pr-10"
              fontWeight="700"
            />
            <p className="mb-6 lg:mb-8 sm:text-lg text-[#CFD0D4] mt-5">
            From startups to Fortune 100 companies, the leading domain broker worldwide provides essential services for securing the perfect domain names.
            </p>
            <div className="">
              <InputComp
                placeholder="Enter a domain name to search"
                btnlabel="Search"
              />
              <p className="text-center text-white font-semibold lg:text-lg mt-10">Just ₹ 9,959.00 per domain, plus 20% commission^</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainBrokerBanner;
