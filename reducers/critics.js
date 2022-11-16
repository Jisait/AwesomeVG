import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: "",
};

export const criticsSlice = createSlice({
 name: 'critics',

  initialState,
 reducers: {
  addCriticsToStore: (state, action) => {
     state.value = action.payload;
   },
 },
});

export const { addCriticsToStore } = criticsSlice.actions;
export default criticsSlice.reducer;