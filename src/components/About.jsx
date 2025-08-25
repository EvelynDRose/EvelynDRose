import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm a software developer and researcher focusing on reinforcement learning, robotics, and deploying ML systems.
            I love building reproducible experiments, clean interfaces, and scalable tools for research and production.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Experience in Python, JavaScript, and full-stack development; papers and conference presentations on RL.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <img src="/profile.jpg" alt="Profile" className="w-48 h-48 rounded-lg object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
