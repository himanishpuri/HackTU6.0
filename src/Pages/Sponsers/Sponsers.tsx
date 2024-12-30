import HeaderText from "@/components/ui/HeaderText";
import { sponsorData } from "./SponsorData";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Sponsers = () => {
	return (
		<div
			id="sponsors"
			className="sponsers-container py-10 w-[80vw] mx-[10vw] flex justify-center items-center flex-col"
		>
			<HeaderText text="SPONSERS" />
			<div className="grid w-full gap-6 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{sponsorData.map((sponsor, index) => (
					<div
						key={index + sponsor.company}
						className="sponsor-card group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
					>
						<LazyLoadImage
							src={sponsor.image}
							alt={sponsor.company}
							className="w-full h-64 p-5 object-contain group-hover:scale-110 transition-transform duration-300 bg-slate-400/80"
							effect="blur"
						/>
						<div className="info-overlay absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-center p-4 transition-opacity duration-300">
							<h3 className="text-lg font-bold">{sponsor.company}</h3>
							<p className="text-sm">{sponsor.info}</p>
							{/* <span className="mt-2 text-xs italic">{sponsor.name}</span> */}
						</div>
					</div>
				))}
			</div>

			{/* Styles */}
			<style>{`
        .sponsers-container {
			background: #0f203e;
			color: white;
			border-radius: 8px;
        }`}</style>
		</div>
	);
};

export default Sponsers;
