import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Domain from "./Pages/Domain/Domain";
import TransferDomain from "./Pages/TransferDomain/TransferDomain";
import BusinessNameGenerator from "./Pages/BusinessNameGenerator/BusinessNameGenerator";
import BulkDomainSearch from "./Pages/BulkDomainSearch/BulkDomainSearch";
import GtldDomain from "./Pages/GtldDomain/GtldDomain";
import AuctionsDomainName from "./Pages/AuctionsDomainName/AuctionsDomainName.jsx";
import AppraisalDomainValue from "./Pages/AppraisalDomainValue/AppraisalDomainValue.jsx";
import DiscountDomainClub from "./Pages/DiscountDomainClub/DiscountDomainClub.jsx";
import DomainInvesting from "./Pages/DomainInvesting/DomainInvesting.jsx";
import CashParking from "./Pages/CashParking/CashParking.jsx";
import DomainBrokerService from "./Pages/DomainBrokerService/DomainBrokerService.jsx";
import DomainNameGenerator from "./Pages/DomainNameGenerator/DomainNameGenerator.jsx";
import DomainSearchPage from "./Pages/DomainSearchPage/DomainSearchPage.jsx";
import DomainProtection from "./Pages/DomainProtection/DomainProtection.jsx";
import PremiumDNS from "./Pages/PremiumDNS/PremiumDNS.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/domains",
          element: <Domain />,
        },
        {
          path: "/domains/domain-transfer",
          element: <TransferDomain />,
        },
        {
          path: "/domains/business-name-generator",
          element: <BusinessNameGenerator />,
        },
        {
          path: "/domains/bulk-domain-search",
          element: <BulkDomainSearch />,
        },
        {
          path: "/domains/gtld-domain-names",
          element: <GtldDomain />,
        },
        {
          path: "/auctions-domain-name",
          element: <AuctionsDomainName />,
        },
        {
          path: "/domain-value-appraisal",
          element: <AppraisalDomainValue />,
        },
        {
          path: "/discount-domain-club",
          element: <DiscountDomainClub />,
        },
        {
          path: "/domain-investing",
          element: <DomainInvesting />,
        },
        {
          path: "/cashparking",
          element: <CashParking />,
        },
        {
          path: "/domain-broker",
          element: <DomainBrokerService />,
        },
        {
          path: "/domain-name-generator",
          element: <DomainNameGenerator />,
        },
        {
          path: "/domainsearch",
          element: <DomainSearchPage />,
        },
        {
          path: "/domain-protection",
          element: <DomainProtection />,
        },
        {
          path: "/premium-dns",
          element: <PremiumDNS />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
