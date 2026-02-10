"use client";

import { motion } from "framer-motion";

const skills = [
  "Java",
  "Spring Boot",
  "JavaScript",
  "HTML",
  "CSS",
  "MySQL",
  "SQL",
  "Python",
  "Node.js",
  "Express.js",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition"
            >
              <p className="font-semibold">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
