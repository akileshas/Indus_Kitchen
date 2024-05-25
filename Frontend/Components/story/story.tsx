import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import StoryCard from "./storycard";
import { OurStoryContent } from "../../Data/our-story-data";
import { Navigation } from 'swiper/modules';
import './story.css';
import 'swiper/css';
import 'swiper/css/navigation';

const Story = () => {
    return (
        <section id="our-story">
            <div className="our-story-container">
                <h1 className="title-our-story">Our Story</h1>
                <div className="our-story-flex-container">
                    <Swiper 
                        navigation={true}
                        modules={[Navigation]}
                        centeredSlides={true}
                        className="our-story-carousel mySwiper"
                    >
                        {
                            OurStoryContent.map((item, index) => (
                                <SwiperSlide>
                                    <StoryCard
                                        key={index}
                                        number={index+1}
                                        title={item.title}
                                        description={item.description}
                                        storyImageUrl={item.storyImageUrl}
                                        leftBannerImageUrl={item.leftBannerImageUrl}
                                        rightBannerImageUrl={item.rightBannerImageUrl}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Story;