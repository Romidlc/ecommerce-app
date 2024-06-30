import { BASE_URL } from "../firebase/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../interfacesAndTypes/interfaces";

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
    }),
});
export const { useGetCategoriesQuery, useGetProductsQuery, useGetProductsByCategoryNameQuery, useLazyGetProductsByCategoryNameQuery, useLazyGetProductsQuery } = shopApi;
export default shopApi;
