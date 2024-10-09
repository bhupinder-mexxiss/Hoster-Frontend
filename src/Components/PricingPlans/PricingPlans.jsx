import React, { useState } from "react";
import { Heading } from "../Heading/Heading";
import Slider from "react-slick";
import rupeeIcon from "../../assets/icons/rupeeIcon.png";
import icon16 from "../../assets/icons/icon16.png";
import CustomButton from "../CustomButton/CustomButton";
import "./PricingPlans.css";

const PricingPlans = () => {
  const [togglePlan, setTogglePlan] = useState("monthly");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 540,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="PricingPlans pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <div>
          <div>
            <Heading
              children="Pricing Plans"
              size="4xl"
              fontWeight="600"
              className="text-center"
              as="h4"
            />
            <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6">
              Simple,transparent pricing that grows with you.
            </p>
          </div>
          <div className="mt-10 md:mt-14">
            <div className="flex justify-center">
              <div className="relative bg-white rounded-full h-[46px] sm:h-[50px] md:h-[60px] flex items-center overflow-hidden px-1.5">
                <div
                  className={`h-[36px] sm:h-[40px] md:h-[50px] w-20 sm:w-24 md:w-[120px] rounded-full absolute bg-pink-gradient ${
                    togglePlan === "yearly" ? "translate-x-full" : ""
                  }`}
                  style={{
                    transition: "0.3s cubic-bezier(0.94, 0.1, 0.09, 1.16)",
                  }}
                ></div>
                <button
                  className={`h-[36px] sm:h-[40px] md:h-[50px] relative w-20 sm:w-24 md:w-[120px] text-sm sm:text-base delay-150 ${
                    togglePlan === "monthly" ? "text-white" : "text-black"
                  } `}
                  onClick={() => setTogglePlan("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`h-[36px] sm:h-[40px] md:h-[50px] relative w-20 sm:w-24 md:w-[120px] text-sm sm:text-base delay-150 ${
                    togglePlan === "yearly" ? "text-white" : "text-black"
                  } `}
                  onClick={() => setTogglePlan("yearly")}
                >
                  Yearly
                </button>
              </div>
            </div>
            <div className="mt-10 md:mt-14 mx-auto">
              <div className="xl:grid grid-cols-3 gap-6 xl:gap-10 hidden">
                <div className=" border border-[#CFD0D4] hover:border-transparent hover:bg-pinkPurple-gradient-70 rounded-3xl px-6 py-8 box">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="font-medium text-xl opacity-60 text-white">
                        Wordpress Hosting
                      </p>
                      <div className="mt-8 flex gap-6 xl:gap-10 items-end">
                        <p className="text-white flex items-center gap-3 font-semibold">
                          <img
                            src={rupeeIcon}
                            className="w-4 md:w-5 xl:w-6"
                            alt=""
                          />{" "}
                          <span>
                            <span className=" text-2xl md:text-4xl xl:text-[40px]">
                              99/
                            </span>
                            <span className="text-xl md:text-2xl xl:text-3xl">
                              Mo
                            </span>
                          </span>
                        </p>
                        <div className="">
                          <p className="text-white flex items-center gap-2 font-medium opacity-70 w-fit relative after:w-[105%] after:h-0.5 after:absolute after:bg-white after:left-1/5 after:-translate-x-1/5">
                            <img src={rupeeIcon} className="w-2 sm:w-2.5" alt="" />{" "}
                            <span>
                              <span className="text-sm sm:text-base">199</span>
                            </span>
                          </p>
                          <p className="text-[#D4088C] text-sm sm:text-base md:text-lg font-semibold savePer">
                            Save 50 %
                          </p>
                        </div>
                      </div>
                      <p className="mt-5 text-white text-sm sm:text-base xl:text-lg opacity-90">
                        All inclusive WordPress Hosting with 24/7 live support
                        and pre-installed WP, theme and plugins.
                      </p>
                      <ul className="mt-8">
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Preinstalled WordPress
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Preinstalled Themes/Plugins
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Free Migration Assistance
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            WP Optimized Environment
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            30 Days Money Back
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            24x7 Support
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8">
                      <CustomButton
                        label="View Plans"
                        variant="pinkPurple-100"
                        height="60"
                        size="lg"
                        className="font-medium w-full max-w-[180px] sm:max-w-[250px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className=" border border-[#CFD0D4] hover:border-transparent hover:bg-pinkPurple-gradient-70 rounded-3xl px-6 py-8 box">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="font-medium text-xl opacity-60 text-white">
                        Shared Hosting
                      </p>
                      <div className="mt-8 flex gap-6 xl:gap-10 items-end">
                        <p className="text-white flex items-center gap-3 font-semibold">
                          <img
                            src={rupeeIcon}
                            className="w-4 md:w-5 xl:w-6"
                            alt=""
                          />{" "}
                          <span>
                            <span className=" text-2xl md:text-4xl xl:text-[40px]">
                              125/
                            </span>
                            <span className="text-xl md:text-2xl xl:text-3xl">
                              Mo
                            </span>
                          </span>
                        </p>
                        <div className="">
                          <p className="text-white flex items-center gap-2 font-medium opacity-70 w-fit relative after:w-[105%] after:h-0.5 after:absolute after:bg-white after:left-1/5 after:-translate-x-1/5">
                            <img src={rupeeIcon} className="w-2 sm:w-2.5" alt="" />{" "}
                            <span>
                              <span className="text-sm sm:text-base">149</span>
                            </span>
                          </p>
                          <p className="text-[#D4088C] text-sm sm:text-base md:text-lg font-semibold savePer">
                            Save 16 %
                          </p>
                        </div>
                      </div>
                      <p className="mt-5 text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Host multiple websites over our feature-rich shared
                        hosting delivering 99.95% Uptime.
                      </p>
                      <ul className="mt-8">
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Free Domain
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Host Multiple Websites
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Unmetered Bandwidth
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Daily Backups
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            99.95% Uptime
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            24x7 Support
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8">
                      <CustomButton
                        label="Choose Plan"
                        variant="pinkPurple-100"
                        height="60"
                        size="lg"
                        className="font-medium w-full max-w-[180px] sm:max-w-[250px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className=" border border-[#CFD0D4] hover:border-transparent hover:bg-pinkPurple-gradient-70 rounded-3xl px-6 py-8 box">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="font-medium text-xl opacity-60 text-white">
                        VPS Hosting
                      </p>
                      <div className="mt-8 flex gap-6 xl:gap-10 items-end">
                        <p className="text-white flex items-center gap-3 font-semibold">
                          <img
                            src={rupeeIcon}
                            className="w-4 md:w-5 xl:w-6"
                            alt=""
                          />{" "}
                          <span>
                            <span className=" text-2xl md:text-4xl xl:text-[40px]">
                              999/
                            </span>
                            <span className="text-xl md:text-2xl xl:text-3xl">
                              Mo
                            </span>
                          </span>
                        </p>
                      </div>
                      <p className="mt-5 text-white text-sm sm:text-base xl:text-lg opacity-90">
                        With private server environment, experience performance
                        & reliability of managed hosting.
                      </p>
                      <ul className="mt-8">
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            SSD Storage
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Guaranteed CPU & RAM
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            cPanel/Plesk (Optional)
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            SSH/RDP Access
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            30 Days Money Back
                          </span>
                        </li>
                        <li className="flex items-center gap-4 mb-5">
                          <img src={icon16} alt="" className="w-5" />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            24x7 Support
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8">
                      <CustomButton
                        label="View Plans"
                        variant="pinkPurple-100"
                        height="60"
                        size="lg"
                        className="font-medium w-full max-w-[180px] sm:max-w-[250px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:hidden max-w-[600px] md:max-w-[900px] mx-auto sm:px-8">
                <Slider {...settings}>
                  <div className="px-3">
                    <div className=" border border-[#CFD0D4] hover:border-transparent hover:bg-pinkPurple-gradient-70 rounded-3xl px-6 py-8 box h-full flex flex-col">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <p className="font-medium text-xl opacity-60 text-white">
                            Wordpress Hosting
                          </p>
                          <div className="mt-8 flex gap-6 xl:gap-10 items-end">
                            <p className="text-white flex items-center gap-3 font-semibold">
                              <img
                                src={rupeeIcon}
                                className="w-4 md:w-5 xl:w-6"
                                alt=""
                              />{" "}
                              <span>
                                <span className=" text-2xl md:text-4xl xl:text-[40px]">
                                  99/
                                </span>
                                <span className="text-xl md:text-2xl xl:text-3xl">
                                  Mo
                                </span>
                              </span>
                            </p>
                            <div className="">
                              <p className="text-white flex items-center gap-2 font-medium opacity-70 w-fit relative after:w-[105%] after:h-0.5 after:absolute after:bg-white after:left-1/5 after:-translate-x-1/5">
                                <img src={rupeeIcon} className="w-2 sm:w-2.5" alt="" />{" "}
                                <span>
                                  <span className="text-sm sm:text-base">199</span>
                                </span>
                              </p>
                              <p className="text-[#D4088C] text-sm sm:text-base md:text-lg font-semibold savePer">
                                Save 50 %
                              </p>
                            </div>
                          </div>
                          <p className="mt-5 text-white text-sm sm:text-base xl:text-lg opacity-90">
                            All inclusive WordPress Hosting with 24/7 live
                            support and pre-installed WP, theme and plugins.
                          </p>
                          <ul className="mt-8">
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                Preinstalled WordPress
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                Preinstalled Themes/Plugins
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                Free Migration Assistance
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                WP Optimized Environment
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                30 Days Money Back
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                24x7 Support
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-8">
                          <CustomButton
                            label="View Plans"
                            variant="pinkPurple-100"
                            height="60"
                            size="lg"
                            className="font-medium w-full max-w-[180px] sm:max-w-[250px] mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-3">
                    <div className=" border border-[#CFD0D4] hover:border-transparent hover:bg-pinkPurple-gradient-70 rounded-3xl px-6 py-8 box h-full flex flex-col">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <p className="font-medium text-xl opacity-60 text-white">
                            Shared Hosting
                          </p>
                          <div className="mt-8 flex gap-6 xl:gap-10 items-end">
                            <p className="text-white flex items-center gap-3 font-semibold">
                              <img
                                src={rupeeIcon}
                                className="w-4 md:w-5 xl:w-6"
                                alt=""
                              />{" "}
                              <span>
                                <span className=" text-2xl md:text-4xl xl:text-[40px]">
                                  125/
                                </span>
                                <span className="text-xl md:text-2xl xl:text-3xl">
                                  Mo
                                </span>
                              </span>
                            </p>
                            <div className="">
                              <p className="text-white flex items-center gap-2 font-medium opacity-70 w-fit relative after:w-[105%] after:h-0.5 after:absolute after:bg-white after:left-1/5 after:-translate-x-1/5">
                                <img src={rupeeIcon} className="w-2 sm:w-2.5" alt="" />{" "}
                                <span>
                                  <span className="text-sm sm:text-base">149</span>
                                </span>
                              </p>
                              <p className="text-[#D4088C] text-sm sm:text-base md:text-lg font-semibold savePer">
                                Save 16 %
                              </p>
                            </div>
                          </div>
                          <p className="mt-5 text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Host multiple websites over our feature-rich shared
                            hosting delivering 99.95% Uptime.
                          </p>
                          <ul className="mt-8">
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                Free Domain
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                Host Multiple Websites
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                Unmetered Bandwidth
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                Daily Backups
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                99.95% Uptime
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                24x7 Support
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-8">
                          <CustomButton
                            label="Choose Plan"
                            variant="pinkPurple-100"
                            height="60"
                            size="lg"
                            className="font-medium w-full max-w-[180px] sm:max-w-[250px] mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-3">
                    <div className=" border border-[#CFD0D4] hover:border-transparent hover:bg-pinkPurple-gradient-70 rounded-3xl px-6 py-8 box h-full flex flex-col">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <p className="font-medium text-xl opacity-60 text-white">
                            VPS Hosting
                          </p>
                          <div className="mt-8 flex gap-6 xl:gap-10 items-end">
                            <p className="text-white flex items-center gap-3 font-semibold">
                              <img
                                src={rupeeIcon}
                                className="w-4 md:w-5 xl:w-6"
                                alt=""
                              />{" "}
                              <span>
                                <span className=" text-2xl md:text-4xl xl:text-[40px]">
                                  999/
                                </span>
                                <span className="text-xl md:text-2xl xl:text-3xl">
                                  Mo
                                </span>
                              </span>
                            </p>
                          </div>
                          <p className="mt-5 text-white text-sm sm:text-base xl:text-lg opacity-90">
                            With private server environment, experience
                            performance & reliability of managed hosting.
                          </p>
                          <ul className="mt-8">
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                SSD Storage
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                Guaranteed CPU & RAM
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                cPanel/Plesk (Optional)
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                SSH/RDP Access
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                30 Days Money Back
                              </span>
                            </li>
                            <li className="flex items-center gap-4 mb-5">
                              <img src={icon16} alt="" className="w-5" />
                              <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                                24x7 Support
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-8">
                          <CustomButton
                            label="View Plans"
                            variant="pinkPurple-100"
                            height="60"
                            size="lg"
                            className="font-medium w-full max-w-[180px] sm:max-w-[250px] mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
