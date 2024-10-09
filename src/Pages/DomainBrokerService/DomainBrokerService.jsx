import React from "react";
import DomainFAQs from "../../Components/Domain/DomainFAQs/DomainFAQs";
import DomainBrokerBanner from "../../Components/DomainTools/DomainBrokerBanner/DomainBrokerBanner.jsx";
import HowItWorks from "../../Components/DomainTools/HowItWorks/HowItWorks.jsx";

const DomainBrokerService = () => {
  return (
    <div>
      <DomainBrokerBanner />
      <HowItWorks/>
      <DomainFAQs />
    </div>
  );
};

export default DomainBrokerService;
