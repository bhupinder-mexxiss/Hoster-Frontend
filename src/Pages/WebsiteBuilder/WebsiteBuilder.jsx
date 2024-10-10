import React from "react";
import WebsiteBuilderBanner from "../../Components/Websites/WebsiteBuilderBanner/WebsiteBuilderBanner.jsx";
import HowToCreate from "../../Components/Websites/HowToCreate/HowToCreate.jsx";
import WebsiteBuilderPlan from "../../Components/Websites/WebsiteBuilderPlan/WebsiteBuilderPlan.jsx";
import WebsiteTemplates from "../../Components/Websites/WebsiteTemplates/WebsiteTemplates.jsx";
import PowerfulBuilder from "../../Components/Websites/PowerfulBuilder/PowerfulBuilder.jsx";
import PremiumBuilderFeatures from "../../Components/Websites/PremiumBuilderFeatures/PremiumBuilderFeatures.jsx";
import DomainFAQs from "../../Components/Domain/DomainFAQs/DomainFAQs.jsx";

const WebsiteBuilder = () => {
  return (
    <div>
      <WebsiteBuilderBanner />
      <HowToCreate />
      <WebsiteBuilderPlan />
      <WebsiteTemplates />
      <PowerfulBuilder />
      <PremiumBuilderFeatures/>
      <DomainFAQs />
    </div>
  );
};

export default WebsiteBuilder;
