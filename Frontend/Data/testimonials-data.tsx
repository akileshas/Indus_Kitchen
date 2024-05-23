import React from "react";

export interface TestimonialItem {
    command: string;
    name: string;
    date: string;
}

export const testimonials: TestimonialItem[] = [
    {
        command: "I love supporting businesses that care about the environment. Indu’s Kitchen truly impressed me with their eco-friendly packaging. The food arrives fresh and perfectly presented, but the packaging is completely recyclable! It's refreshing to know that I can enjoy delicious Indian food without contributing to waste. Plus, the convenience of free delivery makes it a win-win situation.",
        name: "Priya S",
        date: "2023",
    },
    {
        command: "Recently ordered a feast from Indu’s Kitchen for a house party, and it was a huge hit with everyone! The variety of options was fantastic, catering to both vegetarians and meat-eaters. The food arrived on time, beautifully packaged, and everyone raved about the taste. It made party planning a breeze!",
        name: "Karthi A",
        date: "2024",
    },
    {
        command: "As a working professional, finding the time to cook elaborate Indian meals can be a challenge. Indu’s Kitchen has been a lifesaver! Their menu offers such a wide variety of delicious dishes, and everything arrives fresh and piping hot. Plus, the free delivery is a huge bonus. Now I can enjoy authentic Indian flavors at home without the hassle.",
        name: "Sarah",
        date: "2019",
    },
]
