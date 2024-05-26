import React from "react";
import MenuPackageImg1 from "../Images/menu-pack-1.png";
import MenuPackageImg2 from "../Images/menu-pack-2.png";
import MenuPackageImg3 from "../Images/menu-pack-3.png";
import MenuPackageImg4 from "../Images/menu-pack-4.png";
import MenuPackageImg5 from "../Images/menu-pack-5.png";
import MenuPackageImg6 from "../Images/menu-pack-6.png";
import VegLogo from "../Images/veg-logo.png";
import NonVegLogo from "../Images/non-veg-logo.png";

export interface MenuPackageTitle {
    startingPrice: number;
    title: string;
    description: string;
    subscribeUrl: string;
    backgroundImageUrl: string;
}

export interface BreakfastMenu {
    main: string;
    mix: string;
    sides: string;
}

export interface LunchMenu {
    main: string;
    mix: string;
    sides: string;
    pickle: string;
}

export interface DinnerMenu {
    main: string;
    mix: string;
    sides: string;
}

export interface MealsItem {
    breakfastMenu: BreakfastMenu;
    lunchMenu: LunchMenu;
    dinnerMenu: DinnerMenu;
    logo: string;
}

export interface MenuPackageItem {
    title: string;
    vegMeals: MealsItem;
    nonVegMeals: MealsItem;
}

export const MenuPackageTitles: MenuPackageTitle[] = [
    {
        startingPrice: 120,
        title: "North Indian Cuisine",
        description: "Combination For 3-6 Days/Week",
        subscribeUrl: "",
        backgroundImageUrl: MenuPackageImg1,
    },
    {
        startingPrice: 120,
        title: "South Indian Cuisine",
        description: "Combination For 3-6 Days/Week",
        subscribeUrl: "",
        backgroundImageUrl: MenuPackageImg2,
    },
    {
        startingPrice: 190,
        title: "International Cuisine",
        description: "Combination For 3-6 Days/Week",
        subscribeUrl: "",
        backgroundImageUrl: MenuPackageImg3,
    },
    {
        startingPrice: 120,
        title: "Healthy Planned Meal",
        description: "Combination For 3-6 Days/Week",
        subscribeUrl: "",
        backgroundImageUrl: MenuPackageImg4,
    },
    {
        startingPrice: 120,
        title: "Corporate / Party Plans",
        description: "",
        subscribeUrl: "",
        backgroundImageUrl: MenuPackageImg5,
    },
    {
        startingPrice: 120,
        title: "Packed Delights",
        description: "",
        subscribeUrl: "",
        backgroundImageUrl: MenuPackageImg6,
    },
]

export const MenuPackageItems: MenuPackageItem[] = [
    {
        title: "North Indian Cuisine",
        vegMeals: {
            breakfastMenu: {
                main: "Idly | Dosa | Pongal | Poori",
                mix: "Panner Curry | Sambar | Chutney",
                sides: "Vada | Sweet",
            },
            lunchMenu: {
                main: "Rice | Chapati",
                mix: "Sambar | Karakuzhambu | Moor  Kuzhambu | Lentil Kuzhambu",
                sides: "Fry | Kootu | Poriyal (Keerai / Veg)",
                pickle: "Mango | Lemon",
            },
            dinnerMenu: {
                main: "Idly | Upma",
                mix: "Potato Curry | Sambar | Chutney",
                sides: "Sweet",
            },
            logo: VegLogo,
        },
        nonVegMeals: {
            breakfastMenu: {
                main: "Idly | Dosa | Pongal | Poori",
                mix: "Chicken Curry | Mutton ",
                sides: "Vada | Sweet",
            },
            lunchMenu: {
                main: "Rice | Chapati",
                mix: "Meen Kuzhambu | Chicken Kuruma | Egg Kuruma",
                sides: "Sura Puttu | Egg Thokku | Fish Fry | Raitha (Cucumber / Onion)",
                pickle: "Mango | Lemon",
            },
            dinnerMenu: {
                main: "Idly | Upma",
                mix: "Potato Curry | Sambar | Chutney",
                sides: "Sweet",
            },
            logo: NonVegLogo,
        },
    },
    {
        title: "South Indian Cuisine",
        vegMeals: {
            breakfastMenu: {
                main: "Idly | Dosa | Pongal | Poori",
                mix: "Panner Curry | Sambar | Chutney",
                sides: "Vada | Sweet",
            },
            lunchMenu: {
                main: "Rice | Chapati",
                mix: "Sambar | Karakuzhambu | Moor  Kuzhambu | Lentil Kuzhambu",
                sides: "Fry | Kootu | Poriyal (Keerai / Veg)",
                pickle: "Mango | Lemon",
            },
            dinnerMenu: {
                main: "Idly | Upma",
                mix: "Potato Curry | Sambar | Chutney",
                sides: "Sweet",
            },
            logo: VegLogo,
        },
        nonVegMeals: {
            breakfastMenu: {
                main: "Idly | Dosa | Pongal | Poori",
                mix: "Chicken Curry | Mutton ",
                sides: "Vada | Sweet",
            },
            lunchMenu: {
                main: "Rice | Chapati",
                mix: "Meen Kuzhambu | Chicken Kuruma | Egg Kuruma",
                sides: "Sura Puttu | Egg Thokku | Fish Fry | Raitha (Cucumber / Onion)",
                pickle: "Mango | Lemon",
            },
            dinnerMenu: {
                main: "Idly | Upma",
                mix: "Potato Curry | Sambar | Chutney",
                sides: "Sweet",
            },
            logo: NonVegLogo,
        },
    },
    {
        title: "International Cuisine",
        vegMeals: {
            breakfastMenu: {
                main: "Idly | Dosa | Pongal | Poori",
                mix: "Panner Curry | Sambar | Chutney",
                sides: "Vada | Sweet",
            },
            lunchMenu: {
                main: "Rice | Chapati",
                mix: "Sambar | Karakuzhambu | Moor  Kuzhambu | Lentil Kuzhambu",
                sides: "Fry | Kootu | Poriyal (Keerai / Veg)",
                pickle: "Mango | Lemon",
            },
            dinnerMenu: {
                main: "Idly | Upma",
                mix: "Potato Curry | Sambar | Chutney",
                sides: "Sweet",
            },
            logo: VegLogo,
        },
        nonVegMeals: {
            breakfastMenu: {
                main: "Idly | Dosa | Pongal | Poori",
                mix: "Chicken Curry | Mutton ",
                sides: "Vada | Sweet",
            },
            lunchMenu: {
                main: "Rice | Chapati",
                mix: "Meen Kuzhambu | Chicken Kuruma | Egg Kuruma",
                sides: "Sura Puttu | Egg Thokku | Fish Fry | Raitha (Cucumber / Onion)",
                pickle: "Mango | Lemon",
            },
            dinnerMenu: {
                main: "Idly | Upma",
                mix: "Potato Curry | Sambar | Chutney",
                sides: "Sweet",
            },
            logo: NonVegLogo,
        },
    },
    {
        title: "Healthy Planned Meal",
        vegMeals: {
            breakfastMenu: {
                main: "Idly | Dosa | Pongal | Poori",
                mix: "Panner Curry | Sambar | Chutney",
                sides: "Vada | Sweet",
            },
            lunchMenu: {
                main: "Rice | Chapati",
                mix: "Sambar | Karakuzhambu | Moor  Kuzhambu | Lentil Kuzhambu",
                sides: "Fry | Kootu | Poriyal (Keerai / Veg)",
                pickle: "Mango | Lemon",
            },
            dinnerMenu: {
                main: "Idly | Upma",
                mix: "Potato Curry | Sambar | Chutney",
                sides: "Sweet",
            },
            logo: VegLogo,
        },
        nonVegMeals: {
            breakfastMenu: {
                main: "Idly | Dosa | Pongal | Poori",
                mix: "Chicken Curry | Mutton ",
                sides: "Vada | Sweet",
            },
            lunchMenu: {
                main: "Rice | Chapati",
                mix: "Meen Kuzhambu | Chicken Kuruma | Egg Kuruma",
                sides: "Sura Puttu | Egg Thokku | Fish Fry | Raitha (Cucumber / Onion)",
                pickle: "Mango | Lemon",
            },
            dinnerMenu: {
                main: "Idly | Upma",
                mix: "Potato Curry | Sambar | Chutney",
                sides: "Sweet",
            },
            logo: NonVegLogo,
        },
    },
    {
        title: "Corporate / Party Plans",
        vegMeals: {
            breakfastMenu: {
                main: "Idly | Dosa | Pongal | Poori",
                mix: "Panner Curry | Sambar | Chutney",
                sides: "Vada | Sweet",
            },
            lunchMenu: {
                main: "Rice | Chapati",
                mix: "Sambar | Karakuzhambu | Moor  Kuzhambu | Lentil Kuzhambu",
                sides: "Fry | Kootu | Poriyal (Keerai / Veg)",
                pickle: "Mango | Lemon",
            },
            dinnerMenu: {
                main: "Idly | Upma",
                mix: "Potato Curry | Sambar | Chutney",
                sides: "Sweet",
            },
            logo: VegLogo,
        },
        nonVegMeals: {
            breakfastMenu: {
                main: "Idly | Dosa | Pongal | Poori",
                mix: "Chicken Curry | Mutton ",
                sides: "Vada | Sweet",
            },
            lunchMenu: {
                main: "Rice | Chapati",
                mix: "Meen Kuzhambu | Chicken Kuruma | Egg Kuruma",
                sides: "Sura Puttu | Egg Thokku | Fish Fry | Raitha (Cucumber / Onion)",
                pickle: "Mango | Lemon",
            },
            dinnerMenu: {
                main: "Idly | Upma",
                mix: "Potato Curry | Sambar | Chutney",
                sides: "Sweet",
            },
            logo: NonVegLogo,
        },
    },
    {
        title: "Corporate / Party Plans",
        vegMeals: {
            breakfastMenu: {
                main: "Idly | Dosa | Pongal | Poori",
                mix: "Panner Curry | Sambar | Chutney",
                sides: "Vada | Sweet",
            },
            lunchMenu: {
                main: "Rice | Chapati",
                mix: "Sambar | Karakuzhambu | Moor  Kuzhambu | Lentil Kuzhambu",
                sides: "Fry | Kootu | Poriyal (Keerai / Veg)",
                pickle: "Mango | Lemon",
            },
            dinnerMenu: {
                main: "Idly | Upma",
                mix: "Potato Curry | Sambar | Chutney",
                sides: "Sweet",
            },
            logo: VegLogo,
        },
        nonVegMeals: {
            breakfastMenu: {
                main: "Idly | Dosa | Pongal | Poori",
                mix: "Chicken Curry | Mutton ",
                sides: "Vada | Sweet",
            },
            lunchMenu: {
                main: "Rice | Chapati",
                mix: "Meen Kuzhambu | Chicken Kuruma | Egg Kuruma",
                sides: "Sura Puttu | Egg Thokku | Fish Fry | Raitha (Cucumber / Onion)",
                pickle: "Mango | Lemon",
            },
            dinnerMenu: {
                main: "Idly | Upma",
                mix: "Potato Curry | Sambar | Chutney",
                sides: "Sweet",
            },
            logo: NonVegLogo,
        },
    },
]