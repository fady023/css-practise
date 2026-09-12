import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    total: 0
}

localStorage.getItem("items") != null ? initialState.items = JSON.parse(localStorage.getItem("items")) : [];



export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("items", JSON.stringify(state.items))
        },
        removeFromCart: (state, action) => {
            const item_id = action.payload.id;
            let removed = false;
            state.items = state.items.filter(x => {
                if (!removed && x.id === item_id) {
                    removed = true;
                    return false;
                }
                return true;
            });
            localStorage.setItem("items", JSON.stringify(state.items))
        },
        calcTotal: (state) => {
            let total = 0;
            state.items.forEach(item => {
                total += item.price;
            });
            state.total = total ;
        }
    }
})