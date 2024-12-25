import bg from "./Assets/landing_bg.png";
import earth from "./Assets/earth_graphic.png";
import logo from "./Assets/hacktu_text.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Landing() {
  return (
    <div
      className="bg-contain bg-repeat bg-center h-screen w-full flex justify-between items-center gap-x-7 pr-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <LazyLoadImage
        src={earth}
        alt="earth"
        className="h-full w-1/2 object-contain"
        effect="blur"
        visibleByDefault={true}
      />
      <div className="flex flex-col h-1/3 mt-10 max-w-1/2 gap-y-2 w-max justify-center items-center px-[3dvw]">
        <img
          src={logo}
          alt="logo"
          className="self-start  object-contain ml-[-50px]"
        />
        <h1 className="self-center text-[#D9D9D9] text-[3.5vh] font-space-grotesk">
          8-9th Feb 2025
        </h1>
        <div className="mt-10 flex flex-col gap-5">
          <button className="font-space-grotesk hover:scale-105 transition-all font-light px-14 rounded-md py-3 bg-[#A0BED3]">
            Register Now
          </button>
          <button className="font-space-grotesk hover:scale-105 transition-all font-light px-14 rounded-md py-3  border text-white border-white">
            Chekpoint 0
          </button>
        </div>
        <div className="mt-7 flex gap-5 flex-col">
          <h1 className="text-4xl text-white text-center">LIVE IN</h1>
          <div className="flex gap-4">
            <div className=" border-2 flex justify-center items-center flex-col rounded-xl py-4 px-5 border-[#A0BED3]">
              <h1 className=" font-bold text-2xl text-white">30</h1>
              <p className="text-xl text-[#A0BED3] font-bold">days</p>
            </div>
            <div className=" border-2 flex justify-center items-center flex-col rounded-xl py-4 px-5 border-[#A0BED3]">
              <h1 className=" font-bold text-2xl text-white">30</h1>
              <p className="text-xl text-[#A0BED3] font-bold">hours</p>
            </div>
            <div className=" border-2 flex justify-center items-center flex-col rounded-xl py-4 px-5 border-[#A0BED3]">
              <h1 className=" font-bold text-2xl text-white">30</h1>
              <p className="text-xl text-[#A0BED3] font-bold">mins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
