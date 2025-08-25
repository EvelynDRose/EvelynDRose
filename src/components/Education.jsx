import React from "react";
import education from "../data/education";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, idx) => (
            <motion.div
              key={ed.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow"
            >
              <h3 className="font-semibold">{ed.school}</h3>
              <p className="text-sm text-gray-500">{ed.degree} • {ed.date}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{ed.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
