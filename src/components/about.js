import React from "react";
import profile from "../assets/profile_img.jpg";
import { Link } from "react-scroll";

function About() {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    // Set the href attribute to the path of your resume file
    link.href = "../assets/shanya-resume.pdf";
    // Set the download attribute to specify the file name
    link.download = "Shanya_Sahu_Resume.pdf";
    // Simulate a click event to trigger the download
    link.click();
  };

  return (
    <div
      className="ml-[12%] h-full flex justify-center items-center p-[100px] mr-[5%]"
      id="about"
    >
      <div className="w-[45%]">
        <div className="flex justify-center items-start flex-col border-4 border-[var(--pink)] py-5 m-10">
          <img
            src={profile}
            alt="profile_image"
            className="-mt-16 ml-5 object-cover w-full "
          />
        </div>
      </div>
      <div className="w-[55%] h-full flex justify-center items-start flex-col pl-5">
        <h4 className="text-sm text-[var(--pri-heading)] font-medium">
          About Me
        </h4>
        <h3 className="font-semibold text-2xl uppercase">
          Crafting Dynamic Web Solutions with Passion and Expertise
        </h3>
        <br />
        <p>
          {/* Hi, I'm Shanya Sahu, a passionate web developer currently employed at
          Creatus Media. Learning the MERN stack, I strive for excellence in
          crafting dynamic and efficient web solutions. With a strong command of
          WordPress and experience in Shopify, I bring versatility to my work.
          Eager to explore new opportunities that challenge and elevate my
          skills in the MERN stack, I am committed to continuous learning and
          growth in the ever-evolving field of web development. */}
          Hi, I'm Shanya Sahu, a passionate web developer currently employed at
          Creatus Media. I'm currently leveling up my skills with Next.js,
          striving for excellence in crafting dynamic and efficient web
          solutions. I also know the MERN stack and have experience in WordPress
          and Shopify, bringing versatility to my work. Eager to explore new
          opportunities that challenge and elevate my skills, I am committed to
          continuous learning and growth in the ever-evolving field of web
          development.
        </p>

        <br />
        <h4 className="text-xl text-[var(--pri-heading)] font-medium">
          Shanya Sahu
        </h4>
        <p className="text-sm">Full Stack Developer</p>

        <div className="flex">
          <button
            onClick={handleDownload}
            className="mr-4 mt-6 float-left py-5 px-14 shadow-lg rounded-full bg-[var(--yellow)] text-white"
          >
            Download Resume
          </button>
          <Link to="contact" smooth={true} duration={500}>
            <button className="mr-4 mt-6 float-left py-5 px-14 shadow-lg rounded-full bg-[var(--pink)] text-white">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;