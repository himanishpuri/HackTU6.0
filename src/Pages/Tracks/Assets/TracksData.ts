import aiPoweredLending from "./aiPoweredLending.png";
import ecoCity from "./ecoCity.png";
import health from "./health.png";
import water from "./waterHook.png";
import machine from "./machineArm.png";
import globe from "./climateGlobe.png";
//import digitalFrontier from "./digitalFrontier.png";
//import learnSphere from "./learnSphere.png";
//import openSus from "./openSustainaibility.png";
// import community from "./community.png";

export type TrackDataTypes = {
  imageSrc: string;
  title: string;
  subTitle: string;
  description: string;
};

export const data: TrackDataTypes[] = [
  {
    imageSrc: ecoCity,
    title: "Sustainable Ecosystems",
    subTitle: "SDG 9, 11 & 15",
    description:
      "Design systems that help industries and cities grow without hurting nature. Build solutions to optimize resource usage, monitor wildlife health, or create eco-friendly infrastructure. The goal is to support modern living while actively protecting the land around us.",
  },
  {
    imageSrc: machine,
    title: "Collaborative Consumption & Production",
    subTitle: "SDG 12 & 17",
    description:
      "Create platforms that connect producers and consumers to reduce waste. We need tools to track product lifecycles, share materials between industries, or encourage responsible buying. Use technology to make 'reduce, reuse, recycle' a reality through better collaboration.",
  },
  {
    imageSrc: aiPoweredLending,
    title: "Open Innovation",
    subTitle: "Open Track",
    description:
      "This track is for creative solutions that don't fit the other categories. Whether it's a new developer tool, a fintech app, or something completely different, this is your chance to shine. Solve a real-world problem and show us that innovation has no boundaries.",
  },
  {
    imageSrc: health,
    title: "Good Health and Well-being",
    subTitle: "SDG 3",
    description:
      "Build technology to improve healthcare access, especially in remote or underserved areas. Projects can range from AI diagnostics and mental health apps to better hospital management systems. The goal is to ensure quality healthcare is available to everyone.",
  },
  {
    imageSrc: globe,
    title: "Climate Resilience",
    subTitle: "SDG 13",
    description:
      "Develop actionable tools to fight climate change and help communities adapt. Solutions could include smart carbon calculators, disaster prediction models, or platforms for local climate action. Help people and governments make data-driven decisions for the planet.",
  },
  {
    imageSrc: water,
    title: "Life Below Water",
    subTitle: "SDG 14",
    description:
      "Use technology to protect our oceans and reverse marine damage. Focus on solving issues like plastic pollution, sustainable fishing, or real-time water quality monitoring. Build solutions that keep marine ecosystems healthy and vibrant.",
  },
];
