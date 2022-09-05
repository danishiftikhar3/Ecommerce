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
      console.log(state);
    },
    wishAdd: (state, action) => {
      const index = state.products.findIndex(
        (data) => data.id === action.payload.id
      );
      state.products[index].wishlist = true;
    },
    wishDel: (state, action) => {
      const index = state.products.findIndex(
        (data) => data.id === action.payload.id
      );
      state.products[index].wishlist = false;
    },
    cartAdd: (state, action) => {
      const index = state.products.findIndex(
        (data) => data.id === action.payload.id
      );
      state.products[index].cart = true;
    },
    cartDel: (state, action) => {
      const index = state.products.findIndex(
        (data) => data.id === action.payload.id
      );
      state.products[index].cart = false;
    },
    qtyAdd: (state, action) => {
      const index = state.products.findIndex(
        (data) => data.id === action.payload.id
      );
      state.products[index].Qty = state.products[index].Qty + 1;
    },
    qtyMinus: (state, action) => {
      const index = state.products.findIndex(
        (data) => data.id === action.payload.id
      );
      if (state.products[index].Qty > 1) {
        state.products[index].Qty = state.products[index].Qty - 1;
      } else {
        state.products[index].cart = false;
      }
    },
    assendingDataByPrice: (state, action) => {
      state.products.sort((a, b) => {
        return a.price - b.price;
      });
    },
    dessendingDataByPrice: (state, action) => {
      state.products.sort((a, b) => {
        return b.price - a.price;
      });
    },
    assendingDataByName: (state, action) => {
      state.products.sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    },
  },
});

export const {
  productAdd,
  wishAdd,
  wishDel,
  cartAdd,
  cartDel,
  qtyAdd,
  qtyMinus,
  assendingDataByPrice,
  dessendingDataByPrice,
  assendingDataByName,
} = slice.actions;

export default slice.reducer;
