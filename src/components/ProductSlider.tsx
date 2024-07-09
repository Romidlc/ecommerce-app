import { FlatList, Text, View, Image, Pressable } from "react-native";
import React from "react";
import products from "../data/products.json";
import { productSliderStyles } from "../styles/customStyles";
import ProductCardItem from "./ProductCardItem";

export default function ProductSlider() {
    return (
        <View style={productSliderStyles.container}>
            <View style={productSliderStyles.productsContainer}>
                <FlatList nestedScrollEnabled data={products} keyExtractor={(item) => item.id.toString()} renderItem={({ item }: any) => <ProductCardItem product={item} width={185} height={295} />} horizontal={true} />
            </View>
        </View>
    );
}
