import React from "react";
import logoB from "../../assets/images/LogoB.png";
import facebook from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/insta.png";
import linkdin from "../../assets/icons/linkdin.png";
import twitter from "../../assets/icons/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" pt-10 sm:pt-16 pb-10 bg-[#03091D]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5 sm:gap-10">
          <div className="col-span-2 xl:pr-10 mb-5 sm:mb-0">
            <img src={logoB} alt="" className=" h-8 md:h-11" />
            <p className="text-sm sm:text-base text-[#E6E6E6] mt-4 max-w-[350px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elem
            </p>
            <ul className="mt-5 flex items-center gap-6">
              <li>
                <Link>
                  <img src={facebook} alt="" className="w-6" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={insta} alt="" className="w-6" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={linkdin} alt="" className="w-6" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={twitter} alt="" className="w-6" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-lg sm:text-xl font-bold text-white">Company</p>
            <ul className="mt-3 text-[#E6E6E6]">
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">About Us</Link>
              </li>
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Contact Us</Link>
              </li>
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Client Area</Link>
              </li>
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Data Center</Link>
              </li>
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Site Map</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-lg sm:text-xl font-bold text-white">Services</p>
            <ul className="mt-3 text-[#E6E6E6]">
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">cPanel Hosting</Link>
              </li>
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">VPS Hosting</Link>
              </li>
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Dedicated Servers</Link>
              </li>
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Cloud Hosting</Link>
              </li>
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Reseller Hosting</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 xl:col-span-1">
            <p className="text-lg sm:text-xl font-bold text-white">Resources</p>
            <ul className="mt-3 text-[#E6E6E6]">
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Web Hosting Blogs</Link>
              </li>
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Knowledge Base</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 xl:col-span-1">
            <p className="text-lg sm:text-xl font-bold text-white">Legal</p>
            <ul className="mt-3 text-[#E6E6E6]">
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Terms of Service</Link>
              </li>
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Service Level Aggrement</Link>
              </li>
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Privacy Policy</Link>
              </li>
              <li>
                <Link className="mb-3 sm:mb-4 inline-block text-sm sm:text-base">Billing Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 sm:mt-16 flex justify-center">
          <p className="text-white text-sm sm:text-base">
            Copyright © 2024, host.co.in. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
