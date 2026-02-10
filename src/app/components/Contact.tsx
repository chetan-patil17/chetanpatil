"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init("h8jUvlcxgRXxC1TDE"); // Your Public Key
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send("service_vvvb9vw", "template_biv4hhn", formData)
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Check console.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-10"
        >
          Feel free to reach out for internships, projects, or collaboration.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Clickable Icons */}
          <div className="flex gap-6 items-start">
            {/* Email */}
            <button
              onClick={() => window.open("mailto:chetpatil17@gmail.com")}
              className="p-4 rounded-full bg-white/10 hover:bg-blue-600 transition"
              title="Send Email"
            >
              <Mail size={28} />
            </button>

            {/* GitHub */}
            <button
              onClick={() =>
                window.open("https://github.com/chetan-patil17", "_blank")
              }
              className="p-4 rounded-full bg-white/10 hover:bg-blue-600 transition"
              title="Open GitHub"
            >
              <Github size={28} />
            </button>

            {/* LinkedIn */}
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/chetan-patil-935550284/",
                  "_blank"
                )
              }
              className="p-4 rounded-full bg-white/10 hover:bg-blue-600 transition"
              title="Open LinkedIn"
            >
              <Linkedin size={28} />
            </button>
          </div>

          {/* Right: Form */}
          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              value={formData.from_name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              value={formData.from_email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
