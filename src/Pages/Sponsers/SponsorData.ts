export const sponsorData = [
  {
    company: "ETHINDIA LOGO",
    info: "Community Partner",
    image:
      "https://res.cloudinary.com/dihvrhw07/image/upload/v1763642794/ethindia-dark_mf20kh.png",
    onclick: "https://ethindia.co",
  },
  {
    company: "DEVFOLIO LOGO",
    info: "Community Partner",
    image:
      "https://res.cloudinary.com/dihvrhw07/image/upload/v1763642740/Devfolio_Logo-Colored_edwgm5.png",
    onclick: "https://devfolio.co",
  },
  {
    company: "GitHub",
    info: "Hackathon Partner",
    image: "https://res.cloudinary.com/dqvlvgmno/image/upload/v1767411571/GitHub_Logo_pzoafw.png",
    onclick: "https://github.com",
  },

  //{
  //	company: "MLH",
  //	info: "Hackathon Partner",
  //	image: "https://res.cloudinary.com/dagyjqo2i/image/upload/f_auto,q_auto/v1/hacktu/wd91muzilrwoowdgwouh",
  //},
] as Sponsor[];

interface Sponsor {
  company: string;
  info: string;
  image: string;
  onclick?: string;
}
