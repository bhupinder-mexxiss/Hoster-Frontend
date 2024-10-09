import React from "react";
import { Link } from "react-router-dom";

const HistorySec = () => {
  return (
    <div>
      <ul className="flex flex-col gap-5">
        <li className="flex items-center justify-between px-6 pb-4 border-b border-[#353B52]">
          <span className="text-lg sm:text-xl lg:text-2xl text-white">
            domain.co.in
          </span>
          <Link className="sm:text-lg border-b border-[#D4088C] text-[#D4088C]">
            Check Availability
          </Link>
        </li>
        <li className="flex items-center justify-between px-6 pb-4 border-b border-[#353B52]">
          <span className="text-lg sm:text-xl lg:text-2xl text-white">
            domain.co
          </span>
          <Link className="sm:text-lg border-b border-[#D4088C] text-[#D4088C]">
            Check Availability
          </Link>
        </li>
        <li className="flex items-center justify-between px-6 pb-4 border-b border-[#353B52]">
          <span className="text-lg sm:text-xl lg:text-2xl text-white">
            aasasddas.com
          </span>
          <Link className="sm:text-lg border-b border-[#D4088C] text-[#D4088C]">
            Check Availability
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HistorySec;
