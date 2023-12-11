import me3 from "../../assets/me3.png";
import me from "../../assets/me.png";

function Header(props) {
  return (
    <>
      <div className=" header bg-gradient-to-r from-slate-800 py-28  text-white ">
        <div className="size flex flex-col-reverse lg:flex-row items-center gap-5 justify-center">
          <div className="lg:w-1/2 ">
            <div className="mx-5">
              <h1 className=" text-3xl text-center md:text-start md:text-5xl font-bold">
                HI, I'M MEHEDI! CREATIVE DESIGNERCODER
              </h1>
              <p className=" py-8 text-center md:text-start">
                Passionate React developer eager to contribute and learn in a
                collaborative team environment. Seeking opportunities to apply
                skills in front-end development, collaborate with experienced
                professionals, and contribute to innovative projects. Open to
                mentorship and growth opportunities while aiming to contribute
                meaningfully to the field.
              </p>
              <button className="common-btn">Get Started</button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center gradient-shadow">
            <div className="">
              <div className=" gradient-box-shadow rounded-full">
                <img src={me} className="w-full h-full rounded-full bg-orange-300" />
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
