import React from "react";
import { Heading } from "../../Heading/Heading";
import { Link } from "react-router-dom";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

const Explore = ({padding, bg}) => {
  return (
    <div className={`${padding} bg-[${bg  }]`}>
      <div className="container mx-auto">
        <div className="max-w-[1020px] mx-auto">
          <Heading
            children="Explore the Possibilities and Choose the Right Domain Name for Your Website"
            size="4xl"
            fontWeight="600"
            className="text-center max-w-[900px] mx-auto"
            as="h4"
          />
          <div className="mt-10 md:mt-14">
            <ul className="grid grid-cols-3 xs:grid-cols-4 justify-center gap-8">
                <li><Link className="text-white lg:text-xl xl:text-2xl font-medium border-b border-white">.ae</Link></li>
                <li><Link className="text-white lg:text-xl xl:text-2xl font-medium border-b border-white">.ag</Link></li>
                <li><Link className="text-white lg:text-xl xl:text-2xl font-medium border-b border-white">.agency</Link></li>
                <li><Link className="text-white lg:text-xl xl:text-2xl font-medium border-b border-white">.ai</Link></li>
                <li><Link className="text-white lg:text-xl xl:text-2xl font-medium border-b border-white">.app</Link></li>
                <li><Link className="text-white lg:text-xl xl:text-2xl font-medium border-b border-white">.asia</Link></li>
                <li><Link className="text-white lg:text-xl xl:text-2xl font-medium border-b border-white">.at</Link></li>
                <li><Link className="text-white lg:text-xl xl:text-2xl font-medium border-b border-white">.be</Link></li>
                <li><Link className="text-white lg:text-xl xl:text-2xl font-medium border-b border-white">.be</Link></li>
                <li><Link className="text-white lg:text-xl xl:text-2xl font-medium border-b border-white">.be</Link></li>
                <li><Link className="text-white lg:text-xl xl:text-2xl font-medium border-b border-white">.blog</Link></li>
                <li><Link className="text-white lg:text-xl xl:text-2xl font-medium border-b border-white">.business</Link></li>
            </ul>
            <div className="text-center mt-6 md:mt-10">
                    <button className=" text-[#CF0B8D] inline-block">View more <KeyboardArrowDownOutlined/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
