import React from "react";
import { Link } from "react-router-dom";

function Experience({ experience }) {
  const {
    title,
    subtitle,
    image,
    features,
    frontEnd,
    backEnd,
    liveLink,
    codeLink,
  } = experience;

  return (
    <>
     <div class="text-white border-4 border-orange-300 space-y-7 rounded-xl pb-5 shadow-xl shadow-sky-500 transition-transform transform hover:-translate-y-5">
        <div>
          <img src={image} alt="" />
        </div>

        <div className="h-28">
          <h1 className="font-bold text-2xl uppercase text-center text-orange-300">
            {title}
          </h1>
          <h2 className="text-center my-1">
            {subtitle}
          </h2>
 
        </div>

        <div className="flex flex-col">
          <Link to={liveLink} className="common-btn text-center w-4/5 mx-auto my-1">
            Live link
          </Link>
          <Link to={codeLink} className="common-btn text-center w-4/5 mx-auto my-1">
            Live link
          </Link>
        </div>
      </div>
    </>
  );
}

export default Experience;
