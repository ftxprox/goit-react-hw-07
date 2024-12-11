import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  name: '', 
};
const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = state => state.filters.name
export default filtersSlice.reducer;






