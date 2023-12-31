import { Component } from "react";
import "./DestinationStyles.css";

// create function
class DestinationData extends Component {
  render(props) {
    return (
      <div className={this.props.cName}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
