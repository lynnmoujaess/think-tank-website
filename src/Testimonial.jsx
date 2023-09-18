import React from "react";
import "./TestimonialStyles.css";

const Testimonial = (props) => {
    return (
        <div className="testimonial-div">
            <div className="testimonial-img-div">
                <img className="testimonial-img" src={props.img} alt=""/>
            </div>
            <div className="testimonial-text-div">
                <p className="testimonial-p">{props.text}</p>
                <h5 className="testimonial-name">{props.name}</h5>
                <h6 className="testimonial-position">{props.position}</h6>
            </div>
        </div>
    );
};

export default Testimonial;