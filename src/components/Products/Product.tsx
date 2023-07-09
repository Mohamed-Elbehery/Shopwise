import { IProduct } from "../../interfaces"
import { AiFillStar } from 'react-icons/ai'
import { PiShoppingCart, PiShuffleAngular, PiMagnifyingGlassPlus, PiHeartStraight } from 'react-icons/pi'
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart, getTotal } from "../../features/slices/cartSlice"

const Product: React.FC<IProduct> = ({ title, price, image, rating, className, id, data }) => {
  const icons = [PiShoppingCart, PiShuffleAngular, PiMagnifyingGlassPlus, PiHeartStraight];
  const dispatch = useDispatch();

  return (
    <div className={`product relative group w-[255px] shadow-md shadow-gray-300 rounded-lg ${className}`}>
      {/* Image */}
      <div className="relative group-hover:after:bg-opacity-30 after:rounded-t-lg after:absolute after:inset-0 after:bg-black after:bg-opacity-0 after:transition-all after:duration-500 after:ease-out">
        <img className="w-full h-[285px] object-contain" src={image} alt={`${title}-img`} />
        {/* Icons */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-4 z-50">
          {icons.map((Icon, index) => {
            // Shopping Cart
            if(Icon == PiShoppingCart) return (
              <button key={index}>
                <Icon onClick={() => {
                    dispatch(addToCart(data));
                    dispatch(getTotal());
                }} className={`w-9 h-9 bg-white p-2 hover:text-white 
                hover:bg-primary transition-all duration-300 opacity-0 mt-4 group-hover:opacity-100 group-hover:mt-0 cursor-pointer`} />
              </button>
            )
            // Rest of Icons
            else return (
            <button key={index}>
              <Icon className={`w-9 h-9 bg-white p-2 hover:text-white hover:bg-primary 
              transition-all duration-300 opacity-0 mt-4 group-hover:opacity-100 group-hover:mt-0 cursor-pointer`} />
            </button>
            )
          })}
        </div>
      </div>
      <div className="p-3 pr-0">
        {/* Title */}
        <Link to={`${id}`} className="font-roboto font-bold text-base line-clamp-1 text-secondary_light cursor-pointer hover:text-primary transition duration-300">{title}</Link>
        {/* Price */}
        <div className="space-x-2">
          <span className="text-primary text-base font-poppins font-bold">${price}</span>
          <del className="font-poppins text-grey text-[14px]">${(price+13).toFixed(2)}</del>
          <span className="text-[#388E3C] text-[14px]">35% Off</span>
        </div>
        {/* Stars */}
        <div className="mt-[6px] flex items-center">
          {Array.from({length: rating.rate}).map((_, index) => <AiFillStar key={index} className="text-gold" />)}
          <span className="ml-2 text-grey text-[14px]">({rating.count})</span>
        </div>
      </div>
    </div>
  )
}

export default Product
