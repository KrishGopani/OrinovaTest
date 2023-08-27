// import "./FooterStyles.css";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="top">
//         <div>
//           <h1>Trippy</h1>
//           <p>Choose your favourite destination</p>
//         </div>
//         <div>
//           <a href="/">
//             <i className="fa-brands fa-facebook-square"></i>
//             <i className="fa-brands fa-instagram-square"></i>
//             <i className="fa-brands fa-behance-square"></i>
//             <i className="fa-brands fa-twitter-square"></i>
//           </a>
//         </div>
//       </div>
//       <div className="bottom">
//         <div>
//           <h4>Project</h4>
//           <a href="/">Changelog</a>
//           <a href="/">Status</a>
//           <a href="/">License</a>
//           <a href="/">All Versions</a>
//         </div>
//         <div>
//           <h4>Community</h4>
//           <a href="/">Github</a>
//           <a href="/">Issues</a>
//           <a href="/">Project</a>
//           <a href="/">Twitter</a>
//         </div>
//         <div>
//           <h4>Help</h4>
//           <a href="/">Support</a>
//           <a href="/">Troubleshooting</a>
//           <a href="/">Contact Us</a>
//           <a href="/">All Versions</a>
//         </div>
//         <div>
//           <h4>Others</h4>
//           <a href="/">Terms of Service</a>
//           <a href="/">Privacy Policy</a>
//           <a href="/">License</a>
//           <a href="/">All Versions</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import "./FooterStyles.css";
import Logo from "../Oassets/Logo.png";

const Footer = () => {
  return (
    <>


      <div className="footer">


        <div className="uppertop">
          <div>
            <a href="/">
              <img src={Logo} alt="Company Logo" className="logofooter" />
            </a>
          </div>
        </div>
        <div className="top">
          <div>
            {/* <h1 style={{fontWeight: "bold",fontSize: "2em"}}>Orinova Foundation</h1> */}

            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div>
            <a href="/">
              <i className="fa-brands fa-facebook-square "></i>
              <i className="fa-brands fa-instagram-square "></i>
              <i className="fa-brands fa-behance-square "></i>
              <i className="fa-brands fa-twitter-square "></i>
            </a>
          </div>
        </div>
        <div className="bottom">
          <div>
            {/* <h4>Project</h4> */}
            <a href="/">Blogs</a>
            <a href="/">FAQs</a>
            <a href="/">Covid-19</a>
            <a href="/">Digital</a>
          </div>
          <div>
            {/* <h4>Help</h4> */}
            <a href="/">Download Our Brochure</a>
            <a href="/">Contact Us</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
          </div>

        </div>
        <div className="lowerBottom">
          <p>Copyright © 2023 Orinova Foundation. All Rights Reserved.</p>
          {/* <p className="p2">All Rights Reserved</p> */}
        </div>
      </div>
    </>

  );
};

export default Footer;
