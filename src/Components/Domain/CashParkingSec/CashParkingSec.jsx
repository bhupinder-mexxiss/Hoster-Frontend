import React from "react";
import icon33 from "../../../assets/icons/icon33.png";
import icon26 from "../../../assets/icons/icon26.png";
import { Heading } from "../../Heading/Heading";
import CustomButton from "../../CustomButton/CustomButton";

const CashParkingSec = () => {
  return (
    <>
      {/* Choose the plan that’s right for you */}
      <div className="pt-4 sm:py-6 ">
        <div className="container mx-auto">
          <div className="py-10">
            <div className="text-center mx-auto max-w-[800px]">
              <p className="mb-6 sm:text-lg text-[#CFD0D4]">
                Earn cash with your unused domains
              </p>
              <Heading
                as="h2"
                children="Choose the plan that’s right for you"
                size="5xl"
                className="capitalize pr-10"
                fontWeight="700"
              />
            </div>
            <div className="mt-10 md:mt-14">
              <div className="grid md:grid-cols-2 max-w-[530px] md:max-w-[1080px] mx-auto gap-5">
                <div className="px-6 lg:px-8 py-8 lg:py-10 text-white bg-[#03091D] rounded-xl lg:rounded-3xl">
                  <p className=" text-2xl lg:text-3xl font-medium">
                    Free Membership
                  </p>
                  <p className="lg:text-lg mt-2">
                    Recommended if you’re new to domain parking.
                  </p>
                  <div className="my-6 lg:my-10">
                    <p>
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                        Free
                      </span>
                    </p>
                    <p className="lg:text-lg mt-2">You pay ₹ 0.00 today</p>
                    <p className="lg:text-lg mt-2">Renews at ₹ 0.00</p>
                  </div>
                  <div className="mt-8 md:mt-10">
                    <CustomButton
                      label="Add to Cart"
                      height="50"
                      className="w-full"
                    />
                    <ul className="mt-6 flex flex-col gap-4">
                      <li className="flex gap-2.5">
                        <img src={icon33} alt="" className="mt-1.5 h-5 w-5" />
                        <span className="lg:text-lg">
                          Get started with parking for free.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-6 lg:px-8 py-8 lg:py-10 text-white bg-[#03091D] rounded-xl lg:rounded-3xl">
                  <p className=" text-2xl lg:text-3xl font-medium">
                    Premium Membership
                  </p>
                  <p className="lg:text-lg mt-2">
                    Recommended for domain professionals to maximize earnings.
                  </p>
                  <div className="my-6 lg:my-10">
                    <p>
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                        ₹ 999.17
                      </span>
                      <span>/mo</span>
                    </p>
                    <p className="lg:text-lg mt-2">You pay ₹ 999.17 today</p>
                    <p className="lg:text-lg mt-2">Renews at ₹ 999.17</p>
                  </div>
                  <div className="mt-8 md:mt-10">
                    <CustomButton
                      label="Add to Cart"
                      height="50"
                      className="w-full"
                    />
                    <ul className="mt-6 flex flex-col gap-4">
                      <li className="flex gap-2.5">
                        <img src={icon26} alt="" className="mt-1.5 h-5 w-5" />
                        <span className="lg:text-lg">
                          Earn 80% of advertising revenue on your parked
                          domains.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}

      <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <Heading
            as="h4"
            children="How It Works"
            size="4xl"
            className="capitalize text-center"
            fontWeight="700"
          />
          <div className="mt-10 md:mt-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-5">
              <div className="text-white">
                <Heading
                  children="Pick a plan that works for you."
                  size="3xl"
                  fontWeight="500"
                />
                <p className="mt-3 md:mt-5 lg:text-lg">
                  Choose a free plan or increase your earnings with a premium
                  membership.
                </p>
              </div>
              <div className="text-white">
                <Heading
                  children="Add your domains to your CashParking® portfolio."
                  size="3xl"
                  fontWeight="500"
                />
                <p className="mt-3 md:mt-5 lg:text-lg">
                  There’s no limit to the number of domains you can include, so
                  pile them all in there. The more you have, the more you can
                  earn.
                </p>
              </div>
              <div className="text-white">
                <Heading
                  children="Change the nameservers on your domains."
                  size="3xl"
                  fontWeight="500"
                />
                <p className="mt-3 md:mt-5 lg:text-lg">
                  Just point them to GoDaddy’s CashParking® servers and you’re
                  good to go. It’s super simple, but if you want help, our
                  friendly support team can walk you through it.
                </p>
              </div>
              <div className="text-white">
                <Heading children="Do nothing." size="3xl" fontWeight="500" />
                <p className="mt-3 md:mt-5 lg:text-lg">
                  That’s right, nothing. We’ll set up your pages with
                  contextually relevant advertisements, so you can just kick
                  back and watch the money come in each month (or each quarter,
                  depending on your payment preferences).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CashParkingSec;
