import NewNavbar from "./Pages/LandingPage/Component/Navbar/NewNavbar";
import Landing from "./Pages/LandingPage/Landing";
import Footer from "./Pages/Footer/Footer";
import About from "./Pages/About/About";
import Timeline from "./Pages/Timeline/Timeline";
import Sponsers from "./Pages/Sponsers/Sponsers";
import Faq from "./Pages/FAQ/Faq";

import TwinklingBackground from "./TwinklingBackground";
import Separator from "./Pages/Seperator";
import PrizeRedesign from "./Pages/Prize/PrizeRedesign/PrizeRedesign";
import NewTracks from "./Pages/Tracks/NewTracks";

import NewPreLoader from "./Pages/PreLoader/NewPreLoader";

export default function MainLayout() {
  return (
    <div className="select-none">
      <NewPreLoader />
      <NewNavbar />

      <TwinklingBackground>
        {/* HERO SECTION */}
        <Landing />

        {/* Spacing between sections */}
        <Separator height="200px" className="sm:mt-10 mt-6" />

        <About />
        <Separator height="180px" className="sm:mt-10 mt-6" />

        <PrizeRedesign />
        <Separator height="250px" className="sm:mt-10 mt-6" />

        <NewTracks />
        <Separator height="180px" className="sm:mt-10 mt-6" />

        <Timeline />
        <Separator height="120px" className="sm:mt-10 mt-6" />

        <Sponsers />
        <Faq />
        <Footer />
      </TwinklingBackground>
    </div>
  );
}
