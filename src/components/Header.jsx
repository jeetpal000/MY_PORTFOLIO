import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import {HashLink} from "react-router-hash-link"
import CopyrightPage from "../pages/CopyrightPage"

const Header = () => {
  const [activeNav, setActiveNav] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: "/", label: "ABOUT", type: 'route' },
    { id: "/projects", label: "PROJECTS", type: "route" },
    { id: "#education", label: "EDUCATION", type: 'anchor' },
    { id: "#contact", label: "CONTACT", type: "anchor" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-auto  backdrop-blur-md">
      <div className={`bg-[#2c255178] max-w-360 shadow-2xl  mx-auto flex justify-between items-center ${isOpen? "items-start w-[60%] mr-0 ": ""}`}>
        <div className="py-2 px-4 text-5xl font-black max-sm:py-0 max-sm:text-xl">
          <NavLink onClick={()=>setIsOpen(false)} to="/" className="relative inline-block">
            <span
              className={`bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
                     bg-[length:200%_200%] bg-clip-text text-transparent 
                     animate-shimmer opacity-70 ${isOpen? "hidden mr-0 ": ""}`}
            >
              JEET
            </span>
          </NavLink>
        </div>
        <nav className="py-2 px-4 max-sm:py-0 max-sm:relative">

      {isOpen ? (<button className="text-xl cursor-pointer hidden max-sm:block transition-all p-2 hover:bg-[#ffffff69] active:bg-[#ffffff69] rounded text-right max-sm:absolute max-sm:right-4 " onClick={()=>setIsOpen(!isOpen)} >❌</button>): (<button className="text-2xl hidden max-sm:block hover:bg-[#ffffff72] active:bg-[#ffffff69] rounded p-2 cursor-pointer" onClick={()=>setIsOpen(!isOpen)} >🟰</button>)}
      
          {" "}
          <ul className="flex gap-7 max-sm:hidden">
            {" "}
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                {" "}
                {item.type === 'route'? (
                  <NavLink
                    to={item.id}
                    onClick={() => {setActiveNav(item.id); setIsOpen(false)}}
                    className={`font-semibold transzition-colors duration-300 ${
                      activeNav === item.id ? "text-[#f36cffce]" : ""
                    }`}
                  >
                    {" "}
                    {item.label}{" "}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.75 bg-[#f36cffce] transition-all duration-300 ${
                        activeNav === item.id
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>{" "}
                  </NavLink>
                ):
                (
                  <HashLink
                    to={item.id}
                    smooth
                    onClick={() => setActiveNav(item.id)}
                    className={`font-semibold transition-colors duration-300 ${
                      activeNav === item.id ? "text-[#f36cffce]" : ""
                    }`}
                  >
                    {" "}
                    {item.label}{" "}
                    <span
                      className={`absolute left-0 -bottom-1 h-[3px] bg-[#f36cffce] transition-all duration-300 ${
                        activeNav === item.id
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>{" "}
                  </HashLink>
                )}
              </li>
            ))}
          </ul>
          {isOpen && 
           <ul className={`flex gap-2 flex-col h-screen transition-all duration-2000 mt-10`}>
            {" "}
            {navItems.map((item) => (
              <li key={item.id} className="relative group hover:bg-[#ffffff3a] rounded p-2">
                {" "}
                {item.type === 'route'? (
                  <NavLink
                    to={item.id}
                    onClick={() => {setActiveNav(item.id); setIsOpen(!isOpen  )}}
                    className={`font-semibold transzition-colors duration-300 ${
                      activeNav === item.id ? "text-[#f36cffce]" : ""
                    }`}
                  >
                    {" "}
                    {item.label}{" "}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.75 bg-[#f36cffce] transition-all duration-300 ${
                        activeNav === item.id
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>{" "}
                  </NavLink>
                ):
                (
                  <HashLink
                    to={item.id}
                    smooth
                    onClick={() => {setActiveNav(item.id); setIsOpen(!isOpen)}}
                    className={`font-semibold transition-colors duration-300 ${
                      activeNav === item.id ? "text-[#f36cffce]" : ""
                    }`}
                  >
                    {" "}
                    {item.label}{" "}
                    <span
                      className={`absolute left-0 -bottom-1 h-[3px] bg-[#f36cffce] transition-all duration-300 ${
                        activeNav === item.id
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>{" "}
                  </HashLink>
                  
                )}
              </li>
            ))}
            <div className="absolute bottom-25 right-20 whitespace-nowrap text-xs">
            <CopyrightPage />
            </div>
          </ul>
          }
        </nav>
      </div>
    </header>
  );
};

export default Header;
