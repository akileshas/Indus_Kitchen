import React from "react";
import './footer.css';
import FooterLogo from "../../Images/footer-logo.png";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container-foot">
                <div className="footer-container">
                    <div className="media-section">
                        <div className="img-cont">
                            <img src={FooterLogo} alt="Footer Logo" />
                        </div>
                        <div className="text-cont">
                            <p>Home Made Guilt-Free Food</p>
                            <p>Delivered At Your Doorstep.</p>
                        </div>
                        <div className="social-cont">
                            <div className="facebook">
                                <a href="https://www.facebook.com/profile.php?id=61558270111264&mibextid=rS40aB7S9Ucbxw6v">
                                    <i className='bx bxl-facebook' ></i>
                                </a>
                            </div>
                            <div className="x">
                                <a href="">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </div>
                            <div className="youtube">
                                <a href="https://youtube.com/@indumathirajamani8397?si=JeTkDWH3ru7BPxrj">
                                    <i className='bx bxl-youtube' ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="quick-link-section">
                        <p className="title">Quick Links</p>
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
                        <p className="title">Supported Links</p>
                        <ul>
                            <li><p>Privacy Policy</p></li>
                            <li><p>Cancellation & Refund Policy</p></li>
                            <li><p>Terms & Conditions</p></li>
                            <li><p>Shipping & Delivery Policy</p></li>
                        </ul>
                    </div>
                    <div className="contact-section">
                        <p className="title">Contact</p>
                        <div className="contact-section-cont">
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
                    <p>Copyright &copy; 2024 Indu's Kitchen All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;