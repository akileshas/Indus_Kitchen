import React from "react";

interface TestimonialCardProps {
    number : number;
    command : string;
    name : string;
    date : string;
}

const TestimonialCard : React.FC<TestimonialCardProps> = ({ number, command, name, date }) => (
    <div className={`testimonial-card test-${number}`}>
        <div className="testimonial-command">
            <p>{command}</p>
        </div>
        <div className="testimonial-name-date">
            <p>{name}, Customer since {date}</p>
        </div>
    </div>
)

export default TestimonialCard