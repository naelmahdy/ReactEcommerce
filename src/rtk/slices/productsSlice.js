// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// const sliceName = 'productsSlice';


// export const fetchProducts = createAsyncThunk(`${sliceName}/fetchProducts`, async () => {
//     const res = await fetch('https://dummyjson.com/products');
//     const data = await res.json();
//     return data.products;

// })

// const productsSlice = createSlice({
//     name: sliceName,
//     initialState: [],
//     reducers: {

//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchProducts.fulfilled, (state, action) => {
//             state = action.payload;
//             return state;
//         })
//     }
// })

// export const productsReducer = productsSlice.reducer;