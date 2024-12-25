import NewNavbar from "./Pages/LandingPage/Component/Navbar/NewNavbar";
import Landing from "./Pages/LandingPage/Landing";
import WhyParticipate from "./Pages/WhyParticipate/WhyParticipate";
import Footer from "./Pages/Footer/Footer";
import HeaderText from "./components/ui/HeaderText";

function MainLayout() {
  return (
    <>
      <NewNavbar />
      <Landing />
      <HeaderText text="ABOUT HACKTU 6.0" />
      <WhyParticipate />
      <Footer />
    </>
  );
}

export default MainLayout;
