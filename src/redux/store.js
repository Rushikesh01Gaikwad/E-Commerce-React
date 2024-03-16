import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../slices/CartSlice";
import Maincardslice from '../slices/Maincardslice';


export const store = configureStore(
    {
        reducer:
        {
            cart: CartReducer,
            maincard: Maincardslice,
        },
    }
)

