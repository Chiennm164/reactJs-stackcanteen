import Alcohol from "../assets/images/options/Alcohol.jpg"
import American from "../assets/images/options/American.jpg"
import Asian from "../assets/images/options/Asian.jpg"
import Beverages from "../assets/images/options/Beverages.jpg"
import Chicken from "../assets/images/options/Chicken.jpg"
import Healthy from "../assets/images/options/Healthy.jpg"
import Pasta from "../assets/images/options/Pasta.jpg"
import Pizza from "../assets/images/options/Pizza.jpg"
import Smoothie from "../assets/images/options/Smoothie.jpg"
import Steak from "../assets/images/options/Steak.jpg"

import { CarouselItem } from "../models/carousel"
const listOptionCarousel: CarouselItem[] = [
              {
                            id: 1,
                            _name: "Bún",
                            type: ["breakfast", "lunch", "dinner"],
                            src: Beverages,

              },
              {
                            id: 2,
                            _name: "Cháo",
                            type: ["breakfast"],
                            src: American,


              },
              {
                            id: 3,
                            _name: "Phở",
                            type: ["breakfast", "lunch", "dinner"],
                            src: Chicken,

              },
              {
                            id: 4,
                            _name: "Cơm",
                            type: ["lunch", "dinner"],
                            src: Asian,
              },
              {
                            id: 5,
                            _name: "Tráng miệng",
                            type: ["breakfast", "dinner", "snacks"],
                            src: Healthy,
              },
              {
                            id: 6,
                            _name: "Bánh mỳ",
                            type: ["breakfast"],
                            src: Asian,
              },
              {
                            id: 7,
                            _name: "Ăn vặt",
                            type: ["breakfast", "snacks"],
                            src: Asian,
              },
              {
                            id: 8,
                            _name: "Lẩu",
                            type: ["lunch", "dinner"],
                            src: Alcohol,
              },
              {
                            id: 9,
                            _name: "Nướng",
                            type: ["lunch", "dinner"],
                            src: Pasta,
              },
              {
                            id: 10,
                            _name: "Bánh",
                            type: ["breakfast", "lunch", "dinner"],
                            src: Asian,
              },
              {
                            id: 11,
                            _name: "Pizza",
                            type: ["lunch", "dinner"],
                            src: Pizza,
              },
              {
                            id: 12,
                            _name: "Trà",
                            type: ["breakfast", "dinner", "snacks"],
                            src: Steak,
              },
              {
                            id: 13,
                            _name: "Cafe",
                            type: ["breakfast", "dinner", "snacks"],
                            src: Smoothie,
              }
]
export default listOptionCarousel;
