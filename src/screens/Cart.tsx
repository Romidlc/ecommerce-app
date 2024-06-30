import { View, Text, Button, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";

interface ICartItem {
    id: number;
    title: string;
    brand: string;
    quantity: number;
    price: number;
}

const CartItem = ({ cartItem }: any) => (
    <View>
        <View>
            <Text>
                {cartItem.title} {cartItem.quantity}
            </Text>
            <Text>{cartItem.brand}</Text>
            <Text>{cartItem.price}</Text>
        </View>
        <Entypo name="trash" size={30} color="black" />
    </View>
);
const Cart = ({ navigation }: any) => {
    const { cartItems } = useSelector((state: any) => state.cart.value);
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => {
                    return <CartItem cartItem={item} />;
                }}
                keyExtractor={(producto) => producto.id}
            />
        </View>
    );
};

export default Cart;
