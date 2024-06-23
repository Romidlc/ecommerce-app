import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../../screens/Cart";
import Profile from "../../screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ICON_BOTTOM_TAB_SIZE, ICON_BOTTOM_TAB_COLOR, SECONDARY_COLOR, ICONS } from "../../utils/constants";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import React from "react";
import Notification from "../../screens/Notification";
import { bottomBarStyles } from "../../styles/customStyles";
import { Header } from "../Header";
import { HomeStack } from "../navigations/HomeStack";

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Intro"
            screenOptions={({ route }: { route: RouteProp<ParamListBase, string> }): BottomTabNavigationOptions => ({
                tabBarIcon: ({ color }: { color: string }) => <Ionicons color={color} name={ICONS[route.name]} size={ICON_BOTTOM_TAB_SIZE} />,
                tabBarActiveTintColor: SECONDARY_COLOR,
                tabBarInactiveTintColor: ICON_BOTTOM_TAB_COLOR,
                tabBarStyle: bottomBarStyles.tabBarStyle,
                tabBarHideOnKeyboard: true,
            })}
        >
            <Tab.Screen name="Intro" component={HomeStack} options={{ title: "Inicio", header: () => <Header /> }} />
            <Tab.Screen name="Cart" component={Cart} options={{ title: "Carrito" }} />
            <Tab.Screen name="Notification" component={Notification} options={{ title: "Notificaciones" }} />
            <Tab.Screen name="Profile" component={Profile} options={{ title: "Mi Perfil" }} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
