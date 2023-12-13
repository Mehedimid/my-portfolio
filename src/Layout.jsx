import React from "react";
import Navbar from "./Pages/home/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/home/Footer";
import HomeContact from "./Pages/home/HomeContact";

function Layout(props) {
  return (
    <div className="bg-black  bg-gradient-to-r from-slate-800 my-body-font ">
      <div>
        <div className="fixed w-full z-10">
          <Navbar></Navbar>
        </div>

        <div className="min-h-[90vh] ">
          <Outlet></Outlet>
        </div>

      
        {/* personal info div  */}
        <div>
          <HomeContact></HomeContact>
        </div>


        <div>
          <Footer></Footer>
        </div>
        
      </div>
    </div>
  );
}

export default Layout;
