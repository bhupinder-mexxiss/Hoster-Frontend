import React from "react";
import { Heading } from "../../Heading/Heading";
import CustomButton from "../../CustomButton/CustomButton";

const PremiumBuilderFeatures = () => {
  return (
    <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20 mt-16 md:mt-20 lg:mt-24 ">
      <div className="container mx-auto ">
        <div className=" max-w-[920px] mx-auto ">
          <p className="text-white text-center lg:text-lg mb-5 ">
            Premium Website Builder Features
          </p>
          <Heading
            as="h4"
            children="Unlock more as your business grows."
            size="4xl"
            className="capitalize text-center"
            fontWeight="700"
          />
          <div className="mt-6 md:mt-8">
            <CustomButton
              label="Browse All Features"
              height="50"
              className="px-16 mx-auto"
            />
          </div>
        </div>
        <div className="mt-10 md:mt-14">
          <div className="grid lg:grid-cols-2 max-w-[1400px] mx-auto gap-10 lg:gap-20 xl:gap-52">
            <div className="text-white">
              <div>
                <Heading
                  children="Give your website the address it deserves with a custom domain."
                  fontWeight="500"
                  size="3xl"
                />
                <p className="mt-4 lg:mt-5">
                  Get the web address your brand deserves with a custom domain.
                  Boost credibility and make it easier for visitors to find you.
                  Secure yours today!
                </p>
              </div>
              <div className="mt-10 lg:mt-12">
                <Heading
                  children="Grow fast with expanded email and social media marketing."
                  fontWeight="500"
                  size="3xl"
                />
                <p className="mt-4 lg:mt-5">
                  Accelerate your growth with enhanced email and social media
                  marketing. Reach a wider audience, engage effectively, and
                  boost conversions. Unlock your potential now!
                </p>
              </div>
            </div>
            <div className="text-white">
              <div>
                <Heading
                  children="Build a full-featured online store your shoppers will love."
                  fontWeight="500"
                  size="3xl"
                />
                <p className="mt-4 lg:mt-5">
                  Build an online store your shoppers will love with seamless
                  navigation and secure payments. Start today!
                </p>
              </div>
              <div className="mt-10 lg:mt-12">
                <Heading
                  children="Get found on Google and beyond with a perfectly optimized site."
                  fontWeight="500"
                  size="3xl"
                />
                <p className="mt-4 lg:mt-5">
                  Boost your visibility on Google and beyond with a perfectly
                  optimized site. Get found and attract more visitors today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumBuilderFeatures;
