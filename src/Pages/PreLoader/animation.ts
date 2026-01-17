import { Variants } from "framer-motion";

export const fadeOut: Variants = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.5,
    },
  },
};

export const icon: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0,0,0,0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1, // FULL DRAW
    transition: {
      pathLength: { delay: 0.2, duration: 3.5, ease: "easeInOut" },
      opacity: { delay: 0.2, duration: 1 },
    },
  },
};

export const icon2: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0,0,0,0)",
    x: -200,
  },
  visible: {
    opacity: 1,
    pathLength: 1, // FULL DRAW
    x: 0,
    transition: {
      pathLength: { delay: 0.8, duration: 3.5, ease: "easeInOut" },
      opacity: { delay: 0.8, duration: 1 },
      x: { delay: 0.8, duration: 0.6, ease: "easeOut" },
    },
  },
};

export const icon3: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0,0,0,0)",
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    pathLength: 1, // FULL DRAW
    transition: {
      pathLength: { delay: 1.5, duration: 3, ease: "easeInOut" },
      opacity: { delay: 1.5, duration: 1 },
      x: { delay: 1.5, duration: 0.5, ease: "easeOut" },
    },
  },
};

export const anim: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 0.9,
    x: "-2%",
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    scale: 4,
    y: "-500%",
    x: "5%",
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// For useAnimate - separate values from transitions
export const special = {
  rotateX: 90,
} as const;

export const specialTransition = {
  duration: 0.4,
};

export const svgAnimate = {
  y: "-100%",
  opacity: 0,
} as const;

export const svgAnimateTransition = {
  duration: 0.2,
};

export const animatedText = {
  opacity: 1,
} as const;

export const animatedTextTransition = {
  duration: 0.4,
};
