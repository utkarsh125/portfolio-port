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

  // Handle hover state for name
  const handleNameMouseEnter = () => {
    setIsHoveredName(true);
  };

  const handleNameMouseLeave = () => {
    setIsHoveredName(false);
  };

  // Handle hover state for "see info" link
  const handleLinkMouseEnter = () => {
    // You can add other hover effects here if needed
  };

  const handleLinkMouseLeave = () => {
    // You can add other hover effects here if needed
  };

  // Handle hover state for the curly line (sine wave effect)
  const handleLineMouseEnter = () => {
    gsap.to(".curly-line", {
      attr: {
        d: "M0,5 Q25,-3 50,5 T100,5", // Reduced spike height
      },
      ease: "elastic.out(1, 0.5)",
      duration: 0.5,
    });
  };

  const handleLineMouseLeave = () => {
    gsap.to(".curly-line", {
      attr: {
        d: "M0,5 Q25,0 50,5 T100,5", // Return to the original line
      },
      ease: "elastic.out(1, 0.5)",
      duration: 0.5,
    });
  };

  useEffect(() => {
    // Scroll-trigger animation for the SVG curly line
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
    <div className="mt-36 mb-52 px-4 sm:px-8 md:mt-48 lg:mt-72 lg:mb-52">
      {/* Top section with about me link */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 text-gray-500 text-xl sm:text-2xl">
        <p className="text-center sm:text-left">
          about me & other things I do
        </p>
        <Link
          onMouseEnter={handleLinkMouseEnter}
          onMouseLeave={handleLinkMouseLeave}
          href="#info"
          className="see-more text-red-500 hover:underline flex items-center"
        >
          <p className="flex items-center gap-2">
            <ArrowRight className="ml-1" size={16} />
            <Link href={`/about`} className="underline">see info</Link>
          </p>
        </Link>
      </div>

      {/* Main hero text */}
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col gap-3 sm:gap-5 font-inter tracking-tighter mt-5 text-center sm:text-left">
        {/* Name with hover effect */}
        <p
          className="hero-name font-playfair"
          onMouseEnter={handleNameMouseEnter}
          onMouseLeave={handleNameMouseLeave}
        >
          {isHoveredName ? japaneseName : englishName}
        </p>
        <p className="text-2xl sm:text-3xl text-gray-600">
          full stack developer & machine learning enthusiast.
        </p>
      </div>

      {/* SVG Curly Line Animation */}
      <div className="mt-8 sm:mt-10 flex justify-center sm:justify-start">
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
          <path
            className="curly-line"
            d="M0,5 Q25,0 50,5 T100,5" // Initial path
          />
        </svg>
      </div>

      <h1 className="text-6xl tracking-tighter">
      I love working on  side projects especially on applications that solve someone elses problem perfectly and not trying to be flexible to fit everyone needs.
      </h1>
    </div>
  );
};

export default Hero;
