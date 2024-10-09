import React from 'react'
import Banner from "../../Components/Banner/Banner";
import SearchSec from "../../Components/SearchSec/SearchSec";
import JoinUs from "../../Components/JoinUs/JoinUs";
import PricingPlans from "../../Components/PricingPlans/PricingPlans";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Migration from "../../Components/Migration/Migration";
import ReviewSec from "../../Components/ReviewSec/ReviewSec";
import WebHosting from "../../Components/WebHosting/WebHosting";
import WebsiteLive from "../../Components/WebsiteLive/WebsiteLive";

const Home = () => {
  return (
    <div>
      <Banner/>
      <SearchSec/>
      <JoinUs/>
      <PricingPlans/>
      <WhyChooseUs/>
      <Migration/>
      <ReviewSec/>
      <WebHosting/>
      <WebsiteLive/>

    </div>
  )
}

export default Home
