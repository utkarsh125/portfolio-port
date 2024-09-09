"use client";

import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';

const projects = [
  { name: 'DigitalHippo', description: 'Ecommerce Application', link: 'https://github.com/utkarsh125/ecommerce-app' },
  { name: 'Allergen Based Diet Suggestor', description: 'Meal plans based on Allergies', link: 'https://github.com/utkarsh125/arcane-project' },
  { name: 'Travel App', description: 'A simple interface for travel', link: 'https://github.com/utkarsh125/travel-app' },
  { name: 'Hand Sign Recognition', description: 'A CNN Model to detect and identify hand signs', link: 'https://github.com/utkarsh125/tensorflow-hand-sign-detection' },
  { name: 'SimplyNote', description: 'A notetaking application with privacy', link: 'https://github.com/utkarsh125/notetaking-app-mern' },
  { name: 'GSAP Loader', description: 'A loading overlay for dynamic websites', link: 'https://github.com/utkarsh125/gsap-loader' },
];

const Projects = () => {
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.set(card, { backgroundColor: '#1a1a1a', color: '#cccccc' });

      card?.addEventListener('mouseenter', () => {
        gsap.to(card, {
          backgroundColor: '#000000',
          color: '#ffffff',
          borderColor: 'rgba(255, 255, 255, 0.4)',
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
          duration: 0.3,
        });
      });

      card?.addEventListener('mouseleave', () => {
        gsap.to(card, {
          backgroundColor: '#1a1a1a',
          color: '#cccccc',
          borderColor: 'transparent',
          boxShadow: 'none',
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
      <h1 className='text-5xl sm:text-6xl font-playfair'>://Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-8 bg-black rounded-2xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-4 sm:p-6 rounded-lg bg-[#1a1a1a] text-[#cccccc] transition-all duration-300 hover:scale-105"
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            style={{
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tracking-tight">{project.name}</h3>
            <p className='text-sm'>{project.description}</p>

            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 hover:opacity-25 rounded-lg transition-opacity duration-300" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
