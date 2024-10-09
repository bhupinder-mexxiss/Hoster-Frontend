import React, { useState } from "react";
import LogoB from "../../assets/images/LogoB.png";
import Logo from "../../assets/images/Logo.png";
import phoneIcon from "../../assets/icons/phone.png";
import emailIcon from "../../assets/icons/email.png";
import helpIcon from "../../assets/icons/help.png";
import supportIcon from "../../assets/icons/support.png";
import langIcon from "../../assets/icons/lang.png";
import searchIcon from "../../assets/icons/search.png";
import cartIcon from "../../assets/icons/cart.png";
import NavMenu from "./NavMenu";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@mui/icons-material";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <>
      <header className="pt-2 sm:pt-0">
        <div className="container fluid:container mx-auto">
          <div className="sm:flex items-center justify-between pt-4 pb-6 hidden">
            <div className="text-white text-xs md:text-sm flex gap-4 md:gap-10">
              <div className="flex items-center gap-1.5 md:gap-2.5">
                <img src={emailIcon} alt="" className="w-4 sm:w-5 md:w-6" />
                <span className="opacity-80">hosting@gmail.com</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2.5">
                <img src={phoneIcon} alt="" className="w-4 sm:w-5 md:w-6" />
                <span className="opacity-80">+91 987 6654 321</span>
              </div>
            </div>
            <div className="text-white text-xs md:text-sm flex gap-4 md:gap-10">
              <div className="flex items-center gap-1.5 md:gap-2.5">
                <img src={supportIcon} alt="" className="w-4 sm:w-5 md:w-6" />
                <span className="opacity-80">Support</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2.5">
                <img src={helpIcon} alt="" className="w-4 sm:w-5 md:w-6" />
                <span className="opacity-80">Help</span>
              </div>
            </div>
          </div>
          <nav className=" flex items-center justify-between relative bg-[#F1F1F11A] py-2 md:py-4 2xl:py-0 px-3 md:px-6">
            <div className="flex items-center gap-3 sm:gap-5">
              <button
                className=" 2xl:!hidden"
                onClick={() => setMenuShow(true)}
              >
                <MenuOutlined className="text-white !text-2xl sm:!text-3xl md:!text-[40px]" />
              </button>
              <img src={LogoB} alt="" className=" h-6 md:h-8 3xl:h-10 hidden sm:inline-block" />
              <img src={Logo} alt="" className=" h-5 sm:hidden" />
            </div>
            <div className="hidden 2xl:block">
              <NavMenu />
            </div>
            <div className="flex items-center gap-4 sm:gap-[26px]">
              <button>
                <img src={searchIcon} className="w-4 sm:w-5 md:w-6" alt="" />
              </button>
              <button>
                <img src={langIcon} className="w-4 sm:w-5 md:w-6" alt="" />
              </button>
              <button>
                <img src={cartIcon} className="w-4 sm:w-5 md:w-6" alt="" />
              </button>
              <CustomButton
                label="Login"
                className="py-2.5 px-5 md:min-w-[90px]"
                as={Link}
                to="/auth"
              />
            </div>
          </nav>
        </div>
        <div className="mobileMenu">
          <MobileMenu menuShow={menuShow} setMenuShow={setMenuShow} />
        </div>
      </header>
    </>
  );
};

export default Header;
