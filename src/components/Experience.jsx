import { EXPERIENCES } from "../constants";
import tcs from "../assets/tcs.png";
import jabil from "../assets/jabil.png";
import kms from "../assets/kms.png";
import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

const Experience = ({theme}) => {
    const [isVisible, setIsVisible] = useState(false);
    const experienceRef = useRef(null);
  
    useEffect(() => {
      const node = experienceRef.current;
      if (!node) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsVisible(entry.isIntersecting);
          });
        },
        { threshold: 0.12 }
      );

      observer.observe(node);

      return () => {
        if (node) observer.unobserve(node);
        observer.disconnect();
      };
    }, []);

  return (
    <div
        ref={experienceRef}
      id="experienceSection"
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }  mt-16 pt-6 pb-4 lg:mb-35`}
    >
      <div className="mt-60">
        <h1 className={`${theme === 'dark' ? "text-neutral-100" : "text-gray-500" } mb-20 text-1xl lg:text-6xl text-center`}>
          Experience
        </h1>
        {/* Flex container */}
        <div className="flex flex-wrap items-center justify-center gap-6 px-5 mt-1">
          {/* Text */}
          <p className={`${theme === 'dark' ? "text-neutral-300" : "text-gray-500"} text-1xl lg:text-2xl w-full lg:w-2/3`}>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <p className="mb-4 mt-4 ">{experience.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-4 mt-4 font-semibold">
                            {experience.role} -{" "}
                            <span >
                                {experience.company}
                            </span>
                        </h6>
                        <p className="mb-4 mt-4 text-sm">
                            {experience.description}
                        </p>
                        {experience.technologies.map((tech, index) => (
                            <span
                            key={index}
                            className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-500"
                            >{tech}</span>
                        ))}
                    </div>
                    </div>
            ))}
          </p>
          
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
         <img
            loading="lazy"
            className="w-1/2 sm:w-1/3 max-w-xs h-auto"
            src={tcs}
            alt="tcs"
          />
          <img
            loading="lazy"
            className="w-1/2 sm:w-1/3 max-w-xs h-auto"
            src={jabil}
            alt="jabil"
          />
          <img
            loading="lazy"
            className="w-1/2 sm:w-1/3 max-w-xs h-auto"
            src={kms}
            alt="kms"
          />
        </div>
    </div>
  );
};

export default Experience

Experience.propTypes = {
  theme: PropTypes.string,
};