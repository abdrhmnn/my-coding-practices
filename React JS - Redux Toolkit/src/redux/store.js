import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter'
import waktuJam from "./time";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        waktu: waktuJam
    }
})