import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Project Data
const projects = [
  {
    id: 1,
    title: "E-Commerce Store",
    description:
      "A full-stack MERN e-commerce application with payment gateway integration and admin dashboard.",
    image: "/projects/ecommerce.png", // replace with your project image
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A weather forecasting app using OpenWeather API with real-time location tracking.",
    image: "/projects/weather.png",
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weather-demo.com",
    tech: ["React", "API", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with React, TailwindCSS, and Framer Motion animations.",
    image: "/projects/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio-demo.com",
    tech: ["React", "TailwindCSS", "Framer Motion"],
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
           My Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden group transform transition duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-6 transition duration-500">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl hover:text-red-500 transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl hover:text-red-500 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-red-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800/60 text-gray-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
