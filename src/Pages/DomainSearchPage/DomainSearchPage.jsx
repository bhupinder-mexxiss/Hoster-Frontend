import React, { useState } from "react";
import searchIcon from "../../assets/icons/search.png";
import icon34 from "../../assets/icons/icon34.png";
import icon35 from "../../assets/icons/icon35.png";
import ResultSec from "../../Components/DomainTools/ResultSec/ResultSec.jsx";
import FilterSec from "../../Components/DomainTools/FilterSec/FilterSec.jsx";
import FavoritesSec from "../../Components/DomainTools/FavoritesSec/FavoritesSec.jsx";
import HistorySec from "../../Components/DomainTools/HistorySec/HistorySec.jsx";

const DomainSearchPage = () => {
  const [isActive, setIsActive] = useState("Result");

  return (
    <div>
      <div className="container mx-auto">
        <div className="pt-10">
          <div className="flex flex-wrap lg:flex-nowrap gap-5">
            <div className="w-full sm:w-[calc(100%_-_70px)] md:w-[75%] lg:w-full">
              <div className="flex h-11 sm:h-[50px] items-center justify-between bg-white rounded-md md:rounded-full pl-3 md:pl-7 pr-3">
                <input
                  type="text"
                  className="bg-transparent focus:ring-0 border-none p-0 placeholder:opacity-60"
                  placeholder="Tell us about your idea"
                />
                <button className="flex items-center justify-center h-full px-3">
                  <img
                    src={searchIcon}
                    alt=""
                    className="min-w-6 w-6 brightness-0"
                  />
                </button>
              </div>
            </div>
            <button className="w-full sm:w-[50px] md:w-[22%] lg:w-max md:px-10 h-11 sm:h-[50px] flex justify-center items-center gap-2.5 bg-[#D4088C] text-white rounded-md md:rounded-full border border-[#D4088C]">
              <img src={icon35} className="w-5" />{" "}
              <span className="sm:hidden md:inline-block">Continue</span>
            </button>
            <button className="w-full lg:w-max px-10 h-11 sm:h-[50px] text-nowrap flex justify-center items-center gap-2.5 text-white rounded-md md:rounded-full border border-white Start with AI Domain Search">
              <img src={icon34} className="w-5" /> Start with AI Domain Search
            </button>
          </div>
          <div>
            <ul className="flex items-center gap-10 lg:text-lg text-white px-8 border-b border-white rounded-md">
              <li
                className={`py-5 cursor-pointer relative after:absolute after:w-full after:h-[3px] after:rounded after:-bottom-0.5 after:left-0 px-1 ${
                  isActive === "Result" && "text-[#D4088C] after:bg-[#D4088C]"
                }`}
                onClick={() => setIsActive("Result")}
              >
                Result
              </li>
              <li
                className={`py-5 cursor-pointer relative after:absolute after:w-full after:h-[3px] after:rounded after:-bottom-0.5 after:left-0 px-1 ${
                  isActive === "Filter" && "text-[#D4088C] after:bg-[#D4088C]"
                }`}
                onClick={() => setIsActive("Filter")}
              >
                Filter
              </li>
              <li
                className={`py-5 cursor-pointer relative after:absolute after:w-full after:h-[3px] after:rounded after:-bottom-0.5 after:left-0 px-1 ${
                  isActive === "Favorites" && "text-[#D4088C] after:bg-[#D4088C]"
                }`}
                onClick={() => setIsActive("Favorites")}
              >
                Favorites
              </li>
              <li
                className={`py-5 cursor-pointer relative after:absolute after:w-full after:h-[3px] after:rounded after:-bottom-0.5 after:left-0 px-1 ${
                  isActive === "History" && "text-[#D4088C] after:bg-[#D4088C]"
                }`}
                onClick={() => setIsActive("History")}
              >
                History
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14">
          {isActive === "Result" && <ResultSec />}
          {isActive === "Filter" && <FilterSec/>}
            {isActive === "Favorites" && <FavoritesSec/>}
            {isActive === "History" && <HistorySec/>}
        </div>
      </div>
    </div>
  );
};

export default DomainSearchPage;
