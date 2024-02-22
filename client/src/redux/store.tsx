import { configureStore } from "@reduxjs/toolkit";
import compilerSlice from "./slices/compilerSlice";

const store = configureStore({
  reducer: {
    compilerSlice,
  },
});

export default store;
