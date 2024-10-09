import React from 'react'
import DiscountDomainBanner from '../../Components/Auction/DiscountDomainBanner/DiscountDomainBanner.jsx'
import ChoosePlan from '../../Components/Auction/ChoosePlan/ChoosePlan.jsx'
import EverydayDeals from '../../Components/Auction/EverydayDeals/EverydayDeals.jsx'

const DiscountDomainClub = () => {
  return (
    <div>
        <DiscountDomainBanner/>
        <ChoosePlan/>
        <EverydayDeals/>
    </div>
  )
}

export default DiscountDomainClub
