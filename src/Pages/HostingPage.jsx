import React from "react";
import HomeComponent from "../Components/Home/HomeComponent";
import DomainPage from "./DomainPage";
import SeoPage from "./SeoPage";
import Footer from "./Footer";
import EmailPage from "./EmailPage";

const HostingPage = () => {
  return (
    <>
      <HomeComponent />
      <DomainPage />
      <SeoPage />
      <EmailPage />
      <Footer />
    </>
  );
};

export default HostingPage;
