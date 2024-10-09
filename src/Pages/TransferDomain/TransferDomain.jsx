import React from "react";
import TransferDomainBanner from "../../Components/Domain/TransferDomainBanner/TransferDomainBanner";
import SimpleSteps from "../../Components/Domain/SimpleSteps/SimpleSteps";
import WhyTransfer from "../../Components/Domain/WhyTransfer/WhyTransfer";
import Explore from "../../Components/Domain/Explore/Explore";
import DomainFAQs from "../../Components/Domain/DomainFAQs/DomainFAQs";

const TransferDomain = () => {
  return (
    <div>
      <TransferDomainBanner  />
      <SimpleSteps />
      <WhyTransfer />
      <Explore padding="py-16 md:py-20 lg:py-28" bg="#F1F1F11A" />
      <DomainFAQs />
    </div>
  );
};

export default TransferDomain;
