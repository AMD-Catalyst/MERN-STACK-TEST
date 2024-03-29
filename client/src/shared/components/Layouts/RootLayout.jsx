import React from "react";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
