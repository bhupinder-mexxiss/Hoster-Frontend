import React from "react";
import { Heading } from "../../Heading/Heading";
import CustomButton from "../../CustomButton/CustomButton";
import icon33 from "../../../assets/icons/icon33.png";
import likeIcon from "../../../assets/icons/likeIcon.png";
import cartIcon from "../../../assets/icons/cartIcon.png";
import { Link } from "react-router-dom";

const ResultSec = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-[#03091D] rounded-xl lg:rounded-3xl p-10">
          <div className="bg-[#D3891A] w-fit px-3 py-1.5 round text-white uppercase rounded-md mb-5">
            Exact Match
          </div>
          <p className="xl:text-[40px] lg:text-[36px] md:text-[34px] sm:text-[32px] xs:text-[28px] text-2xl font-semibold text-white leading-[32px] xs:leading-[36px] md:leading-[38px] lg:leading-[48px]">
            <span>domain.com</span>
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-white mt-6">
            <span className="text-xl md:text-2xl xl:text-3xl ">₹1,399</span>{" "}
            <span className="text-4xl xl:text-5xl font-bold">₹1</span>
          </div>
          <p className="text-white lg:text-lg mt-1">
            1st yr only with 3 yr term
          </p>
          <div className="mt-8">
            <CustomButton
              label="Make It yours"
              className="px-20 font-semibold"
              height="50"
            />
            <ul className="mt-6 flex flex-col gap-4 text-white">
              <li className="flex gap-2.5">
                <img src={icon33} alt="" className="mt-1.5 h-5 w-5" />
                <span className="lg:text-lg">
                  Why it's great: Uses the .com extension.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#03091D] rounded-xl lg:rounded-3xl p-10">
          <div className="bg-[#D3891A] w-fit px-3 py-1.5 round text-white uppercase rounded-md mb-5">
            BUNDLE & SAVE 81%
          </div>
          <div className="flex gap-2">
            <p className="xl:text-[40px] lg:text-[36px] md:text-[34px] sm:text-[32px] xs:text-[28px] text-2xl font-semibold text-white leading-[32px] xs:leading-[36px] md:leading-[38px] lg:leading-[48px]">
              <span>
                domain<span className="text-[#D4088C]">.org</span> +{" "}
                <span className="text-[#D4088C]">.xyz </span>+{" "}
                <span className="text-[#D4088C]">.net</span>
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-white mt-6">
            <span className="text-xl md:text-2xl xl:text-3xl ">
              ₹ 10,286.00
            </span>{" "}
            <span className="text-4xl xl:text-5xl font-bold">₹ 1,883.55</span>
          </div>
          <p className="text-white lg:text-lg mt-1">for first year</p>
          <div className="mt-8">
            <CustomButton
              label="Make It yours"
              className="px-20 font-semibold"
              height="50"
            />
            <ul className="mt-6 flex flex-col gap-4 text-white">
              <li className="flex gap-2.5">
                <img src={icon33} alt="" className="mt-1.5 h-5 w-5" />
                <span className="lg:text-lg">
                  Why it's great: Protect your business from copycats by
                  registering these popular endings: ORG, XYZ, NET, STORE.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-14 md:mt-16 lg:mt-20">
        <div className="rounded-2xl bg-[#03091D] ">
          <ul>
            {Array(3)
              .fill()
              .map((_, index) => (
                <li className="flex items-center justify-between py-3 px-5 border-b border-[#353B52]">
                  <div className="flex gap-4 items-center">
                    <img src={likeIcon} className="w-7" />{" "}
                    <span className="text-white text-xl lg:text-2xl">
                      domain.in
                    </span>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="text-white text-end text-[15px]">
                      <p className="flex items-center gap-2 justify-end">
                        <span className="line-through">₹ 699</span>{" "}
                        <span className="text-3xl font-semibold">₹ 1</span>
                      </p>
                      <p>1st yr only with 3 yr term</p>
                    </div>
                    <button className="">
                      <img src={cartIcon} alt="" className="w-12" />
                    </button>
                  </div>
                </li>
              ))}
            {Array(5)
              .fill()
              .map((_, index) => (
                <li className="flex items-center justify-between py-3 px-5 border-b border-[#353B52]">
                  <div className="flex gap-4 items-center">
                    <img src={likeIcon} className="w-7" />{" "}
                    <div className="flex flex-col">
                      <span className="text-sm text-[#81848E] font-semibold">
                        PROMOTED
                      </span>
                      <span className="text-white text-xl lg:text-2xl">
                        domain.shop
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="text-white text-end text-[15px]">
                      <p className="flex items-center gap-2 justify-end">
                        <span className="line-through">₹ 699</span>{" "}
                        <span className="text-3xl font-semibold">₹ 1</span>
                      </p>
                      <p>1st yr only with 3 yr term</p>
                    </div>
                    <button className="">
                      <img src={cartIcon} alt="" className="w-12" />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
          <div className="py-6 text-center"><Link className="lg:text-lg text-white border-b border-white">View All</Link></div>
        </div>
      </div>
    </div>
  );
};

export default ResultSec;
