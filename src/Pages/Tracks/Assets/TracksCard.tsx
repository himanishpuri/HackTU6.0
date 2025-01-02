import styles from "./TracksCard.module.css";
import { TrackDataTypes } from "./TracksData";

interface TracksCardProps {
	trackData: Readonly<TrackDataTypes>;
}

function TracksCard({ trackData }: Readonly<TracksCardProps>) {
	// const [isRotated, setIsRotated] = useState(false);
	// const handleLearnMoreClick = () => {
	// 	setIsRotated((isRotated) => !isRotated);
	// };
	// ${isRotated ? styles.rotateY180 : ""}
	return (
		<div className={styles.perspective1000}>
			<div
				className={`${styles.cardContainer} ${styles.transformStylePreserve3d} TO_PUT_HERE`}
			>
				{/* Front Side */}
				<div
					className={`${styles.cardSide} ${styles.frontSide} ${styles.backfaceHidden}`}
				>
					<img
						src={trackData.imageSrc}
						alt="foto"
						className={styles.cardImage}
					/>
					<h1 className={styles.cardTitle}>{trackData.title}</h1>
					<p className={styles.cardText}>{trackData.subTitle}</p>
					{/* <button
						className={styles.learnMore}
						// onClick={handleLearnMoreClick}
					>
						Learn More
					</button> */}
				</div>
				{/* Back Side */}
				<div
					className={`${styles.cardSide} ${styles.backSide} ${styles.backfaceHidden}`}
				>
					<p className={styles.cardText}>{trackData.description}</p>
					{/* <button
						className={styles.goBack}
						// onClick={handleLearnMoreClick}
					>
						Go Back
					</button> */}
				</div>
			</div>
		</div>
	);
}

export default TracksCard;
