import NewNavbar from "./Pages/LandingPage/Component/Navbar/NewNavbar";
import Landing from "./Pages/LandingPage/Landing";
import Footer from "./Pages/Footer/Footer";
// import Prize from "./Pages/Prize/Prize";
import Tracks from "./Pages/Prize/Tracks";
import About from "./Pages/About/About";
import Timeline from "./Pages/Timeline/Timeline";
import Gallery from "./Pages/Gallery/Gallery";
import Sponsers from "./Pages/Sponsers/Sponsers";
import Faq from "./Pages/FAQ/Faq";
import AnotherPrize from "./Pages/Prize/AnotherPrize";

import TwinklingBackground from "./TwinklingBackground";
import Separator from "./Pages/Seperator";
// import NewPrize from "./Pages/Prize/NewPrize";

function MainLayout() {
	return (
		<div className="select-none">
			<NewNavbar />
			<TwinklingBackground>
				<Landing />
				<Separator
					height="300px"
					className="max-sm:-mt-28 md:my-10"
				/>
				<About />
				<Separator
					height="100px"
					className="max-sm:-mt-72"
				/>
				<AnotherPrize />
				{/* <NewPrize /> */}
				<Separator
					height="100px"
					className="max-sm:-mt-64"
				/>
				<Tracks />
				<Separator
					height="100px"
					className="max-sm:-mt-10"
				/>
				<Timeline />
				{/* <Prize /> */}
				<Gallery />
				<Sponsers />
				<Faq />
				<Footer />
			</TwinklingBackground>
		</div>
	);
}

export default MainLayout;
