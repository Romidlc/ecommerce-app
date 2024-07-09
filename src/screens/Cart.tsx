import { View, Text, FlatList, Image, Pressable, Alert, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { cartStyles, fontSize, formStyles } from "../styles/customStyles";
import { clearCartItems, removeFromCart } from "../features/Cart/cartSlice";
import { useConfirmPurchaseMutation } from "../services/shopService";
import { HOME } from "../utils/constants";
import { ICartItem } from "../interfacesAndTypes/interfaces";

const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
    const dispatch = useDispatch();
    return (
        <View style={cartStyles.cartItemContainer}>
            <View>
                <Image source={{ uri: cartItem.image }} />
                <Text style={fontSize.md}>{cartItem.title}</Text>
                <Text>Cantidad: {cartItem.quantity}</Text>
                <Text>Proveedor: {cartItem.brand}</Text>
                <Pressable onPress={() => dispatch(removeFromCart({ id: cartItem.id }))}>
                    <View>
                        <Text style={{ color: "#00AAF2" }}>Eliminar</Text>
                    </View>
                </Pressable>
            </View>
            <Text style={(cartStyles.cartItemPrice, fontSize.lg)}>${cartItem.price}</Text>
        </View>
    );
};
const Cart = ({ navigation }: any) => {
    const { cartItems, totalItems } = useSelector((state: any) => state.cart.value);
    const [triggerConfirmPurchase, result] = useConfirmPurchaseMutation();
    const makeAPurchase = () => {
        // TODO: remember to apply the order validation logic.
        showConfirmAlert();
    };

    const showConfirmAlert = () =>
        Alert.alert("Compra", "¿Desea confirmar la compra?", [
            {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
            },
            {
                text: "Confirmar",
                onPress: () => {
                    triggerConfirmPurchase({
                        id: Math.random(),
                        user_id: 1,
                        items: cartItems,
                        createdAt: Date.now().toString(),
                        total: totalItems,
                    });
                    clearCartItems();
                },
            },
        ]);
    return (
        <View style={cartStyles.cartContainer}>
            <FlatList data={cartItems} renderItem={({ item }) => <CartItem cartItem={item} />} keyExtractor={(producto) => producto.id} />

            {cartItems.length > 0 && (
                <>
                    <View style={{ alignItems: "flex-end", marginVertical: 10 }}>
                        <Text style={{ fontSize: 20 }}>Total a pagar ${totalItems}</Text>
                    </View>
                    <Pressable onPress={() => makeAPurchase()}>
                        <View style={cartStyles.cartConfirmButton}>{!result.isLoading ? <Text style={formStyles.text}>Confirmar compra</Text> : <ActivityIndicator color="white" />}</View>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate(HOME)}>
                        <View style={cartStyles.cartContinuePurchase}>
                            <Text style={{ color: "#00AAF2" }}>Continuar la compra</Text>
                        </View>
                    </Pressable>
                </>
            )}
        </View>
    );
};

export default Cart;
