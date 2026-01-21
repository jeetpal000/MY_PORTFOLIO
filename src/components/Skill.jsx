import SkillCart from "./SkillCart"
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  return (
    <div className=" relative w-full mx-auto py-0">
        <div className=" w-full h-1 bg-linear-to-r multi-gradient"></div>
        <div className="absolute top-3 left-[30%] w-75 h-50 bg-violet-600 rounded-full translate-x-1/2 filter blur-3xl opacity-10"></div>
        <div data-aos="slide-left"  className="flex items-center justify-center py-10">
            <span className="w-24 h-0.5 bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit p-2 px-5 text-2xl rounded-md drop-shadow-[0_0_20px_#1e1463]">Skill</span>
            <span className="w-24 h-0.5 bg-[#1a1443]"></span>
        </div>
        <div className="flex items-center justify-center overflow-hidden max-sm:py-5 py-10 px-1">
            <SkillCart />
        </div>
    </div>
  )
}

export default Skill