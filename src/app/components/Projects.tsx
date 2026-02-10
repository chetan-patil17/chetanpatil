"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Employee Management System",
    description:
      "Full-stack system built with Spring Boot, MySQL, REST APIs, and a responsive frontend. Supports complete CRUD operations and API testing with Postman.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API", "HTML", "CSS", "JS"],
    github: "https://github.com/chetan-patil17/Employee_Service",
  },
  {
    title: "Online File Sharing System",
    description:
      "Secure file upload and download platform using Node.js, Express, and MySQL with authentication and role-based access.",
    tech: ["Node.js", "Express", "MySQL", "HTML", "CSS", "JS"],
    github: "https://github.com/chetan-patil17/filesharing",
  },
  {
    title: "Safe City Labelling System",
    description:
      "City safety data management system with Java, Spring Boot, MySQL, and a GUI built using AWT & Swing.",
    tech: ["Java", "Spring Boot", "MySQL", "AWT", "Swing"],
    github: "#", // placeholder link, button will still appear
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto text-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                >
                  View on GitHub
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
