import React from 'react'
import BulkDomainBanner from "../../Components/Domain/BulkDomainBanner/BulkDomainBanner";
import BulkSearchFeatures from "../../Components/Domain/BulkSearchFeatures/BulkSearchFeatures";
import DomainFAQs from '../../Components/Domain/DomainFAQs/DomainFAQs';

const BulkDomainSearch = () => {
  return (
    <div>
      <BulkDomainBanner/>
      <BulkSearchFeatures/>
      <DomainFAQs />
    </div>
  )
}

export default BulkDomainSearch
