import HeaderText from "@/components/ui/HeaderText";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  imagesURLone,
  imagesURLtwo,
  placeholderImage,
} from "./GalleryImageData";
import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div id="gallery" className={styles.galleryContainer}>
      <HeaderText text="GALLERY" />
      <div className={styles.carousel}>
        {/* First row: Left to right */}
        <div className={`${styles.carouselRow} ${styles.leftToRight}`}>
          {imagesURLtwo.concat(imagesURLone).map((src, index) => (
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
          {imagesURLone.concat(imagesURLtwo).map((src, index) => (
            <div key={`ltr-${index + src}`}>
              <LazyLoadImage
                src={src}
                alt={`GalleryImage${index + 1}`}
                className={styles.carouselImage}
                effect="blur"
                placeholderSrc={placeholderImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
