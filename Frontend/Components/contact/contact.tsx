import React from "react";
import './contact.css';
import QrCode from '../../Images/qr-code.jpg';
import Wave from "../../Images/wave-design.png";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-title">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-container">
                <div className="qr-code">
                    <img src={QrCode} alt="" />
                </div>
                <div className="contact-details">
                    <div className="contact-location contact-card">
                        <div className="contact-icon">
                            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="contact-text">
                            <p>No.6, Radhamohan Street, Siruseri,</p>
                            <p>OMR, Chennai - 600042.</p>
                        </div>
                    </div>
                    <div className="contact-phone contact-card">
                        <div className="contact-icon">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0501 5C15.0268 5.19057 15.9244 5.66826 16.6281 6.37194C17.3318 7.07561 17.8095 7.97326 18.0001 8.95M14.0501 1C16.0793 1.22544 17.9716 2.13417 19.4163 3.57701C20.8609 5.01984 21.7721 6.91101 22.0001 8.94M21.0001 16.92V19.92C21.0012 20.1985 20.9441 20.4742 20.8326 20.7293C20.721 20.9845 20.5574 21.2136 20.3521 21.4019C20.1469 21.5901 19.9046 21.7335 19.6408 21.8227C19.377 21.9119 19.0974 21.9451 18.8201 21.92C15.7429 21.5856 12.7871 20.5341 10.1901 18.85C7.77388 17.3147 5.72539 15.2662 4.19006 12.85C2.50003 10.2412 1.4483 7.27099 1.12006 4.18C1.09507 3.90347 1.12793 3.62476 1.21656 3.36162C1.30518 3.09849 1.44763 2.85669 1.63482 2.65162C1.82202 2.44655 2.04986 2.28271 2.30385 2.17052C2.55783 2.05833 2.8324 2.00026 3.11006 2H6.11006C6.59536 1.99522 7.06585 2.16708 7.43382 2.48353C7.80179 2.79999 8.04213 3.23945 8.11005 3.72C8.23668 4.68007 8.47151 5.62273 8.81006 6.53C8.9446 6.88792 8.97372 7.27691 8.89396 7.65088C8.81421 8.02485 8.62892 8.36811 8.36005 8.64L7.09006 9.91C8.51361 12.4135 10.5865 14.4864 13.0901 15.91L14.3601 14.64C14.6319 14.3711 14.9752 14.1858 15.3492 14.1061C15.7231 14.0263 16.1121 14.0555 16.4701 14.19C17.3773 14.5286 18.32 14.7634 19.2801 14.89C19.7658 14.9585 20.2095 15.2032 20.5266 15.5775C20.8437 15.9518 21.0122 16.4296 21.0001 16.92Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="contact-text contact-text-head">
                            <p>Phone</p>
                            <p>+91 90946 96650</p>
                        </div>
                    </div>
                    <div className="contact-emial contact-card">
                        <div className="contact-icon">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className="contact-text contact-text-head">
                            <p>Email</p>
                            <p>induskitchen@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-working-hours contact-card">
                        <div className="contact-icon">
                            <i className='bx bx-time-five'></i>
                        </div>
                        <div className="contact-text contact-text-head">
                            <p>Working Hours</p>
                            <p>Kitchen Is Open Everyday</p>
                            <p>08:00 AM - 09:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className="location-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5123.388594111368!2d80.2140398304357!3d12.83559628873315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a46abfa40cb%3A0x77373cd4691f82a7!2sMohamed%20Sathak%20A%20J%20College%20of%20Nursing!5e0!3m2!1sen!2sin!4v1716263322384!5m2!1sen!2sin"
                        width="446"
                        height="415"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="mobile-location-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5123.388594111368!2d80.2140398304357!3d12.83559628873315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a46abfa40cb%3A0x77373cd4691f82a7!2sMohamed%20Sathak%20A%20J%20College%20of%20Nursing!5e0!3m2!1sen!2sin!4v1716263322384!5m2!1sen!2sin"
                        width="310"
                        height="290"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="box-round">
                <img src={Wave} alt="" />
            </div>
        </section>
    );
};

export default Contact;