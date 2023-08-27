import React from "react";

import Stats from "./Stats";
// import {HiLocationMarker} from 'react-icons/hi';
// import { motion } from "framer-motion";

import Img from "../../Oassets/Office5.jpg";
import "./AboutStyles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
  return (
    <section className="hero-wrapper ">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="heading">
            <h2>About Us</h2>
          </div>

          <div className="hero-title">
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>
          <div className="flexColStart hero-desc">
            <span className="secondaryText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </span>
            <span className="secondaryText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </span>
          </div>
          <div className="learnMore">
            {/* <a href="/about">Learn More <i class="fa-light fa-location-arrow"></i></a> */}
            <a href="/about">Learn More {<FontAwesomeIcon icon={faLocationArrow} style={{color: "#0193fd",}} />}</a>
          </div>

          <div className="flexCenter stats">
            <Stats start={8000} end={9000} duration={4} desc={"Premium Products"} />
            <Stats start={1950} end={2000} duration={4} desc={"Happy Custumers"} />
            <Stats end={24} desc={"Award Winning"} />
          </div>
        </div>

        {/* Right Side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src={Img} alt="House Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
