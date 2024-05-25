import React from "react";
import './small-screen.css';
import Logo from "../../Images/Logo.png";

const SmallScreen = () => {
    return (
        <div className="small-screen">
            <div className="small-screen-img-cont">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="small-screen-text-cont">
                <p className="ss-description">
                    <span>Screen size too small.</span>
                    <span>Please use a larger device.</span>
                </p>
            </div>
        </div>
    )
};

export default SmallScreen;