import SkillCart from "./SkillCart"

const Skill = () => {
  return (
    <div className=" relative w-full mx-auto py-0">
        <div className=" w-full h-1 bg-linear-to-r multi-gradient"></div>
        <div className="absolute top-3 left-[30%] w-[300px] h-[200px] bg-violet-600 rounded-full translate-x-1/2 filter blur-3xl opacity-10"></div>
        <div className="flex items-center justify-center py-10">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit p-2 px-5 text-2xl rounded-md drop-shadow-[0_0_20px_#1e1463]">Skill</span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
        <div className="flex items-center justify-center overflow-hidden py-10">
            <SkillCart />
        </div>
    </div>
  )
}

export default Skill