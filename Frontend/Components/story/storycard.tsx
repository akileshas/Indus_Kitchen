import React from "react";

interface StoryCardProps {
    number: number;
    title: string;
    description: string;
    storyImageUrl: string;
    leftBannerImageUrl: string;
    rightBannerImageUrl: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ number, title, description, storyImageUrl, leftBannerImageUrl, rightBannerImageUrl }) => (
    <div className={`story-card story-card-${number}`}>
        <div className="story-card-left-banner">
            <img src={leftBannerImageUrl} alt="" />
        </div>
        <div className="story-card-container">
            <div className="story-card-img-cont">
                <img src={storyImageUrl} alt="" />
            </div>
            <div className="story-card-text-cont">
                <p className="story-card-title">{title}</p>
                <p className="story-card-description">{description}</p>
            </div>
        </div>
        <div className="story-card-right-banner">
            <img src={rightBannerImageUrl} alt="" />
        </div>
    </div>
);

export default StoryCard;