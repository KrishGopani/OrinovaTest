import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../../assets/5.jpg";
import Trip2 from "../../assets/8.jpg";
import Trip3 from "../../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>orem ipsum dolor</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="orem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <TripData
          image={Trip2}
          heading="orem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <TripData
          image={Trip3}
          heading="orem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
      </div>
    </div>
  );
}

export default Trip;
