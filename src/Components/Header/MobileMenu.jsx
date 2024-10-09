import React, { useEffect, useState } from "react";
import LogoB from "../../assets/images/LogoB.png";
import {
  ArrowRightAlt,
  CloseOutlined,
  KeyboardArrowLeftOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import DomainSubMenu from "./DomainSubMenu";
import SecuritySubMenu from "./SecuritySubMenu";
import WebsiteSubMenu from "./WebsiteSubMenu";
import MarketingSubMenu from "./MarketingSubMenu";

const MobileMenu = ({ menuShow, setMenuShow }) => {
  const customStyle = ["overflow-hidden", "2xl:overflow-auto"]; // Use array to list multiple classes

  useEffect(() => {
    if (menuShow) {
      customStyle.forEach((cls) => document.body.classList.add(cls));
    } else {
      customStyle.forEach((cls) => document.body.classList.remove(cls));
    }
  }, [menuShow]);

  // State to track which submenu to show
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const closeMenu = () => {
    setMenuShow(false);
    setShowSubMenu(false); // Close any submenu when the main menu is closed
    setActiveSubMenu(null);
  };

  const openSubMenu = (menu) => {
    setShowSubMenu(true);
    if (activeSubMenu !== menu) {
      setActiveSubMenu(null);
    }
    setTimeout(() => {
      setActiveSubMenu(menu);
    }, 150);
  };

  return (
    <div
      className={`fixed w-full h-full top-0 left-0 z-[99] 2xl:hidden ${
        !menuShow ? "opacity-0 invisible duration-150 " : "duration-300 "
      }`}
    >
      <div
        className={`flex relative z-[999] 2xl:hidden w-[calc(100%_-_40px)] md:w-fit ${
          menuShow
            ? "translate-x-0 duration-300 "
            : "-translate-x-full duration-150"
        }`}
      >
        {/* Main menu Section */}
        <div className="bg-white w-full sm:w-[320px] top-0 left-0 h-screen relative z-20 overflow-auto py-4 main_menu">
          <div className="px-4">
            <img src={LogoB} alt="" className="blueFilter h-9" />
          </div>
          <ul className="flex flex-col gap-4 mt-6">
            <li>
              <button
                className={`text-lg py-2 duration-300 hover:bg-[#060c260f] px-4 flex items-center gap-1.5 justify-between w-full group ${
                  activeSubMenu === "domain" && "bg-[#060c260f]"
                }`}
                onClick={() => openSubMenu("domain")}
              >
                <span className="opacity-80">Domain</span>
                <ArrowRightAlt
                  className={`text-black opacity-70 -translate-x-2 group-hover:translate-x-0 !transition-all !duration-300 `}
                />
              </button>
            </li>
            <li>
              <button
                className={`text-lg py-2 duration-300 hover:bg-[#060c260f] px-4 flex items-center gap-1.5 justify-between w-full group ${
                  activeSubMenu === "websites" && "bg-[#060c260f]"
                }`}
                onClick={() => openSubMenu("websites")}
              >
                <span className="opacity-80">Websites and Hosting</span>
                <ArrowRightAlt
                  className={`text-black opacity-70 -translate-x-2 group-hover:translate-x-0 !transition-all !duration-300 `}
                />
              </button>
            </li>
            <li>
              <Link
                to="/"
                className={`text-lg py-2 duration-300 hover:bg-[#060c260f] px-4 block`}
                onClick={closeMenu}
              >
                <span className="opacity-80">Email</span>
              </Link>
            </li>
            <li>
              <button
                className={`text-lg py-2 duration-300 hover:bg-[#060c260f] px-4 flex items-center gap-1.5 justify-between w-full group ${
                  activeSubMenu === "security" && "bg-[#060c260f]"
                }`}
                onClick={() => openSubMenu("security")}
              >
                <span className="opacity-80">Security</span>
                <ArrowRightAlt
                  className={`text-black opacity-70 -translate-x-2 group-hover:translate-x-0 !transition-all !duration-300 `}
                />
              </button>
            </li>
            <li>
              <button
                className={`text-lg py-2 duration-300 hover:bg-[#060c260f] px-4 flex items-center gap-1.5 justify-between w-full group ${
                  activeSubMenu === "marketing" && "bg-[#060c260f]"
                }`}
                onClick={() => openSubMenu("marketing")}
              >
                <span className="opacity-80">Marketing</span>
                <ArrowRightAlt
                  className={`text-black opacity-70 -translate-x-2 group-hover:translate-x-0 !transition-all !duration-300 `}
                />
              </button>
            </li>
            <li>
              <Link
                to="/"
                className={`text-lg py-2 duration-300 hover:bg-[#060c260f] px-4 block`}
                onClick={closeMenu}
              >
                <span className="opacity-80">Pricing</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Submenu Section */}
        <div
          className={`bg-slate-100 w-full sm:w-[320px] absolute left-0 md:relative z-20 md:z-10 py-5 h-screen overflow-auto sub_menu ${
            showSubMenu
              ? "w-full md:duration-150"
              : "hidden md:block md:w-0 md:invisible md:duration-100"
          }`}
        >
          <div className="px-4">
            <button
              onClick={() => {
                setShowSubMenu(false);
                setActiveSubMenu(null);
              }}
            >
              <KeyboardArrowLeftOutlined className="!text-3xl" />
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-6 overflow-x-hidden">
            <div
              className={`duration-200 md:duration-[400ms] ${
                activeSubMenu
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {activeSubMenu === "domain" && <DomainSubMenu closeMenu={closeMenu} />}
              {activeSubMenu === "websites" && <WebsiteSubMenu closeMenu={closeMenu} />}
              {activeSubMenu === "security" && <SecuritySubMenu closeMenu={closeMenu} />}
              {activeSubMenu === "marketing" && <MarketingSubMenu closeMenu={closeMenu} />}
            </div>
          </div>
        </div>

        <button
          className="absolute top-5 -right-8 sm:-right-10"
          onClick={closeMenu}
        >
          <CloseOutlined className="text-white" />{" "}
        </button>
      </div>

      {/* Bg Overlay */}
      <div
        className={`fixed w-full h-full top-0 left-0 bg-black z-[99] bg-opacity-40 2xl:hidden ${
          menuShow
            ? "opacity-100 visible  duration-300"
            : "invisible opacity-0  duration-100"
        }  ${menuShow && "backdrop-blur-[2px]  delay-100"}`}
        onClick={closeMenu}
      ></div>
    </div>
  );
};

export default MobileMenu;
