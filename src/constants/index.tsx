//! Icons
import { LiaShippingFastSolid } from 'react-icons/lia';
import { GiReceiveMoney } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';

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
import user_img1 from '../assets//clients/user_img1.jpg';
import user_img2 from '../assets//clients/user_img2.jpg';
import user_img3 from '../assets//clients/user_img3.jpg';
import user_img4 from '../assets//clients/user_img4.jpg';

export { logo_dark, logo_light, eng, fn , us, menu_banner1, menu_banner2, menu_banner3, shop_banner, banner1, banner2, banner3, shop_banner_img1, shop_banner_img2, tranding_img, user_img1, user_img2, user_img3, user_img4 };

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

export const testimonials = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
    name: "Daisy Lana",
    job: "Designer",
    img: user_img3,
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
    name: "Jhon Becker",
    job: "Designer",
    img: user_img4,
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
    name: "Lissa Castro",
    job: "Designer",
    img: user_img1,
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.",
    name: "Alden Smith",
    job: "Designer",
    img: user_img2,
  }
]

export const services = [
  {
    Icon: LiaShippingFastSolid,
    title: "Free Delivery",
    description: "If you are going to use of Lorem, you need to be sure there anything"
  },
  {
    Icon: GiReceiveMoney,
    title: "30 Day Return",
    description: "If you are going to use of Lorem, you need to be sure there anything"
  },
  {
    Icon: BiSupport,
    title: "24/7 Support",
    description: "If you are going to use of Lorem, you need to be sure there anything"
  }
]