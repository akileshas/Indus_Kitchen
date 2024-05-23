import React from "react";
import './about.css';
import AboutLogo from "../../Images/aboutus.png";
import LeftSideBanner from "../../Images/About-Side-Banner.png";


const About = () => {
    return (
        <div id="about-us">
            <div className="left-side-banner">
                <img src={LeftSideBanner} alt="" />
            </div>
            <div className="about-container">
                <div className="about-logo">
                    <img src={AboutLogo} alt="" />
                </div>
                <h1 className="about-title">About Us</h1>
                <div className="about-description">
                    <p>Indu's Kitchen: Your culinary adventure through India. Explore diverse flavors, from creamy southern curries to fiery northern tandoor. We deliver the taste of tradition straight to your door.</p>
                </div>
                <button className="about-button">Let's Connect</button>
            </div>
        </div>
    );
}; 

export default About;