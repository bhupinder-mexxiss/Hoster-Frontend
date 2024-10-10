import React from "react";
import { Heading } from "../../Heading/Heading";
import CustomButton from "../../CustomButton/CustomButton";
import icon16 from "../../../assets/icons/icon16.png";
import CustomSlider from "../../CustomSlider/CustomSlider";
import Slider from "react-slick";

const WebsiteBuilderPlan = () => {
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
    <div className="pt-16 md:pt-20 lg:pt-24 ">
      <div className="container mx-auto ">
        <div className=" max-w-[920px] mx-auto ">
          <Heading
            as="h4"
            children="A plan for every plan."
            size="4xl"
            className="capitalize text-center"
            fontWeight="700"
          />
          <p className="text-white text-center lg:text-lg mt-5 ">
            Your free, mobile-friendly site comes with built-in marketing and
            support. Keep it free forever, or upgrade to a paid plan for more
            business-building features.
          </p>
          <div className="mt-6 md:mt-10">
            <CustomButton
              label="Start for Free"
              height="50"
              className="px-16 mx-auto"
            />
          </div>
        </div>
        <div className="mt-10 md:mt-14">
          <div className="3xl:grid lg:grid-cols-4 gap-5 hidden">
            {/* <CustomSlider
            showDots={false}
            showButtons={true}
            responsive={{ lg: 4, md: 3, sm: 1 }}
          > */}
            <div className="border border-[#CFD0D4] rounded-3xl ">
              <div className="flex flex-col justify-between h-full">
                <div className="py-[30px] px-5 text-white ">
                  <Heading children="Basic" size="xxl" fontWeight="600" />
                  <p className="my-6 ">
                    Get your business moving with a custom domain, email, and
                    design tools.
                  </p>
                  <div className="flex items-end justify-between gap-3 mb-6">
                    <p className="flex items-end">
                      <span className="text-[36px] leading-[40px] font-semibold">
                        ₹249.00
                      </span>
                      <span className="text-lg font-medium">/mo</span>
                    </p>
                    <div className="flex flex-col justify-between h-full">
                      <span className="text-sm line-through opacity-70 font-medium">
                        ₹329.00
                      </span>
                      <span className="text-[#CF088C] font-medium">
                        Save 24 %
                      </span>
                    </div>
                  </div>
                  <p className="mb-6 opacity-60 font-light">
                    With a 1-yr term. You pay ₹ 2,988.00 today Renews at ₹
                    3,948.00.
                  </p>
                  <ul className="mt-8">
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Connect a custom domain
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Content and design tools
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Secure SSL
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Unlimited social media platforms
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Unified inbox and website chat
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="py-[30px] px-5 flex flex-col gap-5">
                  <CustomButton
                    label="Add to Cart"
                    variant="pinkPurple-100"
                    height="50"
                    className="w-full max-w-[240px] mx-auto"
                  />
                  <CustomButton
                    label="Start for Free"
                    variant="none"
                    height="50"
                    className="border border-white w-full max-w-[240px] mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="border border-[#CFD0D4] rounded-3xl ">
              <div className="flex flex-col justify-between h-full">
                <div className="py-[30px] px-5 text-white ">
                  <Heading children="Standard" size="xxl" fontWeight="600" />
                  <p className="my-6 ">
                    Grow your brand with a website, social media, and email
                    marketing
                  </p>
                  <div className="flex items-end justify-between gap-3 mb-6">
                    <p className="flex items-end">
                      <span className="text-[36px] leading-[40px] font-semibold">
                        ₹499.00
                      </span>
                      <span className="text-lg font-medium">/mo</span>
                    </p>
                    <div className="flex flex-col justify-between h-full">
                      <span className="text-sm line-through opacity-70 font-medium">
                        ₹699.00
                      </span>
                      <span className="text-[#CF088C] font-medium">
                        Save 28 %
                      </span>
                    </div>
                  </div>
                  <p className="mb-6 opacity-60 font-light">
                    With a 1-yr term. You pay ₹ 5,988.00 today Renews at ₹
                    5,988.00.
                  </p>
                  <ul className="mt-8">
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Everything in Basic plus:
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Built-in SEO
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        20 social posts & responses/mo
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        500 email marketing sends/mo
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="py-[30px] px-5 flex flex-col gap-5">
                  <CustomButton
                    label="Add to Cart"
                    variant="pinkPurple-100"
                    height="50"
                    className="w-full max-w-[240px] mx-auto"
                  />
                  <CustomButton
                    label="Start for Free"
                    variant="none"
                    height="50"
                    className="border border-white w-full max-w-[240px] mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="border border-[#CFD0D4] rounded-3xl  bg-pinkPurple-gradient-100">
              <div className="flex flex-col justify-between h-full">
                <div className="py-[30px] px-5 text-white ">
                  <Heading children="Premium" size="xxl" fontWeight="600" />
                  <p className="my-6 ">
                    Reach your customers with expanded email marketing tools,
                    social ads, and more.
                  </p>
                  <div className="flex items-end justify-between gap-3 mb-6">
                    <p className="flex items-end">
                      <span className="text-[36px] leading-[40px] font-semibold">
                        ₹699.00
                      </span>
                      <span className="text-lg font-medium">/mo</span>
                    </p>
                    <div className="flex flex-col justify-between h-full">
                      <span className="text-sm line-through opacity-70 font-medium">
                        ₹999.00
                      </span>
                      <span className="text-white font-medium">
                        Save 30 %
                      </span>
                    </div>
                  </div>
                  <p className="mb-6 opacity-60 font-light">
                    With a 1-yr term. You pay ₹ 8,388.00 today Renews at ₹
                    9,588.00.
                  </p>
                  <ul className="mt-8">
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Everything in Standard plus:
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Book recurring appointments
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Unlimited posts & responses/mo
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        25,000 email marketing sends/mo
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="py-[30px] px-5 flex flex-col gap-5">
                  <CustomButton
                    label="Add to Cart"
                    height="50"
                    variant="none"
                    className="w-full !bg-white text-[#101837]  max-w-[240px] mx-auto"
                  />
                  <CustomButton
                    label="Start for Free"
                    variant="none"
                    height="50"
                    className="border border-white w-full max-w-[240px] mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="border border-[#CFD0D4] rounded-3xl ">
              <div className="flex flex-col justify-between h-full">
                <div className="py-[30px] px-5 text-white ">
                  <Heading children="Ecommerce" size="xxl" fontWeight="600" />
                  <p className="my-6 ">
                    Easily manage your inventory and sell online.
                  </p>
                  <div className="flex items-end justify-between gap-3 mb-6">
                    <p className="flex items-end">
                      <span className="text-[36px] leading-[40px] font-semibold">
                        ₹999.00
                      </span>
                      <span className="text-lg font-medium">/mo</span>
                    </p>
                    <div className="flex flex-col justify-between h-full">
                      <span className="text-sm line-through opacity-70 font-medium">
                        ₹1,499.00
                      </span>
                      <span className="text-[#CF088C] font-medium">
                        Save 33 %
                      </span>
                    </div>
                  </div>
                  <p className="mb-6 opacity-60 font-light">
                    With a 1-yr term. You pay ₹ 11,988.00 today Renews at ₹
                    11,988.00
                  </p>
                  <ul className="mt-8">
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Everything in Premium plus:
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Product listings
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Flexible payments
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Flexible shipping options
                      </span>
                    </li>
                    <li className="flex gap-4 mb-5">
                      <img src={icon16} alt="" className="h-5 min-w-5 mt-1" />
                      <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                        Discount and promotional features
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="py-[30px] px-5 flex flex-col gap-5">
                  <CustomButton
                    label="Add to Cart"
                    variant="pinkPurple-100"
                    height="50"
                    className="w-full max-w-[240px] mx-auto"
                  />
                  <CustomButton
                    label="Start for Free"
                    variant="none"
                    height="50"
                    className="border border-white w-full max-w-[240px] mx-auto"
                  />
                </div>
              </div>
            </div>
            {/* </CustomSlider> */}
          </div>
          <div className="3xl:hidden">
            <Slider {...settings}>
              <div className="px-3">
                <div className="border border-[#CFD0D4] rounded-3xl ">
                  <div className="flex flex-col justify-between h-full">
                    <div className="py-[30px] px-5 text-white ">
                      <Heading children="Basic" size="xxl" fontWeight="600" />
                      <p className="my-6 ">
                        Get your business moving with a custom domain, email,
                        and design tools.
                      </p>
                      <div className="flex items-end justify-between gap-3 mb-6">
                        <p className="flex items-end">
                          <span className="text-[36px] leading-[40px] font-semibold">
                            ₹249.00
                          </span>
                          <span className="text-lg font-medium">/mo</span>
                        </p>
                        <div className="flex flex-col justify-between h-full">
                          <span className="text-sm line-through opacity-70 font-medium">
                            ₹329.00
                          </span>
                          <span className="text-[#CF088C] font-medium">
                            Save 24 %
                          </span>
                        </div>
                      </div>
                      <p className="mb-6 opacity-60 font-light">
                        With a 1-yr term. You pay ₹ 2,988.00 today Renews at ₹
                        3,948.00.
                      </p>
                      <ul className="mt-8">
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Connect a custom domain
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Content and design tools
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Secure SSL
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Unlimited social media platforms
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Unified inbox and website chat
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="py-[30px] px-5 flex flex-col gap-5">
                      <CustomButton
                        label="Add to Cart"
                        variant="pinkPurple-100"
                        height="50"
                        className="w-full max-w-[240px] mx-auto"
                      />
                      <CustomButton
                        label="Start for Free"
                        variant="none"
                        height="50"
                        className="border border-white w-full max-w-[240px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="border border-[#CFD0D4] rounded-3xl ">
                  <div className="flex flex-col justify-between h-full">
                    <div className="py-[30px] px-5 text-white ">
                      <Heading
                        children="Standard"
                        size="xxl"
                        fontWeight="600"
                      />
                      <p className="my-6 ">
                        Grow your brand with a website, social media, and email
                        marketing
                      </p>
                      <div className="flex items-end justify-between gap-3 mb-6">
                        <p className="flex items-end">
                          <span className="text-[36px] leading-[40px] font-semibold">
                            ₹499.00
                          </span>
                          <span className="text-lg font-medium">/mo</span>
                        </p>
                        <div className="flex flex-col justify-between h-full">
                          <span className="text-sm line-through opacity-70 font-medium">
                            ₹699.00
                          </span>
                          <span className="text-[#CF088C] font-medium">
                            Save 28 %
                          </span>
                        </div>
                      </div>
                      <p className="mb-6 opacity-60 font-light">
                        With a 1-yr term. You pay ₹ 5,988.00 today Renews at ₹
                        5,988.00.
                      </p>
                      <ul className="mt-8">
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Everything in Basic plus:
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Built-in SEO
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            20 social posts & responses/mo
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            500 email marketing sends/mo
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="py-[30px] px-5 flex flex-col gap-5">
                      <CustomButton
                        label="Add to Cart"
                        variant="pinkPurple-100"
                        height="50"
                        className="w-full max-w-[240px] mx-auto"
                      />
                      <CustomButton
                        label="Start for Free"
                        variant="none"
                        height="50"
                        className="border border-white w-full max-w-[240px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="border border-[#CFD0D4] rounded-3xl bg-pinkPurple-gradient-100">
                  <div className="flex flex-col justify-between h-full">
                    <div className="py-[30px] px-5 text-white ">
                      <Heading children="Premium" size="xxl" fontWeight="600" />
                      <p className="my-6 ">
                        Reach your customers with expanded email marketing
                        tools, social ads, and more.
                      </p>
                      <div className="flex items-end justify-between gap-3 mb-6">
                        <p className="flex items-end">
                          <span className="text-[36px] leading-[40px] font-semibold">
                            ₹699.00
                          </span>
                          <span className="text-lg font-medium">/mo</span>
                        </p>
                        <div className="flex flex-col justify-between h-full">
                          <span className="text-sm line-through opacity-70 font-medium">
                            ₹999.00
                          </span>
                          <span className="text-white font-medium">
                            Save 30 %
                          </span>
                        </div>
                      </div>
                      <p className="mb-6 opacity-60 font-light">
                        With a 1-yr term. You pay ₹ 8,388.00 today Renews at ₹
                        9,588.00.
                      </p>
                      <ul className="mt-8">
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Everything in Standard plus:
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Book recurring appointments
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Unlimited posts & responses/mo
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            25,000 email marketing sends/mo
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="py-[30px] px-5 flex flex-col gap-5">
                      <CustomButton
                        label="Add to Cart"
                        height="50"
                        variant="none"
                        className="w-full !bg-white text-[#101837]  max-w-[240px] mx-auto"
                      />
                      <CustomButton
                        label="Start for Free"
                        variant="none"
                        height="50"
                        className="border border-white w-full max-w-[240px] mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="border border-[#CFD0D4] rounded-3xl ">
                  <div className="flex flex-col justify-between h-full">
                    <div className="py-[30px] px-5 text-white ">
                      <Heading
                        children="Ecommerce"
                        size="xxl"
                        fontWeight="600"
                      />
                      <p className="my-6 ">
                        Easily manage your inventory and sell online.
                      </p>
                      <div className="flex items-end justify-between gap-3 mb-6">
                        <p className="flex items-end">
                          <span className="text-[36px] leading-[40px] font-semibold">
                            ₹999.00
                          </span>
                          <span className="text-lg font-medium">/mo</span>
                        </p>
                        <div className="flex flex-col justify-between h-full">
                          <span className="text-sm line-through opacity-70 font-medium">
                            ₹1,499.00
                          </span>
                          <span className="text-[#CF088C] font-medium">
                            Save 33 %
                          </span>
                        </div>
                      </div>
                      <p className="mb-6 opacity-60 font-light">
                        With a 1-yr term. You pay ₹ 11,988.00 today Renews at ₹
                        11,988.00
                      </p>
                      <ul className="mt-8">
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Everything in Premium plus:
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Product listings
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Flexible payments
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Flexible shipping options
                          </span>
                        </li>
                        <li className="flex gap-4 mb-5">
                          <img
                            src={icon16}
                            alt=""
                            className="h-5 min-w-5 mt-1"
                          />
                          <span className="text-white text-sm sm:text-base xl:text-lg opacity-90">
                            Discount and promotional features
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="py-[30px] px-5 flex flex-col gap-5">
                      <CustomButton
                        label="Add to Cart"
                        variant="pinkPurple-100"
                        height="50"
                        className="w-full max-w-[240px] mx-auto"
                      />
                      <CustomButton
                        label="Start for Free"
                        variant="none"
                        height="50"
                        className="border border-white w-full max-w-[240px] mx-auto"
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
  );
};

export default WebsiteBuilderPlan;
