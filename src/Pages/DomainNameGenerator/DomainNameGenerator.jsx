import React from 'react'
import DomainGeneratorBanner from "../../Components/DomainTools/DomainGeneratorBanner/DomainGeneratorBanner.jsx";
import DomainNameSuggestions from "../../Components/DomainTools/DomainNameSuggestions/DomainNameSuggestions.jsx";
import DomainFAQs from '../../Components/Domain/DomainFAQs/DomainFAQs.jsx';

const DomainNameGenerator = () => {
  return (
    <div>
      <DomainGeneratorBanner/>
      <DomainNameSuggestions/>
      <DomainFAQs/>
    </div>
  )
}

export default DomainNameGenerator
