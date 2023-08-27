import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import ContactImg from "../assets/2.jpg";
import CareerImg from "../Oassets/Career2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

// create function
function Career() {
  return (
    <>
      <Navbar />
      {/* <h1>This is Home</h1> */}
      <Hero
        // cName="hero"
        cName="hero-mid"
        heroImg={CareerImg}
        title="Career"
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

export default Career;
