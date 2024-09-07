import React, { useEffect, useRef } from 'react';

import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1',
    image: '/path-to-image1.png',
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2',
    image: '/path-to-image2.png',
  },
  // Add more project objects as needed
];

const Projects: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainer.current;
    gsap.to(container, {
      xPercent: -100 * (projects.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${container!.offsetWidth}`,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <section className="h-screen w-full relative overflow-hidden font-inter">
      <div
        ref={scrollContainer}
        className="flex space-x-10 w-[400vw] h-full items-center"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[80vw] h-[80%] bg-gray-200 rounded-xl flex flex-col justify-center items-center shadow-lg p-6"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
