import TracksCard from "./Assets/TracksCard";
import { data as trackData } from "./Assets/TracksData";
import { useState } from "react";
import styles from "./NewTracks.module.css";
import HeaderText from "@/components/ui/HeaderText";
import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import { TrackDataTypes } from "./Assets/TracksData";

function NewTracks() {
    const [active, setActive] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false); // State to track animation status

    // Duration of the CSS transition in milliseconds (matches 0.5s in CSS)
    const ANIMATION_DURATION = 500;

    const handleNext = () => {
        if (isAnimating) return; // Ignore clicks if currently animating

        setIsAnimating(true);
        setActive((prev) => (prev + 1) % trackData.length);

        setTimeout(() => {
            setIsAnimating(false);
        }, ANIMATION_DURATION);
    };

    const handlePrev = () => {
        if (isAnimating) return; // Ignore clicks if currently animating

        setIsAnimating(true);
        setActive((prev) => (prev - 1 + trackData.length) % trackData.length);

        setTimeout(() => {
            setIsAnimating(false);
        }, ANIMATION_DURATION);
    };

    return (
        <div
            id="tracks"
            className="flex flex-col items-center justify-center w-full py-10 overflow-hidden"
        >
            <HeaderText text="TRACKS" />

            <div className={styles.slider}>
                <div className={styles.cardsContainer}>
                    {trackData.map((track: TrackDataTypes, index: number) => {
                        let styleClass = styles.hidden;

                        const len = trackData.length;
                        const prevIndex = (active - 1 + len) % len;
                        const nextIndex = (active + 1) % len;

                        if (index === active) {
                            styleClass = styles.active;
                        } else if (index === prevIndex) {
                            styleClass = styles.prev;
                        } else if (index === nextIndex) {
                            styleClass = styles.next;
                        }

                        return (
                            <div
                                className={`${styles.cardWrapper} ${styleClass}`}
                                key={track.title}
                            >
                                <TracksCard trackData={track} />
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Buttons */}
                {/* Added 'disabled={isAnimating}' explicitly to buttons for good measure,
            though the handler logic handles it too. optional styling can be added for disabled state */}
                <button
                    onClick={handlePrev}
                    className={`${styles.navButton} ${styles.prevButton}`}
                    disabled={isAnimating}
                    style={{ cursor: isAnimating ? "not-allowed" : "pointer" }}
                >
                    <CircleChevronLeft size={40} />
                </button>
                <button
                    onClick={handleNext}
                    className={`${styles.navButton} ${styles.nextButton}`}
                    disabled={isAnimating}
                    style={{ cursor: isAnimating ? "not-allowed" : "pointer" }}
                >
                    <CircleChevronRight size={40} />
                </button>
            </div>
        </div>
    );
}

export default NewTracks;