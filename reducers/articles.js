import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: "",
};

export const articlesSlice = createSlice({
 name: 'articles',

  initialState,
 reducers: {
    addArticlesToStore: (state, action) => {
     state.value = action.payload;
   },
 },
});

export const { addArticlesToStore } = articlesSlice.actions;
export default articlesSlice.reducer;