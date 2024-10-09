import React from "react";
import { Link } from "react-router-dom";
import mobileIcon10 from "../../assets/icons/mobileIcon10.png";
import mobileIcon12 from "../../assets/icons/mobileIcon12.png";
import mobileIcon13 from "../../assets/icons/mobileIcon13.png";
import mobileIcon14 from "../../assets/icons/mobileIcon14.png";
import mobileIcon15 from "../../assets/icons/mobileIcon15.png";
import mobileIcon16 from "../../assets/icons/mobileIcon16.png";

const WebsiteSubMenu = ({closeMenu}) => {
  return (
    <>
      <div className=" px-4">
        <div className="mb-6">
          <p className="text-[#070E2A] opacity-80  mb-3">Websites</p>
          <ul className="text-sm font-medium text-[#070E2A] flex flex-col gap-3">
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon10} alt="" className="w-6" /> Website
                Builder
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon12} alt="" className="w-6" /> Online Store
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon13} alt="" className="w-6" /> All Website
                Options
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="text-[#070E2A] opacity-80 mb-3">Hosting</p>
          <ul className="text-sm font-medium text-[#070E2A] flex flex-col gap-3">
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon14} alt="" className="w-6" /> Web Hosting
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon15} alt="" className="w-6" /> WordPress
                Hosting
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon16} alt="" className="w-6" /> VPS Hosting
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon13} alt="" className="w-6" /> All Hosting
                Options
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WebsiteSubMenu;
