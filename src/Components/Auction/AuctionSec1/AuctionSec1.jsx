import React from "react";
import { Heading } from "../../Heading/Heading";
import InputComp from "../../InputComp/InputComp";
import { Link } from "react-router-dom";

const AuctionSec1 = () => {
  return (
    <div className="pt-4 sm:py-5 ">
      <div className="container mx-auto">
        <div className=" py-10 ">
          <div className="text-center">
            <Heading
              as="h2"
              children="Auctions"
              size="5xl"
              className="capitalize"
              fontWeight="700"
            />
            <div className="max-w-[900px] mx-auto mt-8 flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <InputComp
                placeholder="Type Your Domain Name"
                btnlabel="Search"
                className="w-full"
              />
              <button className="md:text-lg text-[#D11190] font-medium border-b border-[#D11190] text-nowrap">
                Advanced Search
              </button>
            </div>
          </div>
          <div className="mt-10 md:mt-14">
            <div className="grid lg:grid-cols-2 4xl:grid-cols-3 gap-5">
              <div className="bg-[#03091D] rounded-3xl px-4 py-5 sm:p-7 text-white">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-lg lg:text-xl mb-8 font-medium">
                      AUCTIONS ENDING SOON
                    </p>
                    <ul className="flex flex-col gap-6">
                      <li>
                        <Link className="flex xs:items-center justify-between text-base lg:text-lg">
                          <span>flyingfish.com</span>
                          <div className="flex flex-col xs:flex-row text-end gap-y-1 gap-10">
                            <span>₹12,70,833</span>
                            <span className="min-w-[60px]">3h 42m</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link className="flex xs:items-center justify-between text-base lg:text-lg">
                          <span>liquormart.com</span>
                          <div className="flex flex-col xs:flex-row text-end gap-y-1 gap-10">
                            <span>₹1,07,083</span>
                            <span className="min-w-[60px]">3h 7m</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link className="flex xs:items-center justify-between text-base lg:text-lg">
                          <span>zglobal.com</span>
                          <div className="flex flex-col xs:flex-row text-end gap-y-1 gap-10">
                            <span>₹58,250</span>
                            <span className="min-w-[60px]">3h 42m</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link className="flex xs:items-center justify-between text-base lg:text-lg">
                          <span>africa.me</span>
                          <div className="flex flex-col xs:flex-row text-end gap-y-1 gap-10">
                            <span>₹28,167</span>
                            <span className="min-w-[60px] text-[#D00E0E]">
                              2h 22m
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link className="flex xs:items-center justify-between text-base lg:text-lg">
                          <span>flyingfish.com</span>
                          <div className="flex flex-col xs:flex-row text-end gap-y-1 gap-10">
                            <span>₹12,70,833</span>
                            <span className="min-w-[60px] text-[#D00E0E]">
                              42m
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button className="text-lg lg:text-xl mt-8 font-medium inline-block">
                      See More{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#03091D] rounded-3xl px-4 py-5 sm:p-7 text-white">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-lg lg:text-xl mb-8 font-medium">
                      AUCTIONS ENDING SOON
                    </p>
                    <ul className="flex flex-col gap-6">
                      <li>
                        <Link className="flex xs:items-center justify-between text-base lg:text-lg">
                          <span>flyingfish.com</span>
                          <span>₹12,70,833</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="flex xs:items-center justify-between text-base lg:text-lg">
                          <span>liquormart.com</span>
                          <span>₹1,07,083</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="flex xs:items-center justify-between text-base lg:text-lg">
                          <span>zglobal.com</span>
                          <span>₹58,250</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="flex xs:items-center justify-between text-base lg:text-lg">
                          <span>africa.me</span>
                          <span>₹28,167</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="flex xs:items-center justify-between text-base lg:text-lg">
                          <span>flyingfish.com</span>
                          <span>₹12,70,833</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button className="text-lg lg:text-xl mt-8 font-medium inline-block">
                      See More{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#03091D] rounded-3xl px-4 py-5 sm:p-7 text-white">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-lg lg:text-xl mb-8 font-medium">
                      PREMIUM AUCTION EVENT
                    </p>
                    <p className="lg:text-lg">
                      Our latest Premium Auction Event is here! Bid and buy on
                      no-reserve domain names including Thirds.com, Spelt.com,
                      and hundreds more. This auction event ends on September
                      24th, 2024.
                    </p>
                    <p className="lg:text-lg mt-7">Don't miss out!</p>
                  </div>
                  <div>
                    <button className="text-lg lg:text-xl mt-8 font-medium inline-block">
                      See More{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionSec1;
