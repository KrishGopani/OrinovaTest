import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import AboutImg from "../assets/night.jpg";
import AboutImg from "../Oassets/Office4.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUsComponents/AboutUs";
import Test from "../components/AboutUsComponents/Test"
import Ceo from "../components/AboutUsComponents/Ceo";
import TeamMain from "../components/AboutUsComponents/TeamMain";


// create function
function About() {
  return (
    <>
      <Navbar />
      {/* <h1>This is Home</h1> */}
      <Hero
        // cName="hero"
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us"
        text=""
        url=""
        btnClass="hide"
        buttonText=""
      />
      {/* <AboutUs /> */}
      <Test />
      <Ceo />
      {/* <TeamMain /> */}
      <Footer />
    </>
  );
}

export default About;
