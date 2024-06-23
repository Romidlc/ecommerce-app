import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SUCCESS_COLOR } from "../utils/constants";

export const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 150,
    },
    imageContainer: {
        top: 30,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 160,
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
        position: "absolute",
        borderTopWidth: 0,
    },
});

export const searchBarStyles = StyleSheet.create({
    container: {
        marginVertical: 40,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "90%",
    },
    searchBar: {
        padding: 10,
        flexDirection: "row",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
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
        fontSize: 20,
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

export const homeStyles = StyleSheet.create({
    homeContainer: {
        flex: 1,
    },
});

export const productSliderStyles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    productCardContainer: {
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    imageContainer: {
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowRadius: 2,
        borderRadius: 10,
        elevation: 10,
        height: 170,
        width: 170,
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
        width: 170,
    },
    fee: {
        color: SUCCESS_COLOR,
    },
    price: {
        fontSize: 16,
        fontWeight: "600",
    },
});
