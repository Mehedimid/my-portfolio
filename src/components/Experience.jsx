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
     <div class="text-white border-4 border-orange-300 space-y-7 brightness-90 hover:brightness-100 rounded-xl pb-5 shadow-xl hover:shadow-[#52D3D8]  hover:-mt-2 transition-all duration-700 hover:scale-105" >
        <div>
          <img src={image} alt="" />
        </div>

        <div className="h-[85px]">
          <h1 className="font-bold text-2xl uppercase text-center text-orange-300">
            {title}
          </h1>
          <h2 className="text-center text-sm mx-2 my-1">
            {subtitle}
          </h2>
 
        </div>

        <div className="flex flex-col">
          <Link to={liveLink} className="common-btn text-center w-4/5 mx-auto my-1">
            Live Link
          </Link>
          <Link to={codeLink} className="common-btn text-center w-4/5 mx-auto my-1">
            Code Link
          </Link>
        </div>
      </div>
    </>
  );
}

export default Experience;
