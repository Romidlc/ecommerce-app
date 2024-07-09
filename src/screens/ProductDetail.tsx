import { View, Text, Image, Pressable, ScrollView, Button, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useGetProductsByIdQuery } from "../services/shopService";
import { cartStyles, productSliderStyles } from "../styles/customStyles";
import { CART, PRIMARY_COLOR } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addProductIntoCart } from "../features/Cart/cartSlice";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProductDetail = () => {
    const {
        params: { productId },
    }: any = useRoute();
    const navigation: any = useNavigation();
    const { data: product } = useGetProductsByIdQuery(productId);
    const dispatch = useDispatch();
    return (
        <>
            {product && (
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <View>
                            <Ionicons name="arrow-back-outline" size={24} />
                        </View>
                    </Pressable>

                    <View
                        style={{
                            padding: 5,
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: 400, lineHeight: 16 }}>{product.brand}</Text>
                        <Text style={{ fontSize: 26, lineHeight: 28, fontWeight: 400 }}>{product.title}</Text>
                    </View>
                    <View
                        style={{
                            margin: 5,
                            elevation: 8,
                            alignItems: "center",
                            shadowColor: "#000000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowRadius: 5,
                            shadowOpacity: 1.0,
                        }}
                    >
                        {/* NOTE: images are not available return a 404 httpcode. It' was replaced by a product default image*/}

                        {/* <Image source={{ uri: product.images[0] }} style={{ width: 350, height: 302 }} /> */}
                        <Image source={require("../../assets/no-product.png")} style={{ width: 350, height: 300 }} />
                    </View>
                    <View style={productSliderStyles.lineStyle} />
                    <View style={{ margin: 5 }}>
                        <View>
                            <Text style={{ fontSize: 32 }}>${product.price}</Text>
                            <Text style={{ fontSize: 16, color: PRIMARY_COLOR, lineHeight: 16, fontWeight: 400 }}>Hasta 12 cuotas sin interes</Text>
                        </View>
                        <Text style={{ fontSize: 16 }}>Stock disponible: {product.stock}</Text>
                        <Text style={{ fontSize: 16 }}>{product.description}</Text>
                        <Pressable
                            style={{ alignItems: "center" }}
                            onPress={() => {
                                dispatch(
                                    addProductIntoCart({
                                        id: product.id,
                                        quantity: 1,
                                        title: product.title,
                                        image: product.images[0],
                                        brand: product.brand,
                                        price: product.price,
                                    })
                                );
                                navigation.navigate(CART);
                            }}
                        >
                            <View style={{ ...cartStyles.cartConfirmButton, margin: 10 }}>
                                <Text style={{ color: "white" }}>Agregar al carrito</Text>
                            </View>
                        </Pressable>
                    </View>
                </ScrollView>
            )}
        </>
    );
};

export default ProductDetail;
