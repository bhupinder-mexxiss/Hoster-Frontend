import React from "react";
import { Heading } from "../../Heading/Heading";
import CustomButton from "../../CustomButton/CustomButton";

const DomainProtectionBanner = () => {
  return (
    <div className="pt-4 sm:py-6 ">
      <div className="container mx-auto">
        <div className="py-10 ">
          <div className="mx-auto max-w-[780px] text-center">
            <Heading
              as="h2"
              children="Your domain is important. Protect it today"
              size="5xl"
              className="capitalize pr-10"
              fontWeight="700"
            />
            <ul className="">
              <li className="mt-6 sm:text-lg text-[#CFD0D4] flex justify-center">
                With Domain Protection you will receive alerts when changes are
                made to your domain.
              </li>
              <li className="mb-6 sm:mb-8 md:mb-12 sm:text-lg text-[#CFD0D4] mt-2 flex justify-center">
                Upgrade to Ultimate Domain Protection and get an extra 90 days
                to renew if your domain accidentally expires.
              </li>
            </ul>
            <CustomButton
              label="Add Domain Protection"
              className="px-8 mx-auto"
              height="50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainProtectionBanner;
