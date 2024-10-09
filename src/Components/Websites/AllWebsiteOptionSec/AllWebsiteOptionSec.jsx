import React from "react";
import { Heading } from "../../Heading/Heading";
import image10 from "../../../assets/images/image10.png";
import image11 from "../../../assets/images/image11.png";
import image13 from "../../../assets/images/image13.png";
import image14 from "../../../assets/images/image14.png";
import image15 from "../../../assets/images/image15.png";
import CustomButton from "../../CustomButton/CustomButton";
import { EastOutlined } from "@mui/icons-material";

const AllWebsiteOptionSec = () => {
  return (
    <>
      {/* Your new website awaits. */}
      <div className="mt-10 py-14 md:py-16 lg:py-20 bg-[#ffffff1a]">
        <div className="container mx-auto">
          <div className="max-w-[950px] mx-auto">
            <Heading
              children="Your new website awaits."
              size="4xl"
              fontWeight="600"
              className="text-center"
              as="h4"
            />
            <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6">
              Pick your path to a brand-new website with one of our site
              creation options. Whether you're designing it yourself or leaving
              it to the experts, we have what you need to get the website you
              want.
            </p>
          </div>
          <div className="mx-auto mt-10 md:mt-14">
            <div className="grid md:grid-cols-2 l gap-y-12 gap-5 md:gap-12 xl:gap-14">
              <div>
                <div>
                  <img src={image10} className="max-w-[450px] w-full" />
                </div>
                <Heading
                  children="Create with Websites + Marketing."
                  size="xxl"
                  fontWeight="600"
                  className="mt-3 sm:mt-7"
                />
                <p className=" mt-3 sm:mt-4 text-white">
                  Our Website Builder's designer-made templates make it easy to
                  create the site you've always wanted in minutes, while
                  built-in marketing tools help your business get found in all
                  the right places.
                </p>
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-12 mt-5 sm:mt-8">
                  <CustomButton
                    label="Start for free*"
                    variant="none"
                    className=" px-6 sm:px-10 lg:px-20 border border-white"
                    height="50"
                  />
                  <button className="text-white">
                    Learn more <EastOutlined />
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <img src={image11} className="max-w-[450px] w-full" />
                </div>
                <Heading
                  children="Create a WordPress site."
                  size="xxl"
                  fontWeight="600"
                  className="mt-3 sm:mt-7"
                />
                <p className=" mt-3 sm:mt-4 text-white">
                  If you're looking to customize everything down to the pixel, a
                  WordPress site is the perfect solution for you. You create the
                  site, but we’ll take care of the hosting, maintenance and
                  software updates.
                </p>
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-12 mt-5 sm:mt-8">
                  <CustomButton
                    label="Learn more"
                    variant="none"
                    className=" px-6 sm:px-10 lg:px-20 border border-white"
                    height="50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sell anything, everywhere. */}
      <div className="pt-16 md:pt-20 lg:pt-24">
        <div className="container mx-auto">
          <div className="max-w-[950px] mx-auto">
            <Heading
              children="Sell anything, everywhere."
              size="4xl"
              fontWeight="600"
              className="text-center"
              as="h4"
            />
            <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6">
              From an easy-to-use site builder with a full-featured store to a
              customized WordPress ecommerce site, however you wanna sell
              online, we can make it happen.
            </p>
          </div>
          <div className="mx-auto mt-10 md:mt-14">
            <div className="grid md:grid-cols-2 l gap-y-12 gap-5 md:gap-12 xl:gap-14">
              <div>
                <div>
                  <img src={image13} className="max-w-[450px] w-full" />
                </div>
                <Heading
                  children="Sell with Websites + Marketing."
                  size="xxl"
                  fontWeight="600"
                  className="mt-3 sm:mt-7"
                />
                <p className=" mt-3 sm:mt-4 text-white">
                  Whether you're selling products, services or digital goods,
                  we've got you covered. Get a website with an online store
                  that’s simple to set up, looks great and lets you sell
                  everywhere, while still managing it all from one place.
                </p>
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-12 mt-5 sm:mt-8">
                  <CustomButton
                    label="Start for free*"
                    variant="none"
                    className=" px-6 sm:px-10 lg:px-20 border border-white"
                    height="50"
                  />
                  <button className="text-white">
                    Learn more <EastOutlined />
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <img src={image14} className="max-w-[450px] w-full" />
                </div>
                <Heading
                  children="Sell with WordPress + WooCommerce."
                  size="xxl"
                  fontWeight="600"
                  className="mt-3 sm:mt-7"
                />
                <p className=" mt-3 sm:mt-4 text-white">
                  A WordPress website coupled with an online store powered by
                  WooCommerce gives you endless possibilities for growth. From
                  payments to product displays, you can customize virtually
                  everything.
                </p>
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-12 mt-5 sm:mt-8">
                  <CustomButton
                    label="Learn more*"
                    variant="none"
                    className=" px-6 sm:px-10 lg:px-20 border border-white"
                    height="50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Let 'em know you're open for business. */}
      <div className="pt-16 md:pt-20 lg:pt-24">
        <div className="container mx-auto">
          <div className="max-w-[950px] mx-auto">
            <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mb-3 sm:mb-4 md:mb-6">
              Marketing Tools
            </p>
            <Heading
              children="Let 'em know you're open for business."
              size="4xl"
              fontWeight="600"
              className="text-center"
              as="h4"
            />
          </div>
          <div className="mt-10 md:mt-14">
            <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-10 max-w-[1440px] mx-auto">
              <div>
                <div className="img_Outer max-w-[400px] lg:max-w-[650px] relative ">
                  <img src={image15} className="relative rounded-3xl w-full" />
                </div>
              </div>
              <div>
                <p className="text-white text-sm sm:text-base lg:text-lg mb-2">
                  Digital Marketing Suite
                </p>
                <Heading
                  children="Get the domain you really want, even if it's already owned."
                  size="4xl"
                  fontWeight="600"
                  as="h4"
                />
                <p className="text-white text-sm sm:text-base lg:text-lg mt-5 lg:mt-8">
                  Not only does Marketing Suite help you get found on Google and
                  manage social media and reviews from one spot, it also offers
                  industry-specific business advice, so you always know what to
                  work on next.
                </p>
                <CustomButton
                  variant="none"
                  className="border border-white px-14 mt-7 sm:mt-10"
                  label="Learn More"
                  height="50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllWebsiteOptionSec;
