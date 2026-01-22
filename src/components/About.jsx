import MyPhoto from "../assets/1766307864803~3.jpg";
import Tilt from 'react-parallax-tilt';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
    useEffect(()=>{
      AOS.init({
        duration: 1200,
        
      });
      AOS.refresh();
    }, [])
  return (
    <section className="relative p-2 flex flex-row justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:mt-10">
      <div  className=" absolute z-1 rotate-270 max-sm:rotate-0 -left-20 max-sm:left-5 top-[30%] max-sm:top-[-90px] flex items-center justify-center py-10 ">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit p-2 px-5 text-2xl max-sm:text-xl rounded-md drop-shadow-[0_0_20px_#1e1463]">ABOUT ME</span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      <div className=" w-1/2 p-3 flex items-start justify-center max-sm:order-2">
      <Tilt perspective={500}  className="transform-3d ">

        <div data-aos="fade-up" data-aos-offset="200" className="w-50 h-62.5 ml-20 border-2 border-blue-500 hover:border-pink-500 overflow-hidden translate-z-14 rounded-2xl shadow-[0_0_10px_0px_gray] duration-500 max-sm:ml-0">
          <img
            src={MyPhoto}
            alt="" title="Hey whats'up👋🏻"
            className="w-full he-full object-center object-cover transition-all duration-1000 ease-in-out filter grayscale-50 hover:scale-125 hover:grayscale-0"
            />
        </div>
            </Tilt>
      </div>
      <div data-aos="fade-up" data-aos-offset="200" className="w-1/2 p-3 max-sm:p-1 max-sm:order-1 max-sm:w-full">
        <h3 className="text-green-300 font-semibold pb-3 ">WHO I AM?</h3>
        <p className="leading-7 text-justify">
          My name is CHANDRAJEET PAL, and I am a passionate software developer
          who thrives on programming in my everyday life. With a strong
          self-learning mindset, I quickly adapt to new technologies and enjoy
          exploring innovative solutions. Problem-solving excites me, and I take
          pride in tackling challenges with creativity and dedication. <br />I
          work across diverse stacks of web application development, aiming to
          make the web more accessible and impactful. My primary expertise lies
          in JavaScript, and I prefer building most of my projects using it. I
          am open to opportunities that align with my skills and interests,
          where I can contribute effectively and continue to grow as a
          developer.
        </p>
      </div>
    </section>
  );
};

export default About;
