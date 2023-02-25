import { configureStore } from '@reduxjs/toolkit';
import { loading } from './loadingSlice';
import { memes } from './memesSlice';
import { search } from './searchSlice';
import { subReddit } from './subRedditSlice';

export const store = configureStore({
  reducer: {
    memes: memes.reducer,
    searchTerm: search.reducer,
    subReddit: subReddit.reducer,
    loading: loading.reducer
  },
});
