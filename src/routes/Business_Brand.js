import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import ContactImg from "../assets/2.jpg";
import BusinessBrandImg from "../Oassets/BusinessBrand1.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

// create function
function BusinessBrand() {
  return (
    <>
      <Navbar />
      {/* <h1>This is Home</h1> */}
      <Hero
        // cName="hero"
        cName="hero-mid"
        heroImg={BusinessBrandImg}
        title="Business & Brand"
        text=""
        url=""
        btnClass="hide"
        buttonText=""
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default BusinessBrand;
