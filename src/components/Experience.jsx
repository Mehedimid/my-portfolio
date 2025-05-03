import { Link } from "react-router-dom";

function Experience({ experience }) {
  const { title, subtitle, image, liveLink, codeLink } = experience;

  return (
    <>
      <div className="text-white border-4 border-orange-300 space-y-7 brightness-90 hover:brightness-100 rounded-xl pb-5 shadow-xl hover:shadow-[#52D3D8]  transition-all duration-700">
        <div>
          <img src={image} className="w-full h-48 object-cover" />
        </div>

        <div className="h-[85px]">
          <h1 className="font-bold text-2xl capitalize text-center text-orange-300">
            {title}
          </h1>
          <h2 className="text-center text-sm mx-2 my-1">{subtitle}</h2>
        </div>

        <div className="flex flex-col">
          <Link
            to={liveLink} target="blank"
            className="common-btn text-center w-4/5 mx-auto my-1"
          >
            Live Link
          </Link>
          <Link
            to={codeLink} target="blank"
            className="common-btn text-center w-4/5 mx-auto my-1"
          >
            Code Link
          </Link>
        </div>
      </div>
    </>
  );
}

export default Experience;
