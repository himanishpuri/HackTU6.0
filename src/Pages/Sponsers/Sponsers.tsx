import HeaderText from "@/components/ui/HeaderText";
import { sponsorData } from "./SponsorData";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Sponsers = () => {
  return (
    <div
      id="sponsors"
      className="bg-transparent rounded-[8px] py-10 mx-[15vw] flex justify-center items-center flex-col"
    >
      <HeaderText text="SPONSORS" />
      <div className="grid w-fit mx-auto gap-6 mt-10 grid-cols-1 sm:grid-cols-2  max-sm:mt-10">
        {sponsorData.map((sponsor, index) => (
          <div
            key={index + sponsor.company}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-400/80 sm:odd:last:col-span-2 sm:odd:last:justify-self-center"
          >
            <LazyLoadImage
              src={sponsor.image}
              alt={sponsor.company}
              className="w-full h-64 p-5 object-contain group-hover:scale-110 transition-transform duration-300 bg-slate-400/80"
              effect="blur"
            />
            <button
              className="info-overlay absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-center p-4 transition-opacity duration-300"
              onClick={() => sponsor.onclick && window.open(sponsor.onclick)}
            >
              <h3 className="text-lg font-bold">{sponsor.company}</h3>
              <p className="text-sm">{sponsor.info}</p>
              {sponsor.onclick && (
                <p className="italic underline absolute bottom-5">Go to Site</p>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsers;
