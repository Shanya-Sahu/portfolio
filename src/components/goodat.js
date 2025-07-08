import React from "react";

function GoodAt() {
  return (
    <div>
      <section className="pl-[60px] md:pl-[50px] xl:pl-[15%] p-16 lg:p-20 bg-[--yellow] flex justify-evenly items-center flex-col md:flex-row text-white">
        <div className="flex justify-center items-center flex-col p-2">
          <div className="circle w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border-8 rounded-full flex justify-center items-center TEAM WORK">
            <h3 className="text-2xl lg:text-4xl">90%</h3>
          </div>
          <h4 className="text-base lg:text-lg font-semibold mt-5">TEAM WORK</h4>
        </div>
        <div className="flex justify-center items-center flex-col m-2">
          <div className="circle w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border-8 rounded-full flex justify-center items-center TEAM WORK">
            <h3 className="text-2xl lg:text-4xl">90%</h3>
          </div>
          <h4 className="text-base lg:text-lg font-semibold pt-5">
            COMMUNICATION
          </h4>
        </div>

        <div className="flex justify-center items-center flex-col m-2">
          <div className="circle w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border-8 rounded-full flex justify-center items-center TEAM WORK">
            <h3 className="text-2xl lg:text-4xl">80%</h3>
          </div>
          <h4 className="text-base lg:text-lg font-semibold pt-5">PROJECTS</h4>
        </div>

        <div className="flex justify-center items-center flex-col m-2">
          <div className="circle w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border-8 rounded-full flex justify-center items-center TEAM WORK">
            <h3 className="text-2xl lg:text-4xl">100%</h3>
          </div>
          <h4 className="text-base lg:text-lg font-semibold pt-5">
            HAPPY CLIENTS
          </h4>
        </div>
      </section>
    </div>
  );
}

export default GoodAt;
