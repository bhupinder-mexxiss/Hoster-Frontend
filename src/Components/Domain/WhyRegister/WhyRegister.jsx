import React from "react";
import { Heading } from "../../Heading/Heading";
import xyzDomain from "../../../assets/images/xyzDomain.png";
import inDomain from "../../../assets/images/inDomain.png";
import comDomain from "../../../assets/images/comDomain.png";
import onlineDomain from "../../../assets/images/onlineDomain.png";
import CustomButton from "../../CustomButton/CustomButton";

const WhyRegister = () => {
  return (
    <div className="bg-[#F1F1F11A] py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <Heading
          children="Why Register a Domain Name?"
          size="4xl"
          fontWeight="600"
          className="text-center"
          as="h4"
        />
        <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6">
          Find a domain that showcases your unique brand. Use our search tool to
          grab a name that attracts attention and drives visitors.
        </p>
        <div className="mt-10 md:mt-14">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-6 xl:gap-6">
            <div className="rounded-[30px] bg-white py-10 px-5 md:px-8 xl:px-6 2xl:px-8">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="h-[100px] flex items-center">
                    <img src={xyzDomain} alt="" className="w-[170px]" />
                  </div>
                  <p className="lg:text-lg text-[#101528] my-8">
                    Unique and trending domain for your successful business.
                  </p>
                </div>
                <div className="">
                  <div>
                    <p className="flex items-center gap-5">
                      <span className="line-through text-[#70737E]">
                        ₹1,159.00
                      </span>
                      <span className=" font-semibold text-[#CF088C] bg-[#FD66CA40] px-2.5 py-1 rounded-full">
                        SAVE 85%
                      </span>
                    </p>
                    <div className="flex items-end text-[#101528] mt-3.5">
                      <span>₹</span>
                      <span className="text-3xl font-semibold">169.00</span>
                      <span>/year</span>
                    </div>
                  </div>
                  <button className="mt-12 w-full block text-[#CF088C] border border-[#CF088C] py-3 rounded-full">
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-[30px] bg-white py-10 px-5 md:px-8 xl:px-6 2xl:px-8">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="h-[100px] flex items-center">
                    <img src={comDomain} alt="" className="w-[170px]" />
                  </div>
                  <p className="lg:text-lg text-[#101528] my-8">
                    Build trust with this best-known domain.
                  </p>
                </div>
                <div className="">
                  <div>
                    <p className="flex items-center gap-5">
                      <span className="line-through text-[#70737E]">
                        ₹1,199.00
                      </span>
                      <span className=" font-semibold text-[#CF088C] bg-[#FD66CA40] px-2.5 py-1 rounded-full">
                        SAVE 58%
                      </span>
                    </p>
                    <div className="flex items-end text-[#101528] mt-3.5">
                      <span>₹</span>
                      <span className="text-3xl font-semibold">499.00</span>
                      <span>/year</span>
                    </div>
                  </div>
                  <button className="mt-12 w-full block text-[#CF088C] border border-[#CF088C] py-3 rounded-full">
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-[30px] bg-white py-10 px-5 md:px-8 xl:px-6 2xl:px-8">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="h-[100px] flex items-center">
                    <img src={inDomain} alt="" className="w-[100px]" />
                  </div>
                  <p className="lg:text-lg text-[#101528] my-8">
                    .in is a unique symbol of India.
                  </p>
                </div>
                <div className="">
                  <div>
                    <p className="flex items-center gap-5">
                      <span className="line-through text-[#70737E]">
                        ₹749.00
                      </span>
                      <span className=" font-semibold text-[#CF088C] bg-[#FD66CA40] px-2.5 py-1 rounded-full">
                        SAVE 73%
                      </span>
                    </p>
                    <div className="flex items-end text-[#101528] mt-3.5">
                      <span>₹</span>
                      <span className="text-3xl font-semibold">199.00</span>
                      <span>/year</span>
                    </div>
                  </div>
                  <button className="mt-12 w-full block text-[#CF088C] border border-[#CF088C] py-3 rounded-full">
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-[30px] bg-white py-10 px-5 md:px-8 xl:px-6 2xl:px-8">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="h-[100px] flex items-center">
                    <img src={onlineDomain} alt="" className="w-[170px]" />
                  </div>
                  <p className="lg:text-lg text-[#101528] my-8">
                    It’s a broad and universal alternative to .com
                  </p>
                </div>
                <div className="">
                  <div>
                    <p className="flex items-center gap-5">
                      <span className="line-through text-[#70737E]">
                        ₹2,899.00
                      </span>
                      <span className=" font-semibold text-[#CF088C] bg-[#FD66CA40] px-2.5 py-1 rounded-full">
                        SAVE 96%
                      </span>
                    </p>
                    <div className="flex items-end text-[#101528] mt-3.5">
                      <span>₹</span>
                      <span className="text-3xl font-semibold">89.00</span>
                      <span>/year</span>
                    </div>
                  </div>
                  <button className="mt-12 w-full block text-[#CF088C] border border-[#CF088C] py-3 rounded-full">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <CustomButton
              label="View All"
              variant="pinkPurple-100"
              className="inline-block mx-auto font-medium px-14 md:px-[70px]"
              height="60"
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRegister;
