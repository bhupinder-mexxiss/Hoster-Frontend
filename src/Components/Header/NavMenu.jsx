import React from "react";
import { Link, NavLink } from "react-router-dom";
import downKey from "../../assets/icons/downKey.png";
import headerIcon1 from "../../assets/icons/headerIcon1.png";
import headerIcon2 from "../../assets/icons/headerIcon2.png";
import headerIcon3 from "../../assets/icons/headerIcon3.png";
import headerIcon4 from "../../assets/icons/headerIcon4.png";
import headerIcon5 from "../../assets/icons/headerIcon5.png";
import headerIcon6 from "../../assets/icons/headerIcon6.png";
import headerIcon7 from "../../assets/icons/headerIcon7.png";
import headerIcon8 from "../../assets/icons/headerIcon8.png";
import headerIcon9 from "../../assets/icons/headerIcon9.png";
import headerIcon10 from "../../assets/icons/headerIcon10.png";
import headerIcon12 from "../../assets/icons/headerIcon12.png";
import headerIcon13 from "../../assets/icons/headerIcon13.png";
import headerIcon14 from "../../assets/icons/headerIcon14.png";
import headerIcon15 from "../../assets/icons/headerIcon15.png";
import headerIcon16 from "../../assets/icons/headerIcon16.png";
import headerIcon17 from "../../assets/icons/headerIcon17.png";
import headerIcon18 from "../../assets/icons/headerIcon18.png";
import headerIcon19 from "../../assets/icons/headerIcon19.png";
import headerIcon20 from "../../assets/icons/headerIcon20.png";
import headerIcon21 from "../../assets/icons/headerIcon21.png";
import headerIcon22 from "../../assets/icons/headerIcon22.png";
import headerIcon23 from "../../assets/icons/headerIcon23.png";
import headerIcon24 from "../../assets/icons/headerIcon24.png";
import headerIcon25 from "../../assets/icons/headerIcon25.png";
import headerIcon26 from "../../assets/icons/headerIcon26.png";
import headerIcon27 from "../../assets/icons/headerIcon27.png";

const NavMenu = () => {
  const handleLinkClick = (e) => {
    const parentLi = e.target.closest("li");
    if (parentLi) {
      parentLi.querySelector("button").blur();
    }
  };
  return (
    <>
      <ul className="flex gap-6 3xl:gap-[30px]">
        <li>
          <NavLink
            to="/"
            className={`inline-block py-6 text-white hover:text-[#f92cde] duration-300`}
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li className="relative group ">
          <button
            className={`py-6 text-white hover:text-[#f92cde] duration-300 flex items-center gap-1.5 group-hover:text-[#f92cde]`}
          >
            <span>Domain</span>
            <span className=" group-hover:rotate-180 duration-300">
              <img
                src={downKey}
                className="w-3 pinkFilter duration-100"
                alt=""
              />
            </span>
          </button>
          <div className="z-20 absolute 4xl:left-1/2 top-[calc(100%_+_1rem)] opacity-0 invisible -translate-x-[30%] 4xl:-translate-x-1/2 group-hover:top-full group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto pointer-events-none duration-300 rounded-b-xl w-fit border-t-2 border-[#f92cde] bg-bg-gradient overflow-hidden shadow-[0px_10px_20px_4px_#ffffff0d] subMenu">
            <div className="bg-[#F1F1F11A] relative px-7 py-8 h-full flex gap-10">
              <div className="">
                <p className="text-[#CFD0D4] mb-3 opacity-70">Find a Domain</p>
                <ul className="text-sm font-medium text-white flex flex-col gap-5 w-max">
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      to="/domains"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon1} alt="" className="w-6" /> Search
                      for Domain Names
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      to="/domains/domain-transfer"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon2} alt="" className="w-6" /> Transfer
                      Domain Names
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      to="/domains/gtld-domain-names"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon3} alt="" className="w-6" /> gTLD
                      Domain Extensions
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      to="/domains/bulk-domain-search"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon1} alt="" className="w-6" /> Bulk
                      Domain Search
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      to="/domains/business-name-generator"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img
                        src={headerIcon23}
                        alt=""
                        className="w-6 invert opacity-80"
                      />{" "}
                      Business Name Generator
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-[#CFD0D4] mb-3 opacity-70">
                  Auctions for Domains
                </p>
                <ul className="text-sm font-medium text-white flex flex-col gap-5 w-max">
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      to="/auctions-domain-name"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon4} alt="" className="w-6" /> Auctions
                      for Domain Names
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      to="/domain-value-appraisal"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon5} alt="" className="w-6" /> Appraise
                      Domain Name Value
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      to="/discount-domain-club"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img
                        src={headerIcon24}
                        alt=""
                        className="w-6 invert opacity-80"
                      />
                      Discount Domain Club
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                    to="/cashparking"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img
                        src={headerIcon25}
                        alt=""
                        className="w-6 invert opacity-80"
                      />
                      CashParking
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                    to="/domain-investing"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon6} alt="" className="w-6" /> Investing
                      in Domain Names
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-[#CFD0D4] mb-3 opacity-70">
                  Domain Tools and Services
                </p>
                <ul className="text-sm font-medium text-white flex flex-col gap-5 w-max">
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link to="/domain-name-generator"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon7} alt="" className="w-6" /> Generate
                      Domain Names
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon8} alt="" className="w-6" /> Find a
                      Domain Owner (WHOIS)
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                    to="/domain-broker"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon9} alt="" className="w-6" /> Domain
                      Broker Service
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link to="premium-dns"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img
                        src={headerIcon26}
                        alt=""
                        className="w-6 invert opacity-80"
                      />{" "}
                      Domain Premium DNS
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link to="/domain-protection"
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon18} alt="" className="w-6" /> Domain
                      Domain Protection
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="relative group ">
          <button
            className={`py-6 text-white hover:text-[#f92cde] duration-300 flex items-center gap-1.5 group-hover:text-[#f92cde]`}
          >
            <span>Websites and Hosting</span>
            <span className=" group-hover:rotate-180 duration-300">
              <img
                src={downKey}
                className="w-3 pinkFilter duration-100"
                alt=""
              />
            </span>
          </button>
          <div className="z-20 absolute left-1/2 top-[calc(100%_+_1rem)] opacity-0 invisible -translate-x-1/2 group-hover:top-full group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto pointer-events-none duration-300 rounded-b-xl w-fit border-t-2 border-[#f92cde] bg-bg-gradient overflow-hidden shadow-[0px_10px_20px_4px_#ffffff0d] subMenu">
            <div className="bg-[#F1F1F11A] relative px-7 py-8 h-full flex gap-10">
              <div className="">
                <p className="text-[#CFD0D4] mb-3 opacity-70">Websites</p>
                <ul className="text-sm font-medium text-white flex flex-col gap-5 w-max">
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon10} alt="" className="w-6" /> Website
                      Builder
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon12} alt="" className="w-6" /> Online
                      Store
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon13} alt="" className="w-6" /> All
                      Website Options
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-[#CFD0D4] mb-3 opacity-70">Hosting</p>
                <ul className="text-sm font-medium text-white flex flex-col gap-5 w-max">
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon14} alt="" className="w-6" /> Web
                      Hosting
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon15} alt="" className="w-6" />{" "}
                      WordPress Hosting
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon16} alt="" className="w-6" /> VPS
                      Hosting
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon13} alt="" className="w-6" /> All
                      Hosting Options
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <NavLink
            to="/"
            className={`inline-block py-6 text-white hover:text-[#f92cde] duration-300`}
          >
            <span>Email</span>
          </NavLink>
        </li>
        <li className="relative group ">
          <button
            className={`py-6 text-white hover:text-[#f92cde] duration-300 flex items-center gap-1.5 group-hover:text-[#f92cde]`}
          >
            <span>Security</span>
            <span className=" group-hover:rotate-180 duration-300">
              <img
                src={downKey}
                className="w-3 pinkFilter duration-100"
                alt=""
              />
            </span>
          </button>
          <div className="z-20 absolute left-1/2 top-[calc(100%_+_1rem)] opacity-0 invisible -translate-x-1/2 group-hover:top-full group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto pointer-events-none duration-300 rounded-b-xl w-fit border-t-2 border-[#f92cde] bg-bg-gradient overflow-hidden shadow-[0px_10px_20px_4px_#ffffff0d] subMenu">
            <div className="bg-[#F1F1F11A] relative px-7 py-8 h-full flex gap-10">
              <div className="">
                <p className="text-[#CFD0D4] mb-3 opacity-70">
                  SSL Certificates
                </p>
                <ul className="text-sm font-medium text-white flex flex-col gap-5 w-max">
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon17} alt="" className="w-6" /> SSL
                      Certificates
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon18} alt="" className="w-6" /> Managed
                      SSL Certificate
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-[#CFD0D4] mb-3 opacity-70">Web Security</p>
                <ul className="text-sm font-medium text-white flex flex-col gap-5 w-max">
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon19} alt="" className="w-6" /> Web
                      Security
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon13} alt="" className="w-6" /> All Web
                      Security Options
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="relative group ">
          <button
            className={`py-6 text-white hover:text-[#f92cde] duration-300 flex items-center gap-1.5 group-hover:text-[#f92cde]`}
          >
            <span>Marketing</span>
            <span className=" group-hover:rotate-180 duration-300">
              <img
                src={downKey}
                className="w-3 pinkFilter duration-100"
                alt=""
              />
            </span>
          </button>
          <div className="z-20 absolute left-1/2 top-[calc(100%_+_1rem)] opacity-0 invisible -translate-x-1/2 group-hover:top-full group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto pointer-events-none duration-300 rounded-b-xl w-fit border-t-2 border-[#f92cde] bg-bg-gradient overflow-hidden shadow-[0px_10px_20px_4px_#ffffff0d] subMenu">
            <div className="bg-[#F1F1F11A] relative px-7 py-8 h-full flex gap-10">
              <div>
                <p className="text-[#CFD0D4] mb-3 opacity-70">
                  Marketing Tools
                </p>
                <ul className="text-sm font-medium text-white flex flex-col gap-5 w-max">
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon22} alt="" className="w-6" /> Digital
                      Marketing
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon21} alt="" className="w-6" /> Logo
                      Maker
                    </Link>
                  </li>
                  <li className="text-nowrap hover:text-[#f92cde] duration-200">
                    <Link
                      className="flex items-center gap-3.5"
                      onClick={handleLinkClick}
                    >
                      <img src={headerIcon20} alt="" className="w-6" /> Content
                      & Photo Creator
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <NavLink
            to="/"
            className={`inline-block py-6 text-white hover:text-[#f92cde] duration-300`}
          >
            <span>Pricing</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;
