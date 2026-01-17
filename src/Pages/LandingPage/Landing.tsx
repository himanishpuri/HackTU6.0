import earth from "./Assets/earth_graphic.webp";
import logo from "./Assets/hacktu_text.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Timer from "./Component/Timer";
import { useEffect } from "react";

function Landing() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex lg:flex-row justify-between items-center lg:items-start gap-7 overflow-hidden pt-10 lg:pt-0">
      <LazyLoadImage
        src={earth}
        alt="earth"
        className="lg:h-full lg:w-1/2 object-contain lg:block hidden rotate-12 max-h-[700px]"
        effect="blur"
        visibleByDefault={true}
      />

      <div className="py-12 flex flex-col mt-10 lg:mt-0 max-w-1/2 w-full justify-center items-center px-[3dvw]">
        <LazyLoadImage
          src={logo}
          alt="logo"
          className="object-contain w-full sm:h-40 md:h-52 lg:h-64"
          effect="blur"
        />

        <h1 className="self-center text-[#D9D9D9] text-4xl max-lg:text-3xl max-md:text-2xl font-space-grotesk">
          7-8th Feb 2026
        </h1>

        <div className="mt-10 flex flex-col gap-3 w-full items-center">
          <div className="w-full max-w-[320px] mx-auto">
            <div
              className="apply-button"
              data-hackathon-slug="hacktu7"
              data-button-theme="light"
              style={{ height: 44, width: "100%", maxWidth: 312 }}
            ></div>
          </div>
          
        </div>

        <div className="mt-7 flex gap-5 flex-col w-[80%]">
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default Landing;
