import React from "react";
import { Heading } from "../../Heading/Heading";
import CustomButton from "../../CustomButton/CustomButton";

const WebsiteBuilderBanner = () => {
  return (
    <div className="pt-4 sm:py-6 ">
      <div className="container mx-auto">
        <div className="py-10">
          <div className="text-center mx-auto max-w-[780px]">
            <p className="mb-6 sm:text-lg text-[#CFD0D4]">Website Builder</p>
            <Heading
              as="h2"
              children="Your free website is just the beginning."
              size="5xl"
              className="capitalize"
              fontWeight="700"
            />
            <p className="mt-6 sm:text-lg text-[#CFD0D4]">
              Create a mobile-friendly, free website for your business, then
              watch it take off with built-in marketing.
            </p>
          </div>
          <div className="mt-8 lg:mt-12 text-center flex flex-wrap sm:flex-nowrap items-center justify-center gap-3">
            <CustomButton
              label="Start for Free"
              height="50"
              className="px-12 lg:min-w-[200px]"
            />
            <CustomButton
              label="See Plans and Pricing"
              height="50"
              variant="none"
              className="px-12 lg:min-w-[200px] border border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilderBanner;
