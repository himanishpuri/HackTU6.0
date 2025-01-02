import aiPoweredLending from "./aiPoweredLending.png";
import digitalFrontier from "./digitalFrontier.png";
import ecoCity from "./ecoCity.png";
import health from "./health.png";
import learnSphere from "./learnSphere.png";
import openSus from "./openSustainaibility.png";

export type TrackDataTypes = {
	imageSrc: string;
	title: string;
	subTitle: string;
	description: string;
};

export const data: TrackDataTypes[] = [
	{
		imageSrc: digitalFrontier,
		title: "DEFENDING THE DIGITAL FRONTIER",
		subTitle: "Innovative Solutions to Secure Modern Infrastructures",
		description:
			"With rapid digitization and the rise of connected devices, organizations face evolving cyber threats targeting critical infrastructure, financial systems, healthcare, and cloud services. Traditional security measures struggle against advanced threats like APTs, zero-day exploits, and sophisticated phishing attacks.",
	},
	{
		imageSrc: aiPoweredLending,
		title: "AI-POWERED LENDING",
		subTitle: "Revolutionizing LOS",
		description:
			"Develop AI-driven solutions to revolutionize the loan origination process in the BFSI sector. Enhance decision-making speed, ensure compliance, bolster data security, and streamline customer experiences. Create tools for predictive analytics, risk assessment, and automated workflows that integrate seamlessly into LOS platforms for a smarter, customer-centric lending ecosystem.",
	},
	{
		imageSrc: learnSphere,
		title: "LEARN SPHERE",
		subTitle: "Inclusive Education for All",
		description:
			"Develop a platform leveraging AI and adaptive technologies to provide personalized, scalable education for diverse learners. The solution should ensure accessibility, engagement, and inclusivity for students of all abilities, languages, and socioeconomic backgrounds, fostering equitable learning outcomes globally.",
	},
	{
		imageSrc: ecoCity,
		title: "ECO-CITY INNOVATOR",
		subTitle: "Sustainable Urban Living",
		description:
			"Create a tech-driven platform or tool to revolutionize urban sustainability. Focus on waste management, renewable energy integration, and reducing environmental footprints through novel methods and community-driven initiatives, paving the way for greener, smarter cities.",
	},
	{
		imageSrc: health,
		title: "HEALTH BEYOND LIMITS",
		subTitle: "Inclusive healthcare for sustainable living",
		description:
			"Develop innovative, tech-driven solutions to improve healthcare accessibility and quality for differently-abled individuals. Focus on assistive technologies, inclusive medical care, and community-based initiatives, fostering a more equitable healthcare system.",
	},
	{
		imageSrc: openSus,
		title: "OPEN SUSTAINABILITY CHALLENGE",
		subTitle: "Innovate Freely, Impact Globally",
		description:
			"Develop innovative, tech-driven solutions to promote sustainability across various sectors. Focus on areas such as energy efficiency, waste reduction, renewable energy, conservation, and sustainable resource management. Aim to create scalable, impactful solutions that drive environmental preservation and contribute to a more sustainable future.",
	},
];
