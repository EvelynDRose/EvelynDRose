import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experiences";
import Education from "./components/Education";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors">
      <Navbar dark={dark} setDark={setDark} />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}