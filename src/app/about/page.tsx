"use client";

import { ArrowLeft, FileText } from "lucide-react"; // Importing the Lucide icon
import React, { useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const AboutPage: React.FC = () => {
  const buttonRef = useRef<HTMLSpanElement>(null); // Ref for the "Let's Connect" button
  const backButtonRef = useRef<HTMLButtonElement>(null); // Ref for back button
  const resumeLink = "https://drive.google.com/file/d/1akvaKdYlA7UN1Sb04psCci0ynAOJAtTC/view?usp=sharing";

  useEffect(() => {
    if (buttonRef.current) {
    //   // Add scale-up animation to the "Let's Connect" button
    //   gsap.fromTo(
    //     buttonRef.current,
    //     { scale: 1 },
    //     {
    //       scale: 1.2,
    //       duration: 0.5,
    //       ease: "power1.inOut",
    //       repeat: -1 // Reverse the animation
    //     }
    //   );
    }

    if (backButtonRef.current) {
      // Scale-up effect on hover
      gsap.to(backButtonRef.current, {
        scale: 1.1,
        duration: 0.2,
        ease: "power1.inOut",
        paused: true,
      });

      // Blood pour effect on click
      backButtonRef.current.addEventListener("click", () => {
        gsap.to(backButtonRef.current, {
          backgroundColor: "red",
          duration: 0.5,
          ease: "power1.inOut",
        });
      });
    }
  }, []);

  return (
    <div className="mt-36 mb-52 px-4 sm:px-8 md:mt-48 lg:mt-72 lg:mb-52">
      {/* Back Button Container */}
      <div className="mb-8 flex justify-start">
        <Link href="/" passHref>
          {/* Link wrapper to navigate to the homepage */}
          <button
            ref={backButtonRef}
            className="flex items-center justify-center p-4 bg-gray-200 rounded-full transition-transform duration-300 hover:scale-110"
          >
            <ArrowLeft className="w-6 h-6 text-black" />
          </button>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-4xl mb-12">
          <Image
            src="/profile.png" 
            alt="Profile Image"
            layout="responsive"
            width={1600} // Aspect ratio width
            height={900} // Aspect ratio height
            className="rounded-xl"
          />
        </div>
        <p className="!text-xl md:text-4xl mb-8 text-left">
          I&apos;m Utkarsh Pandey, a Software Engineer specializing in web
          development and machine learning, hailing from the vibrant city of
          Varanasi, India. My journey in tech has been shaped by a passion for
          creating innovative solutions that bridge the gap between cutting-edge
          technology and practical applications. With a solid foundation in
          computer science and engineering.
        </p>
        <p className="!text-xl md:text-4xl text-left mb-12">
          I&apos;ve honed my skills in developing robust web applications and
          implementing machine learning algorithms that drive meaningful outcomes.
          I take pride in my creativity, industriousness, and adaptability,
          constantly pushing myself to stay ahead in a rapidly evolving industry.
          Whether it&apos;s designing intuitive user interfaces, optimizing backend
          systems, or crafting intelligent models, I&apos;m dedicated to delivering
          solutions that make a real impact.

          In my spare time, I capture photographs, play videogames and write - unless a side project piques my interest.
        </p>

        <div className="w-full flex items-center gap-2 justify-start mt-10">
          {/* Container to align button to the left */}
          <Link href={`https://linkedin.com/in/utkarsh125`}>
            <span
              ref={buttonRef}
              className="px-6 py-3 rounded-full bg-gray-200 text-black hover:text-white hover:bg-black transition-colors duration-300 text-lg md:text-xl"
            >
              Let&apos;s connect!
            </span>
          </Link>
          <Link href={resumeLink}>
            <span
              ref={buttonRef}
              className="px-6 py-2.5 flex items-center gap-1 rounded-full bg-red-500 text-white hover:text-white hover:bg-black transition-colors duration-300 text-lg md:text-xl"
            >
              <FileText className=""/>Resume
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
