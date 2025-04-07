import { HERO_CONTENT } from "../constants";
import about from "../assets/about.jpg";

const Hero = ({ theme }) => {
  return (
    <div className=" mt-16 pt-6 pb-4 lg:mb-35 justify-center">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center z-1">
            <h1
              className={`${
                theme === "dark" ? "text-neutral-300" : "text-gray-600"
              } pb-5 text-4xl font-Manrope-bold tracking-tight lg:mt-2 lg:text-7xl`}
            >
              Manuel Porter
            </h1>
            <span className={`${theme === "dark" ? "bg-gradient-to-r from-blue-500 via-slate-500 to-slate-300" : "bg-gradient-to-r from-blue-500 via-slate-500 to-slate-700"} bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent`}>
              React Developer
            </span>
            <img
          className="mt-5 rounded-full mx-auto w-1/4 h-auto justify-center items-center 
                    transition-all duration-300 cursor-pointer filter grayscale 
                    hover:grayscale-0"
          src={about}
          alt="about"
        />
          </div>
        </div>
        
        <p className={`${
                theme === "dark" ? "text-neutral-300" : "text-gray-600"
              } pt-5 pb-6 mt-3 mx-24 text-1xl text-center font-Manrope-bold tracking-tight lg:mt-6 lg:text-1xl`}>
          {HERO_CONTENT}
        </p>
      </div>
    </div>
  );
};

export default Hero;