import React from "react";
import { Heading } from "../Heading/Heading";
import icon6 from "../../assets/icons/icon6.png";
import icon7 from "../../assets/icons/icon7.png";
import icon8 from "../../assets/icons/icon8.png";

const WhyChooseUs = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <div className="max-w-[1340px] mx-auto">
          <div className="max-w-[980px] mx-auto">
            <Heading
              children="Why Choose Us ?"
              size="4xl"
              fontWeight="600"
              className="text-center"
              as="h4"
            />
            <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6">
              With Host.co.in stand apart in the sphere of World Wide Web with
              maximum flexibility offering elevated packages for all your
              business needs ensuring smooth execution of your business
              activities.
            </p>
          </div>
          <div className="pt-10 mt-10 md:mt-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 md:gap-y-16">
              <div className="bg-pinkPurple-gradient-70 rounded-2xl sm:rounded-3xl px-5 xl:px-8 pb-5 xl:pb-8">
                <div className="bg-blue-gradient w-14 md:w-20 h-14 md:h-20 rounded-full flex items-center justify-center -mt-7 md:-mt-10 mb-4 md:mb-6">
                  <img src={icon6} className="w-8 md:w-10" alt="" />
                </div>
                <Heading children="Loading Speed" size="xxl" fontWeight="600" />
                <p className="mt-2 text-white text-sm md:text-base">
                  Our super-fast network with latest and modern technology
                  ensures accelerated response time and processing along with
                  swift website page loading speed.
                </p>
              </div>
              <div className="bg-pinkPurple-gradient-70 rounded-2xl sm:rounded-3xl px-5 xl:px-8 pb-5 xl:pb-8">
                <div className="bg-blue-gradient w-14 md:w-20 h-14 md:h-20 rounded-full flex items-center justify-center -mt-7 md:-mt-10 mb-4 md:mb-6">
                  <img src={icon7} className="w-8 md:w-10" alt="" />
                </div>
                <Heading
                  children="Network Security"
                  size="xxl"
                  fontWeight="600"
                />
                <p className="mt-2 text-white text-sm md:text-base">
                  Our Certified Tier III and Green Data centers in India have
                  the lowest latency with 4 different layers in our Software
                  Defined Network.
                </p>
              </div>
              <div className="bg-pinkPurple-gradient-70 rounded-2xl sm:rounded-3xl px-5 xl:px-8 pb-5 xl:pb-8">
                <div className="bg-blue-gradient w-14 md:w-20 h-14 md:h-20 rounded-full flex items-center justify-center -mt-7 md:-mt-10 mb-4 md:mb-6">
                  <img src={icon8} className="w-8 md:w-10" alt="" />
                </div>
                <Heading
                  children="Hosting Reliability"
                  size="xxl"
                  fontWeight="600"
                />
                <p className="mt-2 text-white text-sm md:text-base">
                  Equipped with an advanced infrastructure and server
                  architectures together with sufficient resources help create a
                  robust platform that ensures business continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
