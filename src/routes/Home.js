import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/12_K.jpg";
import Destination from "../components/HomeComponents/Destination";
import Trip from "../components/HomeComponents/Trip";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HomeComponents/HeroCarousel";
import Info from "../components/HomeComponents/About"
import TCompany from "../components/HomeComponents/TCompany"
import Company from "../components/HomeComponents/Company";
import OtherWeb from "../components/HomeComponents/OtherWeb";

// create function
const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        url="/"
        btnClass="show"
        buttonText="Travel Plan"
      /> */}
      <div style={{ color: "#FFF" }}>
        <HeroCarousel
          cName="hero"
          // heroImg={HomeImg}
          // title="Your Journey Your Story"
          // text="Choose Your Favourite Destination"
          url="/"
          btnClass="show"
          buttonText="Travel Plan"
        />
      </div>
      <Info />
      {/* <TCompany /> */}
      <Company />
      <OtherWeb />
      <Destination />
      {/* <Trip /> */}
      <Footer />
    </>
  );
};

export default Home;

// <></> empty fragmet === div
// by importing "navbar" and using using "<Navbar/>" in each routes file
// we will be able to see nav bar on all the pages
