import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice(
    {
        name: "Search",
        initialState: {
            searchTerm: ""
          },
        reducers:
        {
            search:(state, action)=>
            {
                state.searchTerm =  action.payload;
            },
        },
    }
);

export const {search}= SearchSlice.actions;

export const selectSearchTerm = (state) => state.search.searchTerm;

export default SearchSlice.reducer;