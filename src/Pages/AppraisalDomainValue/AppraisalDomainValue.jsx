import React from 'react'
import AppraisalDomainBanner from '../../Components/Auction/AppraisalDomainBanner/AppraisalDomainBanner.jsx'
import AppraisalDomainBulk from '../../Components/Auction/AppraisalDomainBulk/AppraisalDomainBulk.jsx'
import DomainFAQs from '../../Components/Domain/DomainFAQs/DomainFAQs.jsx'

const AppraisalDomainValue = () => {
  return (
    <div>
        <AppraisalDomainBanner />
        <AppraisalDomainBulk/>
        <DomainFAQs />
    </div>
  )
}

export default AppraisalDomainValue
