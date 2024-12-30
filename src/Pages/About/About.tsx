import HeaderText from "@/components/ui/HeaderText";
import graphic from "./Assets/graphic.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
	return (
		<div
			id="about"
			className="h-screen flex flex-col justify-center items-center gap-10"
		>
			<HeaderText text="ABOUT HACKTU 6.0" />
			<div className="flex justify-around items-center px-20 gap-20">
				<p className="text-white text-justify text-[1.75vw] lg:text-lg flex-grow">
					Creative Computing Society is back with HackTU, flagship event to
					be hosted at Thapar Institute of Engineering and Technology,
					Patiala and we're excited to see what new and exciting ideas will
					come out of this year's event. Whether you're a seasoned hacker
					or new to the game, there's something for everyone at HackTU.
					Development is more of an adrenaline rush than a mere feeling.
					The Computer world today is a race between software engineers
					striving to build bigger and better, and the demand of this
					modernistic era is to explore the innovative corners along with
					building solutions that are easy-to-use. Gear up your tech stack,
					brainstorm innovative ideas, ignite the team spirit and build
					solutions for real-time problems at HackTU, the biggest offline
					Hackathon of TIET!
				</p>
				<LazyLoadImage
					src={graphic}
					alt="about"
					className="w-[40vw] max-h-[450px] object-cover hidden lg:block flex-grow-0"
					visibleByDefault={true}
					effect="blur"
				/>
			</div>
		</div>
	);
};

export default About;
