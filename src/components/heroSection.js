import React, { useState, useEffect } from "react";
import bg from "../assets/banner_bg.png";
import profile from "../assets/profile_img.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.webp";
import { Link } from "react-scroll";

function HeroSection() {
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

  const githubUrl = "https://github.com/Shanya-Sahu";
  const linkedinUrl = "https://www.linkedin.com/in/shanya-sahu-web-developer/";

  function ChangingTypingEffect({ phrases, typingSpeed, switchDelay }) {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const currentPhrase = phrases[currentPhraseIndex];

    useEffect(() => {
      let timer;

      if (displayedText !== currentPhrase) {
        timer = setTimeout(() => {
          setDisplayedText(
            currentPhrase.substring(0, displayedText.length + 1)
          );
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setDisplayedText("");
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }, switchDelay);
      }

      return () => clearTimeout(timer);
    }, [
      currentPhrase,
      currentPhraseIndex,
      displayedText,
      phrases.length,
      switchDelay,
      typingSpeed,
    ]);

    return <h2 className="text-2xl">{displayedText}</h2>;
  }

  const phrases = [
    "Frontend Web Developer",
    "MERN Stack Developer",
    "WordPress Developer",
  ];

  return (
    <div className="ml-[10%]" id="heroSec">
      <section className="relative hero">
        {/* <video
          src={bg}
          className="w-full h-[100vh] object-cover"
          autoPlay
          loop
          muted
        /> */}
        <img
          src={bg}
          alt=""
          className="w-full h-[110vh] object-cover animate-move-up"
        />
        <div className="absolute top-0 pl-20 w-full h-full flex justify-center items-center">
          <div className="w-[40%] flex justify-center items-start flex-col pt-20">
            <h3 className="text-3xl leading-10 bg-highlight w-full font-semibold">
              Hello!
            </h3>
            <h1 className="text-6xl font-bold leading-tight">
              I'm Shanya Sahu
            </h1>
            <div className="border-l-4 border-[var(--yellow)] pl-3 ">
              {/* <h2 className="text-2xl">Web | WordPress | Shopify Developer</h2> */}
              <ChangingTypingEffect
                phrases={phrases}
                typingSpeed={100} // Adjust typing speed in milliseconds
                switchDelay={1000} // Adjust delay between switches in milliseconds
              />
            </div>
            <div className="flex justify-start items-center mt-4">
              <a href={githubUrl} target="_blank">
                <img
                  src={github}
                  alt="github"
                  className="w-[30px] h-[30px] object-contain m-1"
                />
              </a>
              <a href={linkedinUrl} target="_blank">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-[31px] h-[31px] object-contain m-1"
                />
              </a>
            </div>
            <div className="flex">
              <button
                onClick={handleDownload}
                className="mr-4 mt-6 float-left py-5 px-14 shadow-lg rounded-full bg-[var(--yellow)] text-white"
              >
                Download Resume
              </button>
              <Link to="contact" smooth={true} duration={500}>
                <button
                  className="mr-4 mt-6 float-left py-5 px-14 shadow-lg
                rounded-full bg-[var(--pink)] text-white"
                >
                  {" "}
                  Send Message
                </button>
              </Link>
            </div>

            <Link to="contact" smooth={true} duration={500}>
              <button className="mr-4 mt-8 absolute bottom-[100px] right-10 py-5 px-14 shadow-lg rounded-full bg-[var(--orange)] text-white">
                Hire Me
              </button>
            </Link>
          </div>

          <div className="w-[60%] flex justify-center items-end animate-move-up mr-5">
            <img
              src={profile}
              alt="profile_image"
              className="object-cover w-[500px] h-[500px] rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
