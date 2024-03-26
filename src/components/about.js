import React from "react";
import profile from "../assets/profile_img.jpg";

function about() {
  return (
    <div className="ml-[12%] h-full flex justify-center items-center p-[100px] mr-[5%]">
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
         <h3 className="font-semibold text-2xl uppercase">I'm In The Web Development Feild With 1.5 Years Of Experience.
</h3>
        <br />
        <p>
          Hi, I'm Shanya Sahu, a passionate web developer currently employed at
          Creatus Media. Learning the MERN stack, I strive for excellence in
          crafting dynamic and efficient web solutions. With a strong command of
          WordPress and experience in Shopify, I bring versatility to my work.
          Eager to explore new opportunities that challenge and elevate my
          skills in the MERN stack, I am committed to continuous learning and
          growth in the ever-evolving field of web development.
        </p>

        <br />
        <h4 className="text-xl text-[var(--pri-heading)] font-medium">
          Shanya Sahu
        </h4>
        <p className="text-sm">Web Developer</p>

        <div className="flex">
          <button className="mr-4 mt-6 float-left py-5 px-14 shadow-lg rounded-full bg-[var(--yellow)] text-white">
            Download CV
          </button>
          <button className="mr-4 mt-6 float-left py-5 px-14 shadow-lg rounded-full bg-[var(--pink)] text-white">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default about;
