import React, { useState } from "react";
import { MealsItem, BreakfastMenu, LunchMenu, DinnerMenu } from "../../Data/menu-data";

interface MenuItemCardProps {
    number: number;
    classname: string;
    title: string;
    breakFast: BreakfastMenu;
    lunch: LunchMenu;
    dinner: DinnerMenu;
    logo: string;
}

interface MenuItemsCardProps {
    number: number;
    title: string;
    vegMeals: MealsItem;
    nonVegMeals: MealsItem;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ number, classname, title, breakFast, lunch, dinner, logo }) => (
    <div className={`menu-item-card menu-item-card-${number} ${classname}`}>
        <div className="mic-banner-cont">
            <div className="mic-bc-img-cont">
                <img src={logo} alt="" />
            </div>
            <div className="mic-bc-text-cont">
                <p>
                    <span>{title}</span>
                    <span className="mic-bc-tc-black-color"> Meals</span>
                </p>
            </div>
        </div>
        <div className="mic-items-list">
            <div className="mic-il-breakfast mic-il-com">
                <p className="mic-il-breakfast-title mic-il-com-title">
                    <span>Breakfast </span>
                    <span className="mic-il-bt-black mic-il-ct-black">Menu</span>
                </p>
                <ul className="mic-il-b-list mic-il-com-list">
                    <li>
                        <p>
                            <span>Main: </span>
                            <span>{breakFast.main}</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>Mix: </span>
                            <span>{breakFast.mix}</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>Sides: </span>
                            <span>{breakFast.sides}</span>
                        </p> 
                    </li>
                </ul>
            </div>
            <div className="mic-il-lunch mic-il-com">
                <p className="mic-il-lunch-title mic-il-com-title">
                    <span>Lunch </span>
                    <span className="mic-il-lt-black mic-il-ct-black">Menu</span>
                </p>
                <ul className="mic-il-l-list mic-il-com-list">
                    <li>
                        <p>
                            <span>Main: </span>
                            <span>{lunch.main}</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>Mix: </span>
                            <span>{lunch.mix}</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>Sides: </span>
                            <span>{lunch.sides}</span>
                        </p>    
                    </li>
                    <li>
                        <p>
                            <span>Pickle: </span>
                            <span>{lunch.pickle}</span>
                        </p>
                    </li>
                </ul>
            </div>
            <div className="mic-il-dinner mic-il-com">
                <div className="mic-il-dinner-title mic-il-com-title">
                    <span>Dinner </span>
                    <span className="mic-il-dt-black mic-il-ct-black">Menu</span>
                </div>
                <ul className="mic-il-d-list mic-il-com-list">
                    <li>
                        <p>
                            <span>Main: </span>
                            <span>{dinner.main}</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>Mix: </span>
                            <span>{dinner.mix}</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>Sides: </span>
                            <span>{dinner.sides}</span>
                        </p>    
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

const MenuItemsCard: React.FC<MenuItemsCardProps> = ({ number, title, vegMeals, nonVegMeals }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const goToPrevSlide = () => {
        setCurrentIndex(currentIndex - 1);
    };

    return (
        <div className={`menu-items-card menu-items-card-${number}`}>
            <div className="menu-item-card-carousel">
                <div 
                    className="micc-wrapper"
                    style={{ transform: `translateX(calc(20px - ${currentIndex * 900}px)) translateY(-20px)` }}
                >
                    <MenuItemCard 
                        number={number}
                        classname={`menu-item-card-${number}-veg menu-item-card-veg`}
                        title="Vegetarian"
                        breakFast={vegMeals.breakfastMenu}
                        lunch={vegMeals.lunchMenu}
                        dinner={vegMeals.dinnerMenu}
                        logo={vegMeals.logo}
                    />
                    <MenuItemCard 
                        number={number}
                        classname={`menu-item-card-${number}-non-veg menu-item-card-non-veg`}
                        title="Non-Vegetarian"
                        breakFast={nonVegMeals.breakfastMenu}
                        lunch={nonVegMeals.lunchMenu}
                        dinner={nonVegMeals.dinnerMenu}
                        logo={nonVegMeals.logo}
                    />
                </div>
            </div>
            {currentIndex > 0 && (
                <button className="carousel-button prev" onClick={goToPrevSlide}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
            )}
            {currentIndex < 1 && (
                <button className="carousel-button next" onClick={goToNextSlide}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            )}
        </div>
    );
};

export const MobileMenuItemsCard: React.FC<MenuItemsCardProps> = ({ number, title, vegMeals, nonVegMeals }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const goToPrevSlide = () => {
        setCurrentIndex(currentIndex - 1);
    };

    return (
       <div className={`menu-items-card menu-items-card-${number}`}>
            <div className="menu-item-card-carousel">
                <div 
                    className="micc-wrapper"
                    style={{ transform: `translateX(calc(15px - ${currentIndex * 400}px)) translateY(-20px)` }}
                >
                    <MenuItemCard 
                        number={number}
                        classname={`menu-item-card-${number}-veg menu-item-card-veg`}
                        title="Vegetarian"
                        breakFast={vegMeals.breakfastMenu}
                        lunch={vegMeals.lunchMenu}
                        dinner={vegMeals.dinnerMenu}
                        logo={vegMeals.logo}
                    />
                    <MenuItemCard 
                        number={number}
                        classname={`menu-item-card-${number}-non-veg menu-item-card-non-veg`}
                        title="Non-Vegetarian"
                        breakFast={nonVegMeals.breakfastMenu}
                        lunch={nonVegMeals.lunchMenu}
                        dinner={nonVegMeals.dinnerMenu}
                        logo={nonVegMeals.logo}
                    />
                </div>
            </div>
            {currentIndex > 0 && (
                <button className="carousel-button prev" onClick={goToPrevSlide}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
            )}
            {currentIndex < 1 && (
                <button className="carousel-button next" onClick={goToNextSlide}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            )}
        </div>
    );
}

export default MenuItemsCard;