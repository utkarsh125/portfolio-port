"use client";

import { Github, Linkedin } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

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
    <div className='mt-36 mb-52 px-4 sm:px-8 md:mt-48 lg:mt-72 lg:mb-52'>
      <div className='text-lg sm:text-xl'>
        <p className='text-2xl sm:text-4xl font-medium tracking-tight'>
          I designed and built this website on NextJS. Check it on{' '}
          <Link href="https://github.com/utkarsh125/portfolio-port" className='text-red-500 underline'>
            github
          </Link>.
        </p>
        <p className='text-xl sm:text-4xl font-medium tracking-tight'>
          Let&apos;s connect -{' '}
          <Link href="mailto:utkarshpandey125@gmail.com" className='text-red-500 underline text-lg sm:text-2xl'>
            utkarshpandey125@gmail.com
          </Link>
        </p>
      </div>
      <div ref={btnRef} className='mt-8 flex flex-wrap gap-4'>
        <Link href="https://linkedin.com/in/utkarsh125" className='social-btn tracking-tight flex items-center px-6 py-3 bg-gray-200 text-black text-lg rounded-full space-x-3 transform transition-transform'>
          <Linkedin className='w-6 h-6' />
          <span>LinkedIn</span>
        </Link>
        <Link href="https://github.com/utkarsh125" className='social-btn flex tracking-tight items-center px-6 py-3 bg-black text-white text-lg rounded-full space-x-3 transform transition-transform'>
          <Github className='w-6 h-6' />
          <span>Github</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
