import HeaderText from "@/components/ui/HeaderText";
import graphic from "./Assets/graphic.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center gap-7 px-4 sm:px-6 lg:px-8"
    >
      <HeaderText text="ABOUT" />
      <div className="flex flex-col lg:flex-row justify-center items-center max-w-7xl mx-auto gap-8 lg:gap-16">
        <div className="flex-1 max-w-4xl">
          <p className="text-white text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light">
            <span className="font-medium text-[#D1FAE5]">
              Creative Computing Society
            </span>{" "}
            is back with{" "}
            <span className="font-bold text-[#A0BED3]">HackTU 7.0</span>, our
            flagship event hosted at Thapar Institute of Engineering and
            Technology, Patiala. We're excited to see what innovative ideas
            emerge from this year's event.
          </p>
          <br />
          <p className="text-white text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light">
            Whether you're a seasoned developer or new to hackathons, there's
            something for everyone. Development is more than just coding—it's an
            adrenaline rush that drives innovation. Today's tech world demands
            solutions that are both cutting-edge and user-friendly.
          </p>
          <br />
          <p className="text-white text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light">
            <span className="font-medium text-[#D1FAE5]">
              Gear up your tech stack
            </span>
            , brainstorm innovative ideas, ignite team spirit, and build
            solutions for real-world problems at{" "}
            <span className="font-bold text-[#A0BED3]">HackTU 7.0</span> - the
            biggest offline hackathon at TIET!
          </p>
        </div>
        <div className="flex-shrink-0 w-full lg:w-auto max-w-md lg:max-w-lg">
          <LazyLoadImage
            src={graphic}
            alt="HackTU 7.0 - Innovation and Technology"
            className="w-full h-auto max-h-96 lg:max-h-[450px] object-contain rounded-lg"
            visibleByDefault={true}
            effect="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
