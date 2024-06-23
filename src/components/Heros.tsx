import { StyleSheet, TouchableOpacity, View, Image, FlatList } from "react-native";
import React from "react";
// import Carousel from "react-native-snap-carousel"; library with some issues
import { useNavigation } from "@react-navigation/core";
import { PRODUCT_LIST } from "../utils/constants";
import { IHero } from "../interfacesAndTypes/interfaces";

const carouselItems = [
    {
        title: "Hero 1",
        image: require("../../assets/banners/hero5.png"),
        url: "",
    },
    // {
    //     title: "Hero 2",
    //     image: require("../../assets/banners/hero2.png"),
    //     url: "",
    // },
    // {
    //     title: "Hero 3",
    //     image: require("../../assets/banners/hero3.png"),
    //     url: "",
    // },
    // {
    //     title: "Hero 4",
    //     image: require("../../assets/banners/hero4.png"),
    //     url: "",
    // },
];

const HeroItem = ({ hero }: any) => {
    const navigation: any = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(PRODUCT_LIST, { searchPhrase: "wood" })}>
            <View>
                <Image source={hero.image} style={styles.image} />
            </View>
        </TouchableOpacity>
    );
};

// TODO: implement a custom carousel with a flatList.
const Heros = () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View>
                <FlatList data={carouselItems} showsHorizontalScrollIndicator={false} keyExtractor={(item: any) => item.id} horizontal renderItem={({ item }: { item: IHero }) => <HeroItem hero={item} />} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 388,
        height: 121.5,
    },
});

export default Heros;
