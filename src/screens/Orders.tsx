import { View, Text, FlatList } from "react-native";
import { useGetOrdersQuery } from "../services/shopService";
import { IOrder } from "../interfacesAndTypes/interfaces";
import { productSliderStyles } from "../styles/customStyles";

const OrderDetail = ({ order }: { order: IOrder }) => {
    return (
        <>
            <View style={{ flex: 1, justifyContent: "center", padding: 4 }}>
                <View>
                    <Text>{order.id}</Text>
                    <Text>{`${new Date(Number(order.createdAt))}`}</Text>
                </View>
                <Text>{order.total}</Text>
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
