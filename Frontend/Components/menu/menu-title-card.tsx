import React from "react";

interface MenuTitleCardProps {
    number: number;
    startingPrice: number;
    title: string;
    description: string;
    subscribeUrl: string;
    backgroundImageUrl: string;
}

const MenuTitleCard: React.FC<MenuTitleCardProps> = ({ number, startingPrice, title, description, subscribeUrl, backgroundImageUrl }) => (
    <div className={`menu-title-card menu-title-card-${number}`}>
        <div 
            style={{ 
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} 
            className="menu-title-card-container"
        >
            <div className="menu-title-card-text-container">
                <p className="menu-title-price-description">
                    Starting @ {startingPrice}/Nos
                </p>
                <p className="menu-title-card-title">
                    {title}
                </p>
                {description && (
                    <p className="menu-title-card-description">
                        {description}
                    </p>
                )}
            </div>
            <button className="menu-title-card-subscribe-button">
                <a href={subscribeUrl}>Subscribe Now</a>
            </button>
        </div>
    </div>
)

export default MenuTitleCard;