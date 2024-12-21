import bg from "./Assets/landing_bg.png";
import earth from "./Assets/earth_graphic.png";
import logo from "./Assets/hacktu_logo.png";
import NewNavbar from "./Component/Navbar/NewNavbar";

function Landing() {
	return (
		<>
			<NewNavbar />
			<div
				className="bg-contain bg-repeat bg-center h-screen w-screen flex justify-between items-center gap-x-7 pr-10"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<img
					src={earth}
					alt="earth"
					className="h-full w-1/2 object-contain"
				/>
				<div className="flex flex-col h-3/4 max-w-1/2 gap-y-5 w-max justify-center items-center px-[3dvw]">
					<img
						src={logo}
						alt="logo"
						className="self-start w-64 aspect-square max-w-[50%] object-contain ml-[-50px]"
					/>
					<h1 className="self-start text-[#D9D9D9] text-[4vh] font-bold font-lexend">
						7-9th Feb 2025
					</h1>
					<p className="text-[#D9D9D9] text-[2.5vh] font-abel text-justify">
						Creative Computing Society is back with HackTU, flagship event
						to be hosted at Thapar Institute of Engineering and
						Technology, Patiala and we're excited to see what new and
						exciting ideas will come out of this year's event. Whether
						you're a seasoned hacker or new to the game, there's something
						for everyone at HackTU. Development is more of an adrenaline
						rush than a mere feeling. The Computer world today is a race
						between software engineers striving to build bigger and
						better, and the demand of this modernistic era is to explore
						the innovative corners along with building solutions that are
						easy-to-use. Gear up your tech stack, brainstorm innovative
						ideas, ignite the team spirit and build solutions for
						real-time problems at HackTU, the biggest offline Hackathon of
						TIET!
					</p>
				</div>
			</div>
		</>
	);
}

export default Landing;
