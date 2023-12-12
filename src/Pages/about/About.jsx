import React from "react";
import Title from "../../components/Title";
import me from "../../assets/me2.png";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="py-28">
      <div className="mb-16">
        {" "}
        <Title>about me</Title>
      </div>

      <div className="min-h-screen flex flex-col  md:flex-row lg:w-10/12 mx-auto ">
        <div className="md:w-1/2">
          <img
            src={me}
            className="shadow-2xl shadow-sky-400 border-sky-500 border-4  border-b-8 rounded-full bg-orange-300"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl text-orange-300 text-center font-bold uppercase">
            Mehedi hasan
          </h1>

          <p className="text-white font-medium text-sm italic py-2">

          My name is Mehedi Hasan, and I reside in Brahmanbaria, Chittagong. Currently, I am pursuing my studies in accounting at Brahmanbaria Govt College under the National University. Despite my academic focus, I am an enthusiastic front-end developer with a strong foundation in JavaScript. While my expertise lies in front-end technologies and frameworks, I also have a basic understanding of back-end development. My passion for learning constantly drives me to explore new technologies and enhance my skills in the dynamic field of software engineering.
          </p>
          
          {/* education div  */}
          <div className="my-5 bg-[#020316] p-5 shadow shadow-sky-500">
            <h1 className="text-sky-300 font-bold">EDUCATION:
            <ul className="text-white font-normal text-sm lg:ml-10 space-y-2 py-2">
                <li className="list-disc"> <span className="uppercase">age:</span>  26 </li>
                <li className="list-disc"> <span className="uppercase"> institution:</span> bba[hons], 4th year, national universiy, BD</li>
                <li className="list-disc"> <span className="uppercase">objective:</span>  build up a long career in web deve</li>
            </ul>
            </h1>
          </div>

          {/* skill div  */}
          <div className="my-5 bg-[#020316] p-5 shadow shadow-sky-500">
            <h1 className="text-sky-300 font-bold">SKILLS AND TECHNOLOGY:
            <div className="flex flex-wrap gap-5 p-5 uppercase text-sm">
                <Link target="black" to='' className="btn btn-warning">html </Link>
                <Link target="black" to='' className="btn btn-warning">css </Link>
                <Link target="black" to='' className="btn btn-warning">tailwind </Link>
                <Link target="black" to='' className="btn btn-warning">javascript</Link>
                <Link target="black" to='' className="btn btn-warning">react </Link>
                <Link target="black" to='' className="btn btn-warning">firebase </Link>
                <Link target="black" to='' className="btn btn-warning">node js</Link>
                <Link target="black" to='' className="btn btn-warning">express js</Link>
                <Link target="black" to='https://mongodb.com/' className="btn btn-warning"> mongodb</Link>
            </div>
            </h1>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
