"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed"
        >
          I’m an IT undergraduate with a strong interest in software development and problem-solving. 
          I’ve worked on full-stack projects involving web technologies, backend development, and database systems. 
          My experience includes building secure applications, designing RESTful APIs, integrating front-end and backend systems, and contributing to testing and quality assurance.
        I’ve completed a web development training program where I worked on real project components, and I’ve built multiple academic and personal projects using Java, PHP, MySQL, Node.js, Express.js, and MongoDB. 
        I enjoy learning new technologies, improving system design, and creating applications that are simple, reliable, and user-focused.
        </motion.p>
      </div>
    </section>
  );
}
