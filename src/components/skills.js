import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/javascript.png";
import Scss from "../assets/scss.png";
import Typescript from "../assets/typescript.png";
import ReactJS from "../assets/react.png";
import Node from "../assets/node.png";
import Express from "../assets/expressjs.png";
import MongoDb from "../assets/mongodb.png";
import NextJS from "../assets/nestjs.png";
import Firebase from "../assets/firebase.png";
import Wordpress from "../assets/wordpress.png";
import Shopify from "../assets/shopify.png";
import Tailwind from "../assets/tailwind.webp";
import PostgreSQL from "../assets/postgresql.png";

const skills = [
  { name: "HTML", level: "99%", icon: Html },
  { name: "CSS", level: "95%", icon: Css },
  { name: "JavaScript", level: "90%", icon: Js },
  { name: "SCSS", level: "90%", icon: Scss },
  { name: "Tailwind CSS", level: "95%", icon: Tailwind },
  { name: "TypeScript", level: "85%", icon: Typescript },
  { name: "ReactJS", level: "80%", icon: ReactJS },
  { name: "NextJS", level: "70%", icon: NextJS },
  { name: "ExpressJS", level: "60%", icon: Express },
  { name: "NodeJS", level: "50%", icon: Node },
  { name: "Firebase", level: "50%", icon: Firebase },
  { name: "MongoDB", level: "50%", icon: MongoDb },
  { name: "PostgreSQL", level: "50%", icon: PostgreSQL },
  { name: "WordPress", level: "90%", icon: Wordpress },
  { name: "Shopify", level: "30%", icon: Shopify },
];

const SkillBar = ({ skill }) => (
  <div>
    <div className="flex items-center mb-8 w-full lg:w-[90%]">
      <img
        src={skill.icon}
        alt={`${skill.name} icon`}
        className="w-7 h-7 mr-2 object-contain"
      />
      <div className="flex-1 mr-2">
        <div className="text-sm font-medium">{skill.name}</div>
        <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-200">
          <div
            className="bg-[var(--pink)] h-2 rounded-full"
            style={{ width: skill.level }}
          ></div>
        </div>
      </div>
      <span className="text-sm font-medium">{skill.level}</span>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mt-10">
      {skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
