import React from "react";
import { Link } from "react-router-dom";
import mobileIcon1 from "../../assets/icons/mobileIcon1.png";
import mobileIcon2 from "../../assets/icons/mobileIcon2.png";
import mobileIcon3 from "../../assets/icons/mobileIcon3.png";
import mobileIcon4 from "../../assets/icons/mobileIcon4.png";
import mobileIcon5 from "../../assets/icons/mobileIcon5.png";
import mobileIcon6 from "../../assets/icons/mobileIcon6.png";
import mobileIcon7 from "../../assets/icons/mobileIcon7.png";
import mobileIcon8 from "../../assets/icons/mobileIcon8.png";
import mobileIcon9 from "../../assets/icons/mobileIcon9.png";
import mobileIcon18 from "../../assets/icons/mobileIcon18.png";
import headerIcon23 from "../../assets/icons/headerIcon23.png";
import headerIcon24 from "../../assets/icons/headerIcon24.png";
import headerIcon25 from "../../assets/icons/headerIcon25.png";
import headerIcon26 from "../../assets/icons/headerIcon26.png";

const DomainSubMenu = ({ closeMenu }) => {
  return (
    <>
      <div className=" px-4">
        <div className="mb-6">
          <p className="text-[#070E2A] opacity-80  mb-3">Find a Domain</p>
          <ul className="text-sm font-medium text-[#070E2A] flex flex-col gap-3">
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link
                to="/domains"
                className="flex items-center gap-3.5"
                onClick={closeMenu}
              >
                <img src={mobileIcon1} alt="" className="w-6" /> Search for
                Domain Names
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link
                to="/domains/domain-transfer"
                className="flex items-center gap-3.5"
                onClick={closeMenu}
              >
                <img src={mobileIcon2} alt="" className="w-6" /> Transfer Domain
                Names
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link
                to="/domains/gtld-domain-names"
                className="flex items-center gap-3.5"
                onClick={closeMenu}
              >
                <img src={mobileIcon3} alt="" className="w-6" /> gTLD Domain
                Extensions
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link
                to="/domains/bulk-domain-search"
                className="flex items-center gap-3.5"
              >
                <img src={mobileIcon1} alt="" className="w-6" /> Bulk Domain
                Search
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link
                to="/domains/business-name-generator"
                className="flex items-center gap-3.5"
              >
                <img src={headerIcon23} alt="" className="w-6 opacity-80" />{" "}
                Business Name Generator
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <p className="text-[#070E2A] opacity-80  mb-3">
            Auctions for Domains
          </p>
          <ul className="text-sm font-medium text-[#070E2A] flex flex-col gap-3">
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link
                to="/auctions-domain-name"
                className="flex items-center gap-3.5"
                onClick={closeMenu}
              >
                <img src={mobileIcon4} alt="" className="w-6" /> Auctions for
                Domain Names
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link
                to="/domain-value-appraisal"
                className="flex items-center gap-3.5"
                onClick={closeMenu}
              >
                <img src={mobileIcon5} alt="" className="w-6" /> Appraise Domain
                Name Value
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link
                to="/discount-domain-club"
                className="flex items-center gap-3.5"
              >
                <img src={headerIcon24} alt="" className="w-6 opacity-80" />
                Discount Domain Club
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link to="/cashparking" className="flex items-center gap-3.5">
                <img src={headerIcon25} alt="" className="w-6 opacity-80" />
                CashParking
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link
                to="/domain-investing"
                className="flex items-center gap-3.5"
                onClick={closeMenu}
              >
                <img src={mobileIcon6} alt="" className="w-6" /> Investing in
                Domain Names
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="text-[#070E2A] opacity-80  mb-3">
            Domain Tools and Services
          </p>
          <ul className="text-sm font-medium text-[#070E2A] flex flex-col gap-3">
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link to="/domain-name-generator" className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon7} alt="" className="w-6" /> Generate Domain
                Names
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon8} alt="" className="w-6" /> Find a Domain
                Owner (WHOIS)
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link to="/domain-broker" className="flex items-center gap-3.5" onClick={closeMenu}>
                <img src={mobileIcon9} alt="" className="w-6" /> Domain Broker
                Service
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link to="premium-dns" className="flex items-center gap-3.5">
                <img src={headerIcon26} alt="" className="w-6" /> Domain Premium
                DNS
              </Link>
            </li>
            <li className="text-nowrap hover:text-[#f92cde] duration-200">
              <Link to="/domain-protection" className="flex items-center gap-3.5">
                <img src={mobileIcon18} alt="" className="w-6" /> Domain Domain
                Protection
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DomainSubMenu;
