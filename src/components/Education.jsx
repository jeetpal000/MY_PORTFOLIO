import laptop from "../assets/laptop.png"
import bin from "../assets/bin.png"
import board from "../assets/board.png"
import boards from "../assets/boards.png"
import Qualification from "./Qualification.jsx";
import AOS from "aos";
import "aos/dist/aos.css";


const Education = () => {
  return (
    <>
      <div data-aos="slide-right" className="flex items-center justify-center py-5 max-sm:py-2 max-sm:absolute max-sm:mt-22 max-sm:left-1/2  max-sm:transform max-sm:-translate-x-1/2 ">
        <span className="w-24 h-0.5 bg-[#1a1443]"></span>
        <span className="bg-[#1a1443] w-fit p-2 px-5 text-2xl rounded-md drop-shadow-[0_0_20px_#1e1463]">
          Education
        </span>
        <span className="w-24 h-0.5 bg-[#1a1443]"></span>
      </div>
      <main className="flex relative justify-between max-sm:flex-wrap ">

      <div data-aos="fade-up"  className="w-[30%] max-sm:w-full">
        {/* <div className="absolute w-1/5 h-1/5 top-60 max-sm:top-30 left-5 inset-0 rounded-4xl bg-linear-to-r from-[#0000ff8c] via-[#80008080] to-[#0011ff87] blur-2xl"></div> */}
        <img className="movebin absolute top-18 max-sm:top-50" src={bin} alt="" />
        <div className="w-full movelaptop absolute top-20 max-sm:top-50 cursor-wait">
          <img className=" absolute top-0" src={laptop} alt="" />
          <img className="jump absolute top-8 left-33" src={boards} alt="" />
          <img className="jump absolute top-12 left-36" src={board} alt="" />
        </div>
      </div>
      <div className="w-[60%] max-sm:w-full max-sm:pt-120 overflow-hidden">
        <Qualification />
      </div>
      </main>
    </>
  );
};

export default Education;
