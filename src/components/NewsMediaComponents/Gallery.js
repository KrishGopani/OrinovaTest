import React from "react";
// import Header from "../../components/Header";
// import HeaderImage from "../../images/header_bg_3.jpg";

import "./gallery.css";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];
  for (let i = 1; i <= 6; i++) {
    images.push(require(`./gallery${i}.jpg`));
  }
  return (
    <>
      {/* <Header title="Our Gallery" image={HeaderImage}>
        Here you can see the gallery contents below, take a look and hope you
        enjoy, sure it's a masterpiece of excercise images.
      </Header> */}
      <section className="gallery">
      <div>
        <h1 style={{fontSize: "2rem", fontWeight: "bold", paddingBottom:"2rem"}}>Images</h1>
      </div>
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;