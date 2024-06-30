import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useGetProductsByIdQuery } from "../services/shopService";
import { productSliderStyles } from "../styles/customStyles";
import { PRIMARY_COLOR } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addProductIntoCart } from "../features/Cart/cartSlice";

const ProductDetail = () => {
    const {
        params: { productId },
    }: any = useRoute();
    const { data: product, isLoading } = useGetProductsByIdQuery(productId);
    const dispatch = useDispatch();
    return (
        <>
            {product && (
                <View style={{ flex: 1 }}>
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
                            shadowColor: "#000000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowRadius: 5,
                            shadowOpacity: 1.0,
                        }}
                    >
                        <Image source={{ uri: product.images[0] }} style={{ width: 350, height: 302 }} />
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
                            onPress={() =>
                                dispatch(
                                    addProductIntoCart({
                                        id: product.id,
                                        quantity: 1,
                                        title: product.title,
                                        brand: product.brand,
                                        price: product.price,
                                    })
                                )
                            }
                        >
                            <View style={{ width: "90%", backgroundColor: "#00AAF2", height: 40, justifyContent: "center", alignItems: "center", marginTop: 5, marginBottom: 20 }}>
                                <Text style={{ color: "white" }}>Agregar al carrito</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            )}
        </>
    );
};

export default ProductDetail;
