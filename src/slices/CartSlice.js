import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            // Check if the item already exists in the cart
            const existingItem = state.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
});

export const getItemSelector = createSelector(
    (state) => state.cart,
    (state) => state
);

export const { addItem, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
