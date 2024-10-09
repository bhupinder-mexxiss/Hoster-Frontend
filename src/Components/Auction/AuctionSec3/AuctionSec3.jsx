import React from "react";
import { Heading } from "../../Heading/Heading";
import img from "../../../assets/images/image.png";
import CustomButton from "../../CustomButton/CustomButton";
import image3 from '../../../assets/images/image3.png'
import image4 from '../../../assets/images/image4.png'
import image5 from '../../../assets/images/image5.png'

const AuctionSec3 = () => {
  return (
    <>
      <div className="pb-16 pt-10 md:pb-20 md:pt-14 lg:pb-28 lg:pt-20 ">
        <div className="container mx-auto ">
          <div>
            <div className="grid lg:grid-cols-2 items-center gap-10 max-w-[1440px] mx-auto">
              <div>
                <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative mx-auto lg:ml-auto">
                  <img src={image5} className="relative rounded-3xl w-full" />
                </div>
              </div>
              <div>
                <Heading
                  children="The buy and sell of investing in domains."
                  size="4xl"
                  fontWeight="600"
                  as="h4"
                />
                <p className="textsm sm:text-base lg:text-lg text-white py-8 lg:py-10 xl:py-12">
                  If you have unused domains—maybe a project never took flight
                  or you just registered a name on a whim because it sounded
                  cool at the time—they could be worth money. Big money. Domain
                  investing (also called domaining) is like regular
                  investing—buy low and sell high—but instead of stocks or
                  mutual funds, it’s domains (which you can get for as low as ₹
                  83.20/yr). It can be a great revenue stream on the side, and
                  some savvy entrepreneurs even make their living as domainers.
                  It's simple to get started, and Domain Academy can help you
                  learn to buy, sell, and invest in domain names like a pro.
                </p>
                <CustomButton
                  variant="none"
                  label="Search Domains"
                  className="px-10 border border-white"
                  height="50"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 items-center gap-10 max-w-[1440px] mx-auto mt-20 lg:mt-28">
              <div className="order-2 lg:order-1">
                <Heading
                  children="How much money are we talking about?"
                  size="4xl"
                  fontWeight="600"
                  as="h4"
                />
                <p className="textsm sm:text-base lg:text-lg text-white py-8 lg:py-10 xl:py-12">
                  Domain investing can be worth the time—just take a look at
                  various domain auction platforms. You'll see some domains have
                  commanded big money. In fact, over the years, there have been
                  some very significant sales:
                </p>
                <ul className="mb-10 list-disc pl-5 text-white lg:text-lg font-medium flex flex-col gap-3">
                  <li>laba.com — ₹ 83,19,327.74</li>
                  <li>tulo.com — ₹ 46,21,848.74</li>
                  <li>5111.com — ₹ 42,01,848.74</li>
                  <li>picstart.com — ₹ 35,29,411.77</li>
                  <li>7777AV.com — ₹ 26,17,731.10</li>
                </ul>
                <CustomButton
                  variant="none"
                  label="Sell Your Domains"
                  className="px-10 border border-white"
                  height="50"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative mx-auto lg:ml-auto">
                  <img src={image4} className="relative rounded-3xl w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Make the smart move. */}
      <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <Heading
            as="h4"
            children="Make the smart move."
            size="4xl"
            className="capitalize text-center"
            fontWeight="700"
          />
          <p className="mt-5 text-white text-center max-w-[620px] mx-auto">
            Enjoy the domain investor lifestyle with the tools and resources to
            grow your portfolio and start making profits.
          </p>
          <div className="mt-10 md:mt-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-5">
              <div className="text-center text-white">
                <Heading
                  children="Our community."
                  size="3xl"
                  fontWeight="500"
                />
                <p className="mt-3 md:mt-5 lg:text-lg">
                  Our forums are filled with smart, friendly customers who love
                  to help others find success online.
                </p>
              </div>
              <div className="text-center text-white">
                <Heading children="Our answers." size="3xl" fontWeight="500" />
                <p className="mt-3 md:mt-5 lg:text-lg">
                  We’re constantly updating our searchable help library so all
                  the latest tips and trends are right at your fingertips.
                </p>
              </div>
              <div className="text-center text-white">
                <Heading children="Our support." size="3xl" fontWeight="500" />
                <p className="mt-3 md:mt-5 lg:text-lg">
                  Our award-winning support team is standing by with
                  personalized advice. Just call or chat online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get up to 60% off on domains, every single day. */}
      <div className="pb-16 pt-10 md:pb-20 md:pt-14 lg:pb-28 lg:pt-20 ">
        <div className="container mx-auto ">
          <div>
            <div className="grid lg:grid-cols-2 items-center gap-10 max-w-[1440px] mx-auto">
              <div>
                <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative mx-auto lg:ml-auto">
                  <img src={image3} className="relative rounded-3xl w-full" />
                </div>
              </div>
              <div>
                <Heading
                  children="Get up to 60% off on domains, every single day."
                  size="4xl"
                  fontWeight="600"
                  className="max-w-[540px]"
                  as="h4"
                />
                <p className="textsm sm:text-base lg:text-lg text-white py-8 lg:py-10 xl:py-12">
                  With Discount Domain Club, you get industry-low prices on any
                  domain you buy, plus benefits like CashParking Premium, full
                  access to auctions, and savings on our Domain Broker Service.
                </p>
                <CustomButton
                  variant="none"
                  label="Learn More"
                  className="px-10 border border-white"
                  height="50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionSec3;
