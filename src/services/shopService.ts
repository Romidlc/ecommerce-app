import { BASE_URL } from "../firebase/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IOrder, IProduct } from "../interfacesAndTypes/interfaces";
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
            query: ({ ...order }: IOrder) => ({
                url: "orders.json",
                method: "POST",
                body: order,
            }),
        }),
        getOrders: builder.query<IOrder[], string>({
            query: (userId) => `orders.json?orderBy="userId"&equalTo="${userId}"`,
            transformResponse: (res: IOrder[]): IOrder[] => {
                const transformedResponse = Object.values(res);
                return transformedResponse;
            },
        }),
        getUserProfileImage: builder.query({
            query: (localId: string) => `profileImages/${localId}.json`,
        }),
        uploadUserProfileImage: builder.mutation({
            query: ({ image, localId }: { image: string; localId: string }) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image,
                },
            }),
        }),
    }),
});
export const { useGetCategoriesQuery, useGetProductsQuery, useGetProductsByCategoryNameQuery, useLazyGetProductsByCategoryNameQuery, useGetProductsByIdQuery, useLazyGetProductsQuery, useConfirmPurchaseMutation, useGetOrdersQuery, useGetUserProfileImageQuery, useUploadUserProfileImageMutation, useLazyGetOrdersQuery } = shopApi;
export default shopApi;
