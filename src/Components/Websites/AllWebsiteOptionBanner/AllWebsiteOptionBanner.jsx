import React from "react";
import { Heading } from "../../Heading/Heading";
import CustomButton from "../../CustomButton/CustomButton";

const AllWebsiteOptionBanner = () => {
  return (
    <div className="pt-4 sm:py-6 ">
      <div className="container mx-auto">
        <div className="py-10">
          <div className="text-center mx-auto max-w-[780px]">
            <p className="mb-6 sm:text-lg text-[#CFD0D4]">
              WCreate a Website
            </p>
            <Heading
              as="h2"
              children="Everything you need to thrive online."
              size="5xl"
              className="capitalize pr-10"
              fontWeight="700"
            />
          </div>
          <div className="mt-6 lg:mt-8 text-center flex items-center justify-center gap-3">
            <CustomButton label="Websites" height="50" className="px-12 lg:min-w-[200px]" />
            <CustomButton label="Online Stores" height="50" className="px-12 lg:min-w-[200px]" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AllWebsiteOptionBanner;
