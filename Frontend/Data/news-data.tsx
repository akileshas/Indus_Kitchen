import React from "react";

export interface NewsItem {
    title: string;
    description: string;
    url: string;
}

export const news: NewsItem[] = [
    {
        title: "Fueling Recovery: Indu’s Kitchen Partners with NGO and IBM",
        description: "Partnered with an NGO and IBM to provide nutritious, hygienic meals to COVID-19 patients at a local camp. This initiative ensured proper care and nourishment for their recovery.",
        url: ""
    },
    {
        title: "Bridging the Distance: Delivering Care with Every Bite",
        description: "Indu's Kitchen ensures elderly parents in India receive healthy, delicious home-cooked meals, catering to NRIs with hygienic, convenient food delivery options.",
        url: ""
    },
];
