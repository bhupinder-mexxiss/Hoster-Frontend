import React from "react";
import { Heading } from "../../Heading/Heading";
import icon21 from "../../../assets/icons/icon21.png";
import icon22 from "../../../assets/icons/icon22.png";
import icon23 from "../../../assets/icons/icon23.png";

const HowItWorks = () => {
  return (
    <div className="py-14 md:py-16 lg:py-20 bg-[#ffffff1a]">
      <div className="container mx-auto">
        <Heading
          children="How It Works"
          size="4xl"
          fontWeight="600"
          className="text-center"
          as="h4"
        />
        <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6 max-w-[500px] mx-auto">
          Get business name ideas in three steps
        </p>
        <div className="mx-auto mt-10 md:mt-14">
          <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-y-7 gap-5 md:gap-12 xl:gap-20">
            <div>
              <div>
                <img src={icon21} alt="" className="w-12 sm:w-[60px]" />
              </div>
              <p
                className="py-2 xs:py-3 md:py-6 text-xl md:text-2xl lg:text-3xl text-white font-medium"
                >Get name ideas</p>
              <p className="text-white text-sm md:text-base lg:text-lg">
                Enter keywords or pick from a list of abstract ideas, then let
                the creation process begin!
              </p>
            </div>
            <div>
              <div>
                <img src={icon22} alt="" className="w-12 sm:w-[60px]" />
              </div>
              <p
                className="py-2 xs:py-3 md:py-6 text-xl md:text-2xl lg:text-3xl text-white font-medium"
                >Check availability</p>
              <p className="text-white text-sm md:text-base lg:text-lg">
                Review generated names, filter by length, and instantly check
                domain and social availability.
              </p>
            </div>
            <div>
              <div>
                <img src={icon23} alt="" className="w-12 sm:w-[60px]" />
              </div>
              <p
                className="py-2 xs:py-3 md:py-6 text-xl md:text-2xl lg:text-3xl text-white font-medium"
                >Save your names</p>
              <p className="text-white text-sm md:text-base lg:text-lg">
                Our algorithm learns from the names you like, giving you better
                recommendations over time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
