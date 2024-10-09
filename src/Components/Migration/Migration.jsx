import React from "react";
import { Heading } from "../Heading/Heading";
import migration from "../../assets/images/migration.png";
import CustomButton from "../CustomButton/CustomButton";

const Migration = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <div className="max-w-[1520px] mx-auto">
          <div className="max-w-[980px] mx-auto">
            <Heading
              children="Migration is not an issue with us"
              size="4xl"
              fontWeight="600"
              className="text-center"
              as="h4"
            />
            <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-80 text-center 
mt-3 sm:mt-4 md:mt-6">
              We provied free migration service so that ours customers can
              manage their work easily
            </p>
          </div>
          <div className="mt-10 md:mt-14">
            <div className=" md:grid grid-cols-2 items-center gap-8">
              <div>
                <Heading
                  children="Hassle Free Migration"
                  size="3xl"
                  fontWeight="600"
                />
                <p className="mt-3 sm:mt-5 mb-8 opacity-80 text-white text-sm sm:text-base">
                  Our technical expert team will help you to migrate your site
                  from your current hosting provider to Host.co.in, You don't
                  have to worry about any of the migration issues.
                </p>
                <CustomButton label="Contact Sales" size="lg" className="px-6 md:px-10" height="60" variant="pinkPurple-100"  />
              </div>
              <div className="max-w-[350px] sm:max-w-[400px] md:max-w-full mx-auto mt-6">
                <img src={migration} width={665} className="ml-auto" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Migration;
