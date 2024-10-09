import React from 'react'
import DomainProtectionBanner from "../../Components/DomainTools/DomainProtectionBanner/DomainProtectionBanner.jsx";
import DomainProtectionSec from "../../Components/DomainTools/DomainProtectionSec/DomainProtectionSec.jsx";
import DomainFAQs from '../../Components/Domain/DomainFAQs/DomainFAQs.jsx';

const DomainProtection = () => {
  return (
    <div>
      <DomainProtectionBanner/>
      <DomainProtectionSec/>
      <DomainFAQs/>
    </div>
  )
}

export default DomainProtection
