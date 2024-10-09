import React from "react";
import img from "../../../assets/images/image.png";
import "./WhyBuyDomain.css";
import { Heading } from "../../Heading/Heading";

const WhyBuyDomain = () => {
  return (
    <div className="py-16 md:py-20 lg:py-28 WhyBuyDomain">
      <div className="container mx-auto ">
        <div>
          <div className="grid lg:grid-cols-2 items-center gap-10 max-w-[1440px] mx-auto">
            <div>
              <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative mx-auto lg:ml-auto">
                <img src={img} className="relative rounded-3xl w-full" />
              </div>
            </div>
            <div>
              <Heading
                children="Why buy a domain with us"
                size="4xl"
                fontWeight="600"
                as="h4"
              />
              <ul className="mt-8 md:mt-10">
                <li className="text-sm sm:text-base lg:text-lg text-white mb-2 flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-3"></span>
                  <p>
                    <span className="font-medium">
                      Free Domain Privacy Forever:
                    </span>{" "}
                    Protect your personal information at no extra cost.**
                  </p>
                </li>
                <li className="text-sm sm:text-base lg:text-lg text-white mb-2 flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-3"></span>
                  <p>
                    <span className="font-medium">24/7 Support:</span> Get help
                    anytime via phone or chat in your preferred language from
                    real people.{" "}
                  </p>
                </li>
                <li className="text-sm sm:text-base lg:text-lg text-white mb-2 flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-3"></span>
                  <p>
                    <span className="font-medium">Easy Domain Setup:</span> No
                    technical skills required—our process is simple and
                    straightforward.{" "}
                  </p>
                </li>
                <li className="text-sm sm:text-base lg:text-lg text-white mb-2 flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-3"></span>
                  <p>
                    <span className="font-medium">
                      Extensive Domain Options:
                    </span>{" "}
                    Choose from over 500 domain extensions to find the perfect
                    fit.
                  </p>
                </li>
                <li className="text-sm sm:text-base lg:text-lg text-white mb-2 flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-3"></span>
                  <p>
                    <span className="font-medium">Custom Web Addresses:</span>{" "}
                    Create up to 100 subdomains for personalized web addresses.{" "}
                  </p>
                </li>
                <li className="text-sm sm:text-base lg:text-lg text-white mb-2 flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-3"></span>
                  <p>
                    <span className="font-medium">Real-Time Monitoring:</span>{" "}
                    Keep your domains always up and running with our continuous
                    monitoring.
                  </p>
                </li>
                <li className="text-sm sm:text-base lg:text-lg text-white mb-2 flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-3"></span>
                  <p>
                    <span className="font-medium">
                      Seamless Domain Forwarding:
                    </span>{" "}
                    Effortlessly forward your domains to any existing website
                    with our intuitive tools.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBuyDomain;
