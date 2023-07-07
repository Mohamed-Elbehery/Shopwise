import { testimonials } from "../../constants"
import Testimonial from "./Testimonial"
// React Slick CSS
import "./slick.css"; 
import "./slick-theme.css";
import Slider from "react-slick";
import useSliderArrows from "../../hooks/useSliderArrows";

const Testimonials: React.FC = () => {
  const {NextArrow, PreviousArrow} = useSliderArrows();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    cssEase: "ease"
  }

  return (
    <section className="bg-testimonials pb-16">
      <div className="container testimonials-container">
        <h1 className="mx-auto font-roboto text-[32px] font-bold text-secondary_dark mt-20">Our Client Say!</h1>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => <Testimonial key={index} {...testimonial} />)}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
