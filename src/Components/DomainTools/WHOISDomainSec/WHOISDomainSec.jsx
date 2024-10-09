import React from "react";
import { Heading } from "../../Heading/Heading";
import image7 from "../../../assets/images/image7.png";
import image8 from "../../../assets/images/image8.png";
import image9 from "../../../assets/images/image9.png";
import CustomButton from "../../CustomButton/CustomButton";

const WHOISDomainSec = () => {
  return (
    <>
      {/* Want a domain that’s taken? Our domain broker service can get it for you. */}
      <div className="py-14 md:py-16 lg:py-20 bg-[#ffffff1a]">
        <div className="container mx-auto">
          <div className="max-w-[950px] mx-auto">
            <Heading
              children="Want a domain that’s taken? Our domain broker service can get it for you."
              size="4xl"
              fontWeight="600"
              className="text-center"
              as="h4"
            />
            <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6">
              It’s easier than you think with our domain name generator tool.
            </p>
          </div>
          <div className="mx-auto mt-10 md:mt-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-5 md:gap-12 xl:gap-14">
              <div>
                <div>
                  <div className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full flex items-center justify-center bg-blue-gradient text-2xl lg:text-3xl font-bold text-white">
                    <span>1</span>
                  </div>
                </div>
                <p className="my-2 xs:my-3 md:my-5 text-xl md:text-2xl xl:text-3xl text-white font-medium">
                  Everyone trusts this service.
                </p>
                <p className="text-white text-sm md:text-base lg:text-lg">
                  As the global domain leaders, we have over 100 domain brokers
                  with 82+ million domains under management, plus partnerships
                  with the leading domain registrars.
                </p>
              </div>
              <div>
                <div>
                  <div className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full flex items-center justify-center bg-blue-gradient text-2xl lg:text-3xl font-bold text-white">
                    <span>2</span>
                  </div>
                </div>
                <p className="my-2 xs:my-3 md:my-5 text-xl md:text-2xl xl:text-3xl text-white font-medium">
                  Check availability
                </p>
                <p className="text-white text-sm md:text-base lg:text-lg">
                  Review generated names, filter by length, and instantly check
                  domain and social availability.
                </p>
              </div>
              <div>
                <div>
                  <div className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full flex items-center justify-center bg-blue-gradient text-2xl lg:text-3xl font-bold text-white">
                    <span>3</span>
                  </div>
                </div>
                <p className="my-2 xs:my-3 md:my-5 text-xl md:text-2xl xl:text-3xl text-white font-medium">
                  Save your names
                </p>
                <p className="text-white text-sm md:text-base lg:text-lg">
                  Our algorithm learns from the names you like, giving you
                  better recommendations over time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What we can do for you. */}
      <div className="pt-16 md:pt-20 lg:pt-24 ">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-10 max-w-[1440px] mx-auto">
            <div>
              <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative ">
                <img src={image7} className="relative rounded-3xl w-full" />
              </div>
            </div>
            <div>
              <Heading
                children="What we can do for you."
                size="4xl"
                fontWeight="600"
                as="h4"
              />
              <p className="text-white text-sm sm:text-base lg:text-lg mt-5 lg:mt-8">
                The WHOIS search tool is designed to help you explore the WHOIS
                database for information on domain registration and
                availability. It provides details about the owner,
                administrator, and contact information, along with other
                important data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Want your personal info protected in the WHOIS directory? */}
      <div className="pt-16 md:pt-20 lg:pt-24 ">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-10 max-w-[1440px] mx-auto">
            <div className="order-2 lg:order-1">
              <p className="text-white text-sm sm:text-base lg:text-lg mb-2">
                Domain Privacy
              </p>
              <Heading
                children="Want your personal info protected in the WHOIS directory?"
                size="4xl"
                fontWeight="600"
                as="h4"
              />
              <p className="text-white text-sm sm:text-base lg:text-lg mt-5 lg:mt-8">
                Domain registrations include free domain privacy** to protect
                your personal information by replacing it with proxy details in
                the public WHOIS directory. Additionally, private email is
                provided for domain inquiries to help prevent spam.
              </p>
              <CustomButton
                variant="none"
                className="border border-white px-14 mt-10"
                label="Learn More"
                height="50"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative lg:ml-auto">
                <img src={image8} className="relative rounded-3xl w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Check a domain name's availability */}
      <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20 mt-16 md:mt-20 lg:mt-24">
        <div className="container mx-auto">
          <div className="">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-10 text-center">
              <div className="text-white">
                <Heading
                  children="Check a domain name's availability"
                  size="xxl"
                  fontWeight="500"
                />
                <p className="mt-3 md:mt-5">
                  To check the availability of a domain name, simply enter it
                  into the WHOIS search field, and you'll be informed whether
                  the domain is available or not.
                </p>
              </div>
              <div className="text-white">
                <Heading
                  children="Find a domain owner"
                  size="xxl"
                  fontWeight="500"
                />
                <p className="mt-3 md:mt-5">
                  Whether you want to buy a domain or learn who owns it, use our
                  WHOIS search field. Enter the domain name and you'll get key
                  info, including availability, ownership, creation, and
                  expiration.
                </p>
              </div>
              <div className="text-white">
                <Heading
                  children="Learn when a domain will expire"
                  size="xxl"
                  fontWeight="500"
                />
                <p className="mt-3 md:mt-5">
                  If you want to buy a domain, knowing when it expires is
                  helpful. As the date approaches the owner may want to sell, or
                  better yet, let it expire — and you're right there to scoop it
                  up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Get the domain you really want, even if it's already owned.*/}
      <div className="pt-16 md:pt-20 lg:pt-24 ">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-10 max-w-[1440px] mx-auto">
            <div>
              <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative ">
                <img src={image9} className="relative rounded-3xl w-full" />
              </div>
            </div>
            <div>
              <p className="text-white text-sm sm:text-base lg:text-lg mb-2">
                Domain Broker Service
              </p>
              <Heading
                children="Get the domain you really want, even if it's already owned."
                size="4xl"
                fontWeight="600"
                as="h4"
              />
              <p className="text-white text-sm sm:text-base lg:text-lg mt-5 lg:mt-8">
                That perfect domain you want, even if it’s already taken, could
                still be within your reach. A broker can work with the domain
                name registry to negotiate with the current owner and help you
                acquire the name.
              </p>
              <CustomButton
                variant="none"
                className="border border-white px-14 mt-10"
                label="Learn More"
                height="50"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WHOISDomainSec;
