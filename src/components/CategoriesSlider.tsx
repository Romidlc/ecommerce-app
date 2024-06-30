import { View, FlatList, Text, Pressable } from "react-native";
import React from "react";
import { categorySliderStyles } from "../styles/customStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useGetCategoriesQuery } from "../services/shopService";
import { useNavigation } from "@react-navigation/native";
import { PRODUCT_LIST } from "../utils/constants";

const CategoryItem = ({ category }: any) => {
    const navigation: any = useNavigation();
    return (
        <View style={categorySliderStyles.categoryItemContainer}>
            <Pressable
                onPress={() =>
                    navigation.navigate(PRODUCT_LIST, {
                        category: category,
                    })
                }
            >
                <View style={categorySliderStyles.categoryItem}>
                    <Ionicons color={"white"} size={24} name={"image-sharp"} />
                    <Text style={categorySliderStyles.categoryText}>{category}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const CategoriesSlider = () => {
    const { data: categories, isLoading, error } = useGetCategoriesQuery();
    return (
        <View style={categorySliderStyles.container}>
            <FlatList nestedScrollEnabled horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={(item) => item} data={categories} renderItem={({ item }) => <CategoryItem category={item} />} />
        </View>
    );
};

export default CategoriesSlider;
