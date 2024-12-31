import HeaderText from "@/components/ui/HeaderText";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { imagesURL, placeholderImage } from "./GalleryImageData";
import styles from "./Gallery.module.css";

const Gallery = () => {
	return (
		<div
			id="gallery"
			className={styles.galleryContainer}
		>
			<HeaderText text="GALLERY" />
			<div className={styles.carousel}>
				{/* First row: Left to right */}
				<div className={`${styles.carouselRow} ${styles.leftToRight}`}>
					{imagesURL.concat(imagesURL).map((src, index) => (
						<LazyLoadImage
							key={`ltr-${index + src}`}
							src={src}
							alt={`GalleryImage${index + 1}`}
							className={styles.carouselImage}
							effect="blur"
							placeholderSrc={placeholderImage}
						/>
					))}
				</div>

				<div className={`${styles.carouselRow} ${styles.rightToLeft}`}>
					{imagesURL.concat(imagesURL).map((src, index) => (
						<LazyLoadImage
							key={`ltr-${index + src}`}
							src={src}
							alt={`GalleryImage${index + 1}`}
							className={styles.carouselImage}
							effect="blur"
							placeholderSrc={placeholderImage}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
