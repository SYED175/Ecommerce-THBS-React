import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import cartSlice from "./CartSlice";
import fetchStatusSlice from "./FetchStatusSlice";
import searchSlice from "./SearchSlice";


const store = configureStore({
    reducer:{
        items:itemSlice.reducer,
        cart:cartSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        search:searchSlice.reducer
    }
});

export default store;