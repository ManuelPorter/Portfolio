import { ABOUT_TEXT } from "../constants";
import prof from "../assets/profile1.jpg";
import React, { useState, useEffect, useRef } from "react";

const About = ({theme}) => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!aboutRef.current) return;
  
        const rect = aboutRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
        if (rect.top < windowHeight && rect.bottom >= 0) {
          setIsVisible(true); // Show when in view
        } else {
          setIsVisible(false); // Hide when out of view
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check visibility on load
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div
        ref={aboutRef}
      id="aboutSection"
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }  mt-16 pt-6 pb-4 lg:mb-35`}
    >
      <div className="mt-60">
        <h1 className={`${theme === 'dark' ? "text-neutral-100" : "text-gray-500" } -mb-32 text-1xl lg:text-6xl px-12 mx-80`}>
          About Me
        </h1>
        {/* Flex container */}
        <div className="flex flex-wrap items-center justify-center gap-6 px-5 mt-1">
          {/* Text */}
          <p className={`${theme === 'dark' ? "text-neutral-300" : "text-gray-500"} text-1xl lg:text-2xl w-full lg:w-2/3`}>
            {ABOUT_TEXT}
          </p>
          {/* Image */}
          <img
            className="w-1/3 max-w-xs h-auto rounded-sm "
            src={prof}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default About

