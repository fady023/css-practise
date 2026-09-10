import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
        }
    }
})