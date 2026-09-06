import { configureStore } from "@reduxjs/toolkit";
import { sinaColaSlice } from "./sinacolaSlice";

export const store = configureStore({
    reducer: {
        SinaCola: sinaColaSlice.reducer
    }
})