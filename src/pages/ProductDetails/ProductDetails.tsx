import { Link, useParams } from "react-router-dom"
import { useGetAllProductsQuery, useGetProductQuery } from "../../features/api/productsApi"
import { Loading, Location } from "../../components";
import { AiFillStar, AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { FaRotate } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiShuffleLight } from 'react-icons/pi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { GrFacebookOption, GrTwitter } from 'react-icons/gr';
import { TiSocialGooglePlus, TiSocialInstagram } from 'react-icons/ti';
import { useState, useEffect } from "react";
import Product from "../../components/Products/Product";
// React Slick CSS
import "./slick.css"; 
import "./slick-theme.css";
import Slider from "react-slick";
import useSliderArrows from "../../hooks/useSliderArrows";
import { useDispatch } from "react-redux";
import { addToCart, getTotal } from "../../features/slices/cartSlice";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isFetching } =  useGetProductQuery(`products/${id}`);
  const { data: products } =  useGetAllProductsQuery(`products`);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(1);
  const dispatch = useDispatch();

  const {NextArrow, PreviousArrow} = useSliderArrows();

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
          initialSlide: 0,
        }
      }
    ]
  };

  return (
    <section>
      {isFetching ? <Loading className="load-in" /> : <Loading className={"load-out"} />}
      <Location title={"Product Details"} />
      <div className="container product-details max-[767px]:flex-col max-[767px]:items-center max-[767px]:gap-6 pt-[100px] pb-[70px]">
        {/* Image - Left Side */}
        <div className="w-[522px] h-[580px] max-[1200px]:w-[450px] max-[1023px]:h-[498px] max-[575px]:h-auto max-[575px]:w-auto border p-[8px]">
          <img className="w-full h-full object-contain" src={data?.image} alt={data?.title} />
        </div>
        {/* Details - Right Side */}
        <div className="details pt-0 pr-0 pb-3 pl-8 flex-1 max-[575px]:pl-0">
          {/* Title */}
          <Link to={`${id}`} className="max-[1200px]:text-[22px] max-[767px]:text-[20px] max-[480px]:text-[18px] font-roboto font-medium text-[24px] leading-[29px] text-secondary_light cursor-pointer hover:text-primary transition duration-300">{data?.title}</Link>
          <div className="mt-2 flex items-center justify-between max-[500px]:flex-wrap">
            <div className="space-x-2 font-poppins">
              {/* Price */}
              <span className="text-primary text-[26px] leading-[39px] font-poppins font-bold">${data?.price}</span>
              <del className="font-poppins text-grey text-[14px]">${(data?.price+13).toFixed(2)}</del>
              <span className="text-[#388E3C] text-[14px]">35% Off</span>
            </div>
          {/* Stars */}
            <div className="mt-[6px] flex items-center">
              {Array.from({length: data?.rating.rate}).map((_, index) => <AiFillStar key={index} className="text-gold" />)}
              <span className="ml-2 text-grey text-[14px]">({data?.rating.count})</span>
            </div>
          </div>
          {/* Description */}
          <div className="mb-4 mt-2">
            <p className={`text-base leading-[28px] max-[480px]:text-[14px] text-grey mb-2 ${!showMore && "line-clamp-2"}`}>{data?.description}</p>
            <span className="text-blue-400 cursor-pointer hover:text-blue-800" onClick={() => setShowMore(!showMore)}>{!showMore ? "Show More..." : "Show Less"}</span>
          </div>
          {/* Services */}
          <div className="mt-2 space-y-2">
            <span className="flex items-center gap-2 text-secondary_light text-[14px]"><HiOutlineShieldCheck className="text-primary" /> 1 Year AL Jazeera Brand Warranty</span>
            <span className="flex items-center gap-2 text-secondary_light text-[14px]"><FaRotate className="text-primary" /> 30 Day Return Policy</span>
            <span className="flex items-center gap-2 text-secondary_light text-[14px]"><RiMoneyDollarCircleLine className="text-primary" /> Cash on Delivery available</span>
          </div>
          {/* Functionalities */}
          <div className="max-[1023px]:flex-col max-[1023px]:items-start max-[1023px]:gap-4 max-[767px]:flex-row max-[767px]:items-center max-[767px]:gap-4 max-[575px]:flex-col max-[575px]:items-start mt-4 flex items-center border-t border-b py-4">
            <div className="flex items-center">
              <button className="text-2xl font-medium p-2 bg-gray-200 rounded-full" onClick={() => setCounter(() => counter == 0 ? counter : counter - 1)}><BiMinus /></button>
              <span className="border mx-4 p-1 px-4">{counter}</span>
              <button className="text-2xl font-medium p-2 bg-gray-200 rounded-full" onClick={() => setCounter(() => counter + 1)}><BsPlus /></button>
            </div>
            <div className="flex items-center space-x-3 max-[767px]:mt-0">
              <button className="max-[1023px]:ml-0 main-btn rounded ml-4 max-[575px]:text-[14px] max-[575px]:py-[6px]" onClick={() => {
                for (let i = 0; i < counter; i++) dispatch(addToCart(data));
                dispatch(getTotal());
              }} >Add To Cart</button>
              <button><PiShuffleLight className="w-7 h-7 text-grey hover:text-primary transition duration-300" /></button>
              <button><IoMdHeartEmpty className="w-7 h-7 text-grey hover:text-primary transition duration-300" /></button>
            </div>
          </div>
          {/* Categories */}
          <div className="mt-4">
            <p className="text-grey font-poppins">SKU : <span className="text-secondary_dark capitalize">&nbsp;{data?.id}</span></p>
            <p className="text-grey font-poppins mt-2">Category : <span className="text-secondary_dark capitalize">&nbsp;{data?.category}</span></p>
            <p className="text-grey font-poppins mt-2">Tags : <span className="text-secondary_dark">&nbsp;{data?.category.split(" ").join(', ').replace("'s", "")}</span></p>
            <p className="text-grey font-poppins flex items-center gap-8 mt-6 max-[500px]:gap-2">Share :
              <span className="flex items-center gap-4">
                <button><GrFacebookOption className="hover:text-primary transition duration-300 cursor-pointer" /></button>
                <button><GrTwitter className="hover:text-primary transition duration-300 cursor-pointer" /></button>
                <button><TiSocialGooglePlus className="hover:text-primary transition duration-300 cursor-pointer w-6 h-6" /></button>
                <button><AiOutlineYoutube className="hover:text-primary transition duration-300 cursor-pointer w-5 h-5" /></button>
                <button><TiSocialInstagram className="hover:text-primary transition duration-300 cursor-pointer w-5 h-5" /></button>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="container related-products mb-[100px]">
        <h1 className="mr-auto font-roboto text-[28px] font-bold text-secondary_dark">Related Products</h1>
        <div className="w-full mr-auto ml-auto py-10">
          <Slider {...settings}>
            {products?.filter((item) => item?.category == data?.category).filter((_, index) => index < 5).map((product) => <Product data={product} key={product?.id} {...product} />)}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
