import React from 'react'
import PremiumDNSBanner from "../../Components/DomainTools/PremiumDNSBanner/PremiumDNSBanner.jsx";
import PremiumDNSSec from "../../Components/DomainTools/PremiumDNSSec/PremiumDNSSec.jsx";
import DomainFAQs from '../../Components/Domain/DomainFAQs/DomainFAQs.jsx';

const PremiumDNS = () => {
  return (
    <div>
      <PremiumDNSBanner/>
      <PremiumDNSSec/>
      <DomainFAQs/>
    </div>
  )
}

export default PremiumDNS
