import React from "react";
import { Heading } from "../../Heading/Heading";

const BulkSearchFeatures = () => {
  return (
    <div className="py-14 md:py-16 lg:py-20 bg-[#ffffff1a]">
      <div className="container mx-auto">
        <Heading
          children="Bulk Search Features"
          size="4xl"
          fontWeight="600"
          className="text-center"
          as="h4"
        />
        <div className="mt-10 md:mt-14 max-w-[1400px] mx-auto">
          <div className="grid xs:grid-cols-2 gap-x8 xs:gap-x-14 md:gap-20 lg:gap-x-32 xl:gap-x-40 gap-y-10 xs:gap-y-14 lg:gap-y-20">
            <div className="text-white">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium pb-2 xs:pb-3 md:pb-4">
                Buy and save more.
              </p>
              <p className="text-white text-sm md:text-base lg:text-lg">
                Save when you buy domains in bulk.
              </p>
            </div>
            <div className="text-white">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium pb-2 xs:pb-3 md:pb-4">
                Enter or upload a file.
              </p>
              <p className="text-white text-sm md:text-base lg:text-lg">
                Enter or paste a domain list — up to 500 at a time.
              </p>
            </div>
            <div className="text-white">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium pb-2 xs:pb-3 md:pb-4">
                Filter search results.
              </p>
              <p className="text-white text-sm md:text-base lg:text-lg">
                Select specific TLDs, exact matches or only premium domains.
              </p>
            </div>
            <div className="text-white">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium pb-2 xs:pb-3 md:pb-4">
                Enter or upload a file.
              </p>
              <p className="text-white text-sm md:text-base lg:text-lg">
                Easily add Domain Privacy and Protection to all domains in Cart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkSearchFeatures;
