import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  const navlinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/offer">Projects</NavLink>
      <NavLink to="/offer">About</NavLink>
      <NavLink to="/offer">Contact</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </>
  );

  return (
    <>
      <div className="navbar bg-purple-900 text-white ">
        <div className="size">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">MehediMid</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 gap-4 text-base">
              {navlinks}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
