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
    gsap.to(".hero-name", { scale: 1.2, duration: 0.2 });
  };

  const handleNameMouseLeave = () => {
    setIsHoveredName(false);
    gsap.to(".hero-name", { scale: 1, duration: 0.2 });
  };

  // Handle hover state for "see info" link
  const handleLinkMouseEnter = () => {
    gsap.to(".see-more", { scale: 1.2, duration: 0.2 });
  };

  const handleLinkMouseLeave = () => {
    gsap.to(".see-more", { scale: 1, duration: 0.2 });
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
    <div className="mt-72 mb-52">
      {/* Top section with about me link */}
      <div className="flex items-center text-gray-500 text-2xl">
        <p>about me & other things I do</p>
        <Link
          onMouseEnter={handleLinkMouseEnter}
          onMouseLeave={handleLinkMouseLeave}
          href="#info"
          className="see-more text-red-500 hover:underline flex items-center"
        >
          <p className="flex items-center gap-2">
            <ArrowRight className="ml-1" size={16} />
            <span className="underline">see info</span>
          </p>
        </Link>
      </div>

      {/* Main hero text */}
      <div className="text-6xl flex flex-col gap-5 font-inter tracking-tighter mt-5">
        {/* Name with hover effect */}
        <p
          className="hero-name font-playfair"
          onMouseEnter={handleNameMouseEnter}
          onMouseLeave={handleNameMouseLeave}
        >
          {isHoveredName ? japaneseName : englishName}
        </p>
        <p className="text-3xl text-gray-600">
          full stack developer & machine learning enthusiast.
        </p>
      </div>


      {/* SVG Curly Line Animation */}
      <div className="mt-10">
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
    </div>
  );
};

export default Hero;
