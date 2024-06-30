import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SUCCESS_COLOR } from "../utils/constants";

export const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 150,
        justifyContent: "space-between",
        alignContent: "center",
    },
    imageContainer: {
        top: 40,
        margin: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 41,
    },
});

export const bottomBarStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    tabBarStyle: {
        backgroundColor: PRIMARY_COLOR,
        height: 60,
        paddingTop: 0,
        paddingBottom: 10,

        borderTopWidth: 0,
    },
});

export const searchBarStyles = StyleSheet.create({
    container: {
        marginVertical: 40,
        marginHorizontal: 20,
        width: "90%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    searchBar: {
        padding: 10,
        flexDirection: "row",
        backgroundColor: "#d9dbda",
        borderRadius: 13,
        alignItems: "center",
        height: 40,
    },
    searchBar__clicked: {
        width: "80%",
        justifyContent: "space-evenly",
    },
    searchBar__unclicked: {
        width: "95%",
    },
    input: {
        fontSize: 16,
        marginLeft: 15,
        width: "90%",
    },
    cancelButton: {
        marginLeft: 10,
    },
    cancelButtonText: {
        color: PRIMARY_COLOR,
    },
    featherStyle: {
        marginLeft: 10,
    },
    entypoStyle: {
        marginRight: 5,
    },
});

export const productSliderStyles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    productCardContainer: {
        marginHorizontal: 2,
        margin: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    imageContainer: {
        justifyContent: "center",
        alignContent: "center",
        height: 140,
        width: 140,
    },
    image: {
        flex: 1,
    },
    bannerImage: {
        width: 388,
        height: 55,
    },
    productsContainer: {
        marginTop: 10,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: "#DBE2E2",
        margin: 10,
        width: "90%",
    },
    fee: {
        color: SUCCESS_COLOR,
    },
    price: {
        fontSize: 16,
        fontWeight: "600",
    },
    productDetailContainer: {
        height: 100,
    },
});

export const productListStyles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex: 1,
    },
    productsContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        marginLeft: 5,
        marginRight: 5,
        flex: 1,
    },
});
export const productItemStyles = StyleSheet.create({
    container: { flexDirection: "row", flex: 1, alignItems: "center", margin: 10 },
});

export const categorySliderStyles = StyleSheet.create({
    container: {
        height: 80,
        marginTop: 5,
    },
    categoryItemContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    categoryItem: {
        backgroundColor: PRIMARY_COLOR,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 1,
        width: 150,
        height: 80,
        margin: 5,
        padding: 16,
        fontSize: 32,
    },
    categoryText: {
        color: "white",
    },
});
