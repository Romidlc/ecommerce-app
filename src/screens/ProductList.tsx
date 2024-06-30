import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { IProduct } from "../interfacesAndTypes/interfaces";
import { useRoute } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../features/ProductList/productListSlice";
import { useLazyGetProductsByCategoryNameQuery, useLazyGetProductsQuery } from "../services/shopService";
import { productListStyles } from "../styles/customStyles";
import ProductCardItem from "../components/ProductCardItem";

interface IFilter {
    category: string;
    searchPhrase: string;
}

const ProductList = () => {
    const { products } = useSelector((state: any) => state.products.value);
    const dispatch = useDispatch();
    const route: any = useRoute();
    const { category, searchPhrase } = route.params;
    const [getProducts] = useLazyGetProductsQuery();
    const [getProductsByCategoryName] = useLazyGetProductsByCategoryNameQuery();

    const getProductsByCategoryFilter = async (categoryName: string) => {
        const { data: fetchedProductsByCategoryName, isLoading } = await getProductsByCategoryName(categoryName);
        if (!isLoading && fetchedProductsByCategoryName?.length) dispatch(setProducts(fetchedProductsByCategoryName));
    };

    const getProductsBySearchPhrase = async (searchPhrase: string) => {
        const { data: fetchedAllProducts, isLoading } = await getProducts();
        if (!isLoading && fetchedAllProducts?.length) {
            const filteredProducts = fetchedAllProducts.filter((product: IProduct) => product.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, "")));
            dispatch(setProducts(filteredProducts));
        }
    };

    const getProductsByFilter = (filter: IFilter) => {
        const [key] = Object.keys(filter);
        switch (key) {
            case "category":
                getProductsByCategoryFilter(filter[key]);
                break;
            case "searchPhrase":
                getProductsBySearchPhrase(filter[key]);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (Object.keys(route.params).length) getProductsByFilter(route.params);
    }, [category, searchPhrase]);

    return (
        <View style={productListStyles.container}>
            <View style={productListStyles.productsContainer}>
                <FlatList numColumns={2} data={products} keyExtractor={(item: any) => item.id} renderItem={({ item }: { item: IProduct }) => <ProductCardItem product={item} />} />
            </View>
        </View>
    );
};

export default ProductList;
