import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice";
import profileSlice from "../Slices/profileSlice";
import BookSlice from "../Slices/BookSlice"
const rootReducer = combineReducers({

    auth: AuthSlice,
    profile: profileSlice,
    book: BookSlice
})

export default rootReducer;
