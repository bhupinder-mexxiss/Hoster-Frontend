import React from "react";
import banner from "../../../assets/images/transfer-domain-banner.png";
import { Heading } from "../../Heading/Heading";
import InputComp from "../../InputComp/InputComp";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="pt-4 sm:py-6 ">
      <div className="container mx-auto">
        <div>
          <div className="lg:flex flex-col lg:flex-row items-center relative py-10 gap-10">
            <div className="md:w-3/4 lg:w-3/5 order-2 lg:order-1 relative z-10">
              <p className="mb-6 sm:text-lg text-[#CFD0D4]">
              Domain Registration
              </p>
              <Heading
                as="h2"
                children="We Made Domain Transfer Easy"
                size="5xl"
                className="capitalize pr-10"
                fontWeight="700"
              />
              <p className="mt-6 mb-10 sm:text-lg text-[#CFD0D4]">
              Enter the domain that you would like to transfer to us
              </p>
              <div className="max-w-[600px]">
                <InputComp
                  placeholder="Search Domain"
                  btnlabel="Search"
                />
                <p className="mt-6 sm:text-lg text-[#CFD0D4]">
                Looking for a new domain? <Link className="text-[#CF0B8D]">Search available domains</Link>
                </p>
              </div>
            </div>
            <div className="h-full w-full lg:w-2/5 order-2 lg:order-1 absolute lg:static top-0 left-1/2 -translate-x-1/2 lg:translate-x-0">
              <img
                src={banner}
                alt=""
                className="ml-auto lg:mx-auto max-w-[620px] h-full w-full object-contain opacity-30 sm:opacity-50 lg:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
