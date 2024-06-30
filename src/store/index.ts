import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../features/SearchBar/searchBarSlice";
import shopApi from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";
import productListReducer from "../features/ProductList/productListSlice";
const store = configureStore({
    reducer: {
        search: searchBarReducer,
        products: productListReducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);
export default store;
