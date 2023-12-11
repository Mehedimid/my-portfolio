import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ item }) {
  const { title, subtitle, description, image, features, frontEnd, backEnd, liveLink, codeLink } =
    item;

  return (
    <div>
      <div className="flex flex-col bg-black gap-5 md:flex-row border-4 border-white mx-auto md:w-10/12 mb-16 rounded-xl hover:border-sky-400">
        <div className="md:w-1/2">
          <div>
            <img src={image} alt="Shoes" />
          </div>
          <div className="flex flex-col md:flex-row gap-2 justify-center my-5">
            <Link target="blank" to={liveLink} className="common-btn">live link</Link>
            <Link target="blank" to={codeLink} className="common-btn">Code link</Link>
          </div>
        </div>

        <div className=" md:w-1/2 text-white  space-y-4">

          <h2 className="font-bold text-2xl uppercase text-orange-300">
            {title}
          </h2>

          <small className="font-medium text-sm text-slate-300">{description}</small>

          <div className=" ">
            <span className="uppercase text-orange-300 font-semibold">features:</span>
            <ul className="mx-2 md:mx-auto">
              {features?.map((feature, idx) => (
                <li key={idx} className="text-xs list-disc py-1 text-slate-300">{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xl text-orange-300">FRONT END: <small className="text-slate-300">{frontEnd}</small></p>

            <p className="text-xl my-2 text-orange-300">BACK END: <small className="text-slate-300">{backEnd}</small></p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
