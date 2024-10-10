import React from "react";
import image5 from "../../../assets/images/image5.png";
import { Heading } from "../../Heading/Heading";

const HowToCreate = () => {
  return (
    <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20 mt-14 ">
      <div className="container mx-auto ">
        <div className=" max-w-[920px] mx-auto ">
          <Heading
            as="h4"
            children="How to create a free website."
            size="4xl"
            className="capitalize text-center"
            fontWeight="700"
          />
          <p className="text-white text-center lg:text-lg mt-5 ">
            Build your website easily with Websites + Marketing! Whether it’s a
            portfolio or an online store for cookies and baking classes, just
            follow these simple steps to create a powerful site that drives
            growth.
          </p>
        </div>
        <div className="mt-10 md:mt-14">
          <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-12 max-w-[1240px] mx-auto">
            <div>
              <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative ">
                <img src={image5} className="relative rounded-3xl w-full" />
              </div>
            </div>
            <div>
              <ul className="mt-6 flex flex-col gap-4 sm:gap-5">
                <li className="sm:text-lg lg:text-xl text-white flex">
                  1. Start creating your free site or store by picking a
                  template.
                </li>
                <li className="sm:text-lg lg:text-xl text-white flex">
                  2. Add your content, products and business info to make it
                  yours.
                </li>
                <li className="sm:text-lg lg:text-xl text-white flex">
                  3. Use built-in marketing to let people know you’re open for
                  business.
                </li>
                <li className="sm:text-lg lg:text-xl text-white flex">
                  4. Manage everything — reviews, orders, social — from 1
                  dashboard, on any device.
                </li>
                <li className="sm:text-lg lg:text-xl text-white flex">
                  5. Buy premium features — store add-ons, SEO, appointments —
                  as you need ‘em.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToCreate;
