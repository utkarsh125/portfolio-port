"use client";

import React, { useRef } from "react";

import { Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  { name: "[wip]Payments", description: "A fully structured payment application", link: "https://github.com/utkarsh125/payments-app" },
  { name: "Serverless Blog", description: "Cloudflare Workers based Blogging App", link: "https://github.com/utkarsh125/medium-serverless" },
  { name: "DigitalHippo", description: "Ecommerce Application", link: "https://github.com/utkarsh125/ecommerce-app" },
  { name: "Allergen Based Diet Suggestor", description: "Meal plans based on Allergies", link: "https://github.com/utkarsh125/arcane-project" },
  { name: "Hand Sign Recognition", description: "A CNN Model to detect and identify hand signs", link: "https://github.com/utkarsh125/tensorflow-hand-sign-detection" },
  // { name: "SimplyNote", description: "A notetaking application with privacy", link: "https://github.com/utkarsh125/notetaking-app-mern" },
];

const Projects = () => {
  return (
    <motion.div
      className="projects-container font-inter py-16 pt-0 px-6 sm:px-10 relative overflow-hidden rounded-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0 -z-10 animate-flowing-water"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.h1
        className="font-playfair text-3xl sm:text-4xl lg:text-5xl mb-10 text-center text-gray-900"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ://Projects
      </motion.h1>
      <div className="flex flex-col gap-6 bg-rose-100 p-5 md:p-10 rounded-xl border-2 border-black">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card relative p-6 sm:p-8 rounded-lg backdrop-blur-lg bg-[rgba(255,255,255,0.15)] border border-2 border-black hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl font-playfair mb-2 text-gray-800">
              {project.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

<style jsx>{`
  @keyframes flowing-water {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  .animate-flowing-water {
    background: linear-gradient(270deg, #00c6ff, #0072ff, #00c6ff);
    background-size: 200% 100%;
    animation: flowing-water 5s linear infinite;
  }
`}</style>
