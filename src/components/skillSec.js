import React from "react";
import Skills from "./skills";

const SkillSec = () => {
  return (
    <div id="skills" className="py-10">
      <section className="pl-[15%] pr-[6%] my-10">
        <h4 className="text-sm text-[var(--pri-heading)] font-medium text-center">
          Skills
        </h4>
        <h3 className="font-semibold text-2xl text-center uppercase">
          {" "}
          I'm good at!
        </h3>
        <Skills />
      </section>
    </div>
  );
};

export default SkillSec;
