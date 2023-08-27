import "./OtherWebStyles.css";

import React from 'react'
import { Link } from 'react-router-dom'

import img1 from "../../Oassets/BusinessBrand1.jpg"
import img2 from "../../Oassets/NewsMedia1.jpg"
import img3 from "../../Oassets/Career1.jpg"

const Home = () => {
    const posts = [
        {
            id: 1,
            title: 'Business & Brand',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            img: img1,
            url: "/Business&Brand"

        },
        {
            id: 2,
            title: 'News & Media',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            img: img2,
            url: "/News&Media"
        },
        {
            id: 3,
            title: 'Career',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            img: img3,
            url: "/career"
        }
        // {
        //   id: 4,
        //   title: 'Lorem ipsum dolor magna aliquip ex ea commod',
        //   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        //   img:
        //     'https://images.pexels.com/photos/1653287/pexels-photo-1653287.jpeg?auto=compress&cs=tinysrgb&w=1600',
        // },
        // {
        //     id: 5,
        //     title: 'Lorem ipsum dolor magna aliquip ex ea commod',
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        //     img:
        //       'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1600',
        //   },
        //   {
        //     id: 6,
        //     title: 'Lorem ipsum dolor magna aliquip ex ea commod',
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        //     img:
        //       'https://images.pexels.com/photos/551622/pexels-photo-551622.jpeg?auto=compress&cs=tinysrgb&w=1600',
        //   },
    ]
    return (
        <div>
            <div className="otherwebheading">

                <h1>Learn More About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>


            <div className="home">

                <div className="posts">
                    {posts.map((post) => (

                        <div className="post" key={post.id} >
                            {/* <div className={post.cName}> */}
                            <div className="img">
                                <img src={post.img} alt="" className="k_img" />
                            </div>
                            <div className="content">
                                {/* <Link className='link' to={`/post/${post.id}`}> */}
                                <h1 className="k_h1">{post.title}</h1>
                                {/* </Link> */}
                                <p className="k_p">{post.desc}</p>
                                <button className="k_button"><a href={post.url}>Read More..</a></button>
                            </div>
                            {/* </div> */}
                        </div>
                    ))}
                </div>
            </div >
        </div>
    )
}

export default Home