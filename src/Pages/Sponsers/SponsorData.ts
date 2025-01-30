export const sponsorData = [
	{
		company: "Servosys",
		info: "Power Partner",
		image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/uc608lwzlqqdkqoviofs",
	},
	{
		company: "MLH",
		info: "Hackathon Partner",
		image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/wd91muzilrwoowdgwouh",
	},
	{
		company: "Plum",
		info: "Gifting Partner",
		image: "https://res.cloudinary.com/drvoynt07/image/upload/f_auto,q_auto/wthm2uyqmhjsoxkzfyfw",
	},
	{
		company: "EOI Loans",
		info: "Associate Partner",
		image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/jmifcymxrpkr7zwahcev",
	},
	{
		company: "Certopus",
		info: "Associate Partner",
		image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/frtu4kk5czcwy6lijvtb",
	},
	{
		company: "Devfolio",
		info: "Community Partner",
		image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/esftrd12ulhe4hdaciy0",
	},
	{
		company: "GitHub",
		info: "Community Partner",
		image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/hip0glk3sayvosphducy",
	},
	{
		company: "StandOut Stickers",
		info: "Community Partner",
		image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/zrzt59avkdxiaq9tkok2",
		onclick: "http://hackp.ac/mlh-StandOutStickers-hackathons",
	},
	{
		company: "Polygon",
		info: "Community Partner",
		image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/gsxteekngtlebqmgcx8u",
	},
	{
		company: "ETH India",
		info: "Community Partner",
		image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/ne3a8g6pchnrkbauoubt",
	},
	{
		company: "Aptos",
		info: "Community Partner",
		image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/wzhwf5ifkpvyzbaldyw1",
	},
	{
		company: "Commudle",
		info: "Community Partner",
		image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/nsfvsaqjnp8km81eiuko",
	},
	{
		company: "theDevArmy",
		info: "Community Partner",
		image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/oxyaes6em6ty82gqemdx",
		onclick: "https://thedevarmy.com/",
	},
] as Sponsor[];

interface Sponsor {
	company: string;
	info: string;
	image: string;
	onclick?: string;
}
