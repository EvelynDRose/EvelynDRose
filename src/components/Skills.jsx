import React from "react";
import skills from "../data/skills";
import { motion } from "framer-motion";

function Progress({ value }) {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
      <div
        className="h-2 rounded-full transition-all"
        style={{ width: `${value}%`, background: "linear-gradient(90deg,#2563eb,#7c3aed)" }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:scale-[1.02] transition"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{s.icon}</div>
                  <h3 className="font-semibold">{s.name}</h3>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{s.level}%</span>
              </div>
              <Progress value={s.level} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
