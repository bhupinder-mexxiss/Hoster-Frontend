import React from "react";
import { Heading } from "../../Heading/Heading";
import image5 from "../../../assets/images/image5.png";

const HowItWorks = () => {
  return (
    <>
      {/* How it Works */}
      <div className="pb-16 pt-10 md:pb-20 md:pt-14 lg:pb-28 lg:pt-20 ">
        <div className="container mx-auto ">
          <div>
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-[1080px] mx-auto">
              <div className="md:w-3/5 order-2 md:order-1">
                <Heading
                  children="How it Works"
                  size="4xl"
                  fontWeight="600"
                  as="h4"
                />
                <div className="border-l border-white relative mt-8 sm:mt-12 lg:mt-20 text-white max-w-[500px] pl-6 sm:pl-10 after:absolute after:w-1.5 after:h-[40%] after:-left-1 after:top-0 after:bg-[#D4269A] after:rounded-md ">
                  <p className="md:text-lg lg:text-xl font-medium mb-5 lg:mb-8">
                    You get a dedicated domain broker.
                  </p>
                  <p className="lg:text-lg mb-5 lg:mb-12">
                    When you purchase the service, a dedicated broker will help
                    you formulate a strategy and budget to try to acquire your
                    domain.
                  </p>
                  <p className="md:text-lg lg:text-xl font-medium mb-5 lg:mb-12">
                    The domain broker works the deal for you.
                  </p>
                  <p className="md:text-lg lg:text-xl font-medium">
                    The domain is securely transferred to your account.
                  </p>
                </div>
              </div>
              <div className="md:w-2/5 order-1 md:order-2">
                <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative mx-auto lg:ml-auto">
                  <img src={image5} className="relative rounded-3xl w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We'll help you find the perfect domain. */}
      <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <Heading
            as="h4"
            children="We'll help you find the perfect domain."
            size="4xl"
            className="capitalize text-center"
            fontWeight="700"
          />
          <p className="text-white max-w-[1020px] mx-auto text-center lg:text-lg mt-5 ">Finding the perfect domain name can sometimes be difficult, but our Brokerage Team can get you the right one to propel your brand forward. We have millions of domains for sale, so you have no shortage of options.</p>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
