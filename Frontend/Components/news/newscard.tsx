import React from "react";

interface NewsCardProps {
    number: number;
    title: string;
    description: string;
    url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ number, title, description, url }) => (
    <div className={`news-card news-${number}`}>
        <div className="news-title">
            {title}
        </div>
        <div className="news-description">
            {description}
        </div>
        <button className="news-button">
            <a href={url}>Read More</a>
        </button>
    </div>
);

export default NewsCard;