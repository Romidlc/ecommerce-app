import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { IProduct } from "../interfacesAndTypes/interfaces";
import { productSliderStyles } from "../styles/customStyles";
import { useNavigation } from "@react-navigation/native";
import { PRODUCT_DETAIL } from "../utils/constants";

const ProductCardItem = ({ product, height = 295, width = 170 }: { product: IProduct; height?: number; width?: number }) => {
    const navigation: any = useNavigation();
    return (
        <Pressable
            onPress={() => navigation.navigate(PRODUCT_DETAIL, { productId: product.id })}
            style={{
                ...productSliderStyles.productCardContainer,
                height,
                width,
            }}
        >
            <View style={{ ...productSliderStyles.imageContainer }}>
                <Image source={{ uri: product.images[0] }} style={productSliderStyles.image} />
            </View>
            <View style={productSliderStyles.lineStyle} />
            <View style={productSliderStyles.productDetailContainer}>
                <Text style={productSliderStyles.price}>${product.price}</Text>
                <Text style={productSliderStyles.fee}>Hasta 12 cuotas sin interes</Text>
                <Text>{product.title}</Text>
                <Text>{product.description.substring(0, 30)}..</Text>
            </View>
        </Pressable>
    );
};
export default ProductCardItem;
