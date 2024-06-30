import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import products from "../data/products.json";
import { productSliderStyles } from "../styles/customStyles";

const ProductCardItem = ({ product, height, width }: any) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log("redirect to product detail screen padding product id")}
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

            <View>
                <Text style={productSliderStyles.price}>${product.price}</Text>
                <Text style={productSliderStyles.fee}>Hasta 12 cuotas sin interes</Text>
                <Text>{product.title}</Text>
                <Text>{product.description.substring(0, 30)}..</Text>
            </View>
        </TouchableOpacity>
    );
};
export default function ProductSlider() {
    return (
        <View style={productSliderStyles.container}>
            <View>
                <Image source={require("../../assets/banners/banner2.png")} style={productSliderStyles.bannerImage} />
            </View>
            <View style={productSliderStyles.productsContainer}>
                <FlatList data={products} keyExtractor={(item) => item.id} renderItem={({ item }: any) => <ProductCardItem product={item} width={185} height={295} />} keyExtractor={(item) => item.id.toString()} horizontal={true} showsHorizontalScrollIndicator={false} />
            </View>
        </View>
    );
}
