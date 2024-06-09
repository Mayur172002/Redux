import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const adget_user = createAsyncThunk('adget_user',async()=>{
    const result = await axios.get(`http://localhost:3000/Users`)  
    return result.data
  })
  export const Edit_user = createAsyncThunk('Edit_user',async(mydata)=>{
    const result = await axios.patch(`http://localhost:3000/Users/${mydata.id}`,mydata)  
    return result
  })
  export const Ad_UserSlice = createSlice({
    name : "user",
    initialState :({
      aduser :[]
    }),
    reducers:[

    ],
    extraReducers:{
       [adget_user.fulfilled] : (state,action) =>{
       state.aduser = action.payload 
       }
    }
})


export const {} = Ad_UserSlice.actions 
export default Ad_UserSlice.reducer