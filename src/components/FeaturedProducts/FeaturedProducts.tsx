import { useGetAllProductsQuery } from "../../features/api/productsApi";
import Product from "../Products/Product";
// React Slick CSS
import "./slick.css"; 
import "./slick-theme.css";
import Slider from "react-slick";
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

function PreviousArrow({className, style, onClick}: any) {
  return (
    <GoChevronLeft className={`${className} block w-8 h-8 text-black hover:text-secondary_light`} style={style} onClick={onClick} />
  )
}

function NextArrow({className, style, onClick}: any) {
  return (
    <GoChevronRight className={`${className} block w-8 h-8 text-black hover:text-secondary_light`} style={style} onClick={onClick} />
  )
}

const FeaturedProducts: React.FC = () => {
  const { data } = useGetAllProductsQuery('products');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
          infinite: true,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="products container flex flex-col mb-10">
      <h1 className="mx-auto font-bold text-[32px] text-secondary_dark">Featured Products</h1>
        <div className="products-container mt-12">
          <Slider {...settings}>
            {data?.filter((product) => product.category.includes('men') || product.category.includes('women') ).filter((_, index) => index < 4).map((product) => <Product key={product?.id} {...product} />)}
            {data?.filter((product) => product.category.includes('men') || product.category.includes('women') ).filter((_, index) => index < 4).map((product) => <Product key={product?.id+1} {...product} />)}
          </Slider>
        </div>
    </div>
  )
}

export default FeaturedProducts
