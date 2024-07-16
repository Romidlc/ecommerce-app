import { View, Text, FlatList, Image } from "react-native";
import { useGetOrdersQuery } from "../services/shopService";
import { IOrder } from "../interfacesAndTypes/interfaces";
import { productSliderStyles } from "../styles/customStyles";

const OrderDetail = ({ order }: { order: IOrder }) => {
    return (
        <>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignContent: "center", padding: 4 }}>
                <Image source={require("../../assets/order-logo.png")} />
                <View>
                    <Text> En proceso</Text>
                    <Text> Nro de envío: {order.id}</Text>
                    <Text> Fecha:{`${new Date(Number(order.createdAt))}`}</Text>
                    <Text> Total:{order.total}</Text>
                </View>
            </View>
            <View style={productSliderStyles.lineStyle} />
        </>
    );
};
const Orders = ({ navigation }: any) => {
    const { data: orders, isLoading, error } = useGetOrdersQuery();
    return (
        <View style={{ flex: 1, backgroundColor: "white", margin: 10 }}>
            <FlatList data={orders} renderItem={({ item }) => <OrderDetail order={item} />} keyExtractor={(item: IOrder) => item.id.toString()} />
        </View>
    );
};

export default Orders;
