"use client";

import { Github, Linkedin } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';
import { gsap } from 'gsap';

const Footer = () => {
  const [isClient, setIsClient] = useState(false);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    if (btnRef.current) {
      const buttons = btnRef.current.querySelectorAll('.social-btn');

      buttons.forEach((btn) => {
        gsap.to(btn, {
          scale: 1.1,
          duration: 0.3,
          ease: 'power3.out',
          paused: true,
        });

        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, { scale: 1.1, duration: 0.3, ease: 'power3.out' });
        });

        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power3.out' });
        });
      });
    }
  }, []);

  if (!isClient) return null;

  return (
    <div className="mt-16 sm:mt-24 lg:mt-36 px-4 sm:px-8 md:mt-48 lg:mb-36 mb-5">
      <div className="text-lg sm:text-xl flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-8">
        <p className="text-xl sm:text-2xl tracking-tighter lg:text-4xl font-medium text-center">
          Let&apos;s create something amazing together!
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl font-medium tracking-tighter text-center">
          Drop a mail at -{' '}
          <Link href="mailto:utkarshpandey125@gmail.com" className="text-red-500 underline">
            utkarshpandey125@gmail.com
          </Link>
        </p>
      </div>
      <div
        ref={btnRef}
        className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-6"
      >
        {/* <Link
          href="https://linkedin.com/in/utkarsh125"
          className="social-btn tracking-tighter flex items-center px-6 py-3 bg-[#0965c1] text-slate-100 text-sm sm:text-lg rounded-full space-x-3 transform transition-transform"
        >
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </Link> */}
        <Link
          href="https://linkedin.com/in/utkarsh125"
          className="social-btn tracking-tighter flex items-center px-6 py-3 bg-slate-200 text-black text-sm sm:text-lg rounded-full space-x-3 transform transition-transform"
        >
          {/* <Linkedin className="w-6 h-6" /> */}
          <FaLinkedin className='w-6 h-6 text-[#0965c1]'/>
          <span>LinkedIn</span>
        </Link>
        <Link
          href="https://github.com/utkarsh125"
          className="social-btn flex tracking-tighter items-center px-6 py-3 bg-black text-white text-sm sm:text-lg rounded-full space-x-3 transform transition-transform"
        >
          <Github className="w-6 h-6" />
          <span>GitHub</span>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1akvaKdYlA7UN1Sb04psCci0ynAOJAtTC/view?usp=sharing"
          className="social-btn tracking-tighter flex items-center px-6 py-3 bg-red-500 text-white text-sm sm:text-lg rounded-full transform transition-transform"
        >
          <span>Resume</span>
        </Link>
      </div>
      <div className='bg-slate-900 backdrop-blur-5 flex items-center justify-center text-white p-5 mt-10 font-inter rounded-3xl'>
        Made using GSAP, NextJS and Framer.
      </div>
    </div>
  );
};

export default Footer;
