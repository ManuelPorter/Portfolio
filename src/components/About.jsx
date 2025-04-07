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
      } mt-16 pt-6 pb-4 lg:mb-35 px-4 sm:px-6 lg:px-8`}
    >
    <div className="mt-32 max-w-7xl mx-auto">
    <h1
      className={`${
        theme === "dark" ? "text-neutral-300" : "text-gray-500"
      } text-xl lg:text-6xl text-center font-bold mb-12`}
    >
  About Me
    </h1>

    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
      {/* Text */}
      <p
        className={`${
          theme === "dark" ? "text-neutral-300" : "text-gray-700"
        } text-lg lg:text-2xl leading-relaxed max-w-xl text-center lg:text-left`}
      >
        {ABOUT_TEXT}
      </p>

      {/* Image */}
      <img
        className="w-48 h-48 lg:w-64 lg:h-64 rounded-sm object-cover"
        src={prof}
        alt="profile"
      />
    </div>
  </div>
</div>
  );
};

export default About

