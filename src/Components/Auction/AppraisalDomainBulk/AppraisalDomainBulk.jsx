import React from "react";
import { Heading } from "../../Heading/Heading";
import CustomButton from "../../CustomButton/CustomButton";
import icon24 from "../../../assets/icons/icon24.png";
import icon25 from "../../../assets/icons/icon25.png";
import icon26 from "../../../assets/icons/icon26.png";
import icon27 from "../../../assets/icons/icon27.png";
import icon28 from "../../../assets/icons/icon28.png";

const AppraisalDomainBulk = () => {
  return (
    <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <Heading
          as="h4"
          children="Want to appraise domains in bulk?"
          size="4xl"
          className="capitalize text-center"
          fontWeight="700"
        />
        <p className="mt-5 text-white text-center">
          Get API access by subscribing to one of our plans
        </p>
        <div className="mt-10 md:mt-14 max-w-[500px] mx-auto md:max-w-full">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            <div className="py-6 px-5 3xl:p-8 text-white rounded-xl 3xl:rounded-3xl bg-[#03091D]">
              <p className="text-3xl ">Basic</p>
              <p className="mt-3 lg:text-lg">Recommended for individuals</p>
              <div className="py-8 md:py-10">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <span>₹ 8,332.50</span>
                  <span className="text-lg font-medium">/mo</span>
                </p>
                <p className="text-sm sm:text-base mt-3">
                  Billed annually (You pay ₹ 99,990.00 today)
                </p>
              </div>
              <CustomButton
                label="Add to Cart"
                height="50"
                className="w-full"
              />
              <ul className="mt-6 flex flex-col gap-4">
                <li className="flex gap-2.5 items-center">
                  <img src={icon24} alt="" className="w-5" />
                  <span className="lg:text-lg">API Access</span>
                </li>
                <li className="flex gap-2.5 items-center">
                  <img src={icon25} alt="" className="w-5" />
                  <span className="lg:text-lg">Suggested List Price</span>
                </li>
                <li className="flex gap-2.5 items-center">
                  <img src={icon26} alt="" className="w-5" />
                  <span className="lg:text-lg">Probability of Sale</span>
                </li>
                <li className="flex gap-2.5 items-center">
                  <img src={icon27} alt="" className="w-5" />
                  <span className="lg:text-lg">1,000 Appraisals per day</span>
                </li>
              </ul>
            </div>
            <div className="py-6 px-5 3xl:p-8 text-white rounded-xl 3xl:rounded-3xl bg-[#03091D]">
              <p className="text-3xl ">Professional</p>
              <p className="mt-3 lg:text-lg">Recommended for teams</p>
              <div className="py-8 md:py-10">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <span>₹ 41,665.84</span>
                  <span className="text-lg font-medium">/mo</span>
                </p>
                <p className="text-sm sm:text-base mt-3">
                Billed annually (You pay ₹ 4,99,990.00 today)
                </p>
              </div>
              <CustomButton
                label="Add to Cart"
                height="50"
                className="w-full"
              />
              <ul className="mt-6 flex flex-col gap-4">
                <li className="flex gap-2.5 items-center">
                  <img src={icon28} alt="" className="w-5" />
                  <span className="lg:text-lg">All Basic Features</span>
                </li>
                <li className="flex gap-2.5 items-center">
                  <img src={icon27} alt="" className="w-5" />
                  <span className="lg:text-lg">5,000 Appraisals per day</span>
                </li>
              </ul>
            </div>
            <div className="py-6 px-5 3xl:p-8 text-white rounded-xl 3xl:rounded-3xl bg-[#03091D]">
              <p className="text-3xl ">Enterprise</p>
              <p className="mt-3 lg:text-lg">For businesses that require larger volumes, call:</p>
              <div className="py-8 md:py-10">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <span>+91-998 7654 321</span>
                </p>
                <p className="text-sm sm:text-base mt-3">
                Monday - Friday from 6 a.m. to 4:30 p.m. MST
                </p>
              </div>
              <CustomButton
                label="Call +91-998 7654 321"
                height="50"
                className="w-full"
              />
              <ul className="mt-6 flex flex-col gap-4">
              <li className="flex gap-2.5 items-center">
                  <img src={icon28} alt="" className="w-5" />
                  <span className="lg:text-lg">All Professional Features</span>
                </li>
                <li className="flex gap-2.5 items-center">
                  <img src={icon27} alt="" className="w-5" />
                  <span className="lg:text-lg">Custom Number of Appraisals per day</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-white mt-10 sm:mt-14 text-center">Did you know that Discount Domains Club Premium Members get 150 Appraisals per day? Learn more.
Learn more.</p>
        </div>
      </div>
    </div>
  );
};

export default AppraisalDomainBulk;
