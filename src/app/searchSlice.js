import { createSlice } from "@reduxjs/toolkit";


export const search = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) =>{
           return state = action.payload;
        }
    }
})

export const selectSearchTerm = (state) =>{
    return state.searchTerm;
}