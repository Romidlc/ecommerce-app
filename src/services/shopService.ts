import { BASE_URL } from "../firebase/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../interfacesAndTypes/interfaces";

interface ICartItem {
    id: number;
    quantity: number;
    title: string;
    brand: string;
    image: string;
    price: number;
}
interface IOrder {
    id: number;
    user_id: number;
    createdAt: string;
    items: ICartItem[];
    total: number;
}
const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `products.json`,
        }),
        getCategories: builder.query<string[], void>({
            query: () => `categories.json`,
        }),
        getProductsByCategoryName: builder.query<IProduct[], string>({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (res: IProduct): IProduct[] => {
                const transformedResponse = Object.values(res);
                return transformedResponse;
            },
        }),
        getProductsById: builder.query<IProduct, number>({
            query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
            transformResponse: (res: IProduct): IProduct => {
                const [transformedResponse] = Object.values(res);
                return transformedResponse;
            },
        }),
        confirmPurchase: builder.mutation({
            query: (order: IOrder) => ({
                url: "orders.json",
                method: "POST",
                body: order,
            }),
        }),
    }),
});
export const { useGetCategoriesQuery, useGetProductsQuery, useGetProductsByCategoryNameQuery, useLazyGetProductsByCategoryNameQuery, useGetProductsByIdQuery, useLazyGetProductsQuery, useConfirmPurchaseMutation } = shopApi;
export default shopApi;
