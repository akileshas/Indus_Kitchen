import React from "react";
import './choose.css';
import ChooseImgOne from "../../Images/choose-img-1.png";
import ChooseImgTwo from "../../Images/choose-img-2.png";
import ChooseImgThree from "../../Images/choose-img-3.png";
import ChooseBannerOne from "../../Images/choose-banner-img-1.png";
import ChooseBannerTwo from "../../Images/choose-banner-img-2.png";
import LeafBanner from "../../Images/leaf-banner-img.png";

const Choose = () => {
    return (
        <div id="why-choose-us">
            <div className="title-choose">
                <h1>Why Choose Us?</h1>
            </div>
            <div className="right-banner-image-1">
                <img src={ChooseBannerOne} alt="" />
            </div>
            <div className="right-banner-image-2">
                <img src={ChooseBannerTwo} alt="" />
            </div>

            <div className="choose-container">
                <div className="choose-flex-container cfw-1">
                    <div className="choose-img-container">
                        <img src={ChooseImgOne} alt="" />
                    </div>
                    <div className="choose-text-container">
                        <p className="choose-title">A Journey Through Indian Flavors</p>
                        <p className="choose-description">Explore India on your plate! Our menu features authentic dishes from all regions, using fresh ingredients to deliver the flavors you crave. From fiery curries to coastal delights, we have something to tempt every taste bud.</p>
                        <div className="choose-leaf-banner">
                            <img src={LeafBanner} alt="" />
                        </div>
                    </div>
                </div>
                <div className="choose-flex-container cfw-2">
                    <div className="choose-img-container">
                        <img src={ChooseImgTwo} alt="" />
                    </div>
                    <div className="choose-text-container">
                        <p className="choose-title">Hygiene You Can Trust</p>
                        <p className="choose-description">Freshness guaranteed! Our state-of-the-art kitchen prioritizes hygiene with strict protocols and meticulous cleaning. Enjoy safe, delicious food delivered right to you.</p>
                        <div className="choose-leaf-banner">
                            <img src={LeafBanner} alt="" />
                        </div>
                    </div>
                </div>
                <div className="choose-flex-container cfw-3">
                    <div className="choose-img-container">
                        <img src={ChooseImgThree} alt="" />
                    </div>
                    <div className="choose-text-container">
                        <p className="choose-title">Sustainable Packaging & Convenient Delivery</p>
                        <p className="choose-description">Eco-friendly packaging keeps your food fresh and our planet happy. Plus, free delivery on all qualifying orders - deliciousness made accessible!</p>
                        <div className="choose-leaf-banner">
                            <img src={LeafBanner} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Choose;