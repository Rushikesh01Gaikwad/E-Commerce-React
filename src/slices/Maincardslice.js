import { createSlice } from "@reduxjs/toolkit";

const maincardslice = createSlice(
    {
        name: "Maincard",
        initialState:null,
        reducers:
        {
            mainCard:(state, action)=>
            {
                return action.payload;
            },
        },
    }
);

export const {mainCard}= maincardslice.actions;

export default maincardslice.reducer;