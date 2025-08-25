import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ dark, setDark }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold tracking-wide">Evelyn Rose</a>
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm hover:text-blue-500 transition">
              {n.label}
            </a>
          ))}
          <DarkModeToggle dark={dark} setDark={setDark} />
        </nav>

        {/* mobile */}
        <div className="md:hidden flex items-center gap-3">
          <DarkModeToggle dark={dark} setDark={setDark} />
          <details className="relative">
            <summary className="cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">☰</summary>
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-lg">
              <ul className="flex flex-col p-2">
                {navItems.map((n) => (
                  <li key={n.id} className="py-1">
                    <a href={`#${n.id}`} className="block px-2 py-1 rounded hover:bg-gray-50 dark:hover:bg-gray-800">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}