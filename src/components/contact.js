import React from "react";
import location from "../assets/google-maps.png";
import contact from "../assets/phone.png";
import email from "../assets/email.png";

const Contact = () => {
  return (
    <div id="contact">
      <section className="px-10 lg:pl-[6%] xl:pl-[15%] lg:pr-[6%] pt-20">
        <h4 className="text-sm text-[var(--pri-heading)] font-medium text-center">
          Contact Me
        </h4>
        <h3 className="font-semibold text-2xl uppercase text-center">
          Get in touch
        </h3>

        {/* <div className="w-full lg:w-[70%] p-7 shadow-md rounded-md mx-auto mt-7">
          <form action="">
            <div className="flex flex-col md:flex-row">
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="First Name"
                className="w-full md:w-1/2 p-4 focus:outline-0 border-b-2 border-b-gray-400 bg-transparent mb-8 mx-2 placeholder:text-gray-400"
              />
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Last Name"
                className="w-full md:w-1/2 p-4 focus:outline-0 border-b-2 border-b-gray-400 bg-transparent mb-8 mx-2 placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full md:w-1/2 p-4 focus:outline-0 border-b-2 border-b-gray-400 bg-transparent mb-8 mx-2 placeholder:text-gray-400"
              />
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Contact Number"
                className="w-full md:w-1/2 p-4 focus:outline-0 border-b-2 border-b-gray-400 bg-transparent mb-8 mx-2 placeholder:text-gray-400"
              />
            </div>
            <textarea
              rows="5"
              name="message"
              id="messgae"
              placeholder="Message"
              className="w-full p-4 focus:outline-0 border-b-2 border-b-gray-400 bg-transparent mb-8 mx-2 placeholder:text-gray-400"
            />
            <button className="w-full md:w-fit py-5 px-20 shadow-lg rounded-full bg-[var(--pink)] text-white">
              Submit
            </button>
          </form>
        </div> */}

        <div className="p-0 lg:pl-[5%] lg:pr-[6%] mt-10 mb-20 flex justify-evenly items-center flex-col md:flex-row">
          <div className="flex justify-center items-center flex-col bg-gray-50 rounded-md shadow-md p-10 md:p-5 lg:p-10 w-full md:w-[30%] m-5 md:m-0">
            <img src={location} alt="location" className="h-10" />
            <h3 className="text-lg lg:text-xl font-bold my-1">Location</h3>
            <p className="text-sm lg:text-base text-center">
              Chhattisgarh, India
            </p>
          </div>

          <div className="flex justify-center items-center flex-col bg-gray-50 rounded-md shadow-md p-10 md:p-5 lg:p-10 w-full md:w-[30%] m-5 md:m-0">
            <img src={contact} alt="location" className="h-10" />
            <h3 className="text-lg lg:text-xl font-bold my-1">Contact Me</h3>
            <p className="text-sm lg:text-base text-center">+91 6266-060-475</p>
          </div>

          <div className="flex justify-center items-center flex-col bg-gray-50 rounded-md shadow-md p-10 md:p-5 lg:p-10 w-full md:w-[30%] m-5 md:m-0">
            <img src={email} alt="location" className="h-10" />
            <h3 className="text-lg lg:text-xl font-bold my-1">Email Me</h3>
            <p className="text-sm lg:text-base text-center">
              shanyasahu11@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
