import { Typewriter } from "react-simple-typewriter";
import me from "../../assets/me.png";
import { RxArrowDown, RxGithubLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

function Header(props) {


// const generateAndDownloadPDF = () => {
//   // Create a new jsPDF instance
//   const pdf = new jsPDF();

//   // Add content to the PDF
//   pdf.text("", 10, 10);

//   // Save the PDF as a blob
//   const pdfBlob = pdf.output("blob");

//   // Create a download link and trigger the download
//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(pdfBlob);
//   link.download = "your_cv.pdf";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };




  return (
    <>
      <div className=" header py-28  text-white ">
        <div className="size flex flex-col lg:flex-row  gap-5  justify-center">

          {/* content div  */}
          <div className="lg:w-1/2 ">
            <div className="md:mx-5">
              <div className="App text-4xl text-center lg:text-start">
                <h1
                className="h-52 md:h-44"
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}>
                  HI, I'M MEHEDI! <br />
                  <span className="text-3xl " style={{ color: "#0095A6", fontWeight: "bold" }}>
                    <Typewriter
                      words={["Programmer","Web Developer!", "Javascript Developer!", "React Developer!"]}
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

              <p className=" py-8  text-sm ">
                I am a Passionate React developer eager to contribute and learn
                in a collaborative team environment. Seeking opportunities to
                apply skills in front-end development, collaborate with
                experienced professionals, and contribute to innovative
                projects. Open to mentorship and growth opportunities while
                aiming to contribute meaningfully to the field.
              </p>
              <div className="flex flex-col md:flex-row gap-5 justify-center lg:justify-start">
                <Link target="blank" to='https://drive.google.com/file/d/13DdSM3Kcc1E-MPqD_twr4nEiCmmxIxF4/view?usp=sharing'  className="common-btn uppercase">
                  {" "}
                  <span className="flex items-center">
                    {" "}
                    download cv <RxArrowDown className="text-xl" />{" "}
                  </span>{" "}
                </Link>
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

          {/* image div  */}
          <div className="lg:w-1/2 md:mt-12 flex justify-center ">
            <div className="">
              <div className="">
                <img
                  src={me}
                  className="w-96 h-96 object-cover border-4 shadow-xl shadow- shadow-[#0095A6] border-[#0095A6] rounded-md md:rounded-full bg-gradient-to-t  from-[#020316]"
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


