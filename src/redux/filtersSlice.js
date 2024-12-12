import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '', 
};

const filtersSlice = createSlice({
  name: 'filter', 
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload; 
    },
  },
});

export const { changeFilter } = filtersSlice.actions;


export const selectNameFilter = (state) => state.filter.name; 


export default filtersSlice.reducer;

