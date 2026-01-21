import { GrCertificate } from "react-icons/gr";
import { qualification } from "../Data/qualification";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Qualification = () => {
    useEffect(()=>{
    AOS.init({
      duration: 1200,
      
    });
    AOS.refresh();
  }, [])
  return (
    <>
      {qualification.map((qualification, type) => (
        <div data-aos="fade-up"
          key={type}
          className="relative hover:p-0.5 transition-all overflow-hidden duration-100 rounded-xl shimmerEffect my-4 max-sm:my-2 cursor-pointer"
        >
          <div className="relative rounded-xl bg-[#140234] py-4 px-7 max-sm:p-3 hover:drop-shadow-[0_0_40px_#1e1463]">
            <p className=" text-center text-xl max-sm:text-[16px] font-bold text-green-500">{qualification.year}</p>
            <div className="flex gap-10 max-sm:gap-8 items-center">
              <GrCertificate className="text-pink-500 text-5xl max-sm:text-4xl" />
              <div className="">
                <p className=" uppercase py-2 max-sm:py-1 text-[20px] max-sm:text-[16px]">{qualification.degree}</p>
                <p className=" uppercase max-sm:text-[14px]">{qualification.university}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Qualification;
