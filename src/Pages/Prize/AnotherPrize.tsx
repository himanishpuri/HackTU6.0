import HeaderText from "@/components/ui/HeaderText";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import prize_bg from "./Assets/prizes.png";

function AnotherPrize() {
  return (
    <div
      id="prizes"
      className="h-screen w-full flex flex-col justify-center items-center gap-16"
    >
      <HeaderText text="PRIZES" />
      <LazyLoadImage
        src={prize_bg}
        alt="prizes"
        className="object-cover w-[48vw] max-sm:w-[75vw]"
        effect="blur"
      />
    </div>
  );
}

export default AnotherPrize;
