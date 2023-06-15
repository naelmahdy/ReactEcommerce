import { createSlice } from "@reduxjs/toolkit";

const sliceName = "cartSlice";

const cartSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {
    addToCart(state, action) {
      console.log(action)
      // state.push(action.payload)
      const product = state.find((product) => product.id === action.payload.id);
      if (product) {
        // product.qyt += action.payload.quantity;
        // product.qyt += 1;
        // console.log('action.payload.quantity', action.payload.quantity)
        product.quantity += action.payload.quantity
      } else {
        // const newProduct = { ...action.payload, qyt: action.payload.quantity };
        // console.log('newProduct', newProduct);
        // state.push(newProduct);
        // console.log('newProduct', newProduct)
        state.push(action.payload)
      }


    },
    removeFromCart(state, action) {
      return state.filter((product) => product.id !== action.payload.id);
    },

    increase(state, action) {
      const product = state.find((product) => product.id === action.payload.id);
      // console.log('product', product)
      // console.log('product.id', product.id)
      // console.log(' action.payload.id', action.payload.id)
      product.quantity += 1;
      // if (product.qyt !== product.stock) {
      // }
    },
    decrease(state, action) {
      const product = state.find((product) => product.id === action.payload.id);
      console.log('a')
      if (product.quantity !== 1) {
        product.quantity -= 1;
      }
    },

    clearCart() {
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  resetCart,
  increase,
  decrease
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
