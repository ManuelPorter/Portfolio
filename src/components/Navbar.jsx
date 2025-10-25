import PropTypes from 'prop-types';
import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const Navbar = ({ toggleTheme, theme }) => {
    return (
      <nav className="w-full fixed top-0 left-0 bg-slate-950 outline-stone-500 mb-20 flex items-center justify-between py-4 px-6 border-b border-gray-700">
        {/* Left: Menu Icon */}
        <div id="menuAndToogle" className="flex items-center gap-4">
          <TiThMenuOutline className="text-3xl fill-white hover:fill-slate-400 cursor-pointer" />
        {/* Theme Toggle (accessible button) */}
        <button
          onClick={toggleTheme}
          className="text-3xl cursor-pointer text-white hover:text-gray-400 focus:outline-none"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'dark' ? <CiLight /> : <CiDark />}
        </button>
        </div>
  
        {/* Center: Logo */}
        <div id="logo" className="absolute left-1/2 -translate-x-1/2">
          <img loading="lazy" className="h-10 w-14" src={logo} alt="logo" />
        </div>
  
        {/* Left: Theme Toggle */}
        <div id="toog" className="flex items-center gap-8">
          
          </div>
            <div id="right-icons" className="flex items-center gap-4">
          {/* Social Icons */}
          <a
            href="https://www.linkedin.com/in/jmanrp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <FaLinkedin className="text-3xl fill-white hover:fill-slate-400" />
          </a>
          <a
            href="https://github.com/ManuelPorter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <FaGithub className="text-3xl fill-white hover:fill-slate-400" />
          </a>
          <a
            href="https://instagram.com/Manuporty"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <FaInstagram className="text-3xl fill-white hover:fill-slate-400" />
          </a>
        </div>
      </nav>
    );
  };
  

export default Navbar;

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string,
};
