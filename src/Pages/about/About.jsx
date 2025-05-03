import Title from "../../components/Title";
// import me from "../../assets/me5.PNG";
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
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

function About() {
  return (
    <div className="py-28 text-white ">
      <div className="mb-16">
        <Title>about me</Title>
      </div>

      <div className=" flex gap-5 flex-col-reverse md:flex-row justify-center items-center  lg:w-10/12 mx-auto ">
        {/*=== left side div === */}
        <div className="md:w-1/2  ">
          <div className="flex justify-center items-center pb-5">
            <img
              src="https://i.postimg.cc/y80dpsLR/remove-bg1.png"
              className="shadow-md border-[#52D3D8]  border-b-8 rounded-xl bg-gradient-to-t  from-[#200E3A] w-4/6"
            />
          </div>

          {/* social div  */}
          <div className="my-5 bg-[#200E3A] p-5 shadow shadow-[#52D3D8] md:h-60">
            <div className="">
              <h2 className="text-sky-300 font-bold text-center text-xl py-2 capitalize">
                You can find me
              </h2>
              <div className="my-5 grid grid-cols-2 gap-7">
                <Link
                  target="blank"
                  to="https://www.linkedin.com/in/mehedimid"
                  className="common-social-btn flex justify-center items-center gap-1"
                >
                  <SiLinkedin />
                  LinkedIn
                </Link>
                <Link
                  target="blank"
                  to="https://www.github.com/mehedimid"
                  className="common-social-btn flex justify-center items-center gap-1"
                >
                  <SiGithub />
                  Github
                </Link>
                <Link
                  target="blank"
                  to="https://www.facebook.com/mehedimid"
                  className="common-social-btn flex justify-center items-center gap-1"
                >
                  <SiFacebook />
                  Facebook
                </Link>
                <Link
                  target="blank"
                  to="https://www.twitter.com/mehedimid"
                  className="common-social-btn flex justify-center items-center gap-1"
                >
                  <SiTwitter />
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*=== right side div === */}
        <div className="md:w-1/2">
          <h1 className="text-3xl text-orange-300 text-center font-bold uppercase">
            Mehedi hasan
          </h1>

          <p className="text-white font-medium text-sm text-center py-2">
            I am a Full Stack(mern) web developer.I skilled in HTML , CSS ,
            TailwindCss, Javascript, ReactJs, NodeJs, ExpressJs and MonogDB Crud
            Operation. Despite of my academic background, I have serious goal in
            Web Development.
          </p>

          {/* education div  */}
          <div className="my-5 bg-[#200E3A] p-5 shadow shadow-[#52D3D8] capitalize">
            <div>
              <h2 className="common-title">education</h2>
              <div className="font-normal text-center text-sm space-y-2 py-2">
                <p className="text-lg my-3">Graduated</p>
                <p> BBA In Accounting, 4th year </p>
                <p>National University, bangladesh,</p>
                <p className="brightness-75"> 2018-2024</p>
              </div>
            </div>
          </div>

          {/* skill div  */}
          <div className="my-5 bg-[#200E3A] p-5 shadow shadow-[#52D3D8]">
            <h2 className="text-center text-xl font-bold text-sky-300 mb-5 uppercase">
              Skills & Technologies
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Frontend Skills */}
              <div>
                <h3 className="text-center text-lg font-semibold text-orange-400 mb-3 uppercase">
                  Frontend
                </h3>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <SkillBtn icon={<FaHtml5 />} label="HTML" />
                  <SkillBtn icon={<FaCss3 />} label="CSS" />
                  <SkillBtn icon={<SiTailwindcss />} label="TailwindCSS" />
                  <SkillBtn icon={<IoLogoJavascript />} label="JavaScript" />
                  <SkillBtn icon={<FaReact />} label="ReactJS" />
                  <SkillBtn icon={<TbBrandNextjs />} label="Next.js" />
                  <SkillBtn icon={<SiTypescript />} label="TypeScript" />{" "}
                  {/* ← NEW */}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h3 className="text-center text-lg font-semibold text-orange-400 mb-3 uppercase">
                  Backend
                </h3>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <SkillBtn icon={<IoLogoFirebase />} label="Firebase" />
                  <SkillBtn icon={<FaNodeJs />} label="Node.js" />
                  <SkillBtn icon={<SiExpress />} label="Express.js" />
                  <SkillBtn icon={<SiMongodb />} label="MongoDB" />
                  <SkillBtn icon={<SiMongodb />} label="Mongoose" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
const SkillBtn = ({ icon, label }) => (
  <div className="bg-[#3887BE] text-white px-3 py-2 rounded-lg flex items-center gap-2 hover:scale-105 transition-transform duration-200">
    {icon} <span>{label}</span>
  </div>
);
