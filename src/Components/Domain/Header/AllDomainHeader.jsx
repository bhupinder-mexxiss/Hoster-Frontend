import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../../Heading/Heading";

const AllDomainHeader = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-white">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between px-3 md:px-6">
            <div className="flex min-h-full items-center gap-2">
              <span className="xl:hidden"><KeyboardArrowDownOutlined/></span>
              <Heading as="h4" children="Domain Names" color="text-[#101528]" size="lg" fontWeight="600" />
            </div>
            <ul className="flex flex-col xl:flex-row xl:items-center xl:justify-center gap-[30px] bg-white">
              <li>
                <Link
                  to="/domains"
                  className="w-full inline-block py-5 text-[#101528] xl:text-lg font-medium relative after:absolute after:w-full after:h-[3px] after:rounded-full after:bg-[#CF088C] after:bottom-0 after:left-0"
                >
                  All Domain Options
                </Link>
              </li>
              <li className="group relative">
                <button className="w-full inline-block py-5 text-[#101528] xl:text-lg relative group">
                  Find a Domain{" "}
                  <span className="group-hover:rotate-180 inline-block duration-300">
                    <KeyboardArrowDownOutlined />
                  </span>
                </button>
                <div className="z-20 w-fit px-5 absolute left-1/2 top-[calc(100%_+_1rem)] bg-white rounded-b-xl pt-5 pb-2 opacity-0 invisible -translate-x-1/2 group-hover:top-full group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto pointer-events-none duration-300 border-t-2 -mt-3 shadow-[0_10px_16px_5px_#2d2d2d24]">
                  <ul className="text-[#070E2A">
                    <li className="text-nowrap mb-4">
                      <Link
                        to="/domains/domain-transfer"
                        className="hover:text-[#CF088C] duration-200 text-[#070E2A]"
                      >
                        Transfer Domain Names
                      </Link>
                    </li>
                    <li className="text-nowrap mb-4">
                      <Link
                        to="/domains/gtld-domain-names"
                        className="hover:text-[#CF088C] duration-200 text-[#070E2A]"
                      >
                        gTLD Domain Extensions
                      </Link>
                    </li>
                    <li className="text-nowrap mb-4">
                      <Link
                        to="/domains/bulk-domain-search"
                        className="hover:text-[#CF088C] duration-200 text-[#070E2A]"
                      >
                        Bulk Domain Search
                      </Link>
                    </li>
                    <li className="text-nowrap mb-4">
                      <Link
                        to="/domains/business-name-generator"
                        className="hover:text-[#CF088C] duration-200 text-[#070E2A]"
                      >
                        Business Name Generator
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group relative">
                <button className="w-full inline-block py-5 text-[#101528] xl:text-lg relative peer">
                  Auctions
                  <span className="group-hover:rotate-180 inline-block duration-300">
                    <KeyboardArrowDownOutlined />
                  </span>
                </button>
                <div className="z-20 w-fit px-5 absolute left-1/2 top-[calc(100%_+_1rem)] bg-white rounded-b-xl pt-5 pb-2 opacity-0 invisible -translate-x-1/2 group-hover:top-full group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto pointer-events-none duration-300 border-t-2 -mt-3 shadow-[0_10px_16px_5px_#2d2d2d24]">
                  <ul className="text-[#070E2A">
                    <li className="text-nowrap mb-4">
                      <Link className="hover:text-[#CF088C] duration-200 text-[#070E2A]">
                        Auctions for Domain Names
                      </Link>
                    </li>
                    <li className="text-nowrap mb-4">
                      <Link className="hover:text-[#CF088C] duration-200 text-[#070E2A]">
                        Appraise Domain Value
                      </Link>
                    </li>
                    <li className="text-nowrap mb-4">
                      <Link className="hover:text-[#CF088C] duration-200 text-[#070E2A]">
                        Discount Domain Club
                      </Link>
                    </li>
                    <li className="text-nowrap mb-4">
                      <Link className="hover:text-[#CF088C] duration-200 text-[#070E2A]">
                        Discount Domain Club
                      </Link>
                    </li>
                    <li className="text-nowrap mb-4">
                      <Link className="hover:text-[#CF088C] duration-200 text-[#070E2A]">
                        Investing in Domain Names
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group relative">
                <button className="w-full inline-block py-5 text-[#101528] xl:text-lg relative group">
                  Domain Tools and Services
                  <span className="group-hover:rotate-180 inline-block duration-300">
                    <KeyboardArrowDownOutlined />
                  </span>
                </button>
                <div className="z-20 w-fit px-5 absolute left-1/2 top-[calc(100%_+_1rem)] bg-white rounded-b-xl pt-5 pb-2 opacity-0 invisible -translate-x-1/2 group-hover:top-full group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto pointer-events-none duration-300 border-t-2 -mt-3 shadow-[0_10px_16px_5px_#2d2d2d24]">
                  <ul className="text-[#070E2A">
                    <li className="text-nowrap mb-4">
                      <Link className="hover:text-[#CF088C] duration-200 text-[#070E2A]">
                        Generate Domain Names
                      </Link>
                    </li>
                    <li className="text-nowrap mb-4">
                      <Link className="hover:text-[#CF088C] duration-200 text-[#070E2A]">
                        Find a Domain Owner (WHOIS)
                      </Link>
                    </li>
                    <li className="text-nowrap mb-4">
                      <Link className="hover:text-[#CF088C] duration-200 text-[#070E2A]">
                        Domain Broker Service
                      </Link>
                    </li>
                    <li className="text-nowrap mb-4">
                      <Link className="hover:text-[#CF088C] duration-200 text-[#070E2A]">
                        Premium DNS
                      </Link>
                    </li>
                    <li className="text-nowrap mb-4">
                      <Link className="hover:text-[#CF088C] duration-200 text-[#070E2A]">
                        Domain Protection
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDomainHeader;
