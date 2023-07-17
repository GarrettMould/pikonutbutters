import alm220_1 from '../src/images/alm220_1.jpg'
import alm380_1 from '../src/images/alm380_1.jpg'
import pb220_1 from '../src/images/pb220_1.jpg'
import alm220_2 from "../src/images/alm220_2.jpg"
import alm220_3 from "../src/images/alm220_3.jpg"
import pb220_2 from "../src/images/pb220_2.jpg"
import combo_1 from "../src/images/combo_1.jpg"
import pb_mini from "../src/images/pb_mini.png"
import alm_mini from "../src/images/alm_mini.png"
import cashew_mini from "../src/images/cashew_mini.png"
import piko_mini_combo from "../src/images/piko_mini_combo.png"
import coming_soon from "../src/images/coming_soon.png"
export var items = [
    { 
        id: 0,
        name: "PIKO MINI PEANUT BUTTER", 
        mobileLineOne: "PIKO MINI", 
        mobileLineTwo: "PEANUT BUTTER",
        size: "120g", 
        price: "35,000 vnd",
        images: [pb_mini], 
        description: "Our nut butter combo pack is the perfect way to satisfy all of your cravings! Enjoy the creamy goodness of our all-natural peanut butter and the rich flavor of our almond butter. With no added sugars or preservatives, these spreads are a nutritious and delicious addition to your pantry. Use them on toast, in smoothies, or enjoy them by the spoonful.", 
        ingredients: "Roasted Peanuts, Salt, Roasted Almonds, Coconut Oil", 
        nutrition: { 
            calories: "170", 
            total_fat: "16 grams", 
            sat_fat: "4 grams", 
            sugar: "< 1 gram", 
            protein: "7 grams"
        }
    },
    { 
        id: 1,
        name: "PIKO MINI ALMOND BUTTER", 
        mobileLineOne: "PIKO MINI", 
        mobileLineTwo: "ALMOND BUTTER",
        size: "120g", 
        price: "55,000 vnd",
        images: [alm_mini], 
        description: "Our nut butter combo pack is the perfect way to satisfy all of your cravings! Enjoy the creamy goodness of our all-natural peanut butter and the rich flavor of our almond butter. With no added sugars or preservatives, these spreads are a nutritious and delicious addition to your pantry. Use them on toast, in smoothies, or enjoy them by the spoonful.", 
        ingredients: "Roasted Peanuts, Salt, Roasted Almonds, Coconut Oil", 
        nutrition: { 
            calories: "180", 
            total_fat: "18 grams", 
            sat_fat: "3.5 grams", 
            sugar: "< 1 gram", 
            protein: "6 grams"
        }
    },
    { 
        id: 2,
        name: "PIKO MINI CASHEW BUTTER", 
        mobileLineOne: "PIKO MINI", 
        mobileLineTwo: "CASHEW BUTTER",
        size: "120g", 
        price: "45,000 vnd",
        images: [cashew_mini], 
        description: "Our nut butter combo pack is the perfect way to satisfy all of your cravings! Enjoy the creamy goodness of our all-natural peanut butter and the rich flavor of our almond butter. With no added sugars or preservatives, these spreads are a nutritious and delicious addition to your pantry. Use them on toast, in smoothies, or enjoy them by the spoonful.", 
        ingredients: "Roasted Peanuts, Salt, Roasted Almonds, Coconut Oil", 
        nutrition: { 
            calories: "170", 
            total_fat: "14 grams", 
            sat_fat: "3.5 grams", 
            sugar: "2 grams", 
            protein: "5 grams"
        }
    },
    { 
        id: 3,
        name: "ALL-NATURAL PEANUT BUTTER", 
        mobileLineOne: "ALL-NATURAL", 
        mobileLineTwo: "PEANUT BUTTER",
        size: "220g", 
        price: "60,000 vnd", 
        images: [pb220_1, pb220_2, combo_1],
        description: "Piko's all-natural peanut butter made with just two simple ingredients: peanuts and salt. With no added sugars or preservatives, this creamy and delicious peanut butter is perfect for those looking for a healthy and natural snack option. Enjoy it on toast, in a smoothie, or simply by the spoonful.", 
        ingredients: "Roasted Peanuts, Salt", 
        nutrition: { 
            calories: "170", 
            total_fat: "16 grams", 
            sat_fat: "4grams", 
            sugar: "< 1 gram", 
            protein: "7 grams"
        }
    }, 
    { 
        id: 4,
        name: "ALL-NATURAL PEANUT BUTTER", 
        mobileLineOne: "ALL-NATURAL", 
        mobileLineTwo: "PEANUT BUTTER",
        size: "380g", 
        price: "100,000 vnd", 
        images: [pb220_1, pb220_2, combo_1],
        description: "Piko's all-natural peanut butter made with just two simple ingredients: peanuts and salt. With no added sugars or preservatives, this creamy and delicious peanut butter is perfect for those looking for a healthy and natural snack option.", 
        ingredients: "Roasted Peanuts, Salt", 
        nutrition: { 
            calories: "170", 
            total_fat: "16 grams", 
            sat_fat: "4 grams", 
            sugar: "< 1 gram", 
            protein: "7 grams"
        }
    }, 
    { 
        id: 5,
        name: "ALL-NATURAL ALMOND BUTTER", 
        mobileLineOne: "ALL-NATURAL", 
        mobileLineTwo: "ALMOND BUTTER",
        size: "220g", 
        price: "125,000 vnd", 
        images: [alm220_1, alm220_2, alm220_3],
        description: "Say hello to our all-natural almond butter made with only two ingredients: almonds and coconut oil. This creamy and delicious spread is a nutritious addition to your breakfast or snack time. With no added sugars, our almond butter is a guilt-free indulgence that you can enjoy on toast, in smoothies, or all by itself.", 
        ingredients: "Roasted Almonds, Coconut Oil", 
        nutrition: { 
            calories: "180", 
            total_fat: "18 grams", 
            sat_fat: "3.5 grams", 
            sugar: "< 1 gram", 
            protein: "6 grams"
        }
    }, 
    {   
        id: 6, 
        name: "ALL-NATURAL ALMOND BUTTER", 
        mobileLineOne: "ALL-NATURAL", 
        mobileLineTwo: "ALMOND BUTTER",
        size: "380g", 
        price: "210,000 vnd", 
        images: [alm380_1, alm220_2, alm220_3],
        description: "Say hello to our all-natural almond butter made with only two ingredients: almonds and coconut oil. This creamy and delicious spread is a nutritious addition to your breakfast or snack time. With no added sugars, our almond butter is a guilt-free indulgence that you can enjoy on toast, in smoothies, or all by itself.", 
        ingredients: "Roasted Almonds, Coconut Oil", 
        nutrition: { 
            calories: "180", 
            total_fat: "18 grams", 
            sat_fat: "3.5 grams", 
            sugar: "< 1 gram", 
            protein: "6 grams"
        }
    }, 
    { 
        id: 7,
        name: "PIKO MINI COMBO PACK", 
        mobileLineOne: "PIKO MINI", 
        mobileLineTwo: "COMBO PACK",
        size: "120g", 
        price: "130,000 vnd",
        images: [piko_mini_combo], 
        description: "Our nut butter combo pack is the perfect way to satisfy all of your cravings! Enjoy the creamy goodness of our all-natural peanut butter and cashew butter, as well as the rich flavor of our almond butter. With no added sugars or preservatives, these spreads are a nutritious and delicious addition to your pantry.", 
        ingredients: "Roasted Peanuts, Roasted Almonds, Roasted Cashews, Coconut Oil, Salt", 
        nutrition: { 
            calories: "170", 
            total_fat: "16 grams", 
            sat_fat: "4grams", 
            sugar: "< 1 gram", 
            protein: "7 grams"
        }
    },
    { 
        id: 8,
        name: "PIKO 220G COMBO PACK", 
        mobileLineOne: "PIKO 220G", 
        mobileLineTwo: "COMBO PACK",
        size: "220g", 
        price: "180,000 vnd",
        images: [combo_1], 
        description: "Our nut butter combo pack is the perfect way to satisfy all of your cravings! Enjoy the creamy goodness of our all-natural peanut butter and the rich flavor of our almond butter. With no added sugars or preservatives, these spreads are a nutritious and delicious addition to your pantry. Use them on toast, in smoothies, or enjoy them by the spoonful.", 
        ingredients: "Roasted Peanuts, Salt, Roasted Almonds, Coconut Oil", 
        nutrition: { 
            calories: "170", 
            total_fat: "10 grams", 
            sat_fat: "1.4 grams", 
            sugar: "7 gram", 
            protein: "4 grams"
        }
    },
    
]