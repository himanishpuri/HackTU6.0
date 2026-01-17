"use client";

import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import {
  fadeOut,
  icon,
  icon3,
  anim,
  special,
  specialTransition,
  svgAnimate,
  svgAnimateTransition,
} from "./animation";

export default function Preloader() {
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();

  const run = (root: Element, fn: any) => {
    fn(root, { ...special, transition: specialTransition });

    const svg = root.querySelector("svg");
    if (svg) fn(svg, { ...svgAnimate, transition: svgAnimateTransition });
  };

  useEffect(() => {
    const timers = [
      setTimeout(() => run(scope1.current!, animate1), 4000),
      setTimeout(() => run(scope2.current!, animate2), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.section
      variants={fadeOut}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent h-screen overflow-hidden"
    >
      <motion.div
        variants={anim}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex items-center justify-center"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 overflow-hidden">
          {/* HACKTU */}
          <div className="flex items-center justify-center" ref={scope1}>
            <motion.svg
              viewBox="0 0 530.7 98"
              preserveAspectRatio="xMidYMid meet"
              className="h-[110px] w-auto max-w-full overflow-hidden"
              style={{ transform: "translateX(1.5px)" }}
            >
              <motion.path
                d="M19.04 41.0195H60.4805V0H79.5195V98H60.4805V57.2598H19.04V98H0V0H19.04V41.0195ZM178.392 98H159.071L151.092 76.2998H116.651L108.672 98H89.3516L125.191 0H142.552L178.392 98ZM264.608 15.8203V30.7998H245.568V22.8203L238.988 16.2402H210.988L203.849 23.3799V74.6201L210.988 81.7598H238.988L245.568 75.1797V67.2002H264.608V82.1797L248.789 98H200.908L184.809 81.9004V16.0996L200.908 0H248.789L264.608 15.8203ZM296.989 41.0195H311.829L335.489 0H356.909L328.209 48.8604L359.289 98H337.449L311.689 57.2598H296.989V98H277.949V0H296.989V41.0195ZM439.7 16.0996H410.44V98H391.4V16.0996H362.141V0H439.7V16.0996ZM469.938 74.6201L477.078 81.7598H504.519L511.658 74.6201V0H530.698V81.2002L513.898 98H467.698L450.898 81.2002V0H469.938V74.6201ZM120.991 60.6201H146.892L133.871 23.3799H133.592L120.991 60.6201Z"
                stroke="white"
                strokeWidth="5"
                fill="none"
                variants={icon}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>
          </div>

          {/* 7.0 */}
          <div ref={scope1} className="flex items-center justify-center">
            <motion.svg
              viewBox="0 0 175 98"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[110px] w-auto max-w-full overflow-hidden"
            >
              <motion.path
                d="M68.8799 17.9199L29.54 98H9.37988L49 17.5V16.2402H0V0H68.8799V17.9199ZM88.2725 83.1602V91.8398L82.3926 98H72.1719L66.1523 91.9805V83.0195L72.1719 77H82.3926L88.2725 83.1602ZM174.755 16.2402V81.7598L158.515 98H115.115L98.875 81.7598V16.2402L115.115 0H158.515L174.755 16.2402ZM117.915 22.4004V75.5996L124.075 81.7598H149.555L155.715 75.5996V22.4004L149.555 16.2402H124.075L117.915 22.4004Z"
                stroke="#36BBBD"
                strokeWidth="5"
                fill="none"
                variants={icon3}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
