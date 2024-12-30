import HeaderText from "@/components/ui/HeaderText";
import graphic from "./Assets/graphic.png";

import p1 from "./Assets/DSC_0450.png"
import p2 from "./Assets/DSC_0443 (1) (1).png"
import p3 from "./Assets/DSC_0451.png"
import p4 from "./Assets/DSC_0442.png"
import p5 from "./Assets/DSC_0626.png"

const Gallery = () => {
	const images = [p1, p2, p3, p4, p5]; // Replace these paths with your image paths

	return (
		<div className="gallery-container bg-[#0F203E] mx-20">
			<HeaderText text="GALLERY" />
			<div className="carousel">
				{/* First row: Left to right */}
				<div className="carousel-row left-to-right">
					{images.concat(images).map((src, index) => (
						<img
							key={`ltr-${index * 23}`}
							src={src}
							alt={`GalleryImage${index + 1}`}
							className="carousel-image"
						/>
					))}
				</div>

				{/* Second row: Right to left */}
				<div className="carousel-row right-to-left">
					{images.concat(images).map((src, index) => (
						<img
							key={`rtl-${index * 23}`}
							src={src}
							alt={`GalleryImage${index + 1}`}
							className="carousel-image"
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
        .carousel-row img {
          width: 300px;
          height: 300px;
          margin: 0 10px;
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
