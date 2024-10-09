import React, { useState } from "react";
import { Heading } from "../Heading/Heading";
import CustomButton from "../CustomButton/CustomButton";
import downKey from "../../assets/icons/downKey.png";

const SearchSec = () => {
  const [domain, setDomain] = useState(".com");
  const [openSelect, setOpenSelect] = useState(false);

  const toggleSelect = () => {
    setOpenSelect(!openSelect);
  };

  return (
    <div className="bg-[#F1F1F11A]">
      <div className="container mx-auto">
        <div className="lg:flex py-10 items-center gap-3">
          <div className=" lg:w-1/2 xl:w-3/5 text-center lg:text-start">
            <Heading children="Get 10% Off Today" size="3xl" fontWeight="600" />
            <p className="text-sm sm:text-base xl:text-lg text-white opacity-80 mt-3 md:mt-4">
              Grab the holiday offer.This offer will end in 3 days.Hurry Up!{" "}
              <br />
              Get your perfect domain starting from 149/Mo.
            </p>
          </div>
          <div className=" mx-auto max-w-[600px] lg:w-1/2 xl:w-2/5 mt-8 lg:mt-0">
            <div className="bg-white rounded-full flex items-center justify-between pr-1.5 pl-4 gap-3">
              <div className="flex justify-between w-full items-center h-[50px] md:h-[60px]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="h-[48px] md:h-[58px] rounded-full w-full text-black placeholder:text-black placeholder:opacity-50 border-none focus:ring-0"
                  placeholder="Search"
                />
                <div className="relative">
                  <button
                    className="flex items-center justify-center gap-1"
                    onClick={toggleSelect}
                  >
                    <span>{domain} </span>{" "}
                    <img src={downKey} alt="" className="w-3 brightness-0" />
                  </button>
                  {openSelect && (
                    <div className="absolute right-0 z-10 bg-white rounded-md py-1 shadow-md border">
                      <ul className="w-full">
                        <li
                          className={`py-1 hover:bg-[#06197e21] px-2 min-w-[80px] cursor-pointer ${
                            domain === ".com" && "bg-[#06197e21]"
                          }`}
                          onClick={() => {
                            setDomain(".com");
                            setOpenSelect(false);
                          }}
                        >
                          .com
                        </li>
                        <li
                          className={`py-1 hover:bg-[#06197e21] px-2 min-w-[80px] cursor-pointer ${
                            domain === ".in" && "bg-[#06197e21]"
                          }`}
                          onClick={() => {
                            setDomain(".in");
                            setOpenSelect(false);
                          }}
                        >
                          .in
                        </li>
                        <li
                          className={`py-1 hover:bg-[#06197e21] px-2 min-w-[80px] cursor-pointer ${
                            domain === ".net" && "bg-[#06197e21]"
                          }`}
                          onClick={() => {
                            setDomain(".net");
                            setOpenSelect(false);
                          }}
                        >
                          .net
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <CustomButton
                label="Search"
                height="50"
                className=" px-6 sm:px-11"
              />
            </div>
            <div className="mt-8">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                <div className="text-center text-white">
                  <p className="text-lg ">.com</p>
                  <p className="text-sm opacity-60 mt-1 sm:mt-3">199/Mo</p>
                </div>
                <div className="text-center text-white">
                  <p className="text-lg">.org</p>
                  <p className="text-sm opacity-60 mt-1 sm:mt-3">179/Mo</p>
                </div>
                <div className="text-center text-white">
                  <p className="text-lg">.net</p>
                  <p className="text-sm opacity-60 mt-1 sm:mt-3">159/Mo</p>
                </div>
                <div className="text-center text-white">
                  <p className="text-lg">.co.uk</p>
                  <p className="text-sm opacity-60 mt-1 sm:mt-3">139/Mo</p>
                </div>
                <div className="text-center text-white">
                  <p className="text-lg">.info</p>
                  <p className="text-sm opacity-60 mt-1 sm:mt-3">119/Mo</p>
                </div>
                <div className="text-center text-white">
                  <p className="text-lg">.edu</p>
                  <p className="text-sm opacity-60 mt-1 sm:mt-3">99/Mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSec;
