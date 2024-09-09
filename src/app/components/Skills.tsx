"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { gsap } from "gsap";

interface Technology {
  name: string;
  src: string;
}

const technologies: Technology[] = [
  { name: "React", src: "/react-logo.png" },
  { name: "Vercel", src: "/vercel-logo.png" },
  { name: "MongoDB", src: "/mongodb-logo.png" },
  { name: "Next.js", src: "/nextjs-logo.png" },
  { name: "TypeScript", src: "/typescript-logo.png" },
  { name: "JavaScript", src: "/javascript-logo.png" },
  { name: "GSAP", src: "/gsap-logo.png" },
  { name: "Python", src: "/python-logo.jpg" },
  { name: "TensorFlow", src: "/tensorflow-logo.jpg" },
  { name: "Java", src: "/java-logo.png" },
];

const Skills: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set this to true once the component is mounted on the client
  }, []);

  useEffect(() => {
    if (isClient) {
      const listItems = gsap.utils.toArray(".tech-item");
      gsap.fromTo(
        listItems,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [isClient]);

  const handleHover = (index: number) => {
    gsap.to(`.icon-${index}`, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  const handleLeave = (index: number) => {
    gsap.to(`.icon-${index}`, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  return (
    <div className="skills-container text-center py-10 mt-52">
      <h2 className="text-3xl md:text-5xl font-playfair tracking-tighter mb-6">Technologies I Use</h2>
      <ul className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech, index) => (
          <li
            key={index}
            className="tech-item text-lg md:text-xl lg:text-2xl cursor-pointer relative"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleLeave(index)}
          >
            {tech.name}
            {isClient && (
              <div
                className={`icon-${index} hidden absolute -top-20 opacity-0 scale-50 transition-all`}
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
