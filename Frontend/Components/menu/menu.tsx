import React, { useState } from "react";
import MenuTitleCard from "./menu-title-card";
import MenuItemsCard, { MobileMenuItemsCard } from "./menu-item-card";
import { MenuPackageTitles, MenuPackageItems } from "../../Data/menu-data";
import './menu.css';
import './mobile-meu.css';


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
            <div className="mobile-menu-container">
                <h1 className="mobile-menu-title">Menu</h1>
                <div className="mobile-menu-outer-flex-container">
                    <div className="mobile-menu-outer-carousel">
                        <div 
                            className="mobile-menu-outer-carousel-wrapper"
                            style={{
                                transform: `translate(0px, calc(15px - ${currentIndex * 1060}px))`
                            }}
                        >
                            {
                                MenuPackageTitles.map((item, index) => (
                                    <div className={`mobile-menu-card-container mobile-menu-card-container-${index+1}`}>
                                        <MenuTitleCard 
                                            number={index+1}
                                            startingPrice={item.startingPrice}
                                            title={item.title}
                                            description={item.description}
                                            subscribeUrl={item.subscribeUrl}
                                            backgroundImageUrl={item.backgroundImageUrl}
                                        />
                                        <MobileMenuItemsCard 
                                            number={index+1}
                                            title={item.title}
                                            vegMeals={MenuPackageItems[index].vegMeals}
                                            nonVegMeals={MenuPackageItems[index].nonVegMeals}
                                        />
                                    </div>
                                ))
                            }
                        </div>
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
        </section>
    );
};

export default Menu;