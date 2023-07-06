import { useGetAllProductsQuery } from "../../features/api/productsApi";
import Product from "../Products/Product";
// React Slick CSS
import "./slick.css"; 
import "./slick-theme.css";
import Slider from "react-slick";
import useSliderArrows from "../../hooks/useSliderArrows";

const FeaturedProducts: React.FC = () => {
  const { data, isFetching } = useGetAllProductsQuery('products');

  const {NextArrow, PreviousArrow} = useSliderArrows();

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
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
    <section className="products container flex flex-col mb-10">
      <h1 className="mx-auto font-bold text-[32px] text-secondary_dark">Featured Products</h1>
        <div className="products-container mt-12">
        {isFetching ? <p>Loading...</p> : 
        <Slider {...settings}>
          {data?.filter((product) => product.category.includes('men') || product.category.includes('women') ).filter((_, index) => index < 4).map((product) => <Product className="cursor-grab" key={product?.id} {...product} />)}
          {data?.filter((product) => product.category.includes('men') || product.category.includes('women') ).filter((_, index) => index < 4).map((product) => <Product className="cursor-grab" key={product?.id+1} {...product} />)}
        </Slider>}
        </div>
    </section>
  )
}

export default FeaturedProducts
