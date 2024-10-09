import React from "react";
import { Heading } from "../../Heading/Heading";

const BuyDomain = () => {
  return (
    <div className="bg-[#F1F1F11A] py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <Heading
          children="Buy domain names for investing."
          size="4xl"
          fontWeight="600"
          className="text-center"
          as="h4"
        />
        <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6">
          Enjoy the domain investor lifestyle with the tools and resources to
          grow your portfolio and start making profits.
        </p>
        <div className="mt-10 md:mt-14">
          <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-24">
            <div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <Heading
                    children="Domain Investing"
                    size="3xl"
                    fontWeight="500"
                  />
                  <p className="text-white text-sm sm:text-base xl:text-lg opacity-90 mt-4 lg:mt-5">
                    If you register a domain name and believe it's worth more
                    than you paid, go here for resources to maximize your sale.
                    You'll find a wealth of resources to get your domain
                    investing career started the right way.
                  </p>
                </div>
                <div>
                  <button className="mt-6 sm:mt-10 inline-block px-6 sm:px-10 text-white border border-white rounded-full py-1.5 sm:py-2">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <Heading
                    children="Discount Domain Club"
                    size="3xl"
                    fontWeight="500"
                  />
                  <p className="text-white text-sm sm:text-base xl:text-lg opacity-90 mt-4 lg:mt-5">
                    Got the hang of buying low and selling high? Join the
                    Discount Domain Club for amazing deals on the hottest
                    domains. Enjoy up to 60% off domain registration and access
                    valuable tools at no extra cost.
                  </p>
                </div>
                <div>
                  <button className="mt-6 sm:mt-10 inline-block px-6 sm:px-10 text-white border border-white rounded-full py-1.5 sm:py-2">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <Heading
                    children="Domain Investing"
                    size="3xl"
                    fontWeight="500"
                  />
                  <p className="text-white text-sm sm:text-base xl:text-lg opacity-90 mt-4 lg:mt-5">
                    When you acquire a distinctive domain, join our Domain
                    Auctions to ensure you get top dollar on the open market.
                  </p>
                </div>
                <div>
                  <button className="mt-6 sm:mt-10 inline-block px-6 sm:px-10 text-white border border-white rounded-full py-1.5 sm:py-2">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyDomain;
