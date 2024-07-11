import { createSlice } from "@reduxjs/toolkit";
import { IAction, ICart, ICartDict, ICartItem } from "../../interfacesAndTypes/interfaces";

const calculateTotalPurchase = (cartItems: ICartItem[]) => cartItems.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0);

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: {
            cartItems: [],
            totalItems: 0,
        },
    },
    reducers: {
        addProductIntoCart: ({ value }: { value: ICart }, { payload }: IAction) => {
            const cartDict = value.cartItems.reduce((accum: ICartDict, currentItem: ICartItem) => {
                accum[currentItem.id] = currentItem;
                return accum;
            }, {});

            if (!cartDict.hasOwnProperty(payload.id)) {
                const newCartItems = value.cartItems.concat(payload);
                value.cartItems = [...newCartItems];
            } else {
                const itemToUpdate = cartDict[payload.id];
                cartDict[payload.id] = { ...itemToUpdate, quantity: itemToUpdate.quantity + payload.quantity };
                value.cartItems = Object.values(cartDict);
            }
            const totalItems = calculateTotalPurchase(value.cartItems);
            value.totalItems = totalItems;
        },
        removeFromCart: ({ value }: { value: ICart }, { payload }: { payload: any }) => {
            const cleanedProducts = value.cartItems.filter((item: ICartItem) => item.id !== payload.id);
            value.cartItems = cleanedProducts;
            value.totalItems = calculateTotalPurchase(cleanedProducts);
        },
        clearCartItems: ({ value }: { value: ICart }) => {
            value.cartItems = [];
        },
    },
});

export const { addProductIntoCart, removeFromCart, clearCartItems } = cartSlice.actions;
export default cartSlice.reducer;
