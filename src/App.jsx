import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import { RedSvg } from "./components/anim/redSvg";
import { ReaSvg } from "./components/anim/reaSvg";
import { JavSvg } from "./components/anim/javSvg";
import { SprSvg } from "./components/anim/sprSvg";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen z-[-1] ${
          theme === "dark"
            ? "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
            : "bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        }`}
      ></div>

      {/* Navbar and Content */}
      <div className="absolute z-10">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div className="w-full">
        <Hero theme={theme} />
      </div>
      <About theme={theme} />

      <div>
      <Technologies theme={theme}/>
      <div className="flex justify-center flex-wrap items-center">
      <ReaSvg width={150} height={150} />
      <RedSvg width={150} height={150} />
      <JavSvg width={150} height={150} />
      <SprSvg width={150} height={150} />
      
      </div>
      </div>
      <div >
      <Experience theme={theme} />
      </div>
    </div>
  );
};

export default App;