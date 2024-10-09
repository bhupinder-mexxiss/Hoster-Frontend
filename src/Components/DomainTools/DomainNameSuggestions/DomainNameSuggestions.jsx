import React from "react";
import { Heading } from "../../Heading/Heading";

const DomainNameSuggestions = () => {
  return (
    <div className="py-14 md:py-16 lg:py-20 bg-[#ffffff1a]">
      <div className="container mx-auto">
        <Heading
          children="Here’s how to get the best domain name suggestions."
          size="4xl"
          fontWeight="600"
          className="text-center"
          as="h4"
        />
        <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6 max-w-[500px] mx-auto">
        It’s easier than you think with our domain name generator tool.
        </p>
        <div className="mx-auto mt-10 md:mt-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-5 md:gap-12 xl:gap-14">
            <div>
              <div>
                <div className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full flex items-center justify-center bg-blue-gradient text-2xl lg:text-3xl font-bold text-white"><span>1</span></div>
              </div>
              <p className="my-2 xs:my-3 md:my-5 text-xl md:text-2xl xl:text-3xl text-white font-medium">
              Enter words describing your business or idea.
              </p>
              <p className="text-white text-sm md:text-base lg:text-lg">
              These might be your name, location or industry. The best website names are catchy and memorable, so don’t be afraid to unleash your creativity.
              </p>
            </div>
            <div>
              <div>
                <div className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full flex items-center justify-center bg-blue-gradient text-2xl lg:text-3xl font-bold text-white"><span>2</span></div>
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
                <div className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full flex items-center justify-center bg-blue-gradient text-2xl lg:text-3xl font-bold text-white"><span>3</span></div>
              </div>
              <p className="my-2 xs:my-3 md:my-5 text-xl md:text-2xl xl:text-3xl text-white font-medium">
                Save your names
              </p>
              <p className="text-white text-sm md:text-base lg:text-lg">
                Our algorithm learns from the names you like, giving you better
                recommendations over time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainNameSuggestions;
