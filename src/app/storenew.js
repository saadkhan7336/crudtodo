import { configureStore, } from "@reduxjs/toolkit";
import { jsonPlaceholderapi } from "../features/todo/apiSlice";


const storenew=configureStore({
    reducer: {
        [jsonPlaceholderapi.reducerPath]:jsonPlaceholderapi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(jsonPlaceholderapi.middleware),
});

export default storenew;