import React from "react";
import experience from "../data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

        <div className="space-y-6">
          {experience.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 shadow hover:scale-[1.01] transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{job.company} • {job.location}</p>
                </div>
                <div className="text-sm text-gray-500">{job.start} — {job.end}</div>
              </div>
              <ul className="mt-3 list-disc ml-5 text-gray-700 dark:text-gray-300">
                {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
