import React from "react";
import './contact.css';
import QrCode from '../../Images/qr-code.jpg';

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact-title">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-container">
                <div className="qr-code">
                    <img src={QrCode} alt="" />
                </div>
                <div className="contact-details">
                    <div className="contact-location">
                        <div className="contact-icon">

                        </div>
                        <div className="contact-text">

                        </div>
                    </div>
                    <div className="contact-phone">
                        <div className="contact-icon">
                            
                        </div>
                        <div className="contact-text">
                            
                        </div>
                    </div>
                    <div className="contact-emial">
                        <div className="contact-icon">
                            
                        </div>
                        <div className="contact-text">
                            
                        </div>
                    </div>
                    <div className="contact-working-hours">
                        <div className="contact-icon">
                            
                        </div>
                        <div className="contact-text">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;