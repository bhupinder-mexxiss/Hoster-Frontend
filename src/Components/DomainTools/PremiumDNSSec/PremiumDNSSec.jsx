import React from "react";
import { Heading } from "../../Heading/Heading";
import image5 from "../../../assets/images/image5.png";
import image4 from "../../../assets/images/image4.png";
import image6 from "../../../assets/images/image6.png";
import CustomButton from "../../CustomButton/CustomButton";

const PremiumDNSSec = () => {
  return (
    <>
      <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-4">
              <div className="text-white">
                <Heading
                  children="Fast, 99.9%* uptime guaranteed."
                  size="xxl"
                  fontWeight="500"
                />
                <p className="mt-3 md:mt-5">
                  Our Premium DNS infrastructure with the Anycast DNS Network,
                  enables your visitors to find you fast, anywhere around the
                  world.
                </p>
              </div>
              <div className="text-white">
                <Heading
                  children="Mission-critical secondary DNS."
                  size="xxl"
                  fontWeight="500"
                />
                <p className="mt-3 md:mt-5">
                  Secondary DNS is your safeguard against power outages and
                  internet routing problems, ensuring that your website is
                  always available.
                </p>
              </div>
              <div className="text-white">
                <Heading
                  children="Easily managed DNS."
                  size="xxl"
                  fontWeight="500"
                />
                <p className="mt-3 md:mt-5">
                  Our online dashboard makes it easy to manage and make updates
                  to your DNS — and you don't have to be tech savvy to use it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium DNS includes: */}
      <div className="pt-16 md:pt-20 lg:pt-24 ">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-10 max-w-[1440px] mx-auto">
            <div>
              <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative ">
                <img src={image5} className="relative rounded-3xl w-full" />
              </div>
            </div>
            <div>
              <Heading
                children="Premium DNS includes:"
                size="4xl"
                fontWeight="600"
                as="h4"
              />
              <ul className="mt-6 flex flex-col gap-2 sm:gap-3">
                <li className="text-sm sm:text-base text-white flex">
                  <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                  99.9%* uptime guarantee.
                </li>
                <li className="text-sm sm:text-base text-white flex">
                  <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                  Manage unlimited domains (zones).
                </li>
                <li className="text-sm sm:text-base text-white flex">
                  <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                  1,500 records per/domain.
                </li>
                <li className="text-sm sm:text-base text-white flex">
                  <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                  Secures up to 5 domains with DNSSEC.
                </li>
                <li className="text-sm sm:text-base text-white flex">
                  <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                  No overage fees.
                </li>
                <li className="text-sm sm:text-base text-white flex">
                  <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                  Reliable, fast Anycast global network.
                </li>
                <li className="text-sm sm:text-base text-white flex">
                  <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                  Templates to create, save and reuse zone settings.
                </li>
                <li className="text-sm sm:text-base text-white flex">
                  <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                  Mission critical secondary DNS with syncing (unlimited
                  domains).
                </li>
                <li className="text-sm sm:text-base text-white flex">
                  <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-white inline-block mr-2 mt-2.5"></span>
                  Built-in error checking.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* DNS (Domain Name Server) explained. */}
      <div className="pt-16 md:pt-20 lg:pt-24 ">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-10 max-w-[1440px] mx-auto">
            <div className="order-2 lg:order-1">
              <Heading
                children="DNS (Domain Name Server) explained."
                size="4xl"
                fontWeight="600"
                as="h4"
              />
              <p className="text-white text-sm sm:text-base lg:text-lg mt-5 lg:mt-8">
                Every domain name is given a series of numbers known as an IP
                address. When you type a domain name into your browser, the DNS
                looks through a huge database to find the IP address and directs
                your browser to the website content.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative lg:ml-auto">
                <img src={image4} className="relative rounded-3xl w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The importance of managing your DNS. */}
      <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20 mt-14 md:mt-16 lg:mt-20">
        <div className="container mx-auto">
          <Heading
            as="h4"
            children="The importance of managing your DNS."
            size="4xl"
            className="capitalize text-center"
            fontWeight="700"
          />
          <p className="text-white max-w-[950px] mx-auto text-center lg:text-lg mt-5 ">
            It's during this DNS address "look up" where you potentially
            experience problems in performance, accessibility and security; from
            your domain not being found to hackers redirecting visitors to a
            fake website.
          </p>
          <div className="mt-10 md:mt-14">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              <div className="text-white">
                <p className="font-medium mb-5 text-2xl">
                  Slow DNS response can cause "website not found" errors.
                </p>
                <p className="mb-2">
                  This can happen when the DNS server is slow in responding and
                  can't determine what site content to give you. If it takes too
                  long, it can just "time out" and give an error message.
                </p>
              </div>
              <div className="text-white">
                <p className="font-medium mb-5 text-2xl">
                  Keep hackers from redirecting your visitors to a fake site.
                </p>
                <p className="mb-2">
                  Hackers can give the browser a different IP address that
                  redirects to a fake website that looks like yours. Once there,
                  the hacker can access any information your customer provides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium DNS helps, here’s how: */}
      <div className="pt-16 md:pt-20 lg:pt-24 ">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-10 max-w-[1440px] mx-auto">
            <div>
              <div className="img_Outer max-w-[400px] lg:max-w-[600px] relative ">
                <img src={image6} className="relative rounded-3xl w-full" />
              </div>
            </div>
            <div>
              <Heading
                children="Premium DNS helps, here’s how:"
                size="4xl"
                fontWeight="600"
                as="h4"
              />
              <p className="text-white text-sm sm:text-base lg:text-lg mt-5 lg:mt-8">
                We distribute your DNS information on multiple servers around
                the world on our premium global network. So, visitors searching
                your site connect to the closest server, for a fast response.
                Our DNS security feature (DNSSEC) stops hackers by securing the
                "look up" process and verifying the visitor is arriving at your
                site.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solve top DNS issues to improve security */}
      <div className="bg-[#F1F1F11A] py-14 md:py-16 lg:py-20 mt-14 md:mt-16 lg:mt-20">
        <div className="container mx-auto">
          <Heading
            as="h4"
            children="We know how important your domain is."
            size="4xl"
            className="capitalize text-center"
            fontWeight="700"
          />
          <p className="text-white max-w-[1440px] mx-auto text-center lg:text-lg mt-5 ">
            We know how important your domain is.
          </p>
          <div className="mt-10 md:mt-14">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 text-center">
              <div className="text-white">
                <p className="font-medium mb-5 text-2xl">Better security.</p>
                <p className="mb-2">
                  <span className="font-semibold">Problem:</span> Hackers steal
                  credit card numbers and other sensitive information through
                  "eavesdropping." Hackers sit on the DNS server and "listen in"
                  on messages, logins and passwords as customers access your
                  site.
                </p>
                <p>
                  <span className="font-semibold">Solution:</span> By verifying
                  the visitor is at the intended website, Premium DNS helps shut
                  eavesdropping down.
                </p>
              </div>
              <div className="text-white">
                <p className="font-medium mb-5 text-2xl">
                  Greater reliability.
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Problem: </span>"Website not
                  found" errors cause you to lose visitors and sales. At best,
                  they think you're unprofessional; at worst, they think you
                  don't exist.
                </p>
                <p>
                  <span className="font-semibold">Solution: </span>Premium DNS
                  makes sure your site is always available by using the Anycast
                  global network, which provides multiple layers of redundancy.
                  Your DNS records are distributed on servers throughout the
                  U.S., Europe and Asia. So, if one server should go down, your
                  website will still be online.
                </p>
              </div>
              <div className="text-white">
                <p className="font-medium mb-5 text-2xl">Faster performance.</p>
                <p className="mb-2">
                  <span className="font-semibold">Problem: </span>Visitors
                  experience delays or "time outs" trying to reach your site.
                  Customers who live far away may experience a delay in reaching
                  your site or even get a "website not found" error message. The
                  more cable between your server and your customer's computer,
                  the longer it takes for them to reach your site. don't exist.
                </p>
                <p>
                  <span className="font-semibold">Solution: </span>The Premium
                  DNS infrastructure offers improved security and faster
                  resolution than the standard infrastructure. And since your
                  information is distributed across DNS servers around the
                  world, customers connect to the closest server location for a
                  quicker response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumDNSSec;
