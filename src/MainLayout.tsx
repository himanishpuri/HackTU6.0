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

function MainLayout() {
	return (
		<div className="bg-[#0F203E] select-none">
			<NewNavbar />
			<Landing />
			<About />
			<AnotherPrize />
			<Tracks />
			<Timeline />
			{/* <Prize /> */}
			<Gallery />
			<Sponsers />
			<Faq />
			<Footer />
		</div>
	);
}

export default MainLayout;
