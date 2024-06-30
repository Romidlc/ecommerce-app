import { configureStore } from "@reduxjs/toolkit";
import searchBarSlice from "../features/SearchBar/searchBarSlice";

export default configureStore({
    reducer: {
        search: searchBarSlice,
    },
});
