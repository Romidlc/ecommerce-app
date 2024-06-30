import { createSlice } from "@reduxjs/toolkit";

interface ICartItem {
    id: number;
    quantity: number;
    title: string;
    brand: string;
    price: number;
}
interface IAction {
    type: string;
    payload: ICartItem;
}

interface ICartDict {
    [key: number]: ICartItem;
}

interface ICart {
    cartItems: ICartItem[];
    totalItems: number;
}
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

            if (!cartDict[payload.id]) {
                const items = value.cartItems.concat(payload);
                const totalItems = value.cartItems.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0);
                value.cartItems = [...items];
                value.totalItems = totalItems;
            } else {
                const itemToUpdate = cartDict[payload.id];
                cartDict[payload.id] = { ...itemToUpdate, quantity: itemToUpdate.quantity + payload.quantity };
                const totalItems = value.cartItems.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0);
                value.cartItems = Object.values(cartDict);
                value.totalItems = totalItems;
            }
        },
    },
});

export const { addProductIntoCart } = cartSlice.actions;
export default cartSlice.reducer;
