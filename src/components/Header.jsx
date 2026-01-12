import { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [activeNav, setActiveNav] = useState("");
  const navItems = [
    { id: "/", label: "ABOUT", type: 'route' },
    { id: "/projects", label: "PROJECTS", type: "route" },
    { id: "#education", label: "EDUCATION", type: 'anchor' },
    { id: "#contact", label: "CONTACT", type: "anchor" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-auto  backdrop-blur-md">
      {/* <div className="text-5xl font-extrabold tracking-widest flex items-center gap-2">
        <a href="" className="flex items-center gap-1">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-110 transition-transform duration-300">J</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-500 via-green-500 to-blue-500 hover:scale-110 transition-transform duration-300">E</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition-transform duration-300">E</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-indigo-500 to-cyan-500 hover:scale-110 transition-transform duration-300">T</span>
            <span className="mt-2 text-3xl animate-bounce">✌🏻</span>
        </a>
    </div> */}
      <div className="bg-[#2c255178] shadow-2xl max-w-360 mx-auto flex justify-between items-center">
        <div className="py-2 px-4 text-5xl font-[900] font-agbalumo">
          <NavLink to="/" className="relative inline-block">
            <span
              className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
                     bg-[length:200%_200%] bg-clip-text text-transparent 
                     animate-shimmer opacity-70"
            >
              JEET
            </span>
          </NavLink>
        </div>

        <nav className="py-2 px-4">
          {" "}
          <ul className="flex gap-7">
            {" "}
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                {" "}
                {item.type === 'route'? (
                  <NavLink
                    to={item.id}
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
                  </NavLink>
                ):
                (
                  <a
                    href={item.id}
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
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* <nav className="py-6 px-4">
          <ul className=" flex gap-7">
            <li className="relative group">
              <NavLink
                to="#about"
                className={({ isActive }) =>
                  `font-semibold relative group ${
                    isActive
                      ? "text-[#f36cffce] after:block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-[#f36cffce]"
                      : ""
                  }`
                }
              >
                ABOUT
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#f36cffce] transition-all duration-400 group-hover:w-full"></span>
              </NavLink>
            </li>

            <li className="relative group">
              <a
                href=""
                className="font-semibold hover:text-[#f36cffce] transition-colors duration-300"
              >
                PROJECTS
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#f36cffce] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="#education"
                className="font-semibold hover:text-[#f36cffce] transition-colors duration-300"
              >
                EDUCATION
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#f36cffce] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="#contact"
                className="font-semibold hover:text-[#f36cffce] transition-colors duration-300"
              >
                CONTACT
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#f36cffce] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
