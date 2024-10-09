import React from "react";
import { Heading } from "../../Heading/Heading";
import image1 from "../../../assets/images/image1.png";
import icon20 from "../../../assets/icons/icon20.png";

const SimpleSteps = () => {
  return (
    <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <Heading
          children="Transfer a Domain Name in 4 Simple Steps"
          size="4xl"
          fontWeight="600"
          className="text-center"
          as="h4"
        />
        <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6 max-w-[600px] mx-auto">
          Transfer your domain by unlocking it, getting the authorization code,
          initiating the transfer, and confirming via email.
        </p>
        <div className="mt-10 md:mt-14 max-w-[1320px] mx-auto">
          <div className="px-6 sm:px-8 py-10 xl:p-14 rounded-3xl bg-[#03091D] lg:flex items-center gap-8 xl:gap-14">
            <div className="xs:w-3/4 md:w-1/2 lg:w-2/5 mx-auto">
              <img src={image1} alt="" />
            </div>
            <div className="lg:w-3/5 mt-8 lg:mt-0">
              <Heading
                children="Domain Name you want to transfer"
                size="3xl"
                fontWeight="600"
              />
              <p className="text-white mt-5 mb-10">
                To initiate the transfer of your domain name, please enter the
                domain name you wish to transfer in the field provided below.
                Ensure that your domain name is unlocked and that you have
                access.
              </p>
              <div>
                <p className="flex text-white mb-6">
                  <img
                    src={icon20}
                    alt=""
                    className="min-w-[18px] w-[18px] h-[18px] mr-1.5 mt-0.5"
                  />{" "}
                  <span>
                    <span className="font-semibold">Domain Name:</span> Enter
                    the full domain name you want to transfer
                  </span>{" "}
                </p>
                <p className="flex text-white">
                  <img
                    src={icon20}
                    alt=""
                    className="min-w-[18px] w-[18px] h-[18px] mr-1.5 mt-0.5"
                  />{" "}
                  <span>
                    <span className="font-semibold">Domain Name:</span> Enter
                    the full domain name you want to transfer
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="grid xs:grid-cols-2 xl:grid-cols-4 gap-5 mt-10 max-w-[800px] xl:max-w-full mx-auto">
            <div className="bg-[#03091D] rounded-2xl px-3 py-5 sm:p-5 border border-l-[#6EE8FC] border-transparent">
              <p className="text-white text-sm sm:text-base font-medium">01</p>
              <p className="text-[#6EE8FC] text-xl font-semibold my-4">
                Domain is valid
              </p>
              <p className="text-white text-sm sm:text-base">
                The domain registration must be valid with another registrar
              </p>
            </div>
            <div className="rounded-2xl px-3 py-5 sm:p-5 border-2 border-[#101528]">
              <p className="text-white text-sm sm:text-base font-medium">02</p>
              <p className="text-white text-xl font-semibold my-4">
                Domain is Unlocked
              </p>
              <p className="text-white text-sm sm:text-base">
                The domain registration must be valid with another registrar
              </p>
            </div>
            <div className="rounded-2xl px-3 py-5 sm:p-5 border-2 border-[#101528]">
              <p className="text-white text-sm sm:text-base font-medium">03</p>
              <p className="text-white text-xl font-semibold my-4">
              Authorization Code
              </p>
              <p className="text-white text-sm sm:text-base">
              The domain registration must be valid with another registrar
              </p>
            </div>
            <div className="rounded-2xl px-3 py-5 sm:p-5 border-2 border-[#101528]">
              <p className="text-white text-sm sm:text-base font-medium">04</p>
              <p className="text-white text-xl font-semibold my-4">
              Disable Privacy
              </p>
              <p className="text-white text-sm sm:text-base">
              The domain registration must be valid with another registrar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSteps;
