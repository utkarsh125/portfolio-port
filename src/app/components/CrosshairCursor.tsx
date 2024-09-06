"use client";

import "../styles/CrosshairCursor.css"; // Custom styles for cursor

import { gsap } from "gsap";
import { useEffect } from "react";
import { useMousePosition } from "../hooks/useMousePosition";

export const CrosshairCursor = () => {
  const { x, y } = useMousePosition();

  useEffect(() => {
    const cursor = document.querySelector(".crosshair");

    if (cursor) {
      gsap.to(cursor, {
        x,
        y,
        ease: "power3.out",
        duration: 0.2,
      });
    }
  }, [x, y]);

  return (
    <>
      <div className="crosshair">
        <div className="crosshair-line crosshair-line-vertical"></div>
        <div className="crosshair-line crosshair-line-horizontal"></div>
      </div>
      <style>{`
        .crosshair {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }

        .crosshair-line {
          position: absolute;
          background-color: #cecece;
        }

        .crosshair-line-vertical {
          width: 2px;
          height: 30px;
          left: 50%;
          transform: translateX(-50%);
        }

        .crosshair-line-horizontal {
          height: 2px;
          width: 30px;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </>
  );
};
