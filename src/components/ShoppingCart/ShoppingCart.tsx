/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { PiShoppingCartThin } from "react-icons/pi";
import { clearItem, getTotal } from '../../features/slices/cartSlice';
import { RootState } from '../../features/store/store';
import { Link } from 'react-router-dom';

const ShoppingCart: React.FC<{className?: string}> = ({ className }) => {
  const [isCartHidden, setIsCartHidden] = useState<boolean>(false);
  const cart: any = useSelector<RootState>(state => state.cart);
  const dispatch = useDispatch();

  return (
    <li className='main_nav-link relative' onMouseEnter={() => setIsCartHidden(() => true)} onMouseLeave={() => setIsCartHidden(() => false)}>
      <button className='text-start'>
        <PiShoppingCartThin className="w-6 h-6" />
        <span className='cart-length'>{cart.cartItems?.length}</span>
      </button>
      <div className={`${isCartHidden ? "cart-displayed" : "cart-hidden"} ${className}`}>
        <div className={`cart-products w-full ${cart.cartItems.length > 2 ? "h-[220px] overflow-y-scroll" : "h-auto"}`}>
          {/* Products */}
          {cart.cartItems.map((product, index) =>
          <div key={index} className='flex p-[15px] items-start w-full'>
            {/* Image */}
            <div className='w-[80px] h-[80px]'>
              <img className='w-full h-full object-contain' src={product?.image} alt={product?.title} />
            </div>

            {/* Title & Price */}
            <div className='ml-1 flex-1 relative'>
              <Link to={`/${product.id}`} className='text-[14px] leading-[21px] font-sans font-bold text-secondary_dark line-clamp-1 capitalize mb-2 hover:text-primary transition duration-300 cursor-pointer w-full'>{product?.title}</Link>
              <span className='font-poppins font-medium text-secondary_light text-[16px] lowercase'>{product?.quantity} x {product?.price}</span>
              <div className="absolute -right-1 pl-1 bg-white top-0 text-black font-bold lowercase cursor-pointer text-base" ><button onClick={() => {
                dispatch(clearItem(product))
                dispatch(getTotal());
              }}>x</button></div>
            </div>
          </div>
          )}
        </div>

        {/* Total */}
        <p className='flex items-center justify-between border-t p-[15px] w-full capitalize font-poppins text-base font-semibold leading-[28px] text-[#333333] cursor-auto'>Subtotal: <span>${cart.cartTotalPrice.toFixed(2)}</span></p>

        {/* Buttons */}
        <div className='cart-btns flex items-center justify-around gap-3 mx-auto pt-[10px] pb-[20px]'>
          <button className="main-btn h-[43px] cart-btn flex items-center">View Cart</button>
          <button className="main-btn h-[43px] rounded flex items-center">Checkout</button>
        </div>
      </div>
  </li>
  )
}

export default ShoppingCart
