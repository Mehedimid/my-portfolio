import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  const navlinks = (
    <>
      <NavLink className='hover:text-orange-300 uppercase md:text-sm' to="/">Home</NavLink>
      <NavLink className='hover:text-orange-300 uppercase md:text-sm' to="/porjects">Projects</NavLink>
      <NavLink className='hover:text-orange-300 uppercase md:text-sm' to="/about">About</NavLink>
      <NavLink className='hover:text-orange-300 uppercase md:text-sm' to="/contact">Contact</NavLink>
      <NavLink className='hover:text-orange-300 uppercase md:text-sm' to="/">Resume</NavLink>
      {/* <NavLink to="/blog">Blog</NavLink> */}
    </>
  );

  return (
    <>
     
    <nav className="bg-[#020316] nav py-3 size  md:shadow-black shadow-lg  ">
        <div className="navbar my-nav-font  text-white ">
          <div className="navbar-start">

            {/* hidden and mobile icon */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm bg-black dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                {navlinks}
              </ul>
            </div>
            <Link
              to="/"
              className="btn btn-ghost text-3xl mehedi-font font-bold ">
              Mehedimid
            </Link>
          </div>

          {/* navlinks for lg  */}
          <div className="navbar-end hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 gap-6 text-base  tracking-wider">
              {navlinks}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
