import React from 'react'
import NameGeneratorBanner from "../../Components/Domain/NameGeneratorBanner/NameGeneratorBanner";
import HowItWorks from "../../Components/Domain/HowItWorks/HowItWorks";
import DomainFAQs from '../../Components/Domain/DomainFAQs/DomainFAQs';

const BusinessNameGenerator = () => {
  return (
    <div>
      <NameGeneratorBanner/>
      <HowItWorks/>
      <DomainFAQs />
    </div>
  )
}

export default BusinessNameGenerator
