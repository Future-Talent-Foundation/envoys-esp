import React from "react";
import Banner from "./banner";
import Footer from "./footer";
import Nav from "./nav";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
