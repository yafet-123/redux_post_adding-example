import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import userReducer from "./usersSlice";

export default  configureStore({
    reducer:{
        posts: postReducer,
        users: userReducer
    }
})