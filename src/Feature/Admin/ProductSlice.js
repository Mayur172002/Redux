import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const insert_product = createAsyncThunk('insert_product',async(data)=>{
  const result = await axios.post(`http://localhost:3000/Product`,data)  
  return result
})
export const get_product = createAsyncThunk('get_product',async()=>{
    const result = await axios.get(`http://localhost:3000/Product`)  
    return result.data
  })
  export const delete_product = createAsyncThunk('delete_product',async(id)=>{
    const result = await axios.delete(`http://localhost:3000/Product/${id}`)  
    return result
  })
  export const edit_product = createAsyncThunk('edit_product',async(data)=>{
    const result = await axios.patch(`http://localhost:3000/Product/${data.id}`,data)  
    return result
  })
export const ProductSlice = createSlice({
        name : "Product",
        initialState :({
          product :[]
        }),
        reducers:[

        ],
        extraReducers:{
         [get_product.fulfilled] : (state,action)=>{
          state.product = action.payload;
         }     
        }
})



export const {} = ProductSlice.actions //not a improtent
export default ProductSlice.reducer