import React from "react";
import AppFooter from "./AppFooter";

const Layout = ({ children }) => {
  return (
    <div className="relative  h-full w-full">
      {/* <ChangeLocationSider />
    <OpenInCrome />
    <WhatsappShare />
    <TopToScroll />
    <NotificationComponent /> */}

      <div>{children}</div>
      <AppFooter />
    </div>
  );
};

export default Layout;
