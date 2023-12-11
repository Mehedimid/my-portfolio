import React from "react";
import Navbar from "./Pages/home/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/home/Footer";

function Layout(props) {
  return (
    <body className=" bg-black my-body-font ">
      <main>
        <div className="fixed w-full z-10">
          <Navbar></Navbar>
        </div>

        <div className="min-h-[90vh]  bg-gradient-to-r from-slate-800">
          <Outlet></Outlet>
        </div>

        <div>
          <Footer></Footer>
        </div>
      </main>
    </body>
  );
}

export default Layout;
