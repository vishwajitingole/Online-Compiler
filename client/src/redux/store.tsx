import { configureStore } from "@reduxjs/toolkit";
import compilerSlice from "./slices/compilerSlice";

const store = configureStore({
  reducer: {
    compilerSlice,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
