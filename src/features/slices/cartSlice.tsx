import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

if(!JSON.parse(localStorage.getItem('user'))) {
  localStorage.clear();
}

const initialState = {
  cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  cartTotalPrice: localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    //! Add
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item?.id == action.payload?.id);

      if(itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({...action.payload, quantity: 1});
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));

      toast.success('Added to The Cart', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },

    //! Clear
    clearItem: (state, action) => {
      const newCart = state.cartItems.filter((product) => product?.id !== action.payload?.id);
      state.cartItems = newCart;

      localStorage.setItem('cart', JSON.stringify(state.cartItems));

      toast.error('Deleted from The Cart', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },

    //! Get Total Price
    getTotal: (state) => {
      const { total } = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        cartTotal.total += +price * +quantity;

        return cartTotal;
      }, {
        total: 0
      })

      state.cartTotalPrice = total;
      localStorage.setItem('total', JSON.stringify(state.cartTotalPrice));
    }
  }
})

export const { addToCart, clearItem, getTotal } = cartSlice.actions;

export default cartSlice.reducer