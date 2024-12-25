import NewNavbar from "./Pages/LandingPage/Component/Navbar/NewNavbar";
import Landing from "./Pages/LandingPage/Landing";
import WhyParticipate from "./Pages/WhyParticipate/WhyParticipate";
import Footer from "./Pages/Footer/Footer";
import Prize from "./Pages/Prize/Prize";
import Tracks from "./Pages/Prize/Tracks";
import HeaderText from "./components/ui/HeaderText";

function MainLayout() {
  return (
    <>
      <NewNavbar />
      <Landing />
      <WhyParticipate />
      <HeaderText text="ABOUT HACKTU 6.0" />
      <Prize />
      <Tracks />
      <Footer />
    </>
  );
}

export default MainLayout;
