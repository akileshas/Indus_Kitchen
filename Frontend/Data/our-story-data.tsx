import React from "react";
import ScImg1 from "../Images/sc-img-1.png";
import ScImg2 from "../Images/sc-img-2.png";
import ScImg3 from "../Images/sc-img-3.png";
import ScImg4 from "../Images/sc-img-4.png";
import ScLbImg1 from "../Images/sc-lb-img-1.png";
import ScLbImg2 from "../Images/sc-lb-img-2.png";
import ScLbImg3 from "../Images/sc-lb-img-3.png";
import ScLbImg4 from "../Images/sc-lb-img-4.png";
import ScRbImg1 from "../Images/sc-rb-img-1.png";
import ScRbImg2 from "../Images/sc-rb-img-2.png";
import ScRbImg3 from "../Images/sc-rb-img-3.png";
import ScRbImg4 from "../Images/sc-rb-img-4.png";

export interface OurStoryItem {
    title: string
    description: string
    storyImageUrl: string
    leftBannerImageUrl: string
    rightBannerImageUrl: string
}

export const OurStoryContent: OurStoryItem[] = [
    {
        title: "Indhumathi: From Fashion to Flavor",
        description: "Indhumathi's journey is marked by passion, resilience, and unwavering quality.  After 6-7 years as a fashion designer, her love for cooking led her to start a food business in Coimbatore fifteen years ago.",
        storyImageUrl: ScImg1,
        leftBannerImageUrl: ScLbImg1,
        rightBannerImageUrl: ScRbImg1,
    },
    {
        title: "Passion for Culinary Arts",
        description: "Her culinary skills, combined with an unwavering dedication to taste and quality, quickly won the hearts of many. Her love for cooking, a passion since 2009, inspired her to venture into the culinary world.",
        storyImageUrl: ScImg2,
        leftBannerImageUrl: ScLbImg2,
        rightBannerImageUrl: ScRbImg2,
    },
    {
        title: "New Chapter",
        description: "In 2019, Moving to Chennai, bringing her flavors to a broader audience. During the COVID-19 pandemic, Indhumathi partnered with IBM and an NGO to provide meals for those in need in Chennai.",
        storyImageUrl: ScImg3,
        leftBannerImageUrl: ScLbImg3,
        rightBannerImageUrl: ScRbImg3,
    },
    {
        title: "Commitment to Excellence",
        description: "believing that the true essence of her culinary creations lies in using the finest ingredients and maintaining the highest standards, even if it means the prices are a bit higher.",
        storyImageUrl: ScImg4,
        leftBannerImageUrl: ScLbImg4,
        rightBannerImageUrl: ScRbImg4,
    },
]