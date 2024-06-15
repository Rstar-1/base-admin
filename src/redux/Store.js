import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorredux/ColorSlice";

export const store = configureStore({
  reducer: {
    theme: colorReducer,
  },
});

export default store;
