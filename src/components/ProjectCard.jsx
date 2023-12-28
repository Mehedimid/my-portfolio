import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/icons/icon1.png"
import icon2 from "../assets/icons/icon2.png"
import icon3 from "../assets/icons/icon3.svg"
import icon4 from "../assets/icons/icon4.png"
import icon5 from "../assets/icons/icon5.svg"
import icon6 from "../assets/icons/icon6.png"
import icon7 from "../assets/icons/icon7.png"
import icon8 from "../assets/icons/icon8.png"
import icon9 from "../assets/icons/icon9.png"

function ProjectCard({ item }) {
  const { title,  description, image, features, frontEnd, backEnd, liveLink, codeLink } =
    item;

  return (
    <div>
      <div className="flex flex-col bg-[#200E3A] gap-5  md:flex-row border-4 border-white  shadow-lg hover:shadow-[#52D3D8] mx-auto md:w-10/12 mb-16 rounded-xl hover:border-[#52D3D8] transition-all duration-200">
        <div className="md:w-1/2 flex flex-col justify-center items-center md:p-5">

          {/* project image div  */}
          <div className="shadow-lg  shadow-[#52D3D8] ">
            <img src={image} className="rounded" />
          </div>

          {/* button div  */}
          <div className="flex flex-col md:flex-row gap-2 justify-center my-6">
            <Link target="blank" to={liveLink} className="common-btn">Live Link</Link>
            <Link target="blank" to={codeLink} className="common-btn">Code link</Link>
          </div>
          
          {/* icons div  */}
          <div className=" flex p-10 gap-3 flex-wrap justify-center items-center">
          <img src={icon1} className="w-8 h-6 md:w-16 md:h-12" />
          <img src={icon2} className="w-8 h-6 md:w-16 md:h-12" />
          <img src={icon3} className="w-8 h-6 md:w-16 md:h-12" />
          <img src={icon4} className="w-8 h-6 md:w-16 md:h-12" />
          <img src={icon5} className="w-8 h-6 md:w-16 md:h-12" />
          <img src={icon6} className="w-8 h-6 md:w-16 md:h-12" />
          <img src={icon7} className="w-8 h-6 md:w-16 md:h-12" />
          <img src={icon8} className="w-8 h-6 md:w-16 md:h-12" />
          <img src={icon9} className="w-8 h-6 md:w-16 md:h-12" />
          </div>

        </div>
       
       {/* content div  */}
        <div className=" md:w-1/2 text-white p-2 space-y-4">

          <h2 className="font-bold text-2xl uppercase text-orange-300">
            {title}
          </h2>

          <small className="font-medium text-sm text-slate-300">{description}</small>

          <div className=" ">
            <span className=" text-orange-300 font-semibold text-xl">Features:</span>
            <ul className="mx-2 md:mx-auto">
              {features?.map((feature, idx) => (
                <li key={idx} className="text-xs list-disc py-1 text-slate-300">{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xl text-orange-300">Front End: <small className="text-slate-300">{frontEnd}</small></p>

            <p className="text-xl my-2 text-orange-300">Back End: <small className="text-slate-300">{backEnd}</small></p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
