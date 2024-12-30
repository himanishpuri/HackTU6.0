import HeaderText from "@/components/ui/HeaderText";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { imagesURL, placeholderImage } from "./GalleryImageData";

const Gallery = () => {
	return (
		<div className="gallery-container bg-[#0F203E] mx-20">
			<HeaderText text="GALLERY" />
			<div className="carousel">
				{/* First row: Left to right */}
				<div className="carousel-row left-to-right">
					{imagesURL.concat(imagesURL).map((src, index) => (
						<LazyLoadImage
							key={`ltr-${index + src}`}
							src={src}
							alt={`GalleryImage${index + 1}`}
							className="carousel-image"
							effect="blur"
							placeholderSrc={placeholderImage}
						/>
					))}
				</div>

				<div className="carousel-row right-to-left">
					{imagesURL.concat(imagesURL).map((src, index) => (
						<LazyLoadImage
							key={`ltr-${index + src}`}
							src={src}
							alt={`GalleryImage${index + 1}`}
							className="carousel-image"
							effect="blur"
							placeholderSrc={placeholderImage}
						/>
					))}
				</div>
			</div>

			{/* Styles */}
			<style>{`
        .gallery-container {
          text-align: center;
          padding: 2rem 0;
          background: #0F203E;
          color: white;
          overflow: hidden;
        }
        .carousel {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 3rem; /* Add spacing between rows */
        }
        .carousel-row {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 200%; /* Ensures smooth infinite scrolling */
          animation-duration: 15s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-fill-mode: forwards;
          animation-play-state: running;
          animation-loop: true;
        }
        .carousel-image {
          width: 300px;
          height: 300px;
          margin: 0 180px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
        }
        .left-to-right {
          animation-name: scroll-ltr;
        }
        .right-to-left {
          animation-name: scroll-rtl;
        }
        .gallery-text {
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          letter-spacing: 1px;
          text-align: center;
          margin: 2rem 0;
        }
        @keyframes scroll-ltr {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
		</div>
	);
};

export default Gallery;
