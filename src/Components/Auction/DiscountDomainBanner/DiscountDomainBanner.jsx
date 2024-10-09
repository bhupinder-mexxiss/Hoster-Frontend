import React from "react";
import { Heading } from "../../Heading/Heading";
import CustomButton from "../../CustomButton/CustomButton";

const DiscountDomainBanner = () => {
  return (
    <div className="pt-4 sm:py-6 ">
      <div className="container mx-auto">
        <div className="py-10 ">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="mb-6 sm:text-lg text-[#CFD0D4]">
              Discount Domain Club
            </p>
            <Heading
              as="h2"
              children="Join today and save up to 60% on domains."
              size="5xl"
              className="capitalize pr-10"
              fontWeight="700"
            />
            <p className="mt-6 sm:text-lg text-[#CFD0D4] flex justify-center">
              <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
              Instant savings on registrations, renewals, and transfers.
            </p>
            <p className="mb-6 sm:mb-8 md:mb-12 sm:text-lg text-[#CFD0D4] mt-2 flex justify-center">
              <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
              Enjoy additional perks to better manage your portfolio.
            </p>
            <CustomButton label="See Plans and Pricing" className="px-8 mx-auto" height="50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountDomainBanner;
