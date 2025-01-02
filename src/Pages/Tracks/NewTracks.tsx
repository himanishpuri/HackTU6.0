// import TwinklingBackground from "@/TwinklingBackground";
import TracksCard from "./Assets/TracksCard";
import { data as trackData, TrackDataTypes } from "./Assets/TracksData";
import { useState } from "react";
import styles from "./NewTracks.module.css";
import HeaderText from "@/components/ui/HeaderText";
import { CircleChevronRight, CircleChevronLeft } from "lucide-react";

function NewTracks() {
	const [active, setActive] = useState(2); // Center slide index

	const handleNext = () => {
		setActive((prev) => (prev + 1) % trackData.length); // Loop back to the start
	};

	const handlePrev = () => {
		setActive((prev) => (prev - 1 + trackData.length) % trackData.length); // Loop back to the end
	};

	return (
		<div
			id="tracks"
			className="flex flex-col items-center justify-center"
		>
			<HeaderText text="TRACKS" />
			<div className={styles.slider}>
				<div className={styles.cardsContainer}>
					{trackData.map((track: TrackDataTypes, index: number) => {
						const offset = index - active;

						// Determine the visual position of the cards
						let styleClass = styles.hidden; // Default style for hidden cards
						if (offset === 0) styleClass = styles.active; // Center card
						else if (offset === -1 || offset === trackData.length - 1)
							styleClass = styles.prev; // Left card
						else if (offset === 1 || offset === -(trackData.length - 1))
							styleClass = styles.next; // Right card

						return (
							<div
								className={`${styles.cardWrapper} ${styleClass}`}
								key={track.title}
								style={{
									transform: `translateX(${offset * 270}px) scale(${
										1 - Math.abs(offset) * 0.2
									})`,
									opacity: Math.max(0.6, 1 - Math.abs(offset) * 0.4),
								}}
							>
								<TracksCard trackData={track} />
							</div>
						);
					})}
				</div>
				<CircleChevronLeft
					onClick={handlePrev}
					size={36}
					className={styles.prevButton}
				/>
				<CircleChevronRight
					onClick={handleNext}
					size={36}
					className={styles.nextButton}
				/>
			</div>
		</div>
	);
}

export default NewTracks;
