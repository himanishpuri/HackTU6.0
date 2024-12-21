import NewNavbar from "./Pages/LandingPage/Component/Navbar/NewNavbar";
import Landing from "./Pages/LandingPage/Landing";
import WhyParticipate from "./Pages/WhyParticipate/WhyParticipate";
import Footer from "./Pages/Footer/Footer";

function MainLayout() {
	return (
		<>
			<NewNavbar />
			<Landing />
			<WhyParticipate />
			<Footer />
		</>
	);
}

export default MainLayout;
