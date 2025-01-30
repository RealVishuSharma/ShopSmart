import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.cart.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
        },
        updatedQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) {
              item.quantity = quantity;
            }
          },
    },
});

export const getItemSelector = createSelector(
    (state) => state.cart.cart,
    (state) => state
  );


export const {addToCart, removeFromCart, updatedQuantity} = cartSlice.actions

export default cartSlice.reducer;