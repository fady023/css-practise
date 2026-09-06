import { createSlice } from "@reduxjs/toolkit"

const sinacolaState = {
    counter: 20
}

const sinaColaSlice = createSlice({
    name: "SinaCola",
    initialState: sinacolaState,
    reducers: {
        orderSinaCola: (state) => {
            state.counter--;
        },
        restockSinaCola: (state) => {
            state.counter++;
        }
    }
})