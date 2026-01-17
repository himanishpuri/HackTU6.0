import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TwinklingBackgroundProps {
  numDots?: number;
  backgroundColor?: string;
  children: React.ReactNode;
}

const TwinklingBackground: React.FC<TwinklingBackgroundProps> = ({
  numDots = 400,
  backgroundColor = "#0F203E",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const random = (min: number, max: number) =>
      min + Math.random() * (max - min);

    // Create dots
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement("div");
      dot.className = "absolute w-1.5 h-1.5 bg-white rounded-full opacity-0";
      container.appendChild(dot);

      // Randomize position and scale
      gsap.set(dot, {
        x: random(0, vw),
        y: random(0, vh),
        scale: 0,
      });

      // Animation timeline
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(dot, {
        autoAlpha: random(0.5, 1),
        scale: random(0.1, 0.9),
        duration: random(0.5, 1.1),
        ease: "power2.inOut",
        delay: random(0, 6),
      });
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [numDots]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Layer*/}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-full min-h-screen -z-50 overflow-hidden"
        style={{ backgroundColor }}
      />
      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default TwinklingBackground;
