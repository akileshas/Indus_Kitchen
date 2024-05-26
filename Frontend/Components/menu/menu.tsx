import React, { useState } from "react";
import MenuTitleCard from "./menu-title-card";
import MenuItemsCard from "./menu-item-card";
import { MenuPackageTitles, MenuPackageItems } from "../../Data/menu-data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import './menu.css';
import 'swiper/css';
import 'swiper/css/navigation';

const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const goToPrevSlide = () => {
        setCurrentIndex(currentIndex - 1);
    };

    return (
        <section id="menu">
            <div className="menu-container">
                <h1 className="menu-title">Menu</h1>
                <div className="menu-outer-flex-container">
                    <div className="menu-outer-carousel">
                        <div 
                            className="menu-outer-carousel-wrapper"
                            style={{
                                transform: `translateY(-${currentIndex * 400}px)`
                            }}
                        >
                            {
                                MenuPackageTitles.map((item, index) => (
                                    <div className={`menu-card-container menu-card-container-${index+1}`}>
                                        <MenuTitleCard 
                                            number={index+1}
                                            startingPrice={item.startingPrice}
                                            title={item.title}
                                            description={item.description}
                                            subscribeUrl={item.subscribeUrl}
                                            backgroundImageUrl={item.backgroundImageUrl}
                                        />
                                        <MenuItemsCard 
                                            number={index+1}
                                            title={item.title}
                                            vegMeals={MenuPackageItems[index].vegMeals}
                                            nonVegMeals={MenuPackageItems[index].nonVegMeals}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        {currentIndex !== 0 && (
                            <div onClick={goToPrevSlide} className="moc-prev-button">
                                <i className="fa-solid fa-chevron-up"></i>
                            </div>
                        )}
                        {currentIndex !== 5 && (
                            <div onClick={goToNextSlide} className="moc-next-button">
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;