import { createSlice } from "@reduxjs/toolkit";


export const memes = createSlice({
    name: 'memes',
    initialState: [],
    reducers: {
        addMemes: (state, action) => {
            return [...action.payload]
        }, 
        setLikeColor: (state, action) => {
            state[action.payload.id].likeColor = action.payload.color;

        },
        toggleComment: (state, action) => {
            state[action.payload.id].comment = action.payload.comment;

        },
        nightModeLikeColorToggle: (state, action) => {
            for(let i=0;i<state.length;i++){
                if(state[i].likeColor !== 'red' && state[i].likeColor !== 'green'){
                    state[i].likeColor = action.payload;
                }
            }
        },
        addComment: (state, action) => {
            state[action.payload.id].comments = action.payload.comments;
        }

    }
});

export const selectMemes = (state) => {
    return state.memes;
}
