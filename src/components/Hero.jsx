import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Evelyn Rose</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Software Developer & AI/ML Researcher
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="/Evelyn_Rose_Resume.pdf"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md transition"
              download
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl shadow-xl overflow-hidden bg-gradient-to-tr from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
