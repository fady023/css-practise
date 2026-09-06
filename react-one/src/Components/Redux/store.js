import { configureStore } from "@reduxjs/toolkit";
import { sinaColaSlice } from "./sinacolaSlice";

const store = configureStore({
    reducer: {
        SinaCola: sinaColaSlice.reducer
    }
})