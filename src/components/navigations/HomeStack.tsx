import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "../../screens/ProductList";
import Home from "../../screens/Home";
import ProductDetail from "../../screens/ProductDetail";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductList" component={ProductList} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
    );
};
