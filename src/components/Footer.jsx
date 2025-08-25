import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Evelyn Rose. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/EvelynDRose" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/evelyn-rose-466b441b6" target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}
