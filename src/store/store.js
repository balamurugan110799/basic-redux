import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "../feature/List";
import postSlice from "../feature/post/postSlice";
import userSlice from "../feature/user/userSlice";

const Store = configureStore({
    reducer:{
        list:ListReducer,
        posts :postSlice,
        user:userSlice
    }
})

export default Store