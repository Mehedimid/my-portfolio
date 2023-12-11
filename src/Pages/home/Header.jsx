import { Typewriter } from "react-simple-typewriter";
import me from "../../assets/me.png";
import { RxArrowDown, RxGithubLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <div className=" header py-28  text-white ">
        <div className="size flex flex-col-reverse lg:flex-row items-center gap-5 justify-center">
          <div className="lg:w-1/2 ">
            <div className="mx-5">
              <div className="App text-4xl">
                <h1
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}>
                  HI, I'M MEHEDI! <br />
                  <span style={{ color: "#0095A6", fontWeight: "bold" }}>
                    <Typewriter
                      words={["WEB DEVELOPER!", "JAVASCRIPT!", "REACT!"]}
                      loop={1500}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
              </div>

              <p className=" py-8 text-center md:text-start">
                I am a Passionate React developer eager to contribute and learn
                in a collaborative team environment. Seeking opportunities to
                apply skills in front-end development, collaborate with
                experienced professionals, and contribute to innovative
                projects. Open to mentorship and growth opportunities while
                aiming to contribute meaningfully to the field.
              </p>
              <div className="flex flex-col md:flex-row gap-5">
                <button  className="common-btn uppercase">
                  {" "}
                  <span className="flex items-center">
                    {" "}
                    download cv <RxArrowDown className="text-xl" />{" "}
                  </span>{" "}
                </button>
                <Link to='https://github.com/Mehedimid' className="common-btn uppercase">
                  {" "}
                  <span className="flex gap-1 items-center ">
                    {" "}
                    <RxGithubLogo className="text-xl" /> github
                  </span>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center gradient-shadow">
            <div className="">
              <div className=" gradient-box-shadow rounded-full">
                <img
                  src={me}
                  className="w-full h-full rounded-full bg-orange-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

{
  /* <img src={me} className="border-b-8 border bg-orange-100 rounded-full border-white w-96 h-[420px] object-cover" /> */
}
{
  /* <Lottie animationData={animation} loop={true} /> */
}
