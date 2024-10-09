import React from "react";
import { Heading } from "../../Heading/Heading";
import { Checkbox, Select } from "flowbite-react";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";

const AuctionSec2 = () => {
  return (
    <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <Heading
          as="h4"
          children="Search Results"
          size="4xl"
          className="capitalize text-center"
          fontWeight="700"
        />
        <div className="mt-10 md:mt-14">
          <div className="bg-[#03091D] rounded-3xl py-10 px-5">
            <div className="relative overflow-auto">
              <table className="w-full text-white">
                <thead className=" lg:text-lg !font-medium ">
                  <tr>
                    <th>
                      <Checkbox className="focus:!ring-0 focus:ring-offset-0 border-white w-5 h-5 bg-transparent outline-0 text-[#D52A9B]" />
                    </th>
                    <th className="min-w-[200px] px-3 text-start">Name</th>
                    <th className="px-3 text-start">Bids</th>
                    <th className="min-w-[170px] px-3 text-start">Price*</th>
                    <th className="px-3 text-start">Traffic</th>
                    <th className="px-3 text-start">Age</th>
                    <th className="min-w-[230px] px-3 text-start">
                      Enter Bid/Offer (USD)
                    </th>
                    <th className="min-w-[180px] px-3 text-start">
                      Estimated Value
                    </th>
                    <th className="min-w-[130px] px-3 text-start">Time Left</th>
                    <th className="px-3 text-start">Majestic TF</th>
                    <th className="px-3 text-start">Majestic CF</th>
                    <th className="px-3 text-start">Backlinks</th>
                    <th className="min-w-[100px] pl-3 text-start">
                      Referring Domains
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array(10)
                    .fill()
                    .map((_, index) => (
                      <tr>
                        <td>
                          <Checkbox className="focus:!ring-0 focus:ring-offset-0 border-white w-5 h-5 bg-transparent outline-0 text-[#D52A9B]" />
                        </td>
                        <td className="px-3 py-3.5">organik.net</td>
                        <td className="px-3 py-3.5">96</td>
                        <td className="px-3 py-3.5">₹1,27,083Cur. Bid</td>
                        <td className="px-3 py-3.5">4</td>
                        <td className="px-3 py-3.5">22</td>
                        <td className="text-center">
                          <button className="border-b border-white">
                            Place Bid
                          </button>
                        </td>
                        <td className="px-3 py-3.5">₹2,98,917</td>
                        <td className="px-3 py-3.5">2d 5h</td>
                        <td className="px-3 py-3.5">12</td>
                        <td className="px-3 py-3.5">0</td>
                        <td className="px-3 py-3.5">5</td>
                        <td className="pl-3 py-3.5">4566</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="pagination flex items-center justify-center mt-10">
              <button className="w-8 h-8 flex items-center justify-center text-white rounded-md border border-[#353B52] bg-[#353B52] mr-4 xs:mr-6 md:mr-14">
                <KeyboardArrowLeftOutlined className="text-[#03091D] !text-3xl" />
              </button>
              <ul className="flex items-center gap-3 xs:gap-5">
                <li>
                  <button className="w-8 h-8 text-sm leading-3 flex items-center justify-center text-white rounded-md border border-[#D11291] ">
                    1
                  </button>
                </li>
                <li>
                  <button className="w-8 h-8 text-sm leading-3 flex items-center justify-center text-white rounded-md border border-[#353B52] ">
                    2
                  </button>
                </li>
                <li>
                  <button className="w-8 h-8 text-sm leading-3 flex items-center justify-center text-white rounded-md border border-[#353B52] ">
                    3
                  </button>
                </li>
                <li>
                  <button className="w-8 h-8 flex items-center justify-center">
                    <MoreHorizOutlined className="text-white !text-4xl" />
                  </button>
                </li>
              </ul>
              <button className="w-8 h-8 flex items-center justify-center text-white rounded-md border border-[#D11291] bg-[#D11291] ml-4 xs:ml-6 md:ml-14">
                <KeyboardArrowRightOutlined className="text-white !text-3xl" />
              </button>
            </div>
            <div className="mt-10 text-[#353B52] text-sm text-center">
              <p>
                * Plus a one-year domain name registration renewal fee and ICANN
                fee, if applicable.
              </p>
              <p>
                sellers are responsible for ensuring that offered domain names
                do not infringe on third-party trademarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionSec2;
