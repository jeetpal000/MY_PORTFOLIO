import Tilt from "react-parallax-tilt"
import {project} from '../Data/project.js'
import {FaGithub} from "react-icons/fa6"

const Project = () => {
  return (
    <>
    {
      project.map((item, index)=>(
        
        <Tilt key={index} className="w-90 cursor-pointer bg-gray-600 rounded-xl transform-3d p-5 shadow-[0_0_10px_0px_gray] duration-500" perspective={500} >  
  <div className="translate-z-14 p-4 hover:scale-110 duration-500">
    <h2 className="text-xl font-bold text-center pb-3">
      {item.name}
    </h2>
    <p className=" pb-3">{item.description}
    </p>
    <img
      src={item.img}
      alt=""
      loading="lazy"
      className="rounded-md shadow-[0_0_10px_2px_gray]" 
    />
    <div className="flex gap-2 mt-2">
      <a
      href={item.liveLink} target="_blank"
       className="flex flex-row items-center gap-1 justify-center bg-[#ff0000] px-3 py-1  text-white rounded-2xl hover:scale-110 transition-transform">

      Live
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </a>
      <a
      href={item.repoLink} target="_blank"
       className="flex flex-row items-center gap-1 justify-center bg-white text-zinc-950 px-3 py-1  rounded-2xl hover:scale-110 transition-transform">
        <FaGithub /> Github
      </a>
    
    </div>
  </div>
</Tilt>
))
}
</>
);
};

export default Project;
