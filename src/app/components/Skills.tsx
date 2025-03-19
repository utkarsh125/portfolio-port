"use client";

import React, { useEffect } from "react";

import { gsap } from "gsap";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "GSAP",
  "TailwindCSS",
  "MongoDB",
  "Postgres",
  "Prisma",
  "Docker",
  "AWS",
  "EC2",
  "Cloudflare Workers",
  "Node.js",
  "Express",
  "tRPC",
  "Python",
  "TensorFlow",
  "YOLO",
  "OpenCV",
  "TurboRepo",
  "Recoil",
  "Rust",
  "SQL"
];

const Skills: React.FC = () => {
  useEffect(() => {
    const listItems = gsap.utils.toArray(".skill-item");
    gsap.fromTo(
      listItems,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
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
  }, []);

  return (
    <div className="skills-container text-center py-10 mt-20">
      <h2 className="text-3xl font-poppins md:text-5xl tracking-tighter mb-14">
        Technologies and Tools I Work With
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-lg md:text-xl lg:text-2xl">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item tracking-tighter">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
