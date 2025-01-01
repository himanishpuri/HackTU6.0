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
import NewPrize from "./Pages/Prize/NewPrize";

function MainLayout() {
	return (
		<div className="select-none">
			<NewNavbar />
			<TwinklingBackground backgroundColor="#192C4C">
				<Landing />
			</TwinklingBackground>
			<TwinklingBackground backgroundColor="#0F203E">
				<About />
				{/* <AnotherPrize /> */}
				<NewPrize/>
				<Tracks />
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
