import React from "react";
import './achievement.css';
import TNStartup from "../../Images/TN-startup.png";
import TheHindu from "../../Images/The-Hindu.png";
import StartupIndia from "../../Images/startup-india.png";
import Indulge from "../../Images/indulge.png";
import YourStory from "../../Images/yourstory.png";

const Achievements = () => {
    return (
        <section id="achievements">
            <h1 className="title-achievement">As Seen & Recognised On</h1>
            <div className="achievement-container">
                <div className="achievement-card">
                    <img src={TNStartup} alt="" />
                </div>
                <div className="achievement-card">
                    <img src={TheHindu} alt="" />
                </div>
                <div className="achievement-card">
                    <img src={StartupIndia} alt="" />
                </div>
                <div className="achievement-card">
                    <img src={Indulge} alt="" />
                </div>
                <div className="achievement-card">
                    <img src={YourStory} alt="" />
                </div>
            </div>
        </section>
    )
};

export default Achievements;