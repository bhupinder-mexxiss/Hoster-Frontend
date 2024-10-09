import React, { useState } from "react";
import likeIcon from "../../../assets/icons/likeIcon.png";
import cartIcon from "../../../assets/icons/cartIcon.png";
import { Link } from "react-router-dom";
import { Heading } from "../../Heading/Heading";

const FilterSec = () => {
  const [isActive, setIsActive] = useState("Business");
  const Cate = [
    "Business",
    "ccTLD/Other",
    "Commerce",
    "Education",
    "Generic",
    "Featured",
    "Geographic",
    "Government",
    "Health",
    "Industry",
    "Media",
    "International - IDN",
    "Lifestyle & Identity",
    "Money & Finance",
    "Food & Drink",
  ];
  return (
    <div>
      <div>
        <div className="flex">
          <div className="w-[70%] bg-[#03091D] rounded-3xl py-6 px-6">
            <Heading
              children="Domain Endings by industry"
              as="h6"
              size="xxl"
              fontWeight="500"
            />
            <div className="flex flex-wrap gap-5 mt-5">
              {Cate.map((e, index) => (
                <button
                  key={index}
                  className={`lg:text-lg py-2 px-5 border rounded-lg hover:border-white duration-300 ${
                    isActive === e
                      ? "bg-white border-white text-[#03091D]"
                      : "text-white border-[#81848E]"
                  }`}
                  onClick={() => setIsActive(e)}
                >
                  {e}
                </button>
              ))}
            </div>
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
          <div className="py-6 text-center">
            <Link className="lg:text-lg text-white border-b border-white">
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSec;
