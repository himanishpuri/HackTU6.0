import HeaderText from "@/components/ui/HeaderText";
import track from "./Assets/tracks.png";
import global_bg from "/global_bg.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Tracks = () => {
	return (
		<div
			style={{ backgroundImage: `url(${global_bg})` }}
			className="bg-cover bg-center h-screen w-full flex flex-col justify-center items-center gap-20 pb-16"
		>
			<HeaderText text="TRACKS" />
			<LazyLoadImage
				src={track}
				alt="tracks"
				className="object-cover md:w-[60vw] w-[90vw]"
				effect="blur"
			/>
		</div>
	);
};

export default Tracks;
