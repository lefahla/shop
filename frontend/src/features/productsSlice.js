import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: null,
}
// A slice a piece of logic that contains actions and reducers 
// to handle state for a particular feature
const productsSlice = createSlice({
    name: "products",
    initialState, 
    reducers: {},  
});

export default productsSlice.reducer;