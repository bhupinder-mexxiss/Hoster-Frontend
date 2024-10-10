import React from "react";
import image5 from "../../../assets/images/image5.png";
import { Heading } from "../../Heading/Heading";

const PowerfulBuilder = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-24 ">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 items-center gap-10 mx-auto">
          <div className="order-2 lg:order-1">
            <Heading
              children="A powerful website builder at your fingertips."
              size="4xl"
              fontWeight="600"
              as="h4"
            />
            <div className="border-l border-white relative mt-8 sm:mt-12 lg:mt-20 text-white max-w-[500px] pl-6 sm:pl-10 after:absolute after:w-1.5 after:h-[40%] after:-left-1 after:top-0 after:bg-[#D4269A] after:rounded-md ">
              <p className="md:text-lg lg:text-xl font-medium mb-5 lg:mb-8">
                Customize
              </p>
              <p className="lg:text-lg mb-5 lg:mb-12">
                Click to easily edit or add entire sections — like a photo
                gallery, menu, or price list — in seconds, from any device.
              </p>
              <p className="md:text-lg lg:text-xl font-medium mb-5 lg:mb-12">
                Create Content
              </p>
              <p className="md:text-lg lg:text-xl font-medium">Add a Shop</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative lg:ml-auto">
              <img src={image5} className="relative rounded-3xl w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerfulBuilder;
