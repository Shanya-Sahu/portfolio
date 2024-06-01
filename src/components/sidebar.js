import React, { useState } from "react";
import { Link } from "react-scroll";
import profile from "../assets/profile_img.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.webp";
import { RxCross2 } from "react-icons/rx";
import { HiMiniBars3 } from "react-icons/hi2";

function Sidebar() {
  const githubUrl = "https://github.com/Shanya-Sahu";
  const linkedinUrl = "https://www.linkedin.com/in/shanya-sahu-web-developer/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    console.log("Toggling menu");
    setIsMenuOpen(!isMenuOpen);
    console.log("isMenuOpen:", isMenuOpen); // Log the state after toggling
  };

  return (
    <div className="relative">
      <div className="absolute top-6 right-6 xl:hidden z-50">
        {isMenuOpen ? (
          <RxCross2
            className="text-3xl cursor-pointer"
            onClick={menuToggleHandler}
          />
        ) : (
          <HiMiniBars3
            className="text-3xl cursor-pointer"
            onClick={menuToggleHandler}
          />
        )}
      </div>
      <aside
        className={`fixed top-0 z-10 bg-white w-[40%] sm:w-[30%] md:w-[15%] lg:w-[10%] min-h-full border-r-4 border-pink-500 flex justify-start items-center flex-col py-5 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0`}
      >
        <Link to="heroSec" smooth={true} duration={500}>
          <img
            src={profile}
            alt="profileimage"
            className="w-16 h-16 xl:w-24 xl:h-24 rounded-full object-cover cursor-pointer"
          />
        </Link>

        {/* Tab Menu */}
        <div className="tabmenu pt-10 w-full px-5">
          <div className="w-full py-5 text-center border-b border-gray-200 rounded-lg bg-white cursor-pointer transition-colors hover:bg-red-100">
            <Link to="about" smooth={true} duration={500}>
              <div>
                <i className="fi fi-rr-poll-h text-2xl text-pink-500"></i>
                <p className="text-sm">About</p>
              </div>
            </Link>
          </div>

          <div className="w-full py-5 text-center border-b border-gray-200 bg-white rounded-lg cursor-pointer transition-colors hover:bg-blue-100">
            <Link to="experience" smooth={true} duration={500}>
              <div>
                <i className="fi fi-rr-calendar-clock text-2xl text-[var(--pri-heading)]"></i>
                <p className="text-sm">Experience</p>
              </div>
            </Link>
          </div>
          <div className="w-full py-5 text-center border-b border-gray-200 bg-white rounded-lg cursor-pointer transition-colors hover:bg-yellow-100">
            <Link to="skills" smooth={true} duration={500}>
              <div>
                <i className="fi fi-rr-display-code text-2xl text-yellow-500"></i>
                <p className="text-sm">Skills</p>
              </div>
            </Link>
          </div>
          <div className="w-full py-5 text-center border-b border-gray-200 bg-white rounded-lg cursor-pointer transition-colors hover:bg-orange-100">
            <Link to="projects" smooth={true} duration={500}>
              <div>
                <i className="fi fi-rr-briefcase text-2xl text-orange-500"></i>
                <p className="text-sm">Projects</p>
              </div>
            </Link>
          </div>
          <div className="w-full py-5 text-center border-b border-gray-200 bg-white rounded-lg cursor-pointer transition-colors hover:bg-blue-100">
            <Link to="contact" smooth={true} duration={500}>
              <div>
                <i className="fi fi-rr-phone-call text-2xl text-blue-500"></i>
                <p className="text-sm">Contact</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-5 text-center">
          <p className="text-sm">Follow</p>
          <div className="flex justify-start items-center">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={github}
                alt="github"
                className="w-5 h-5 object-contain m-2"
              />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={linkedin}
                alt="linkedin"
                className="w-5 h-5 object-contain m-2"
              />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
