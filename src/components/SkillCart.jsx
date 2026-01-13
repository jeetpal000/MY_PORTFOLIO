
import { mySkills } from "../Data/skill.js";
import Tilt from "react-parallax-tilt"

const SkillCart = () => {

  return (
    <div
      className="flex flex-wrap gap-15 max-sm:gap-6 justify-center items-center w-full"
    >
      {mySkills.map((skill, index) => (
        <Tilt className="transform-3d " perspective={500}>

        <div
          key={index}
          className="max-sm:py-2 max-sm:px-4  relative translate-z-14 group py-4 px-6 flex gap-2 items-center justify-center border border-blue-500 hover:border-pink-500 rounded-full bg-[#0f0f2d] duration-200 hover:scale-110 opacity-100  cursor-pointer  hover:animate-pulse"
          >
         <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#80008080] via-[#ffc0cb69] to-[#0000ff8c] blur-xl opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
          <img className="w-13 h-13 max-sm:w-6 max-sm:h-6" src={skill.image} alt={skill.skill} />
          <h3 className="text-2xl max-sm:text-[14px] font-bold">{skill.skill}</h3>
        </div>
        </Tilt>
      ))}
    </div>
  );
};

export default SkillCart;
