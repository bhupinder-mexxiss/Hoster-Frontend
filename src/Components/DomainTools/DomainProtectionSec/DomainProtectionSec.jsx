import React from "react";
import { Heading } from "../../Heading/Heading";
import { Done, Remove } from "@mui/icons-material";

const DomainProtectionSec = () => {
  return (
    <>
      {/* Online threats are real */}
      <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <p className="text-white font-medium text-center lg:text-lg mb-4 ">
            Online threats are real
          </p>
          <Heading
            as="h4"
            children="Your domain needs protection, just like your website."
            size="4xl"
            className="capitalize text-center"
            fontWeight="700"
          />
          <p className="text-white max-w-[1440px] mx-auto text-center lg:text-lg mt-5 ">
            You already safeguard your website against common vulnerabilities by
            using an SSL, a firewall and creating backups. Domain Protection is
            exclusively focused on defending your domain against bad actors and
            online risks. After all, your domain is how people get to your
            website — and that's definitely worth protecting.
          </p>
        </div>
      </div>

      {/* Plans Section */}
      <div className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-28 lg:pt-24 mt-14">
        <div className="container mx-auto">
          <div className="relative asdf pb-8 after:absolute after:w-[30%] after:xl:w-1/4 after:h-full after:top-0 after:left-[40%] after:xl:left-1/2 after:bg-pinkPurple-gradient-100 after:-z-10 after:rounded-t-[30px] after:opacity-70 z-10">
            <div className="flex items-center border-b border-white pb-5 pt-6">
              <div className="w-2/5 xl:w-1/2 pr-10"></div>
              <div className="w-[30%] xl:w-1/4 px-6 relative">
                <Heading
                  children="Full Domain Protection"
                  size="xxl"
                  fontWeight="600"
                  as="h4"
                />
                <div className="pt-4 pb-16 border border-b-0 border-white border-opacity-50 rounded-t-[30px] absolute w-full left-0 -top-[86px] -z-20">
                  <p
                    className="uppercase text-center text-xl font-bold text-white !bg-clip-text fill-co "
                    style={{
                      background:
                        "linear-gradient(to bottom left, #D4088C 25%, #DA2BA1 30%, #8117BE 86%, #6820AE 100%)",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Most Popular
                  </p>
                </div>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <Heading
                  children="Ultimate Domain Protection"
                  size="xxl"
                  fontWeight="600"
                  as="h4"
                />
              </div>
            </div>
            <div className="flex items-center py-5">
              <div className="w-2/5 xl:w-1/2 pr-10"></div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <p className="text-white font-medium">
                  Best for folks looking to safeguard against domain threats
                </p>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <p className="text-white font-medium">
                  Ideal for businesses and entrepreneurs needing additional
                  billing security
                </p>
              </div>
            </div>
            <div className="flex items-center border-t border-white border-opacity-50 py-5">
              <div className="w-2/5 xl:w-1/2 pr-10">
                <p className="text-white font-medium">
                  Replace your personal contact info on WHOIS with substitute
                  details, powered by Domains By Proxy
                </p>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <span>
                  <Done className="!text-3xl text-white" />
                </span>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <span>
                  <Done className="!text-3xl text-white" />
                </span>
              </div>
            </div>
            <div className="flex items-center border-t border-white border-opacity-50 py-5">
              <div className="w-2/5 xl:w-1/2 pr-10">
                <p className="text-white font-medium">
                  Identity protection with a private email address to filter
                  spam messages related to your domain name
                </p>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <span>
                  <Done className="!text-3xl text-white" />
                </span>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <span>
                  <Done className="!text-3xl text-white" />
                </span>
              </div>
            </div>
            <div className="flex items-center border-t border-white border-opacity-50 py-5">
              <div className="w-2/5 xl:w-1/2 pr-10">
                <p className="text-white font-medium">
                  Receive notifications when critical changes are being made to
                  your domain
                </p>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <span>
                  <Done className="!text-3xl text-white" />
                </span>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <span>
                  <Done className="!text-3xl text-white" />
                </span>
              </div>
            </div>
            <div className="flex items-center border-t border-white border-opacity-50 py-5">
              <div className="w-2/5 xl:w-1/2 pr-10">
                <p className="text-white font-medium">
                  Prevent accidental transfers or expirations — and assist in
                  shielding you from unauthorized access
                </p>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <span>
                  <Done className="!text-3xl text-white" />
                </span>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <span>
                  <Done className="!text-3xl text-white" />
                </span>
              </div>
            </div>
            <div className="flex items-center border-t border-white border-opacity-50 py-5">
              <div className="w-2/5 xl:w-1/2 pr-10">
                <p className="text-white font-medium">
                  90 days to renew your domain if it accidentally expires due to
                  failed billing
                </p>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <span>
                  <Remove className="!text-3xl text-white" />
                </span>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <span>
                  <Done className="!text-3xl text-white" />
                </span>
              </div>
            </div>
            <div className="flex items-center border-t border-white border-opacity-50 py-5">
              <div className="w-2/5 xl:w-1/2 pr-10">
                <p className="text-white font-medium">
                  No extra fees to recover your domain if it expires
                  unexpectedly
                </p>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <span>
                  <Remove className="!text-3xl text-white" />
                </span>
              </div>
              <div className="w-[30%] xl:w-1/4 px-6">
                <span>
                  <Done className="!text-3xl text-white" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We know how important your domain is. */}
      <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <Heading
            as="h4"
            children="We know how important your domain is."
            size="4xl"
            className="capitalize text-center"
            fontWeight="700"
          />
          <p className="text-white max-w-[1440px] mx-auto text-center lg:text-lg mt-5 ">
            We know how important your domain is.
          </p>
          <div className="mt-10 md:mt-14">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
              <div className="text-white lg:col-span-2">
                <p className="font-medium mb-5 text-2xl">
                  Your domain is your brand.
                </p>
                <p className="">
                  And it’s essential to keep you online. Domain Protection makes
                  it virtually impossible to accidentally transfer or delete
                  your domain. You decide what changes are allowed by approving
                  them with identity verification.
                </p>
              </div>
              <div className="hidden lg:block"></div>
              <div className="text-white lg:col-span-2">
                <p className="font-medium mb-5 text-2xl">
                  Your domain is your brand.
                </p>
                <p className="">
                  And it’s essential to keep you online. Domain Protection makes
                  it virtually impossible to accidentally transfer or delete
                  your domain. You decide what changes are allowed by approving
                  them with identity verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainProtectionSec;
