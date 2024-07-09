import { createSlice } from "@reduxjs/toolkit";

interface ICartItem {
    id: number;
    quantity: number;
    title: string;
    brand: string;
    image: string;
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
    },
});

export const { addProductIntoCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
