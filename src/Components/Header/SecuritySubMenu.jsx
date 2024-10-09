import React from "react";
import mobileIcon17 from "../../assets/icons/mobileIcon17.png";
import mobileIcon18 from "../../assets/icons/mobileIcon18.png";
import mobileIcon19 from "../../assets/icons/mobileIcon19.png";
import mobileIcon13 from "../../assets/icons/mobileIcon13.png";
import { Link } from "react-router-dom";

const SecuritySubMenu = ({closeMenu}) => {
  return (
    <>
    <div className=" px-4">
      <div className="mb-6">
        <p className="text-[#070E2A] opacity-80  mb-3">SSL Certificates</p>
          <ul className="text-sm font-medium text-[#070E2A] flex flex-col gap-3">
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon17} alt="" className="w-6" /> SSL
                Certificates
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon18} alt="" className="w-6" /> Managed SSL
                Certificate
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="text-[#070E2A] opacity-80 mb-3">Web Security</p>
          <ul className="text-sm font-medium text-[#070E2A] flex flex-col gap-3">
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon19} alt="" className="w-6" /> Web Security
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon13} alt="" className="w-6" /> All Web
                Security Options
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SecuritySubMenu;
