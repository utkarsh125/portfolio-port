"use client";

import React, { useEffect, useState } from "react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isHoveredName, setIsHoveredName] = useState(false);

  const englishName = "Utkarsh Pandey";
  const japaneseName = "ウットカシュ パンデー"; // Japanese translation

  const handleNameMouseEnter = () => setIsHoveredName(true);
  const handleNameMouseLeave = () => setIsHoveredName(false);

  const handleLineMouseEnter = () => {
    gsap.to(".curly-line", {
      attr: { d: "M0,5 Q25,-3 50,5 T100,5" },
      ease: "elastic.out(1, 0.5)",
      duration: 0.5,
    });
  };

  const handleLineMouseLeave = () => {
    gsap.to(".curly-line", {
      attr: { d: "M0,5 Q25,0 50,5 T100,5" },
      ease: "elastic.out(1, 0.5)",
      duration: 0.5,
    });
  };

  useEffect(() => {
    gsap.fromTo(
      ".curly-line",
      { drawSVG: "0%" },
      {
        drawSVG: "100%",
        scrollTrigger: {
          trigger: ".curly-line",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="mt-20 mb-20 px-6 sm:px-10 md:mt-40 lg:mt-56 lg:mb-40">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 text-gray-500 text-lg sm:text-xl">
        <p className="text-center sm:text-left">about me & other things I do</p>
        <Link
          href="/about"
          className="see-more text-red-500 hover:underline flex items-center"
        >
          <ArrowRight className="ml-1" size={16} />
          <span className="underline">see info</span>
        </Link>
      </div>

      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-col gap-2 sm:gap-4 font-inter tracking-tighter mt-6 text-center sm:text-left">
        <p
          className="hero-name font-playfair"
          onMouseEnter={handleNameMouseEnter}
          onMouseLeave={handleNameMouseLeave}
        >
          {isHoveredName ? japaneseName : englishName}
        </p>
        <p className="text-xl sm:text-2xl text-gray-600 tracking-tight">
          full stack developer & machine learning enthusiast.
        </p>
      </div>

      <div className="mt-6 sm:mt-8 flex justify-center sm:justify-start">
        <svg
          className="curly-line"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          fill="none"
          stroke="black"
          strokeWidth="0.1"
          onMouseEnter={handleLineMouseEnter}
          onMouseLeave={handleLineMouseLeave}
        >
          <path className="curly-line" d="M0,5 Q25,0 50,5 T100,5" />
        </svg>
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-5xl tracking-tighter mt-10 sm:mt-12 lg:mt-32 text-center sm:text-left">
        Crafting tailored solutions with purpose and precision, I thrive on side
        projects that solve specific problems perfectly, focusing on impact over
        flexibility.
      </h1>
    </div>
  );
};

export default Hero;
