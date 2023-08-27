import React from "react";
import "./VideoStyles.css";
import design from "./design.jpg";

const video = () =>{
    return(
        <div class="container">
        <div>
        <h1 style={{fontSize: "2rem", fontWeight: "bold", paddingBottom:"2rem"}}>Video</h1>
        </div>
        <section class="categories" id="category">
            {/* <div class="category__detail">
                <div class="category__detail-description">
                    <h2>Select and learn about your preferred <span>categories</span> of podcast</h2>
                    <p>Join us as we delve into the latest news, trends, and insights on the topics that matter most to you. Whether you're interested in technology, science, or personal growth, we have something for everyone.</p>
                </div>
                <div class="category__detail-buttons">
                    <ul>
                        <li><button class="button__active">All</button></li>
                        <li><button class="button__not-active">Music</button></li>
                        <li><button class="button__not-active">Technology</button></li>
                        <li><button class="button__not-active">Business</button></li>
                        <li><button class="button__not-active">Motivational</button></li>
                        <li><button class="button__not-active">Health</button></li>
                    </ul>
                </div>
            </div> */}
            <div class="category__images">
                <div class="category__img">
                    <img src={design} alt=""/>
                    <div class="category__img-detail">
                        <h4>Product Designer</h4>
                        <span>12 episodes = 120 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src={design} alt=""/>
                    <div class="category__img-detail">
                        <h4>Product Designer</h4>
                        <span>12 episodes = 120 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src={design} alt=""/>
                    <div class="category__img-detail">
                        <h4>Product Designer</h4>
                        <span>12 episodes = 120 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src={design} alt=""/>
                    <div class="category__img-detail">
                        <h4>Product Designer</h4>
                        <span>12 episodes = 120 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src={design} alt=""/>
                    <div class="category__img-detail">
                        <h4>Product Designer</h4>
                        <span>12 episodes = 120 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src={design} alt=""/>
                    <div class="category__img-detail">
                        <h4>Product Designer</h4>
                        <span>12 episodes = 120 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src={design} alt=""/>
                    <div class="category__img-detail">
                        <h4>Product Designer</h4>
                        <span>12 episodes = 120 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src={design} alt=""/>
                    <div class="category__img-detail">
                        <h4>Product Designer</h4>
                        <span>12 episodes = 120 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                
                {/* <div class="category__img">
                    <img src="images/category-images/digital-marketing.jpg" alt=""/>
                    <div class="category__img-detail">
                        <h4>Digital Marketing</h4>
                        <span>10 episodes = 120 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src="images/category-images/business-strategy.jpg" alt=""/>
                    <div class="category__img-detail">
                        <h4>Business Strategy</h4>
                        <span>12 episodes = 120 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src="images/category-images/success-stories.jpg" alt=""/>
                    <div class="category__img-detail">
                        <h4>Success Stories</h4>
                        <span>16 episodes = 180 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src="images/category-images/self-improvement.jpg" alt=""/>
                    <div class="category__img-detail">
                        <h4>Self-Improvement</h4>
                        <span>10 episodes = 100 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src="images/category-images/startup-founder.jpg" alt=""/>
                    <div class="category__img-detail">
                        <h4>Startup Founder</h4>
                        <span>16 episodes = 180 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src="images/category-images/invest-money.jpg" alt=""/>
                    <div class="category__img-detail">
                        <h4>Investment</h4>
                        <span>12 episodes = 120 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div>
                <div class="category__img">
                    <img src="images/category-images/technology.jpg" alt=""/>
                    <div class="category__img-detail">
                        <h4>Technology</h4>
                        <span>10 episodes = 120 minutes</span>
                        <div class="category__img-link">
                            <i class="fa-solid fa-circle-play"></i>
                            <span>Play Now</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    </div>
    )
}

export default video;