import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaEye } from "react-icons/fa";

// const boxShadow = [
//     { boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }
//   ];
const projectdata = [
  {
    name: `Lenny | E-Commerce`,
    desc: "My newest e-commerce project blends cutting-edge tech with industry standards. A collaborative effort, I worked on both frontend and backend development.",
    src: "https://e-commerce-fullstack-nine.vercel.app/",
    techUse: "NextJS, Firebase, Hono, BunJS, Tailwind CSS",
    github: "https://github.com/RanjanKudesia/e-commerce-fullstack",
  },
  {
    name: `Kairaan'24`,
    desc: "This engaging collaborative project highlights my prowess in frontend development, showcasing creativity and expertise in Frontend",
    src: "https://kairaan.vercel.app/",
    techUse: "Tailwind CSS, NextJs, RestAPI",
    github: "https://github.com/RanjanKudesia/preyansh",
  },
  {
    name: "The Blogging Bee",
    desc: "A dynamic blog reading app powered by React, Tailwind, RestAPI, and global state management with React Context.",
    src: "https://the-blogging-bee.vercel.app/",
    techUse: "TailwindCSS, ReactJS, RestAPI",
    github: "https://github.com/Shanya-Sahu/the-blogging-bee",
  },
  {
    name: "Random Gif Generator",
    desc: "Indulge in the joy of spontaneity with this React-based application that creates random GIFs instantly for endless entertainment!",
    src: "https://random-gif-react.vercel.app/",
    techUse: "TailwindCSS, ReactJS, RestAPI",
    github: "https://github.com/Shanya-Sahu/random-gif",
  },
  {
    name: "Github User Data Scrapper",
    desc: "Explore a dynamic web application that leverages the GitHub API to fetch and display user profiles based on search queries.",
    src: "https://shanya-sahu.github.io/Github_User_Data_Scrapper/",
    techUse: "Html5, Tailwind CSS, Javascript",
    github: "https://github.com/Shanya-Sahu/Github_User_Data_Scrapper",
  },
  {
    name: "Tic Tac Toe",
    desc: "Experience classic fun with this Tic Tac Toe game crafted using HTML5, Tailwind CSS, and JavaScript for a sleek and engaging gameplay.",
    src: "https://shanya-sahu.github.io/tic-tac-toe/",
    techUse: "Html5, Tailwind CSS, Javascript",
    github: "https://github.com/Shanya-Sahu/tic-tac-toe",
  },
];

const Projects = ({ project }) => (
  <div className="project-card bg-gray-100 p-7 shadow-md rounded-lg hover:bg-gray-50 hover:border-2 hover:border-[var(--pri-heading)]">
    <h2 className="text-xl font-bold uppercase">{project.name}</h2>
    <p className="text-sm font-semibold py-2">{project.techUse}</p>
    <p className="text-sm">{project.desc}</p>
    <div className="flex justify-between items-center mt-5">
      <a href={project.src} target="_blank">
        <FaEye className="hover:text-[var(--pri-heading)] text-xl" />
      </a>
      <a href={project.github} target="_blank">
        <IoLogoGithub className="hover:text-[var(--pri-heading)] text-xl" />
      </a>
    </div>
  </div>
);

const ProjectSec = () => {
  return (
    <div className="p-4 w-full pl-[15%] pr-[6%] py-20" id="projects">
      <h4 className="text-sm text-[var(--pri-heading)] font-medium text-center">
        Projects
      </h4>
      <h3 className="font-semibold text-2xl text-center uppercase">
        My Latest Works
      </h3>
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {projectdata.map((project, index) => (
          <div key={index}>
            <Projects project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSec;
