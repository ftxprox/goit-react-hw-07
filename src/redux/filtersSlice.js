import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '', 
};

const filtersSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;