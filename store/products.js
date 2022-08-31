import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data";

const slice = createSlice({
  name: "product",
  initialState: {
    products: data,
  },
  reducers: {
    productAdd: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
    wishChange: (state, action) => {
      console.log("patloadID", action.payload.id);

      const index = state.products.findIndex(
        (data) => data.id === action.payload.id
      );

      console.log("index", index);

      state.products[index].wishlist = true;
    },
  },
});

export const { productAdd, wishChange } = slice.actions;

export default slice.reducer;
