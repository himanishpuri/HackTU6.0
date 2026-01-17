import styles from "./TracksCard.module.css";
import { TrackDataTypes } from "./TracksData";

interface TracksCardProps {
  trackData: Readonly<TrackDataTypes>;
}

function TracksCard({ trackData }: Readonly<TracksCardProps>) {
  return (
    <div className={styles.perspective1000}>
      <div
        className={`${styles.cardContainer} ${styles.transformStylePreserve3d}`}
      >
        {/* Front Side */}
        <div
          className={`${styles.cardSide} ${styles.frontSide} ${styles.backfaceHidden}`}
        >
          <img
            src={trackData.imageSrc}
            alt={trackData.title}
            className={styles.cardImage}
          />
          <h1 className={styles.cardTitle}>{trackData.title}</h1>
          <p className={styles.cardText}>{trackData.subTitle}</p>
        </div>

        {/* Back Side */}
        <div
          className={`${styles.cardSide} ${styles.backSide} ${styles.backfaceHidden}`}
        >
          <p className={styles.cardText}>{trackData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TracksCard;
