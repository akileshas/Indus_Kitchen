import React from "react";
import './news.css';
import { news } from "../../Data/news-data";
import NewsCard from "./newscard";

const News: React.FC = () => {
    return (
        <div id="news">
            <div className="title-news">
                <h1>In the News</h1>
            </div>
            <div className="news-container">
                {
                    news.map((item, index) => (
                        <NewsCard key={index} number={index} title={item.title} description={item.description} url={item.url} />
                    ))
                }
            </div>
        </div>
    );
};

export default News;