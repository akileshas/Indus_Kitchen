import React from "react";
import MenuTitleCard from "./menu-title-card";
import MenuItemsCard from "./menu-item-card";
import { MenuPackageTitles, MenuPackageItems } from "../../Data/menu-data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import './menu.css';
import 'swiper/css';
import 'swiper/css/navigation';

const Menu = () => {
    return (
        <section id="menu">
            <div className="menu-container">
                <h1 className="menu-title">Menu</h1>
                <div className="menu-outer-flex-container">
                    <div className="menu-outer-carousel">
                    {/* <Swiper
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper menu-outer-carousel"
                    > */}
                        {
                            MenuPackageTitles.map((item, index) => (
                                // <SwiperSlide>
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
                                // </SwiperSlide>
                            ))
                        }
                    {/* </Swiper> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;