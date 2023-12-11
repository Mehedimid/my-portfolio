import React from "react";
import Navbar from "./Pages/home/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/home/Footer";

function Layout(props) {
  return (
    <body className=" bg-black my-body-font">

      
      <div className="fixed w-full z-10">
      <Navbar></Navbar>
      </div>

      <div className="min-h-[90vh]">
        <Outlet></Outlet>
      </div>

      <div>
        <Footer></Footer>
      </div>

    </body>
  );
}

export default Layout;