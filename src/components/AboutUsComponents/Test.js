import "./TestStyles.css";

import mobileapp from "./AboutUsImg/mobileapp.png";
import webdesign from "./AboutUsImg/webdesign.png";
import marketing from "./AboutUsImg/marketing.png";
import branding from "./AboutUsImg/branding.png";
import circle from "./AboutUsImg/circle.svg";

export default function Example() {
    return (
        <section className="k_services">
            <div className="k_container">
                <div className="k_grid-wrapper">
                    <div className="k_grid-box mobileapp">
                        <img src={mobileapp} alt="img" />
                        <h1>Mobile App</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div className="k_grid-box webdesign">
                        <img src={webdesign} alt="img" />
                        <h1>Mobile App</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                    </div>
                    <div className="k_grid-box marketing">
                        <img src={marketing} alt="img" />
                        <h1>Mobile App</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                    </div>
                    <div className="k_grid-box branding">
                        <img src={branding} alt="img" />
                        <h1>Mobile App</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                    </div>
                </div>
                <div className="k_services-content">
                    <div className="k_circle">
                        <img src={circle} alt="img" className="k_circle-img"/>
                    </div>
                    <h1>Why Choose Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    {/* <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                    {/* <a href="/" className="ctn">Learn More</a> */}
                </div>
            </div>
        </section>
    );
}