import React from 'react';
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
        {/* Theme Toggle */}
        {theme === "dark" ? (
            <CiLight
              onClick={toggleTheme}
              className="text-3xl cursor-pointer text-white hover:text-gray-400"
              title="Switch to Light Mode"
            />
          ) : (
            <CiDark
              onClick={toggleTheme}
              className="text-3xl cursor-pointer text-white hover:text-gray-400"
              title="Switch to Dark Mode"
            />
          )}
        </div>
  
        {/* Center: Logo */}
        <div id="logo" className="absolute left-1/2 -translate-x-1/2">
          <img className="h-10 w-14" src={logo} alt="logo" />
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
