import { createSlice } from "@reduxjs/toolkit";


const initialState =[
    {id:0,name:"Jeeva"},
    {id:1,name:"Praveen"},
    {id:2,name:"Vicky"}
]

const userSlice =createSlice({
    name:"user",
    initialState,
    reducers:{

    }
})

export const selectAllUser = (state) => (state.user)

export default userSlice.reducer