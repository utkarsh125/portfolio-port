"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";

const projects = [
  { name: "Payments", description: "A fully structured payment application", link: "https://github.com/utkarsh125/payments-app" },
  { name: "Serverless Blog", description: "Cloudflare Workers based Blogging App", link: "https://github.com/utkarsh125/medium-serverless" },
  { name: "DigitalHippo", description: "Ecommerce Application", link: "https://github.com/utkarsh125/ecommerce-app" },
  { name: "Allergen Based Diet Suggestor", description: "Meal plans based on Allergies", link: "https://github.com/utkarsh125/arcane-project" },
  { name: "Hand Sign Recognition", description: "A CNN Model to detect and identify hand signs", link: "https://github.com/utkarsh125/tensorflow-hand-sign-detection" },
  { name: "SimplyNote", description: "A notetaking application with privacy", link: "https://github.com/utkarsh125/notetaking-app-mern" },
];

const Projects = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: index * 0.2 }
      );

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          boxShadow: "0 10px 20px rgba(106, 17, 203, 0.5)",
          duration: 0.4,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          background: "#1a1a1a",
          boxShadow: "none",
          duration: 0.4,
          ease: "power2.in",
        });
      });
    });
  }, []);

  return (
    <div className="projects-container bg-black text-white py-20 px-6 sm:px-10 rounded-3xl">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair mb-10 text-center">://Projects</h1>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card relative p-6 sm:p-8 rounded-2xl bg-[#1a1a1a] transition-all duration-300 hover:scale-105"
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            style={{
              overflow: "hidden",
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{project.name}</h3>
            <p className="text-sm sm:text-base lg:text-lg mb-6">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm sm:text-lg font-medium text-[#cccccc] border border-[#cccccc] rounded-full px-4 sm:px-6 py-2 hover:bg-white hover:text-black transition-all duration-300"
            >
              View Project
            </a>
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 opacity-0 rounded-2xl"
              style={{
                zIndex: -1,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
