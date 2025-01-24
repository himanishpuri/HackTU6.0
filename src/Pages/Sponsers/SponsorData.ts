export const sponsorData = [
	{
		company: "Servosys",
		info: "Power Partner",
		image: "https://res.cloudinary.com/djahwsyyp/image/upload/f_auto,q_auto/v1/hacktu/oeghjc2v41icletcpkcx",
	},
	{
		company: "MLH",
		info: "Hackathon Partner",
		image: "https://res.cloudinary.com/djahwsyyp/image/upload/f_auto,q_auto/v1/hacktu/bx6lisjjn84ya8arss2q",
	},
	{
		company: "EOI Loans",
		info: "Associate Partners",
		image: "https://res.cloudinary.com/djahwsyyp/image/upload/f_auto,q_auto/v1/hacktu/hclrauwrptaipedept4a",
	},
	{
		company: "Certopus",
		info: "Associate Partners",
		image: "https://res.cloudinary.com/djahwsyyp/image/upload/f_auto,q_auto/v1/hacktu/jbmtiruz6crp36jc2dnc",
	},
	{
		company: "Devfolio",
		info: "Community Partners",
		image: "https://res.cloudinary.com/djahwsyyp/image/upload/f_auto,q_auto/v1/hacktu/gayruobmi5drbeih0f47",
	},
	{
		company: "GitHub",
		info: "Community Partners",
		image: "https://res.cloudinary.com/djahwsyyp/image/upload/f_auto,q_auto/v1/hacktu/tk0e3u1crv7kwfu8fpze",
	},
	{
		company: "StandOut Stickers",
		info: "Community Partners",
		image: "https://res.cloudinary.com/djahwsyyp/image/upload/f_auto,q_auto/v1/hacktu/k4ycag4j5v8dyi5qsgpl",
		onclick: "http://hackp.ac/mlh-StandOutStickers-hackathons",
	},
	{
		company: "Polygon",
		info: "Community Partners",
		image: "https://res.cloudinary.com/djahwsyyp/image/upload/f_auto,q_auto/v1/hacktu/jvxpukbfs91upwy00ybd",
	},
	{
		company: "ETH India",
		info: "Community Partners",
		image: "https://res.cloudinary.com/djahwsyyp/image/upload/f_auto,q_auto/v1/hacktu/t3fknrtyrpdq8pag6fty",
	},
	{
		company: "Aptos",
		info: "Community Partners",
		image: "https://res.cloudinary.com/djahwsyyp/image/upload/f_auto,q_auto/v1/hacktu/o1eq6qdcdkdznuk7q3up",
	},
	{
		company: "Commudle",
		info: "Community Partners",
		image: "https://res.cloudinary.com/djahwsyyp/image/upload/f_auto,q_auto/u3m9v44gvzxvj08nzdpo",
	},
	{
		company: "theDevArmy",
		info: "Community Partners",
		image: "https://res.cloudinary.com/djahwsyyp/image/upload/f_auto,q_auto/vzazhtfx9skrpd2k48cg",
		onclick: "https://thedevarmy.com/",
	},
	{
		company: "Plum",
		info: "Community Partners",
		image: "https://res.cloudinary.com/dc1tl4hol/image/upload/f_auto,q_auto/bfzflacb4onm67d1kpne",
	}
] as Sponsor[];

interface Sponsor {
	company: string;
	info: string;
	image: string;
	onclick?: string;
}
