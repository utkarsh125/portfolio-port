import React, { useEffect, useRef } from 'react';

import Image from 'next/image'; // If using Next.js
import { gsap } from 'gsap';

interface Icon {
  src: string;
  alt: string;
}

const icons: Icon[] = [
  { src: '/react-logo.png', alt: 'React' },
  { src: '/vercel-logo.png', alt: 'Vercel' },
  { src: '/mongodb-logo.png', alt: 'MongoDB' },
  { src: '/nextjs-logo.png', alt: 'Next.js' },
  { src: '/typescript-logo.png', alt: 'TypeScript' },
  { src: '/javascript-logo.png', alt: 'JavaScript' },
  { src: '/gsap-logo.png', alt: 'GSAP' },
  { src: '/python-logo.jpg', alt: 'Python' },
  { src: '/tensorflow-logo.jpg', alt: 'TensorFlow' },
  { src: '/obsidian.png', alt: 'Obsidian' },
  { src: '/notion.png', alt: 'Notion' },
];

const Skills: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const icons = gsap.utils.toArray('.icon-item');
    gsap.to(icons, {
      y: 'random(-20, 20)',
      x: 'random(-30, 30)',
      duration: 3,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  const handleHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      scale: 1.5,
      duration: 0.3,
      ease: 'power1.inOut',
    });
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power1.inOut',
    });
  };

  return (
    <div className="skills-container text-center py-10">
      <div className='mb-20'>
        {/* <h1 className='text-6xl font-playfair tracking-tighter'>
          Tools and Technologies
        </h1>
      <p className="text-2xl mb-8 text-gray-600">
        tools and technologies that I generally use for my <span className='text-red-500'>projects and notes.</span>
      </p> */}
      </div>
      <div ref={carouselRef} className="skills-carousel flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-52">
        {icons.map((icon, index) => (
          <div 
            key={index} 
            className="icon-item relative p-2 group" 
            onMouseEnter={handleHover} 
            onMouseLeave={handleLeave}
          >
            <Image 
              src={icon.src} 
              alt={icon.alt} 
              width={60} 
              height={60} 
              className="object-contain rounded-lg"
            />
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-gray-600 text-xs font-mono hidden group-hover:block">
              {icon.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
