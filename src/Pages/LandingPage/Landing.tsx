import earth from "./Assets/earth_graphic.webp";
import logo from "./Assets/hacktu_text.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Timer from "./Component/Timer";

function Landing() {
	return (
		<div className="h-screen w-full flex justify-between items-center gap-7">
			<LazyLoadImage
				src={earth}
				alt="earth"
				className="h-full w-1/2 object-contain lg:block hidden rotate-12"
				effect="blur"
				visibleByDefault={true}
			/>
			<div className="flex flex-col mt-10 max-w-1/2 gap-2 w-max justify-center items-center px-[3dvw]">
				<LazyLoadImage
					src={logo}
					alt="logo"
					className="object-contain"
					effect="blur"
				/>
				<h1 className="self-center text-[#D9D9D9] text-4xl max-lg:text-3xl max-md:text-2xl font-space-grotesk">
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
					<Timer />
				</div>
			</div>
		</div>
	);
}

export default Landing;
