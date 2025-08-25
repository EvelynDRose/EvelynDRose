import React from "react";
import publications from "../data/publications";
import { motion } from "framer-motion";

export default function Publications() {
  return (
    <section id="publications" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Publications & Research</h2>
        <div className="space-y-4">
          {publications.map((p, idx) => (
            <motion.a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="block p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:scale-[1.01] transition shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-500">{p.venue} • {p.year}</p>
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400">View →</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
