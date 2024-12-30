import HeaderText from "@/components/ui/HeaderText";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import prize_bg from "./Assets/prizes.png";
import global_bg from "/global_bg.png";

function AnotherPrize() {
	return (
		<div
			style={{ backgroundImage: `url(${global_bg})` }}
			className="bg-cover bg-center h-screen w-full flex flex-col justify-center items-center gap-16"
		>
			<HeaderText text="PRIZES" />
			<LazyLoadImage
				src={prize_bg}
				alt="prizes"
				className="object-cover w-[53vw]"
				effect="blur"
			/>
		</div>
	);
}

export default AnotherPrize;
