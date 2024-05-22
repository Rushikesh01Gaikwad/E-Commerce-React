import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../slices/CartSlice";
import Maincardslice from '../slices/Maincardslice';
import myOrderReducer from '../slices/MyOrder';
import SearchSlice from '../slices/SearchSlice'


export const store = configureStore(
    {
        reducer:
        {
            cart: CartReducer,
            maincard: Maincardslice,
            myOrder: myOrderReducer,
            search: SearchSlice,
        },
    }
)

