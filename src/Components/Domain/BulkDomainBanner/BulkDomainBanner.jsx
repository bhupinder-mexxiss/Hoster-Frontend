import React from "react";
import { Heading } from "../../Heading/Heading";
import CustomButton from "../../CustomButton/CustomButton";

const BulkDomainBanner = () => {
  return (
    <div className="py-14 md:py-16 lg:py-20 ">
      <div className="container mx-auto">
        <div>
          <div className=" text-center">
            <p className="mb-4 sm:mb-6 sm:text-lg text-[#CFD0D4]">
              Save when you register multiple domains.
            </p>
            <Heading
              as="h2"
              children="Search & Buy Domains in Bulk"
              size="5xl"
              className="capitalize mx-auto"
              fontWeight="700"
            />
          </div>
          <div className="mt-10 md:mt-14">
            <div className="max-w-[1080px] mx-auto">
              <p className="text-[#CFD0D4] md:text-lg">
                <span className="text-xl md:text-2xl font-semibold">0</span>
                /2000 items
              </p>
              <div className="mt-4">
                <div className="bg-white rounded-[20px] pb-5 pt-7 px-2 sm:px-7 relative">
                  <div>
                    <textarea
                      class="ux-text-entry-field resize-none h-56 w-full border-none focus:ring-0 placeholder:opacity-60"
                      placeholder="example.com
example.net
example"
                      aria-required="false"
                      type="text"
                      size="10"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-end gap-3 sm:gap-5">
                    <CustomButton
                      label="Import File"
                      className="px-5 sm:px-8 md:px-11 !text-[#101528] border-2 border-[#101528]"
                      variant="none"
                      height="50"
                    />
                    <CustomButton
                      label="Search Domains"
                      className="px-5 sm:px-8 md:px-11"
                      height="50"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 xl:gap-20">
              <div>
                <p className="py-2 xs:py-3 md:py-6 text-xl md:text-2xl lg:text-3xl text-white font-medium">
                  Paste or upload a list.
                </p>
                <p className="text-white text-sm md:text-base lg:text-lg">
                  Create a list of domains/keywords and paste it here or upload
                  it as a CSV, XLS, or XLSX file.
                </p>
              </div>
              <div>
                <p className="py-2 xs:py-3 md:py-6 text-xl md:text-2xl lg:text-3xl text-white font-medium">
                  Buy in bulk.
                </p>
                <p className="text-white text-sm md:text-base lg:text-lg">
                  Review the list of available domains and choose the ones to
                  add to your cart.
                </p>
              </div>
              <div>
                <p className="py-2 xs:py-3 md:py-6 text-xl md:text-2xl lg:text-3xl text-white font-medium">
                  Monetize your domains.
                </p>
                <p className="text-white text-sm md:text-base lg:text-lg">
                  List or park your domains using various GoDaddy tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkDomainBanner;
