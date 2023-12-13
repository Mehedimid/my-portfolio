import React from "react";
import Title from "../../components/Title";
import me from "../../assets/me.png";
import { Link } from "react-router-dom";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFacebook,
  SiGithub,
  SiLinkedin,
  SiMongodb,
  SiTailwindcss,
  SiTwitter,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";

function About(props) {
  return (
    <div className="py-28">
      <div className="mb-16">
        {" "}
        <Title>about me</Title>
      </div>

      <div className="min-h-screen flex gap-5 flex-col justify-center items-center md:flex-row lg:w-10/12 mx-auto ">
        <div className="md:w-1/2">
          <img
            src={me}
            className="shadow-2xl shadow-sky-400 border-sky-500 border-4  border-b-8 rounded-full bg-orange-300"
          />

          {/* social div  */}
          <div className="my-5 bg-[#020316] p-5 shadow shadow-sky-500">
            <h1 className="text-sky-300 font-bold">
              YOU CAN FIND ME:
              <div className="my-5 grid grid-cols-2 gap-5">
                <Link
                  target="blank"
                  to="https://www.linkedin.com/in/mehedimid"
                  className="common-social-btn flex justify-center items-center gap-1">
                  <SiLinkedin />
                  LinkedIn
                </Link>
                <Link
                  target="blank"
                  to="https://www.github.com/mehedimid"
                  className="common-social-btn flex justify-center items-center gap-1">
                  <SiGithub />
                  Github
                </Link>
                <Link
                  target="blank"
                  to="https://www.facebook.com/mehedimid"
                  className="common-social-btn flex justify-center items-center gap-1">
                  <SiFacebook />
                  Facebook
                </Link>
                <Link
                  target="blank"
                  to="https://www.twitter.com/mehedimid"
                  className="common-social-btn flex justify-center items-center gap-1">
                  <SiTwitter />
                  twitter
                </Link>
              </div>
            </h1>
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl text-orange-300 text-center font-bold uppercase">
            Mehedi hasan
          </h1>

          <p className="text-white font-medium text-sm  py-2">
            I am a mern stack web developer. Basically I focused on front End. I
            skilled in{" "}
            <span className="text-orange-300">
              HTML , CSS , TAILWIND CSS, JAVASCRIPT, REACT
            </span>
            . I know Back End also. I have basic skills in{" "}
            <span className="text-orange-300">
              NODE JS, EXPRESS JS and MONGODB
            </span>{" "}
            Crud Operation. Despite of my academic background, I have serious
            goal in Web Development.
          </p>

          {/* education div  */}
          <div className="my-5 bg-[#020316] p-5 shadow shadow-sky-500">
            <h1 className="text-sky-300 font-bold">
              EDUCATION:
              <ul className="text-white font-normal text-sm lg:ml-10 space-y-2 py-2">
                <li className="list-disc">
                  {" "}
                  <span className="uppercase">age:</span> 26{" "}
                </li>
                <li className="list-disc">
                  {" "}
                  <span className="uppercase"> institution:</span> bba[hons],
                  4th year, national universiy, BD
                </li>
                <li className="list-disc">
                  {" "}
                  <span className="uppercase">objective:</span> build up a long
                  career in web deve
                </li>
              </ul>
            </h1>
          </div>

          {/* skill div  */}
          <div className="my-5 bg-[#020316] p-5 shadow shadow-sky-500">
            <h1 className="text-sky-300 font-bold">
              SKILLS AND TECHNOLOGY:
              <div className="flex flex-wrap gap-5 p-5 uppercase text-sm">
                <Link
                  target="blanck"
                  to=""
                  className="btn  btn-warning btn-sm md:btn-md">
                  <FaHtml5 className="text-xl font-bold" /> html{" "}
                </Link>
                <Link
                  target="blanck"
                  to=""
                  className="btn btn-warning btn-sm md:btn-md">
                  <FaCss3 className="text-xl font-bold" /> css{" "}
                </Link>
                <Link
                  target="blanck"
                  to=""
                  className="btn btn-warning btn-sm md:btn-md">
                  <SiTailwindcss className="text-xl font-bold" /> tailwind{" "}
                </Link>
                <Link
                  target="blanck"
                  to=""
                  className="btn btn-warning btn-sm md:btn-md">
                  <IoLogoJavascript className="text-xl font-bold" /> javascript
                </Link>
                <Link
                  target="blanck"
                  to=""
                  className="btn btn-warning btn-sm md:btn-md">
                  <FaReact className="text-xl font-bold" /> react{" "}
                </Link>
                <Link
                  target="blanck"
                  to=""
                  className="btn btn-warning btn-sm md:btn-md">
                  <IoLogoFirebase className="text-xl font-bold" /> firebase{" "}
                </Link>
                <Link
                  target="blanck"
                  to=""
                  className="btn btn-warning btn-sm md:btn-md">
                  <FaNodeJs className="text-xl font-bold" /> node js
                </Link>
                <Link
                  target="blanck"
                  to=""
                  className="btn btn-warning btn-sm md:btn-md">
                  <SiExpress className="text-xl font-bold" /> express js
                </Link>
                <Link
                  target="blanck"
                  to="https://mongodb.com/"
                  className="btn btn-warning btn-sm md:btn-md">
                  <SiMongodb className="text-xl font-bold" /> mongodb
                </Link>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
