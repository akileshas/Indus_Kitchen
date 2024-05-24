import React from "react";
import './form.css';
import FormImg from "../../Images/Form.png";
import MobileFormImg from "../../Images/mobile-form.png"

const Form = () => {
    return (
        <div id="form">
            <div className="form-container">
                <div className="form-img-sec">
                    <img src={FormImg} alt="" />
                </div>
                <div className="mobile-form-img-sec">
                    <img src={MobileFormImg} alt="" />
                </div>
                <div className="form-text-sec">
                    <div className="form-title">
                        <h1>Let's Get Cooking</h1>
                        <p className="form-title-description">
                            <span>unlock a world of deliciousness,</span>
                            <span>let's chat Indian flavors!</span>
                        </p>
                    </div>
                    <div className="form-sec">
                        <form action={""}>
                            <div className="input-data">
                                <input className="form-input name" type="text" name="name" required/>
                                <div className="underline"></div>
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="input-data">
                                <input className="form-input city" type="text" name="city" required/>
                                <div className="underline"></div>
                                <label htmlFor="city">City</label>
                            </div>
                            <div className="input-data">
                                <input className="form-input phone" type="tel" name="phone" required/>
                                <div className="underline"></div>
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <div className="input-data">
                                <input className="form-input email" type="email" name="email" required/>
                                <div className="underline"></div>
                                <label htmlFor="email">Email Id</label>
                            </div>
                            <div className="input-data">
                                <textarea className="form-input message" name="message" required></textarea>
                                <div className="underline"></div>
                                <label htmlFor="message">Message</label>
                            </div>
                            <button className="form-button" type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;