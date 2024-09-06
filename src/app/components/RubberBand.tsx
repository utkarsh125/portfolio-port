"use client";

import React, { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";

const RubberBand = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [path, setPath] = useState("M 10 100 Q 500 100 990 100");
  const finalPath = "M 10 100 Q 500 100 990 100";

  useEffect(() => {
    const svg = document.querySelector("svg");

    const handleMouseMove = (e: MouseEvent) => {
      if (pathRef.current) {
        const newPath = `M 10 100 Q ${e.offsetX} ${e.offsetY} 990 100`;
        setPath(newPath);

        gsap.to(pathRef.current, {
          attr: { d: newPath },
          duration: 0.2,
          ease: "power3.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (pathRef.current) {
        gsap.to(pathRef.current, {
          attr: { d: finalPath },
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    svg?.addEventListener("mousemove", handleMouseMove);
    svg?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svg?.removeEventListener("mousemove", handleMouseMove);
      svg?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [finalPath]);

  return (
    <div className="flex justify-center items-center mt-12">
      {/* SVG rubber band path */}
      <svg width="1200" height="300" viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={pathRef}
          d={path} // Update path here
          stroke="black"
          strokeWidth="2"
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default RubberBand;
