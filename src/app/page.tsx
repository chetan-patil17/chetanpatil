"use client";

import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <main className="min-h-screen pt-24 bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10 px-6"
        >
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I’m <span className="text-blue-500">Chetan Patil</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              IT Student | Java & Spring Boot | Full-Stack Developer
            </p>

            {/* Download Resume Button */}
            <a
              href="/Chetan Resume.pdf"
              download
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full"
            >
              Download Resume
            </a>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Chetan Patil"
              className="w-56 h-56 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
        </motion.div>
      </main>

      {/* Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
