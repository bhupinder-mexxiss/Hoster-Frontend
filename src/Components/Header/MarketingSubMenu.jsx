import React from "react";
import mobileIcon20 from "../../assets/icons/mobileIcon20.png";
import mobileIcon21 from "../../assets/icons/mobileIcon21.png";
import mobileIcon22 from "../../assets/icons/mobileIcon22.png";
import { Link } from "react-router-dom";

const MarketingSubMenu = ({closeMenu}) => {
  return (
    <>
      <div className=" px-4">
        <div>
          <p className="text-[#070E2A] opacity-80  mb-3">Marketing Tools</p>
          <ul className="text-sm font-medium text-[#070E2A] flex flex-col gap-3">
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon22} alt="" className="w-6" /> Digital
                Marketing
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon21} alt="" className="w-6" /> Logo Maker
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon20} alt="" className="w-6" /> Content &
                Photo Creator
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MarketingSubMenu;
