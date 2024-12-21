import hamlet from "./assets/hamlet.png";
import network from "./assets/network_logo.svg";
import earth_network from "./assets/earth_network_logo.svg";
import gears from "./assets/gear_logo.svg";
import trophy from "./assets/trophy_logo.svg";

const reasonsData = [
	{
		img: network,
		imgAlt: "network",
		title: "Networking Opportunities",
		description: "Connect with Industry leaders and peers",
	},
	{
		img: gears,
		imgAlt: "gears",
		title: "Skill Development",
		description: "Enhance your coding and problem-solving skills",
	},
	{
		img: trophy,
		imgAlt: "trophy",
		title: "Exciting Prizes",
		description: "Win amazing rewards for your innovative solutions",
	},
	{
		img: earth_network,
		imgAlt: "earth_network",
		title: "Real-World Impact",
		description: "Create solutions that address pressing challenges",
	},
];

function Reasons({
	img,
	imgAlt,
	title,
	description,
}: Readonly<{
	img: string;
	imgAlt: string;
	title: string;
	description: string;
}>) {
	return (
		<div className="flex justify-start items-left w-full gap-5">
			<img
				src={img}
				alt={imgAlt}
			/>
			<div className="flex flex-col justify-between items-start">
				<h2 className="text-[#D1FAE5] text-lg">{title}</h2>
				<p className="text-sm text-wrap">{description}</p>
			</div>
		</div>
	);
}

function WhyParticipate() {
	return (
		<div className="bg-[#0F203E] text-white h-screen w-full flex justify-around items-center p-14">
			<div className="flex flex-col justify-between items-center gap-16">
				<h1 className="font-fugaz_one text-4xl text-[#D1FAE5]">
					WHY PARTICIPATE?
				</h1>
				<div className="flex flex-col justify-between items-baseline gap-2 min-w-[400px] font-open_sans">
					{reasonsData.map((reason) => (
						<Reasons
							key={reason.title}
							img={reason.img}
							imgAlt={reason.imgAlt}
							title={reason.title}
							description={reason.description}
						/>
					))}
				</div>
			</div>
			<img
				src={hamlet}
				alt="hamlet"
				className="w-[40dvw] aspect-square"
			/>
		</div>
	);
}

export default WhyParticipate;
