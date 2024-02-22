import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface compilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };

  currentLanguage: "javascript" | "html" | "css";
}

const init: compilerSliceStateType = {
  fullCode: {
    html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="img">
        <img class="img1" src="https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzfGVufDB8fDB8fHww" alt="">
        <img class="img2" src="https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D" alt="">
    </div>
    <div class="button"><button>Swap</button></div>

    <img class="swap" src="https://indianmemetemplates.com/wp-content/uploads/akshay-kumar-swap-ajnabee.jpg">
</body>
<script src="script.js"></script>

</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.swap {
    display: none;
}

.img {
    display: flex;
    justify-content: center;
    gap: 2vw;
}

.img img {
    width: 20vw;
}

body {
    display: flex;
    flex-direction: column;
}

.button {
    margin-top: 2vh;
    display: flex;
    justify-content: center;
}

button {
    padding: 1vw 2vw;
    background-color: #757272;
}

.swap {
    width: 10vw;
    margin-left: 45vw;
}`,
    javascript: `var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

var akki = document.querySelector(".swap");

var btn = document.querySelector("button");
btn.addEventListener("click", () => {
  temp = img1.src;
  img1.src = img2.src;
  img2.src = temp;
  akki.style.display = "block";
});`,
  },
  currentLanguage: "javascript",
};

const compilerSlice = createSlice({
  name: "compiler",
  initialState: init,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<compilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      // Assuming 'language' and 'code' are keys in the payload
      state.fullCode[state.currentLanguage] = action.payload;
    },
  },
});

export default compilerSlice.reducer;

export const { updateCurrentLanguage, updateCodeValue } = compilerSlice.actions;
