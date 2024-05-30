import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButtom = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Link to="heroSec" smooth={true} duration={500}>
          <IoIosArrowUp className="fixed bottom-4 right-4 cursor-pointer text-4xl bg-[var(--pri-heading)] text-white p-1 rounded-md" />
        </Link>
      )}
    </>
  );
};

export default ScrollToTopButtom;
