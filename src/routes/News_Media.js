import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import ServiceImg from "../assets/night.jpg";
import NewsMediaImg from "../Oassets/NewsMedia1.jpg";
import Trip from "../components/HomeComponents/Trip";
import Footer from "../components/Footer";
import Gallery from "../components/NewsMediaComponents/Gallery"
import Blog from "../components/NewsMediaComponents/Blog"
// import Video from "../components/NewsMediaComponents/Video.js"
import Video from "../components/NewsMediaComponents/Video"


// create function
function News_Media() {
  return (
    <>
      <Navbar />
      {/* <h1>This is Home</h1> */}
      <Hero
        // cName="hero"
        cName="hero-mid"
        heroImg={NewsMediaImg}
        title="News & Media"
        text=""
        url=""
        btnClass="hide"
        buttonText=""
      />
      {/* <Trip /> */}
      <Gallery />
      <Video />
      <Blog />
      <Footer />
    </>
  );
}

export default News_Media;
