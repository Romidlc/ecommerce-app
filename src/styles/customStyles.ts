import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SUCCESS_COLOR } from "../utils/constants";
import { deleteAsync } from "expo-file-system";

export const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    imageContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        // width: 150,
        // height: 41,
        width: 80,
        height: 80,
    },
});

export const bottomBarStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    tabBarStyle: {
        backgroundColor: PRIMARY_COLOR,
    },
});

export const searchBarStyles = StyleSheet.create({
    container: {
        marginVertical: 20,
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
        marginVertical: 3,
        paddingBottom: 20,
        paddingHorizontal: 7,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    image: {
        height: 140,
        width: 140,
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
        margin: 5,
        width: "95%",
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
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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

export const fontSize = StyleSheet.create({
    md: {
        fontSize: 16,
    },
    lg: {
        fontSize: 20,
    },
});

export const cartStyles = StyleSheet.create({
    cartContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    cartItemContainer: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        marginVertical: 5,
        marginHorizontal: 5,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
    },
    cartItemPrice: {
        fontWeight: 400,
        lineHeight: 28,
    },
    cartConfirmButton: {
        width: 340,
        backgroundColor: "#00AAF2",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    cartContinuePurchase: {
        width: 340,
        marginTop: 5,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "#00AAF2",
    },
});

export const formStyles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "FFF",
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    subLink: {
        fontSize: 14,
        color: "blue",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f3f3",
        borderRadius: 8,
        paddingHorizontal: 14,
    },
    subtitle: {
        width: "90%",
        fontSize: 16,
    },
    input: {
        flex: 1,
        color: "#333",
        paddingVertical: 10,
        paddingRight: 10,
        fontSize: 16,
    },
    errorContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FDEDED",
        height: 50,
        width: 300,
        fontSize: 14,
    },
    textError: {
        color: "#5F2120",
        fontSize: 14,
    },
    button: {
        backgroundColor: "#00AAF2",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        height: 50,
        width: "80%",
    },
    text: {
        color: "white",
        fontSize: 14,
    },
    imageContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    logo: {
        width: 80,
        height: 80,
    },
});

export const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
    },
    logout: {
        width: "100%",
        borderColor: PRIMARY_COLOR,
        borderTopWidth: 1,
        height: 60,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    logoutText: {
        margin: 10,
    },
    uploadContainer: {
        height: 200,
        width: 200,
        backgroundColor: "#dadfe1",
        position: "relative",
        borderRadius: 100,
        overflow: "hidden",
    },
    img: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    uploadBtnContainer: {
        opacity: 0.4,
        position: "absolute",
        right: 0,
        bottom: 0,
        backgroundColor: PRIMARY_COLOR,
        width: "100%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    uploadBtn: {
        alignItems: "center",
        justifyContent: "center",
    },
    uploadImageContainer: { backgroundColor: PRIMARY_COLOR, width: "100%", height: 50, justifyContent: "space-between", flexDirection: "row" },
    uploadImgCloseBtn: { flexDirection: "row", margin: 5, padding: 5, alignItems: "center", justifyContent: "center" },
    uploadImgSaveBtn: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "white",
        width: "30%",
        margin: 5,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
    },
});

export const orderStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    detail: {
        justifyContent: "space-between",
        padding: 5,
    },
});
