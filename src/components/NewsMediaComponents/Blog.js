import React from "react";

import "./blog.css"

const blog = () => {
    return(
        <div class="container">
        <div class="blog" id="blog">
            <span class="blog__heading">OUR BLOG</span>
            <h2>Latest Blogs & News</h2>
            <div class="blog__images">
                <div class="blog__img blog__img-one">
                    <span>12 February 2023</span>
                    <p>Bringing You Upto Speed in Mobile App</p>
                </div>
                <div class="blog__img blog__img-two">
                    <span>12 February 2023</span>
                    <p>Bringing You Upto Speed in Mobile App</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default blog;