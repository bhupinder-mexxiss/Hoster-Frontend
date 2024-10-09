import React from "react";
import { Heading } from "../../Heading/Heading";
import InputComp from "../../InputComp/InputComp";
import { Checkbox, Label, Select } from "flowbite-react";
import { Link } from "react-router-dom";
import CustomButton from "../../CustomButton/CustomButton";

const NewDomainRegister = () => {
  return (
    <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <Heading
          children="Transfer a Domain Name in 4 Simple Steps"
          size="4xl"
          fontWeight="600"
          className="text-center"
          as="h4"
        />
        <div className="mt-10 md:mt-14">
          <div className="lg:flex gap-6 xl:gap-10">
            <div className="lg:w-[40%]">
              <div className="bg-[#03091D] rounded-2xl">
                <div className="py-6 lg:py-8 px-5 xl:px-8">
                  <p className="text-white md:text-lg xl:text-xl font-semibold mb-6">
                    Search extensions by keyword
                  </p>
                  <InputComp placeholder="Search" btnlabel="Search" />
                </div>
                <div className="py-6 lg:py-8 px-5 xl:px-8 border-t border-[#353B52] hidden lg:block">
                  <p className="text-white md:text-lg xl:text-xl font-semibold mb-4">
                    Status
                  </p>
                  <div>
                    <div className="flex gap-4 items-center mb-3">
                      <Checkbox
                        id="accept1"
                        className="focus:!ring-0 focus:ring-offset-0 border-none outline-0 text-[#D52A9B]"
                      />
                      <Label
                        htmlFor="accept1"
                        className="flex text-white font-medium"
                      >
                        Available Now (541)
                      </Label>
                    </div>
                    <div className="flex gap-4 items-center mb-3">
                      <Checkbox
                        id="accept2"
                        className="focus:!ring-0 focus:ring-offset-0 border-none outline-0 text-[#D52A9B]"
                      />
                      <Label
                        htmlFor="accept2"
                        className="flex text-white font-medium"
                      >
                        Pre-Register (0)
                      </Label>
                    </div>
                    <div className="flex gap-4 items-center mb-3">
                      <Checkbox
                        id="accept3"
                        className="focus:!ring-0 focus:ring-offset-0 border-none outline-0 text-[#D52A9B]"
                      />
                      <Label
                        htmlFor="accept3"
                        className="flex text-white font-medium"
                      >
                        Coming Soon (11)
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="py-6 lg:py-8 px-5 xl:px-8 border-t border-[#353B52] hidden lg:block">
                  <p className="text-white md:text-lg xl:text-xl font-semibold mb-4">
                    Categories
                  </p>
                  <div className="max-h-[275px] overflow-x-hidden">
                    <div className="flex gap-4 items-center mb-3">
                      <Checkbox
                        id="View All (552)"
                        className="focus:!ring-0 focus:ring-offset-0 border-none outline-0 text-[#D52A9B]"
                      />
                      <Label
                        htmlFor="View All (552)"
                        className="flex text-white font-medium"
                      >
                        View All (552)
                      </Label>
                    </div>
                    <div className="flex gap-4 items-center mb-3">
                      <Checkbox
                        id="Following"
                        className="focus:!ring-0 focus:ring-offset-0 border-none outline-0 text-[#D52A9B]"
                      />
                      <Label
                        htmlFor="Following"
                        className="flex text-white font-medium"
                      >
                        Following (0)
                      </Label>
                    </div>
                    <div className="flex gap-4 items-center mb-3">
                      <Checkbox
                        id="Featured"
                        className="focus:!ring-0 focus:ring-offset-0 border-none outline-0 text-[#D52A9B]"
                      />
                      <Label
                        htmlFor="Featured"
                        className="flex text-white font-medium"
                      >
                        Featured (19)
                      </Label>
                    </div>
                    <div className="flex gap-4 items-center mb-3">
                      <Checkbox
                        id="Business"
                        className="focus:!ring-0 focus:ring-offset-0 border-none outline-0 text-[#D52A9B]"
                      />
                      <Label
                        htmlFor="Business"
                        className="flex text-white font-medium"
                      >
                        Business (45)
                      </Label>
                    </div>
                    <div className="flex gap-4 items-center mb-3">
                      <Checkbox
                        id="ccTLD / Other"
                        className="focus:!ring-0 focus:ring-offset-0 border-none outline-0 text-[#D52A9B]"
                      />
                      <Label
                        htmlFor="ccTLD / Other"
                        className="flex text-white font-medium"
                      >
                        ccTLD / Other (116)
                      </Label>
                    </div>
                    <div className="flex gap-4 items-center mb-3">
                      <Checkbox
                        id="Commerce"
                        className="focus:!ring-0 focus:ring-offset-0 border-none outline-0 text-[#D52A9B]"
                      />
                      <Label
                        htmlFor="Commerce"
                        className="flex text-white font-medium"
                      >
                        Commerce (49)
                      </Label>
                    </div>
                    <div className="flex gap-4 items-center mb-3">
                      <Checkbox
                        id="Education"
                        className="focus:!ring-0 focus:ring-offset-0 border-none outline-0 text-[#D52A9B]"
                      />
                      <Label
                        htmlFor="Education"
                        className="flex text-white font-medium"
                      >
                        Education (15)
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="py-6 lg:py-8 px-5 xl:px-8 border-t border-[#353B52] relative lg:hidden">
                  <p className="text-white md:text-lg xl:text-xl font-semibold mb-4">
                    Categories
                  </p>
                  <Select id="countries" required className="h-">
                    <option>View All (552)</option>
                    <option>Following (0)   </option>
                    <option>Business (45)</option>
                    <option>Featured (19)</option>
                    <option>ccTLD / Other (116)</option>
                    <option>Education (15)</option>
                    <option>Food & Drink (17)</option>
                  </Select>
                </div>
              </div>
            </div>
            <div className="lg:w-[60%] mt-6 lg:mt-0">
              <div className="bg-[#03091D] rounded-2xl max-h-[500px] lg:max-h-[760px] overflow-y-scroll">
                {Array(10)
                  .fill()
                  .map((_, index) => (
                    <div
                      key={index}
                      className="py-4 lg:py-6 px-5 xl:px-8 flex justify-between items-center gap-3 border-b border-[#353B52]"
                    >
                      <div>
                        <Link className="border-b border-white md:text-lg text-white">
                          ac
                        </Link>
                      </div>
                      <p className="md:text-lg xl:text-xl text-white hidden lg:block">
                        Now available for registration
                      </p>
                      <CustomButton
                        label="Register Now"
                        height="50"
                        className="px-6 xl:px-12 font-medium"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDomainRegister;
