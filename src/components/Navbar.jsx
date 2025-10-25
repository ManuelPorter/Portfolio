import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const Navbar = ({ toggleTheme, theme }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {
      const onKey = (e) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      const onResize = () => {
        if (window.innerWidth >= 768) setMenuOpen(false); // close mobile menu on larger screens
      };
      window.addEventListener('keydown', onKey);
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('keydown', onKey);
        window.removeEventListener('resize', onResize);
      };
    }, []);

    // Focus trap + body scroll lock for mobile menu
    useEffect(() => {
      if (!menuOpen) {
        document.body.style.overflow = '';
        return;
      }

      document.body.style.overflow = 'hidden';
      const container = menuRef.current;
      if (!container) return;

      const focusable = container.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (first) first.focus();

      const handleTab = (e) => {
        if (e.key !== 'Tab') return;
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      container.addEventListener('keydown', handleTab);
      return () => {
        container.removeEventListener('keydown', handleTab);
        document.body.style.overflow = '';
      };
    }, [menuOpen]);

    const scrollToId = (id) => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      setMenuOpen(false);
    };

    return (
      <nav className="w-full fixed top-0 left-0 bg-slate-950 outline-stone-500 mb-20 flex items-center justify-between py-4 px-6 border-b border-gray-700">
        {/* Left: Menu Icon */}
        {/* Adjusted left margin (moved a little left compared to previous) */}
        <div id="menuAndToogle" className="flex items-center gap-4 ml-1 sm:ml-2 md:ml-4 z-20">
          <button
            onClick={() => setMenuOpen((s) => !s)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="text-3xl z-20 text-white hover:text-gray-400"
          >
            <TiThMenuOutline className="w-6 h-6" />
          </button>
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
        {/* Mobile menu overlay (small screens) */}
        {menuOpen && (
          // Show overlay on all screen sizes so the burger menu works on desktop as well
          <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
            <div
              className={`${theme === 'dark' ? 'absolute inset-0 bg-black/40' : 'absolute inset-0 bg-white/40'}`}
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />
                <div ref={menuRef} className={`absolute top-16 left-2 w-64 rounded-md p-4 shadow-lg ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'}`}>
              <ul className="flex flex-col gap-3">
                <li>
                  <button
                        onClick={() => scrollToId('home')}
                        className={`w-full text-left px-2 py-2 rounded ${theme === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                        onClick={() => scrollToId('aboutSection')}
                        className={`w-full text-left px-2 py-2 rounded ${theme === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`}
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button
                        onClick={() => scrollToId('technologiesSection')}
                        className={`w-full text-left px-2 py-2 rounded ${theme === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`}
                  >
                    Technologies
                  </button>
                </li>
                <li>
                  <button
                        onClick={() => scrollToId('experienceSection')}
                        className={`w-full text-left px-2 py-2 rounded ${theme === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`}
                  >
                    Experience
                  </button>
                </li>
                <li>
                  {/* Projects placeholder - will link to a page later */}
                      <div
                        className={`w-full text-left px-2 py-2 rounded ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
                        aria-disabled="true"
                        title="Projects page coming soon"
                      >
                        Projects
                      </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    );
  };
  

export default Navbar;

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string,
};
