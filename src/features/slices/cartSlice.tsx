import { createSlice } from "@reduxjs/toolkit";

const initialState = {cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [], cartTotalPrice: 0};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item?.id == action.payload?.id);

      if(itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({...action.payload, quantity: 1});
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    clearItem: (state, action) => {
      const newCart = state.cartItems.filter((product) => product?.id !== action.payload?.id);
      state.cartItems = newCart;

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    getTotal: (state) => {
      const { total } = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        cartTotal.total += +price * +quantity;

        return cartTotal
      }, {
        total: 0
      })

      state.cartTotalPrice = total;
    }
  }
})

export const { addToCart, clearItem, getTotal } = cartSlice.actions;

export default cartSlice.reducer