import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface PrizeBoxProps {
	imgSrc: string;
	title: string;
	prizeMoney: string;
	borderColor?: string;
	className?: string;
}

function PrizeBox({
	imgSrc,
	title,
	prizeMoney,
	borderColor = "#D1FAE5",
	className = "",
}: Readonly<PrizeBoxProps>): JSX.Element {
	return (
		<div
			className={`w-44 h-44 rounded-lg bg-black/25 border border-[${borderColor}] flex flex-col flex-grow-0 flex-shrink-0 justify-start items-center ${className}`}
		>
			<LazyLoadImage
				src={imgSrc}
				alt="medal"
				className="h-1/2 flex-grow-0 flex-shrink-0"
				effect="blur"
				visibleByDefault={true}
			/>
			<h3 className="font-space_grotesx text-[#E5E7EB] h-min py-1">
				{title}
			</h3>
			<h2 className="font-tilt_warp text-[#D1FAE5] text-4xl flex-grow">
				{prizeMoney}
			</h2>
		</div>
	);
}

export default PrizeBox;
