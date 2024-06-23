import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Image } from "react-native";
import productsData from "../data/products.json";
import { IProduct } from "../interfacesAndTypes/interfaces";
import { useRoute } from "@react-navigation/core";
const ProductList = () => {
    const [products, setProducts] = useState([] as IProduct[]);
    const route: any = useRoute();

    const getProductsFiltered = (searchPhrase: string) => {
        const productsFiltered = productsData.filter((product: IProduct) => product.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, "")));
        setProducts(productsFiltered);
    };
    useEffect(() => {
        if (route.params?.searchPhrase) getProductsFiltered(route.params?.searchPhrase);
    }, [route.params]);

    return (
        <View>
            <View>
                <FlatList
                    data={products}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({ item }: { item: IProduct }) => (
                        <View style={{ flexDirection: "row", flex: 1, alignItems: "center", margin: 10 }}>
                            <Image source={{ uri: item.images[0] }} style={{ height: 50, width: 50 }} />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 17, marginLeft: 10, fontWeight: "600" }}>{item.title}</Text>
                                <Text>{item.description}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default ProductList;
