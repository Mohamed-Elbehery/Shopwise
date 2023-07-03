//! Images
import logo_dark from '../assets/logo_dark.png';
import logo_light from '../assets/logo_light.png';
import eng from '../assets/eng.png';
import fn from '../assets/fn.png';
import us from '../assets/us.png';
import menu_banner1 from '../assets/menu_banner1.jpg'
import menu_banner2 from '../assets/menu_banner2.jpg'
import menu_banner3 from '../assets/menu_banner3.jpg'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import shop_banner from '../assets/shop_banner.jpg';
import shop_banner_img1 from '../assets/shop_banner_img1.jpg'
import shop_banner_img2 from '../assets/shop_banner_img2.jpg'
import tranding_img from '../assets/tranding_img.png'

export { logo_dark, logo_light, eng, fn , us, menu_banner1, menu_banner2, menu_banner3, shop_banner, banner1, banner2, banner3, shop_banner_img1, shop_banner_img2, tranding_img };

//! Fixed Data
export const categories = [
  {
    title: "Woman's",
    cats: ["Vestibulum Sed", "Donec Porttitor", "Donec Vitae Facilisis", "Curabitur", "Vivamus In Tortor"]
  },
  {
    title: "Men's",
    cats: ["Vestibulum Sed", "Donec Porttitor", "Donec Vitae Facilisis", "Curabitur", "Vivamus In Tortor"]
  },
  {
    title: "Kid's",
    cats: ["Vestibulum Sed", "Donec Porttitor", "Donec Vitae Facilisis", "Curabitur", "Vivamus In Tortor"]
  },
  {
    title: "Accessories's",
    cats: ["Vestibulum Sed", "Donec Porttitor", "Donec Vitae Facilisis", "Curabitur", "Vivamus In Tortor"]
  },
];

export const shopLayout = [
  {
    title: "Shop Page Layout",
    layouts: ["Shop List View", "Shop List Left Sidebar", "Shop List Right Sidebar", "Left Sidebar", "Right Sidebar", "Shop Load More"]
  },
  {
    title: "Other Pages",
    layouts: ["Cart", "Checkout", "My Account", "Wishlist", "Compare", "Order Completed"]
  },
  {
    title: "Product Pages",
    layouts: ["Default", "Left Sidebar", "Right Sidebar", "Thumbnails Left"]
  },
]

export const bannersContent = [
  {
    img: banner1,
    title: "Woman Fashion",
  },
  {
    img: banner2,
    sale: "50% off in all products",
    title: "Man Fashion"
  },
  {
    img: banner3,
    sale: "Taking your Viewing Experience to Next Level",
    title: "Summer Sale"
  }
]

export const collections = [
  {
    img: shop_banner_img1,
    sale: "Super Sale",
    title: "New Collection"
  },
  {
    img: shop_banner_img2,
    sale: "Sale 40% Off",
    title: "New Season"
  },
]