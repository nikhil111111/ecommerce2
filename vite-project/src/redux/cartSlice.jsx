import { createSlice } from '@reduxjs/toolkit'
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id, title, price } = action.payload;
            state.push({ id, title, price }); // Only include serializable properties
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id != action.payload);
        }
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer;