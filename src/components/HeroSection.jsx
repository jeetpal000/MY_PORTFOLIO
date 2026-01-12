import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHackerrank } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="mt-30 flex justify-between items-center p-5">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-14">
          Hello,
          <br />
          This is{" "}
          <span className="text-[#F6339A]"> CHANDRAJEET PAL</span>,
          {/* <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            <Typewriter
              words={["CHANDRAJEET"]}
              loop={true}
              cursor
              cursorStyle={<span style={{ color: "#fff" }}>|</span>}
              typeSpeed={200}
              deleteSpeed={170}
              delaySpeed={3000}
            />
          </span> */}
          <br />
          I'm a Professional
          <br />
          <span className="text-[#16F2A5]">Full Stack Software Developer</span>.
        </h1>

        <nav className="mt-8 flex gap-5">
          <FaGithub className=" cursor-pointer text-pink-500 text-4xl transform transition-transform duration-300 hover:scale-125" />
          <FaLinkedin className="cursor-pointer text-pink-500 text-4xl transform transition-transform duration-300 hover:scale-125" />
          <FaXTwitter className="cursor-pointer text-pink-500 text-4xl transform transition-transform duration-300 hover:scale-125" />
          <FaHackerrank className="cursor-pointer text-pink-500 text-4xl transform transition-transform duration-300 hover:scale-125" />
        </nav>
        <div class=" mt-8 flex items-center gap-3">
          <a
            class=" cursor-pointer p-px bg-linear-to-r to-pink-500 from-violet-600 p-1px rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            href="#contact"
          >
            <button class="cursor-pointer md:px-8  md:py-4 bg-[#11172d] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
              <span>Contact me</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM20 17H24V19H20V17ZM17 12H24V14H17V12ZM19 7H24V9H19V7Z"></path>
              </svg>
            </button>
          </a>
          <a
            class=" cursor-pointer flex items-center gap-1 hover:gap-3 rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
            target="_blank"
            href="https://drive.google.com/file/d/1HAM5DGjREbGPh5_DiyE-U2Y_4J5o3Zop/view?usp=sharing"
          >
            <span>Get Resume</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="w-1/2 rounded-md border-[0.1px] border-[#141847]">
        <div className=" w-full h-px bg-linear-to-l multi-gradient"></div>
        <div class="bg-[#101828be] text-white rounded-lg w-full">
          <div className="flex gap-2 p-3">
            <p className="p-1.5 bg-amber-700 rounded-full"></p>
            <p className="p-1.5 bg-amber-500 rounded-full"></p>
            <p className="p-1.5 bg-blue-300 rounded-full"></p>
          </div>
          <div className=" w-full h-px bg-blue-800"></div>
          <div className="p-3">
            <code className="text-gray-400">
              <p className="">
                <span className="text-pink-500">const</span>{" "}
                <span className="text-amber-50">coder</span>{" "}
                <span className="text-pink-500">=</span>{" "}
                <span className="text-gray-400">{"{"}</span>
              </p>
              <p className="pl-6">
                <span className="text-amber-50">name: </span>'
                <span className="text-amber-400">Chandrajeet Pal</span>',
              </p>
              <p className="pl-6">
                <span className="text-amber-50">skills: </span> {"["}'
                <span className="text-amber-400">React</span>', '
                <span className="text-amber-400">NextJS</span>', '
                <span className="text-amber-400">Redux</span>', '
                <span className="text-amber-400">Tanstack </span>', '
                <span className="text-amber-400">Express</span>', '
                <span className="text-amber-400">MongoDB</span>', '
                <span className="text-amber-400">MySql</span>'{"]"},
              </p>
              <p className="pl-6">
                <span className="text-amber-50">hardWorker: </span>{" "}
                <span className="text-amber-600">true</span>,
              </p>
              <p className="pl-6">
                <span className="text-amber-50">quickLearner: </span>{" "}
                <span className="text-amber-600">true</span>,
              </p>
              <p className="pl-6">
                <span className="text-amber-50">probelSolver: </span>{" "}
                <span className="text-amber-600">true</span>,
              </p>
              <p className="pl-6">
                <span className="text-green-500">hirable: </span>{" "}
                <span className="text-amber-600">function</span>() {"{"}
              </p>
              <p className="pl-12">
                <span className="text-amber-600">return</span> {"("}
              </p>
              <p className="pl-16">
                <span className="text-sky-400">this.</span>
                <span className="text-amber-50">hardWorker </span>
                <span className="text-amber-400">&&</span>
              </p>
              <p className="pl-16">
                <span className="text-sky-400">this.</span>
                <span className="text-amber-50">probelSolver </span>
                <span className="text-amber-400">&&</span>
              </p>
              <p className="pl-16">
                <span className="text-sky-400">this.</span>
                <span className="text-amber-50">skill.length </span>
                <span className="text-amber-400"> {">="} </span>
                <span className="text-amber-600">5</span>
              </p>
              <p className="pl-12">{")"};</p>
              <p className="pl-6">{"}"};</p>
              <p className="">{"}"};</p>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
