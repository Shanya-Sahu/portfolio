import React from "react";

function GoodAt() {
  return (
    <div>
      <section className="pl-[15%] w-full p-20 bg-[--yellow] flex justify-evenly items-center text-white">
        <div className="flex justify-center items-center flex-col">
          <div className="circle w-[200px] h-[200px] border-8 rounded-full flex justify-center items-center TEAM WORK">
            <h3 className="text-4xl">80%</h3>
          </div>
          <h4 className="text-lg font-semibold mt-5">TEAM WORK</h4>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="circle w-[200px] h-[200px] border-8 rounded-full flex justify-center items-center TEAM WORK">
            <h3 className="text-4xl">90%</h3>
          </div>
          <h4 className="text-lg font-semibold mt-5">COMMUNICATION</h4>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className="circle w-[200px] h-[200px] border-8 rounded-full flex justify-center items-center TEAM WORK">
            <h3 className="text-4xl">70%</h3>
          </div>
          <h4 className="text-lg font-semibold mt-5">PROJECTS</h4>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className="circle w-[200px] h-[200px] border-8 rounded-full flex justify-center items-center TEAM WORK">
            <h3 className="text-4xl">100%</h3>
          </div>
          <h4 className="text-lg font-semibold mt-5">HAPPY CLIENTS</h4>
        </div>
      </section>
    </div>
  );
}

export default GoodAt;
