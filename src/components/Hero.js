import HeroBottomShape from "./HeroBottomShape";
import "./HeroStyles.css";

// create function
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="HeroImg" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>

        {/* HTML for shape in hero section */}
        <HeroBottomShape />
        {/* HTML for shape in hero section */}
      </div>
    </>
  );
}

export default Hero;

// "https://images.unsplash.com/photo-1504752042672-baa680fbc518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
