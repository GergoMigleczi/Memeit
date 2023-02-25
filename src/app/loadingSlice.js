import { createSlice } from "@reduxjs/toolkit";

export const loading = createSlice({
    name: 'loading',
    initialState: true,
    reducers: {
        setLoading: (state, action) => {
            return  state = action.payload;
        }
    }
})

export const selectLoading = (state) => {
    return state.loading;
}