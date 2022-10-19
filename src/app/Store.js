import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
const Store = configureStore({
  reducer: {
    card: cardSlice,
  },
});
export default Store;
