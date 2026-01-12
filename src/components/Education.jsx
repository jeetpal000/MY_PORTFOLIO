import laptop from "../assets/laptop.png"
import bin from "../assets/bin.png"
import board from "../assets/board.png"
import boards from "../assets/boards.png"
import Qualification from "./Qualification.jsx";


const Education = () => {
  return (
    <>
      <div className="flex items-center justify-center py-5">
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        <span className="bg-[#1a1443] w-fit p-2 px-5 text-2xl rounded-md drop-shadow-[0_0_20px_#1e1463]">
          Education
        </span>
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
      </div>
      <main className="flex relative justify-between">

      <div className="w-[30%]">
        <div className="absolute w-1/5 h-1/5 top-60 left-5 inset-0 rounded-4xl bg-linear-to-r from-[#0000ff8c] via-[#80008080] to-[#0011ff87] blur-2xl"></div>
        <img className="movebin absolute top-18" src={bin} alt="" />
        <div className="w-full movelaptop absolute top-20  cursor-wait">
          <img className=" absolute top-0" src={laptop} alt="" />
          <img className="jump absolute top-8 left-33" src={boards} alt="" />
          <img className="jump absolute top-12 left-36" src={board} alt="" />
        </div>
      </div>
      <div className="w-[60%] ">
        <Qualification />
      </div>
      </main>
    </>
  );
};

export default Education;
