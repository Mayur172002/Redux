import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const insert_user = createAsyncThunk('insert_user',async(mydata)=>{
const result = await axios.post(`http://localhost:3000/Users`,mydata)
return result
})
export const get_user = createAsyncThunk('get_user',async()=>{
    const result = await axios.get(`http://localhost:3000/Users`)
    return result.data
})
export const edit_user = createAsyncThunk('edit_user',async(mydata)=>{
    const result = await axios.patch(`http://localhost:3000/Users/${mydata.id}`,mydata )
    return result
})

export const  UserSlice =  createSlice({
    name : "user",
    initialState :{
        name : "mayur",
       user:[] 
    },
    reducers :{

    },
    extraReducers : {
        [get_user.fulfilled]:(state,action)=>{
          state.user = action.payload;
        }

    }
})


export const {} = UserSlice.actions 
export default UserSlice.reducer