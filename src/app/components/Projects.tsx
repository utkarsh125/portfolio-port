import React, { useEffect, useRef } from 'react';

import Link from 'next/link'; // Import Next.js Link
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'DigitalHippo',
    description: 'Ecommerce Application',
    link: 'https://github.com/utkarsh125/ecommerce-app',
  },
  {
    name: 'Allergen Based Diet Suggestor',
    description: 'Meal plans based on Allergies',
    link: 'https://github.com/utkarsh125/arcane-project',
  },
  {
    name: 'Travel App',
    description: 'A simple interface for travel',
    link: 'https://github.com/example/standartio',
  },
  {
    name: 'Hand Sign Recognition',
    description: 'A CNN Model to detect and identify hand signs',
    link: 'https://github.com/example/podcast',
  },
  {
    name: 'SimplyNote',
    description: 'A notetaking application with privacy',
    link: 'https://github.com/example/mockupiato',
  },
];

const Projects = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]); // Handle multiple refs

  useEffect(() => {
    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        const delay = index * 0.2;

        // Scale on hover
        gsap.fromTo(
          ref,
          { scale: 1 },
          {
            scale: 1.05,
            duration: 0.4,
            ease: 'power1.inOut',
            paused: true,
            overwrite: true,
            scrollTrigger: {
              trigger: ref,
              start: 'top center',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Scale up on hover
        ref.addEventListener('mouseenter', () => {
          gsap.to(ref, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power1.inOut',
          });
        });

        ref.addEventListener('mouseleave', () => {
          gsap.to(ref, {
            scale: 1,
            duration: 0.3,
            ease: 'power1.inOut',
          });
        });

        // Arrow elongation
        const arrow = ref.querySelector('.arrow-svg') as SVGElement;
        if (arrow) {
          gsap.to(arrow, {
            scaleX: 1.2,
            duration: 0.2,
            paused: true,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: ref,
              start: 'top center',
              toggleActions: 'play none none reverse',
            },
          });
        }
      }
    });
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-36 px-4 sm:px-8 md:mt-48">
      <div className='flex justify-center flex-col gap-6 items-center mb-20'>
        <h1 className='text-6xl tracking-tighter'>Featured Projects</h1>
        <p className='text-xl tracking-tight'>
          check the entire <Link href={`https://github.com/utkarsh125?tab=repositories`} className='text-red-500 underline'>list of projects</Link> created by me.
        </p>
      </div>
      {projects.map((project, index) => (
        <Link key={project.name} href={project.link} passHref>
          <div
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            className="relative w-full flex gap-6 items-center justify-between p-4 mb-4 xs:mb-8 bg-gray-150 rounded-2xl group hover:bg-gray-200 transition-colors cursor-pointer h-28"
          >
            {/* Using flex-col for the text to ensure proper alignment */}
            <div className="flex flex-col  justify-between h-full">
              <span className="text-3xl text-gray-900 group-hover:text-red-500 tracking-widest font-[400]">
                {project.name}
              </span>
              <span className="text-lg text-gray-600">
                {project.description}
              </span>
            </div>

            {/* SVG Arrow Icon */}
            <svg
              className="arrow-svg text-gray-400 group-hover:text-gray-600 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>

            {/* Optional Line animation */}
            <div className="absolute left-0 w-0 h-0.5 bg-gray-600 transition-all line"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
