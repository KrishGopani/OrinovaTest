import React, { useReducer } from "react";
// JSX
import HeroSlider, { Slide, Nav, SideNav, Overlay } from "hero-slider";
import Wrapper from "./UI/Wrapper/Wrapper";
import Title from "./UI/Title/Title";
import Subtitle from "./UI/Subtitle/Subtitle";

// Shape at the bottom of hero
import HeroBottomShape from "../HeroBottomShape";

//data of carousel
import HeroCarouselItem from "./HeroCarouselItem";

//ccs of hero
import "../HeroStyles.css";

// // Images
// const salta = "https://i.imgur.com/PWYw2wn.jpg";
// const scharbeutz = "https://i.imgur.com/jxtxPMu.jpg";
// const selvaDiValGardena = "https://i.imgur.com/jEdUeMb.jpg";
// const seoraksanMountains = "https://i.imgur.com/vZKOfl1.jpg";


const app = () => {
  return (
    // <HeroSlider
    //   slidingAnimation="left_to_right"
    //   orientation="horizontal"
    //   initialSlide={1}
    //   onBeforeChange={(previousSlide, nextSlide) =>
    //     console.log("onBeforeChange", previousSlide, nextSlide)
    //   }
    //   onChange={(nextSlide) => console.log("onChange", nextSlide)}
    //   onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
    //   style={{
    //     backgroundColor: "rgba(0, 0, 0, 0.33)"
    //   }}
    //   settings={{
    //     slidingDuration: 500,
    //     slidingDelay: 100,
    //     shouldAutoplay: true,
    //     shouldDisplayButtons: true,
    //     autoplayDuration: 5000,
    //     height: "100vh"
    //   }}
    // >
    // <div className="hero">
    <div className="back">
      <HeroSlider
        height={"100vh"}
        // autoplay //this auto play will have default (idk) timing
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.33)"
        }}
        autoplay={{ autoplayDuration: 4000 }}
        controller={{
          initialSlide: 1,
          slidingDuration: 1000,
          slidingDelay: 10,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide)
        }}
      >
        {/* anything you want to keep comman for all pages - text/image - put it inside overlay */}
        <Overlay>
          <HeroBottomShape />
          {/* <Wrapper>
          <Title>Basic Slider</Title>
          <Subtitle>Slides' background attachment set to fixed</Subtitle>
        </Wrapper> */}
        </Overlay>
        <div>


          {/* IT WAS HERE  */}


          {HeroCarouselItem.map((item, index) => {
            return (
              <Slide
                background={{
                  backgroundImageSrc: item.ImgSrc
                }}
              >
                <Wrapper>
                  <Title></Title>
                  <Subtitle></Subtitle>
                  {/* this key={index} is imp */}
                  <div className="hero" key={index}>
                    <div className="hero-text">
                      <h1>{item.Caption}</h1>
                      <p>{item.Text}</p>
                    </div>
                  </div>
                </Wrapper>
              </Slide>

            );
          })}

        </div>

        {/* this is the hori lines on top right */}
        {/* <SideNav
          position={{
            top: 0,
            right: 0
          }}
        /> */}

        {/* this will take the horizontal lines on top right to mid left */}
        {/* <SideNav
        isPositionedRight={false}
        position={{
          top: "50%",
          left: "0",
          transform: "translateY(-50%)"
        }} */}

        {/* this is for bottom nav bar  */}
        <Nav />
      </HeroSlider>
    </div>
  );
};


export default app;






// IT WAS HERE
          // {/* if not using map then jitne "<Slide></Slide>" utne slides create hoge */}
          // <Slide
          //   background={{
          //     // background img must be a const and not a url/string
          //     // backgroundImageSrc: salta
          //   }}
          // >
          //   <Wrapper>
          //     {/* <HeroBottomShape /> */}
          //     {/* "<Title></Title>" has a specific font */}
          //     {/* <Title>Salta - Argentina</Title> */}
          //     {/* "<Subtitle></Subtitle>" has a specific font */}
          //     {/* <Subtitle>Choose your Favourite Destination</Subtitle> */}
          //   </Wrapper>
          // </Slide>