import React from "react";
import { Heading } from "../../Heading/Heading";
import CustomButton from "../../CustomButton/CustomButton";
import icon24 from "../../../assets/icons/icon24.png";
import icon25 from "../../../assets/icons/icon25.png";
import icon26 from "../../../assets/icons/icon26.png";
import icon27 from "../../../assets/icons/icon27.png";
import icon29 from "../../../assets/icons/icon29.png";
import icon30 from "../../../assets/icons/icon30.png";
import icon32 from "../../../assets/icons/icon32.png";

const ChoosePlan = () => {
  return (
    <div className="pt-6 pb-16 md:pb-20 lg:pb-28">
      <div className="container mx-auto">
        <Heading
          children="Choose the plan that's right for you"
          size="4xl"
          fontWeight="600"
          className="text-center"
          as="h4"
        />
        <div className="mt-10 md:mt-14">
          <div className="grid md:grid-cols-2 max-w-[500px] md:max-w-[1080px] mx-auto gap-5">
            <div>
              <div className="px-6 lg:px-8 py-8 lg:py-10 text-white bg-[#03091D] rounded-xl lg:rounded-3xl">
                <p className=" text-2xl lg:text-3xl font-medium">Basic Membership</p>
                <p className="lg:text-lg mt-2">
                  Recommended for mid-size portfolios with up to 24 domain names
                </p>
                <p className="lg:text-lg my-6 lg:my-10">
                  (no minimum/maximum required to join)
                </p>
                <div>
                  <p>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">₹ 665.84</span>
                    <span>/mo</span>
                  </p>
                  <p className="lg:text-lg mt-2">You pay ₹ 7,990.00 today</p>
                  <p className="lg:text-lg mt-2">Renews at ₹ 7,990.00</p>
                </div>
                <div className="mt-8 md:mt-10">
                  <CustomButton
                    label="Add to Cart"
                    height="50"
                    className="w-full"
                  />
                  <ul className="mt-6 flex flex-col gap-4">
                    <li className="flex gap-2.5">
                      <img src={icon29} alt="" className="mt-1.5 h-5 w-5" />
                      <span className="lg:text-lg">
                        Choose from 17 most popular TLDs including .com, .net,
                        .org, .info and .biz
                      </span>
                    </li>
                    <li className="flex gap-2.5">
                      <img src={icon25} alt="" className="mt-1.5 h-5 w-5" />
                      <span className="lg:text-lg">
                        ₹ 1,165.84 .com registrations, renewals & transfers
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="px-6 lg:px-8 py-8 lg:py-10 text-white bg-[#03091D] rounded-xl lg:rounded-3xl">
                <p className=" text-2xl lg:text-3xl font-medium">Premium Membership</p>
                <p className="lg:text-lg mt-2">
                  Recommended for large portfolios with 25+ domain names
                </p>
                <p className="lg:text-lg my-6 lg:my-10">
                  (no minimum/maximum required to join)
                </p>
                <div>
                  <p>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">₹ 1,665.84</span>
                    <span>/mo</span>
                  </p>
                  <p className="lg:text-lg mt-2 flex flex-col lg:flex-row lg:items-center gap-2">
                    You pay ₹ 19,990.00 today{" "}
                    <span className="font-bold">₹ 58,333.34+ Value</span>
                  </p>
                  <p className="lg:text-lg mt-2">Renews at ₹ 7,990.00</p>
                </div>
                <div className="mt-8 md:mt-10">
                  <CustomButton
                    label="Add to Cart"
                    height="50"
                    className="w-full"
                  />
                  <ul className="mt-6 flex flex-col gap-4">
                    <li className="flex gap-2.5">
                      <img src={icon29} alt="" className="mt-1.5 h-5 w-5" />
                      <span className="lg:text-lg">
                        Choose from over 400 TLDs
                      </span>
                    </li>
                    <li className="flex gap-2.5">
                      <img src={icon25} alt="" className="mt-1.5 h-5 w-5" />
                      <span className="lg:text-lg">
                        ₹ 915.83 .com registrations, renewals & transfers
                      </span>
                    </li>
                    <li className="flex gap-2.5">
                      <img src={icon30} alt="" className="mt-1.5 h-5 w-5" />
                      <span className="lg:text-lg">
                        Access to Domain Academy — get investor training, tools,
                        and community
                      </span>
                    </li>
                    <li className="flex gap-2.5">
                      <img src={icon26} alt="" className="mt-1.5 h-5 w-5" />
                      <span className="lg:text-lg">
                        Premium CashParking — earn 80% of advertising revenue on
                        your parked domains
                      </span>
                    </li>
                    <li className="flex gap-2.5">
                      <img src={icon27} alt="" className="mt-1.5 h-5 w-5" />
                      <span className="lg:text-lg">
                        Auctions membership, the largest global secondary market
                        for domain buyers
                      </span>
                    </li>
                    <li className="flex gap-2.5">
                      <img src={icon32} alt="" className="mt-1.5 h-5 w-5" />
                      <span className="lg:text-lg">
                        Domain Broker Service (75% discount)^ — Domain taken?
                        Let our experts contact the owner and negotiate a sale
                        price on your behalf
                      </span>
                    </li>
                    <li className="flex gap-2.5">
                      <img src={icon27} alt="" className="mt-1.5 h-5 w-5" />
                      <span className="lg:text-lg">
                        New! Get 150 free domain valuations per day
                      </span>
                    </li>
                    <li className="flex gap-2.5">
                      <img src={icon24} alt="" className="mt-1.5 h-5 w-5" />
                      <span className="lg:text-lg">
                        Receive 20,000 API calls per month for free
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className=" mt-10 md:mt-14 text-white text-center">Customers may have only one Discount Domain Club Membership (Basic or Premium).</p>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
