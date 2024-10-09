import React from "react";
import CustomButton from "../../CustomButton/CustomButton";
import { Heading } from "../../Heading/Heading";

const PremiumDNSBanner = () => {
  return (
    <div className="pt-4 sm:py-6 ">
      <div className="container mx-auto">
        <div className="py-10 ">
          <div className="mx-auto max-w-[880px] text-center">
            <p className="mb-6 sm:text-lg text-[#CFD0D4]">Premium DNS</p>
            <Heading
              as="h2"
              children="Keep your website safe and always online."
              size="5xl"
              className="capitalize pr-10"
              fontWeight="700"
            />
            <ul className="max-w-max list-disc mx-auto">
              <li className="mt-6 sm:text-lg text-[#CFD0D4] flex justify-center">
                <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                Minimize security gaps.
              </li>
              <li className="sm:text-lg text-[#CFD0D4] mt-2 flex justify-center">
                <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                Improve site availability.
              </li>
              <li className="sm:text-lg text-[#CFD0D4] mt-2 flex justify-center">
                <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                Get faster performance.
              </li>
            </ul>
            <div className="mt-4 mb-10 text-white max-w-max mx-auto text-start">
              <p className="text-lg lg:text-xl mb-3">As low as</p>
              <p className="flex items-end">
                <span className="text-[40px] leading-[40px] font-semibold">
                  ₹ 419.33
                </span>
                <span className="text-xl">/mo</span>
              </p>
              <p className="mt-1">
                ₹ 419.33/mo when you renew
              </p>
            </div>
            <CustomButton
              label="Buy Now"
              className="px-12 mx-auto lg:min-w-[190px]"
              height="50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumDNSBanner;
