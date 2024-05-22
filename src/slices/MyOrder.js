import { createSlice } from "@reduxjs/toolkit";

const myOrderSlice = createSlice(
    {
        name: "Myorder",
        initialState:null,
        reducers:
        {
            myOrder:(state, action)=>
            {
                return action.payload;
            },
        },
    }
);

export const {myOrder}= myOrderSlice.actions;

export default myOrderSlice.reducer;