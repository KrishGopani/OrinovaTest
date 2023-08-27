import "./DestinationStyles.css";
import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/3.jpg";
import Mountain4 from "../../assets/4.jpg";
import DestinationData from "./DestinationData";

//create a function
const Destination = () => {
  return (
    <div className="destination">
      <h1>Lorem ipsum dolor</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      {/* <div className="first-des">
        <div className="des-text">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="image">
          <img alt="img" src={Mountain1} />
          <img alt="img" src={Mountain2} />
        </div>
      </div> */}
      <DestinationData
        heading="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        img1={Mountain1}
        img2={Mountain2}
        cName="first-des"
      />
      <DestinationData
        heading="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        img1={Mountain3}
        img2={Mountain4}
        cName="first-des-reverse"
      />
    </div>
  );
};

export default Destination;
