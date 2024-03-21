import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProductStart(state) {
      state.loading = true;
      state.error = null;
    },
    addProductSuccess(state, action) {
      state.products.push(action.payload); // Assuming payload is the new product object
      state.loading = false;
      state.error = null;
    },
    addProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload; // Assuming payload contains the error message
    },
    // Add other product-related reducers as needed
  },
});

export const {
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
