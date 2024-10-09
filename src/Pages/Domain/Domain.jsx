import React from "react";
import Banner from "../../Components/Domain/Banner/Banner";
import WhyRegister from "../../Components/Domain/WhyRegister/WhyRegister";
import WhyBuyDomain from "../../Components/Domain/WhyBuyDomain/WhyBuyDomain";
import BuyDomain from "../../Components/Domain/BuyDomain/BuyDomain";
import Explore from "../../Components/Domain/Explore/Explore";
import ReviewSec from "../../Components/ReviewSec/ReviewSec";
import WebHosting from "../../Components/WebHosting/WebHosting";
import WebsiteLive from "../../Components/WebsiteLive/WebsiteLive";
import DomainFAQs from "../../Components/Domain/DomainFAQs/DomainFAQs";

const Domain = () => {
  return (
    <div>
      <Banner />
      <WhyRegister />
      <WhyBuyDomain />
      <BuyDomain />
      <Explore padding="pt-16 md:pt-20 lg:pt-28" bg="none" />
      <ReviewSec />
      <WebHosting />
      <WebsiteLive />
      <DomainFAQs />
    </div>
  );
};

export default Domain;
