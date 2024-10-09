import React from "react";
import { Heading } from "../../Heading/Heading";
import AccordionComp from "../../AccordionComp/AccordionComp";

const DomainFAQs = () => {
  const faq = [
    {
      title: "What is a domain name and why do I need one?",
      content:
        "A domain name is what people type into a browser to find a website - similar to how you use a street address to find a building. Every website, server, or digital device that is connected to the Internet has an assigned IP address that you can use to see or visit it. This IP address is a long string of numbers and letters that would be very difficult for people to memorize, so a domain name is simply a human-friendly version of that IP address.",
    },
    {
      title: "How do I check if a domain is available?",
      content:
        "A domain name is what people type into a browser to find a website - similar to how you use a street address to find a building. Every website, server, or digital device that is connected to the Internet has an assigned IP address that you can use to see or visit it. This IP address is a long string of numbers and letters that would be very difficult for people to memorize, so a domain name is simply a human-friendly version of that IP address.",
    },
    {
      title: "How do I check if a domain is available?",
      content:
        "A domain name is what people type into a browser to find a website - similar to how you use a street address to find a building. Every website, server, or digital device that is connected to the Internet has an assigned IP address that you can use to see or visit it. This IP address is a long string of numbers and letters that would be very difficult for people to memorize, so a domain name is simply a human-friendly version of that IP address.",
    },
    {
      title: "What is domain name registration?",
      content:
        "A domain name is what people type into a browser to find a website - similar to how you use a street address to find a building. Every website, server, or digital device that is connected to the Internet has an assigned IP address that you can use to see or visit it. This IP address is a long string of numbers and letters that would be very difficult for people to memorize, so a domain name is simply a human-friendly version of that IP address.",
    },
    {
      title: "How do I get a free domain name?",
      content:
        "A domain name is what people type into a browser to find a website - similar to how you use a street address to find a building. Every website, server, or digital device that is connected to the Internet has an assigned IP address that you can use to see or visit it. This IP address is a long string of numbers and letters that would be very difficult for people to memorize, so a domain name is simply a human-friendly version of that IP address.",
    },
  ];
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <Heading
          children="Domain FAQs"
          size="4xl"
          fontWeight="600"
          className="text-center"
          as="h4"
        />
        <p className="text-white text-[15px] xs:text-base sm:text-lg opacity-90 text-center mt-3 sm:mt-4 md:mt-6 max-w-[500px] mx-auto">
          Questions and answers regarding the Domain Checker tool and domain
          registration process.
        </p>
        <div className="max-w-[1020px] mx-auto mt-10 md:mt-14">
          <div>
            <AccordionComp faq={faq} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainFAQs;
