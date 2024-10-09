import React from 'react'
import AllWebsiteOptionBanner from "../../Components/Websites/AllWebsiteOptionBanner/AllWebsiteOptionBanner.jsx";
import AllWebsiteOptionSec from "../../Components/Websites/AllWebsiteOptionSec/AllWebsiteOptionSec.jsx";
import DomainFAQs from '../../Components/Domain/DomainFAQs/DomainFAQs.jsx';

const AllWebsiteOption = () => {
  return (
    <div>
      <AllWebsiteOptionBanner/>
      <AllWebsiteOptionSec/>
      <DomainFAQs/>
    </div>
  )
}

export default AllWebsiteOption
