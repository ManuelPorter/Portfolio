import { HERO_CONTENT } from "../constants";
import about from "../assets/about.jpg";
import PropTypes from 'prop-types';

const Hero = ({ theme }) => {
  return (
    <div className="mt-16 pt-6 pb-10 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col items-center text-center">
        <h1
          className={`${
            theme === "dark" ? "text-neutral-300" : "text-gray-600"
          } pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-Manrope-bold tracking-tight`}
        >
          Manuel Porter
        </h1>

        <span
          className={`${
            theme === "dark"
              ? "bg-gradient-to-r from-blue-500 via-slate-500 to-orange-400"
              : "bg-gradient-to-r from-blue-500 via-slate-500 to-orange-500"
          } bg-clip-text text-transparent text-xl sm:text-2xl lg:text-4xl tracking-tight mb-6`}
        >
          Full-Stack Java Developer
        </span>

        <img
          loading="lazy"
          className="mt-4 mb-6 rounded-full w-32 sm:w-40 md:w-48 lg:w-56 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          src={about}
          alt="Profile photo of Manuel Porter"
        />

        <p
          className={`${
            theme === "dark" ? "text-neutral-300" : "text-gray-600"
          } text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl`}
        >
          {HERO_CONTENT}
        </p>
      </div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  theme: PropTypes.string,
};