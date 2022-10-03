import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(state, action) {
      const newFilterValue = action.payload;
      return newFilterValue; 
    }
  }
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;