import React from "react";
import projects from "../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="md:flex">
                <div className="md:w-48 h-44 md:h-auto overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 my-3">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-50 dark:hover:bg-gray-900 transition">
                        <FiGithub /> <span className="text-sm">Code</span>
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-50 dark:hover:bg-gray-900 transition">
                        <FiExternalLink /> <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
