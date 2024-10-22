import p_img1 from "./p_img1.png";
import p_img3 from "./p_img3.png";
import p_img4 from "./p_img4.png";
import p_img5 from "./p_img5.png";

import logo from "./logo.png";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import profile_icon from "./profile_icon.png";
import search_icon from "./search_icon.png";
import menu_icon from "./menu_icon.png";
import cross_icon from "./cross_icon.png";
import checkarrow_icon from "./checkarrow_icon.png";
import checkarrow_icon_svg from "./checkarrow_icon_svg.svg";

export const assets = {
  logo,
  cart_icon,
  dropdown_icon,
  profile_icon,
  search_icon,
  bin_icon,
  menu_icon,
  cross_icon,
  checkarrow_icon,
  checkarrow_icon_svg,
};

export const products = [
  {
    _id: "aaaaa",
    name: "Carvão 10kg",
    description: "Carvão 15kg.",
    price: 32,
    image: [p_img1],
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaac",
    name: "Carvão 7kg",
    description: "Carvão 10k.",
    price: 25,
    image: [p_img3],

    sizes: ["S", "L", "XL"],
    date: 1716234545448,
    bestseller: true,
  },
  {
    _id: "aaaad",
    name: "Carvão 4kg",
    description: "Carvão 5kg.",
    price: 16,
    image: [p_img4],
    sizes: ["S", "M", "XXL"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "aaaae",
    name: "Carvão 3kg",
    description: "Carvão 3kg",
    price: 14,
    image: [p_img5],
    sizes: ["M", "L", "XL"],
    date: 1716622345448,
    bestseller: true,
  },
];
