import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../features/SearchBar/searchBarSlice";
import shopApi from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";
import productListReducer from "../features/ProductList/productListSlice";
import cartReducer from "../features/Cart/cartSlice";
import userReducer from "../features/User/userSlice";
import { authApi } from "../services/authService";
const store = configureStore({
    reducer: {
        search: searchBarReducer,
        products: productListReducer,
        cart: cartReducer,
        auth: userReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware),
});

setupListeners(store.dispatch);
export default store;
