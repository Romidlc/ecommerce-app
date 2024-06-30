import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfacesAndTypes/interfaces";

interface IAction {
    type: string;
    payload: IProduct[];
}
interface IProductList {
    products: IProduct[];
}

export const productListSlice = createSlice({
    name: "products",
    initialState: {
        value: {
            products: [],
        },
    },
    reducers: {
        // parms(state, actions: {type, payload})
        setProducts: ({ value }: { value: IProductList }, { payload }: IAction) => {
            value.products = payload;
        },
    },
});

export const { setProducts } = productListSlice.actions;
export default productListSlice.reducer;
