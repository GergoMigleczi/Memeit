import { createSlice } from "@reduxjs/toolkit";


export const subReddit = createSlice({
    name: 'subReddit',
    initialState: '',
    reducers: {
        setSubReddit: (state, action) => {
            return state = action.payload;
        }
    }
})

export const selectSubReddit = (state) => {
    return state.subReddit;
}