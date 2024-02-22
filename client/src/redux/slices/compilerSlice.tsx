import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface compilerSliceStateType {
  html: string;
  css: string;
  javascript: string;
  currentLanguage: "javascript" | "html" | "css";
}

const init: compilerSliceStateType = {
  html: "",
  css: "",
  javascript: "",
  currentLanguage: "javascript",
};

const compilerSlice = createSlice({
  name: "compiler",
  initialState: init,
  reducers: {
    //If we are using typescript We need to define in PayloadAction
    updateCurrentLanguage: (
      state,
      action: PayloadAction<compilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateHTML: (state, action: PayloadAction<string>) => {
      state.html = action.payload;
    },
    updateCSS: (state, action: PayloadAction<string>) => {
      state.css = action.payload;
    },
    updateJS: (state, action: PayloadAction<string>) => {
      state.javascript = action.payload;
    },
  },
});

export default compilerSlice.reducer;

export const { updateCurrentLanguage, updateCSS, updateHTML, updateJS } =
  compilerSlice.actions;
