import React from "react";
import './footer.css';
import FooterLogo from "../../Images/footer-logo.png";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="flex-container">
                <div className="media-section">
                    <div className="img-cont">
                        <img src={FooterLogo} alt="Footer Logo" />
                    </div>
                    <div className="text-cont">
                        <h3>Home Made Guilt-Free Food</h3>
                        <h3>Delivered At Your Doorstep.</h3>
                    </div>
                    <div className="social-cont">
                        <div className="facebook">

                        </div>
                        <div className="x">

                        </div>
                        <div className="youtube">

                        </div>
                    </div>
                </div>
                <div className="quick-link-section">
                    <h3 className="title">Quick Links</h3>
                    <div className="quick-link-cont">
                        <div className="sec-1 in-sec">
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about-us">About Us</a></li>
                                <li><a href="#why-choose-us">Why Choose Us</a></li>
                                <li><a href="#menu">Menu</a></li>
                            </ul>
                        </div>
                        <div className="sec-2 in-sec">
                            <ul>
                                <li><a href="#our-story">Our Story</a></li>
                                <li><a href="#testimonials">Testimonials</a></li>
                                <li><a href="#achievements">Achievements</a></li>
                                <li><a href="#news">In the News</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="supported-link-section">
                    <h3 className="title">Supported Links</h3>
                    <ul>
                        <li><p>Privacy Policy</p></li>
                        <li><p>Cancellation & Refund Policy</p></li>
                        <li><p>Terms & Conditions</p></li>
                        <li><p>Shipping & Delivery Policy</p></li>
                    </ul>
                </div>
                <div className="contact-section">
                    <h3 className="title">Contact</h3>
                    <div className="contact-cont">
                        <div className="address">
                            <p>No.6, Radhamohan Street, Siruseri,</p>
                            <p>OMR, Chennai - 600042.</p>
                    </div>
                    <div className="phone">
                        <p>Phone:</p>
                        <p>+91 90946 96650</p>
                    </div>
                    <div className="email">
                        <p>Email:</p>
                        <p>induskitchen@gmail.com</p>
                    </div>
                    <div className="hours">
                        <p>Working Hours:</p>
                        <p>Kitchen Is Open Everyday</p>
                        <p>08:00 AM - 09:00 PM</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="copyrights-container">
                <h1>Copyright &copy; 2024 Indu's Kitchen All Rights Reserved.</h1>
                <h2>Developed By Akilesh A S</h2>
            </div>
        </footer>
    );
};

export default Footer;