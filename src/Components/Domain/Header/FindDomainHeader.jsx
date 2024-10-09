import React from "react";
import { Link, NavLink } from "react-router-dom";

const FindDomainHeader = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-white">
          <ul className="flex items-center justify-center gap-[30px]">
            <li>
              <NavLink
                to="/domains/domain-transfer"
                className={({ isActive }) =>
                  `inline-block py-5 text-[#101528] xl:text-lg relative ${
                    isActive
                      ? "font-medium after:absolute after:w-full after:h-[3px] after:rounded-full after:bg-[#CF088C] after:bottom-0 after:left-0"
                      : ""
                  }`
                }
              >
                Transfer Domain Names
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/domains/gtld-domain-names"
                className={({ isActive }) =>
                  `inline-block py-5 text-[#101528] xl:text-lg relative ${
                    isActive
                      ? "font-medium after:absolute after:w-full after:h-[3px] after:rounded-full after:bg-[#CF088C] after:bottom-0 after:left-0"
                      : ""
                  }`
                }
              >
                gTLD Domain Extensions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/domains/bulk-domain-search"
                className={({ isActive }) =>
                  `inline-block py-5 text-[#101528] xl:text-lg relative ${
                    isActive
                      ? "font-medium after:absolute after:w-full after:h-[3px] after:rounded-full after:bg-[#CF088C] after:bottom-0 after:left-0"
                      : ""
                  }`
                }
              >
                Bulk Domain Search
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/domains/business-name-generator"
                className={({ isActive }) =>
                  `inline-block py-5 text-[#101528] xl:text-lg relative ${
                    isActive
                      ? "font-medium after:absolute after:w-full after:h-[3px] after:rounded-full after:bg-[#CF088C] after:bottom-0 after:left-0"
                      : ""
                  }`
                }
              >
                Business Name Generator
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FindDomainHeader;
