import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import the cartSlice reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the cartSlice reducer here
  },
});

export default store;
