import React from "react";
import './testimonial.css'
import { testimonials } from "../../Data/testimonials-data";
import TestimonialCard from "./testimonial-card";

const Testimonial: React.FC = () => {
    return (
        <section id="testimonials">
            <div className="title-testimonial">
                <h1>Testimonials</h1>
            </div>
            <div className="subtitle-testimonial">
                <p>
                    <span>WHAT OUR CUSTOMERS </span> 
                    <span>HAVE TO SAY ABOUT US!</span>
                </p>
            </div>
            <div className="testimonials-container">
                {
                    testimonials.map((item, index) => (
                        <TestimonialCard key={index} number={index} command={item.command} name={item.name} date={item.date} />
                    ))
                }
            </div>
        </section>
    );
};

export default Testimonial;