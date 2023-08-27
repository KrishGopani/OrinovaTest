// you need to import "Component" for extending
import { Component } from "react";
// importing Style.css
import "./NavbarStyles.css";
// to use "Link" you need to import it from "react-router-dom";
import { Link } from "react-router-dom";
// import data that is JSON
import { MenuItems } from "./MenuItems";

//logo
import Logo from "../Oassets/Logo.png";

class Navbar extends Component {
  // initializing the state
  state = { clicked: false };
  //handling event
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // if using "extends" then you need to use "render"
  render() {
    return (
      <nav className="NavbarItems">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Company Logo" />
          </a>
        </div>
        {/* <h1 className="navbar-logo">Orinova</h1> */}

        {/* hamburger and close icon
        <div className="menu-icons">
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </div> */}
        {/* here both the icon ar showing at ones so we use "state" */}

        {/* when either one is clicked other one disappeared */}
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        {/* in order to swap between nav-menu and nav-menu.active we need dynamic */}
        {/* <ul className="nav-menu"> */}
        {/* nav-menu.active dot is not allow is js */}
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {/* 11<li> */}
          {/* in html "a" but in react "Link" */}
          {/* for icon use "i" tag from "font awesome website" "https://fontawesome.com/icons" */}

          {/* using links is giving error so lets use "a" */}
          {/* 22 <Link> */}
          {/* this <i> came from website of font awesome */}
          {/* <i class="fa-solid fa-house"></i>Home */}
          {/* 22 </Link> */}

          {/* <a href="/"> */}
          {/* <i className="fa-solid fa-house"></i>Home */}
          {/* 11 </a></li> */}

          {/* mapping array with "a" */}
          {/* {MenuItems.map((item, index) => {
            return (
              // this key={index} is imp
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })} */}

          {/* mapping array with "Link" */}
          {MenuItems.map((item, index) => {
            return (
              // this key={index} is imp
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}

          {/* <button>Sign Up</button> */}
          <button className="nav_button"><a href="/contact">Contact Us</a></button>
        </ul>
      </nav>
    );
  }
}

// dont forget to export
export default Navbar;

// "Link" comes from a package name "react router dome" so to use "Link" install that package
// also if you are using "Link" in need to import "Routes" in App.js
