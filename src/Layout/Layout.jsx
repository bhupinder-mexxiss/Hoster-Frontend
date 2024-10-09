import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Newsletter from "../Components/Newsletter/Newsletter";
import AllDomainHeader from "../Components/Domain/Header/AllDomainHeader";
import FindDomainHeader from "../Components/Domain/Header/FindDomainHeader";

const Layout = () => {
  const location = useLocation();
  const findDomainPaths = [
    "/domains/domain-transfer",
    "/domains/gtld-domain-names",
    "/domains/business-name-generator",
    "/domains/bulk-domain-search",
  ];

  const isFindDomainPath = findDomainPaths.includes(location.pathname);
  return (
    <div className="bg_Gradient">
      <Header />
      {/* <div className="hidden xl:block">
        {location.pathname === "/domains" ? (
          <AllDomainHeader />
        ) : isFindDomainPath ? (
          <FindDomainHeader />
        ) : null}
      </div> */}
      <main className={``}>
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;
