import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Cart from "./Cart";
// import Message from "./Message";
import Profile from "./Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ICON_BOTTOM_TAB_SIZE, ICON_BOTTOM_TAB_COLOR, ICON_BOTTOM_TAB_ACTIVE_COLOR, ICONS } from "../utils/constants";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import React from "react";
import Categories from "./Categories";

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }: { route: RouteProp<ParamListBase, string> }): BottomTabNavigationOptions => ({
                tabBarIcon: ({ color }) => <Ionicons color={color} name={ICONS[route.name]} size={ICON_BOTTOM_TAB_SIZE} />,
                tabBarActiveTintColor: ICON_BOTTOM_TAB_ACTIVE_COLOR,
                tabBarInactiveTintColor: ICON_BOTTOM_TAB_COLOR,
                tabBarStyle: {
                    backgroundColor: "#243550",
                    height: 60,
                    paddingTop: 0,
                    paddingBottom: 10,
                    position: "absolute",
                    borderTopWidth: 0,
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />
            <Tab.Screen name="Cart" component={Cart} options={{ title: "Cart" }} />
            <Tab.Screen name="Message" component={Categories} options={{ title: "Categories" }} />
            <Tab.Screen name="Profile" component={Profile} options={{ title: "Profile" }} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
