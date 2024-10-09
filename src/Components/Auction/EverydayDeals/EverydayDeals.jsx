import React from "react";
import { Heading } from "../../Heading/Heading";

const EverydayDeals = () => {
  return (
    <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <Heading
          children="Everyday deals that beat the best sale prices"
          size="4xl"
          fontWeight="600"
          className="text-center"
          as="h4"
        />
        <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6">
          Prices apply to new registrations, renewals and transfers
        </p>
        <div className="mt-10 md-mt-14">
          <div className=" bg-[#03091D] rounded-xl lg:rounded-3xl pb-10">
            <div className="relative overflow-auto">
              <table className="w-full text-white">
                <thead className="font-medium">
                  <tr>
                    <th className="px-3 pl-5 py-5 text-start min-w-max text-nowrap">
                      Domain Extension
                    </th>
                    <th className="px-3 py-5 text-start min-w-max text-nowrap">
                      List Price Per Year
                    </th>
                    <th className="px-3 py-5 text-start min-w-max text-nowrap">
                      DDC Basic Price
                    </th>
                    <th className="px-3 pr-5 py-5 text-start min-w-max text-nowrap">
                      DDC Premium Price
                    </th>
                  </tr>
                </thead>
                <tbody className="border-t-2 border-[#D5299B]">
                  {Array(10)
                    .fill()
                    .map((_, index) => (
                      <tr className="border-b border-[#353B52]">
                        <td className="px-3 pl-5 py-5 text-start">.us</td>
                        <td className="px-3 py-5 text-start">₹ 1,665.83</td>
                        <td className="px-3 py-5 text-start">₹ 915.83</td>
                        <td className="px-3 pr-5 py-5 text-start">₹ 665.83</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-10 px-6">
              <button className=" lg:text-lg font-medium text-white inline-block border-b border-white">
                See All Extensions
              </button>
              <p className="text-white lg:text-lg mt-4">
                Prices are subject to change. Additional promotional pricing may
                apply to applicable new 1st year registrations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EverydayDeals;
