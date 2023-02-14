import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
}
export const productsFetch = createAsyncThunk(
    "product/productsFetch",
    async(id=null,) => {
        const response = await axios.get("http://localhost:8800/cart");
        
        return response?.data

    }
);
// A slice a piece of logic that contains actions and reducers 
// to handle state for a particular feature
const productsSlice = createSlice({
    name: "products",
    initialState, 
    reducers: {
        // This object/reducers will generate action creator and handle the state in both action creators

    },  
    extraReducers: {
        // The object/extrareducers handles the action types ;;; //look at imber toolkit for more defination on mutation
        [productsFetch.pending] : (state,action) => {
            state.status = "Pending";
        },
        [productsFetch.fulfilled] : (state,action) => {
            state.status = "Success";
            state.items = action.payload; 
        },
        [productsFetch.rejected] : (state,action) => {
            state.status = "Rejected";
        }
    },
});

export default productsSlice.reducer;