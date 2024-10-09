import React from 'react'
import { Heading } from '../../Heading/Heading'
import InputComp from '../../InputComp/InputComp'
import { Link } from 'react-router-dom'

const WHOISDomainBanner = () => {
  return (
    
    <div className="pt-4 sm:py-6 ">
      <div className="container mx-auto">
        <div className="py-10">
          <div className="text-center mx-auto max-w-[780px]">
            <p className="mb-6 sm:text-lg text-[#CFD0D4]">
            WHOIS Domain Lookup
            </p>
            <Heading
              as="h2"
              children="Find out who owns a website."
              size="5xl"
              className="capitalize pr-10"
              fontWeight="700"
            />
          </div>
          <div className="mt-6 lg:mt-8 mx-auto max-w-[780px]">
            <InputComp
              placeholder="Enter a domain name to search"
              btnlabel="Search"
              as={Link}
              to="/domainsearch"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WHOISDomainBanner
