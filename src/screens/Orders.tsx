import { View, Text, FlatList } from "react-native";
import { useLazyGetOrdersQuery } from "../services/shopService";
import { IOrder } from "../interfacesAndTypes/interfaces";
import { orderStyles, productSliderStyles } from "../styles/customStyles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OrderDetail = ({ order }: { order: IOrder }) => {
    return (
        <>
            <View style={orderStyles.container}>
                <View style={orderStyles.detail}>
                    <Text style={{ color: "#00AAF2" }}> En proceso</Text>
                    <Text> Nº de orden: {(order.id + 1).toFixed()}</Text>
                    <Text> Fecha:{`${new Date(Number(order.createdAt)).toLocaleString()}`}</Text>
                </View>
                <Text style={{ textAlign: "right" }}> Total: ${order.total}</Text>
            </View>
            <View style={productSliderStyles.lineStyle} />
        </>
    );
};
const Orders = ({ navigation }: any) => {
    const { user } = useSelector((state: any) => state.auth.value);
    const [getOrders] = useLazyGetOrdersQuery();
    const [orders, setOrders] = useState([] as any);
    const getOrdersDetails = async () => {
        const { data, isLoading } = await getOrders(user.id);
        if (data && !isLoading) setOrders(data);
    };

    useEffect(() => {
        getOrdersDetails();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: "white", margin: 10 }}>
            <FlatList data={orders} renderItem={({ item }) => <OrderDetail order={item} />} keyExtractor={(item: IOrder) => item.id.toString()} />
        </View>
    );
};

export default Orders;
