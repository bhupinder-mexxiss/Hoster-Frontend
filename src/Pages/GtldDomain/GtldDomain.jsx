import React from 'react'
import GtldDomainBanner from '../../Components/Domain/GtldDomainBanner/GtldDomainBanner';
import NewDomainRegister from '../../Components/Domain/NewDomainRegister/NewDomainRegister';
import GtldDomainSec from '../../Components/Domain/GtldDomainSec/GtldDomainSec';
import DomainFAQs from '../../Components/Domain/DomainFAQs/DomainFAQs';

const GtldDomain = () => {
  return (
    <div>
      <GtldDomainBanner/>
      <NewDomainRegister/>
      <GtldDomainSec/>
      <DomainFAQs/>
    </div>
  )
}

export default GtldDomain
