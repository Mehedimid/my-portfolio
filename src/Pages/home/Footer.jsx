import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="common-bg2 text-white">
      <footer className="footer items-center p-4 size ">
        <aside className="items-center grid-flow-col ">
          <p> © MEHEDI HASASN || All right reserved</p>
        </aside>


        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-evenly">
          <Link target="blank" to="https://www.linkedin.com/in/mehedimid">
            <RxLinkedinLogo className="text-2xl font-bold shadow-xl" />
          </Link>

          <Link target="blank" to="https://github.com/Mehedimid">
            <RxGithubLogo className="text-2xl font-bold shadow-xl text-slate-300" />
          </Link>

          <Link target="blank" to="https://facebook.com/Mehedimid">
            <FaFacebook className="text-2xl font-bold shadow-xl text-blue-200" />
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
